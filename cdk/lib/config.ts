import { Environment } from "aws-cdk-lib";



export const APPLICATION_ENV: Environment = { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION }