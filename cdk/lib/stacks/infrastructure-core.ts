import { Stack, StackProps } from "aws-cdk-lib";
import { CloudFrontWebDistribution, IOriginAccessIdentity, LambdaEdgeEventType, LambdaFunctionAssociation, SourceConfiguration } from "aws-cdk-lib/aws-cloudfront";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda'
import { Construct } from "constructs";


interface InstrastructureCoreProps extends StackProps {
	uiAssetsBucketDetails: { bucket: Bucket, originAccessIdentity: IOriginAccessIdentity }
}

export class InstrastructureCore extends Stack {
	cloudFrontWebDistribution: CloudFrontWebDistribution
	parseAuthEdgeLambda: Function
	checkAuthEdgelambda: Function

	constructor(scope: Construct, id: string, props: InstrastructureCoreProps) {
		super(scope, id, props);

		const originConfigs: SourceConfiguration[] = []

		this.parseAuthEdgeLambda = new Function(this, "ParseAuthEdgeLambda", {
			functionName: "ParseAuthEdgeLambda",
			runtime: Runtime.NODEJS_14_X,
			handler: 'bundle.handler',
			code: Code.fromAsset("./build/backend/lambda-edge/parse-auth"),
		});

		this.checkAuthEdgelambda = new Function(this, "CheckAuthEdgeLambda", {
			functionName: "CheckAuthEdgeLambda",
			runtime: Runtime.NODEJS_14_X,
			handler: 'bundle.handler',
			code: Code.fromAsset("./build/backend/lambda-edge/check-auth"),
		});


		// UI Assets Bucket (React App)
		originConfigs.push({
			s3OriginSource: {
				s3BucketSource: props.uiAssetsBucketDetails.bucket,
				originAccessIdentity: props.uiAssetsBucketDetails.originAccessIdentity,
			},
			behaviors: [
				{
					pathPattern: "/parseauth",
					forwardedValues: { queryString: true },
					compress: true,
					lambdaFunctionAssociations: [{
						eventType: LambdaEdgeEventType.VIEWER_REQUEST,
						lambdaFunction: this.parseAuthEdgeLambda.currentVersion,

					}]

				}, {
					isDefaultBehavior: true,
					compress: true,
					lambdaFunctionAssociations: [{
						eventType: LambdaEdgeEventType.VIEWER_REQUEST,
						lambdaFunction: this.checkAuthEdgelambda.currentVersion,

					}]
				},

			]
		})

		this.cloudFrontWebDistribution = new CloudFrontWebDistribution(this, "CloudFrontWebDistribution", {
			errorConfigurations: [{
				// temp fix to get react router to play nice, long term fix is manipulating the path in a Lambda@Edge
				errorCode: 404,
				responseCode: 200,
				responsePagePath: `/index.html`,
			}],
			originConfigs: originConfigs,
			defaultRootObject: "index.html"
		});
	}
}