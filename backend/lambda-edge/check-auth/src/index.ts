// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0


export const handler = async (event) => {
	console.log("In check-auth handler :)")
	const request = event.Records[0].cf.request;
	return request
};
