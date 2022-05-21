import { Stack, StackProps } from "aws-cdk-lib";
import { CloudFrontWebDistribution, IOriginAccessIdentity } from "aws-cdk-lib/aws-cloudfront";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";


interface InstrastructureCoreProps extends StackProps {
	uiAssetsBucketDetails: { bucket: Bucket, originAccessIdentity: IOriginAccessIdentity }
}

export class InstrastructureCore extends Stack {
	cloudFrontWebDistribution: CloudFrontWebDistribution

	constructor(scope: Construct, id: string, props: InstrastructureCoreProps) {
		super(scope, id, props);

		const originConfigs = []

		// UI Assets Bucket (React App)
		originConfigs.push({
			s3OriginSource: {
				s3BucketSource: props.uiAssetsBucketDetails.bucket,
				originAccessIdentity: props.uiAssetsBucketDetails.originAccessIdentity,
			},
			behaviors: [{
				isDefaultBehavior: true
			},
			]
		})

		this.cloudFrontWebDistribution = new CloudFrontWebDistribution(this, "CloudFrontWebDistribution", {
			originConfigs: originConfigs
		});
	}
}