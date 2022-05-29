// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0


export const handler = async (event) => {
	console.log("In handler :)")
	const response = {
		status: "307",
		statusDescription: "Temporary Redirect",
		headers: {
			location: [
				{
					key: "location",
					value: "/about",
				},
			],
		},
	};
	return response
};
