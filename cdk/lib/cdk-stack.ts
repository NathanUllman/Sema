import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { CloudFrontWebDistribution, OriginAccessIdentity } from 'aws-cdk-lib/aws-cloudfront';
import { CanonicalUserPrincipal } from 'aws-cdk-lib/aws-iam';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class WebsiteCoreStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const originAccessIdentity = new OriginAccessIdentity(this, 'SemaphoreS3BucketOAI');
    const s3UserId = originAccessIdentity.cloudFrontOriginAccessIdentityS3CanonicalUserId;


    // https://dev.to/paulallies/deploy-your-static-react-app-to-aws-cloudfront-using-cdk-44hm
    const siteBucket = new Bucket(this, "SiteBucket", {
      bucketName: `semaphore-bucket-123456789`,
      websiteIndexDocument: "index.html", //TODO: possibly remove
      removalPolicy: RemovalPolicy.DESTROY
    })
    siteBucket.grantRead(new CanonicalUserPrincipal(s3UserId));

    const siteDistribution = new CloudFrontWebDistribution(this, "SiteDistribution", {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: siteBucket,
            originAccessIdentity,
          },
          behaviors: [{
            isDefaultBehavior: true
          },
          ]
        },

      ]
    });

    new BucketDeployment(this, "Deployment", {
      sources: [Source.asset("./build/website-ui")],
      destinationBucket: siteBucket,
      distribution: siteDistribution,
      distributionPaths: ["/*"]

    });

  }
}
