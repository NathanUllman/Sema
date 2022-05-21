import { Stack, StackProps } from "aws-cdk-lib";
import { IDistribution } from "aws-cdk-lib/aws-cloudfront";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, ISource } from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";


interface BucketDeploymentProps extends StackProps {
	destinationBucket: Bucket,
	distribution: IDistribution
	sources: ISource[]
}

/**
 * Handles the Deployment of the provided Assets Bucket
 * 
 * This functionality is in its seperate stack so we can easily 
 * deploy new react code withouth needing to redeploy other infrastructure
 */
export class UIDeployment extends Stack {
	constructor(scope: Construct, id: string, props: BucketDeploymentProps) {
		super(scope, id, props);

		new BucketDeployment(this, "BucketDeployment", {
			sources: props.sources,
			destinationBucket: props.destinationBucket,
			distribution: props.distribution,
			distributionPaths: ["/*"]

		});
	}
}