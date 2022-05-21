import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { OriginAccessIdentity } from "aws-cdk-lib/aws-cloudfront";
import { CanonicalUserPrincipal } from "aws-cdk-lib/aws-iam";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";


export interface UIAssetsBucketProps extends StackProps {
	/**
	 * The name of the application, used to create the s3 bucket name
	 */
	appName: string,
}


/**
 * The S3 bucket stack. This stack is created as bare bones as possible
 * since the S3 bucket should only create deployed and created once
 */
export class UIAssetsBucket extends Stack {

	public bucketName: string
	public bucket: Bucket

	/**
	 * The identity whose cloudFrontOriginAccessIdentityS3CanonicalUserId is granted read access to the bucket.
	 * This is used by Cloudfront to access the bucket
	 */
	public originAccessIdentity: OriginAccessIdentity


	public s3UserId: string

	constructor(scope: Construct, id: string, props: UIAssetsBucketProps) {
		super(scope, id, props);

		this.bucketName = `${props.appName.toLowerCase()}-uisitebucket-${this.account}`

		this.bucket = new Bucket(this, "UISiteBucket", {
			bucketName: this.bucketName,
			removalPolicy: RemovalPolicy.DESTROY
		})

		this.originAccessIdentity = new OriginAccessIdentity(this, 'UISiteBucketOAI');
		this.bucket.grantRead(new CanonicalUserPrincipal(this.originAccessIdentity.cloudFrontOriginAccessIdentityS3CanonicalUserId));

	}
}