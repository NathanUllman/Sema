import { App } from "aws-cdk-lib";
import { Source } from "aws-cdk-lib/aws-s3-deployment";
import { APPLICATION_ENV } from "./config";
import { InstrastructureCore } from "./stacks/infrastructure-core";
import { UIAssetsBucket } from "./stacks/ui-assets-bucket";
import { UIDeployment } from "./stacks/ui-deployment";


/**
 * The entry point for our Application, this method is invoked from /bin/cdk.ts
 * 
 * @param app The CDK App for the Application
 */
export function createAppliction(app: App) {
	const appName = "Semaphore"
	const assetPath = "./build/website-ui"


	const uiAssetsBucketStack = new UIAssetsBucket(app, 'UIAssetsBucket', { appName, env: APPLICATION_ENV })

	const instrastructureCore = new InstrastructureCore(app, 'InstrastructureCore',
		{
			uiAssetsBucketDetails: {
				bucket: uiAssetsBucketStack.bucket,
				originAccessIdentity: uiAssetsBucketStack.originAccessIdentity
			},
			env: APPLICATION_ENV
		})

	const uIDeployment = new UIDeployment(app, "UIDeployment", {
		destinationBucket: uiAssetsBucketStack.bucket,
		distribution: instrastructureCore.cloudFrontWebDistribution,
		sources: [Source.asset(assetPath)],
		env: APPLICATION_ENV

	})
}