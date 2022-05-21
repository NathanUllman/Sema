#!/usr/bin/env node
import { App } from 'aws-cdk-lib';
import 'source-map-support/register';
import { createAppliction } from '../lib/app-builder';


const app = new App();
createAppliction(app)
