#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { WebsiteCoreStack } from '../lib/cdk-stack';


const app = new cdk.App();
new WebsiteCoreStack(app, 'SemaphoreWebsiteStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});