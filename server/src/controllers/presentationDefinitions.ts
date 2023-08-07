export const presentationDefinitions = {
	dominiqueEnrolCourse: {
		id: "32f54163-7166-48f1-93d8-ff217bdb0653",
		input_descriptors: [
			{
				id: "national-id",
				constraints: {
					fields: [
						{
							path: ["$.type"],
							filter: {
								type: "array",
								contains: {
									type: "string",
									pattern: "National ID"
								}
							}
						},
						{
							path: ["$.credentialSubject.Surname"],
							filter: {
								type: "string",
								pattern: "Veritas"
							}
						}
					]
				}
			},
			{
				id: "course-id",
				constraints: {
					fields: [
						{
							path: ["$.type"],
							filter: {
								type: "array",
								contains: {
									type: "string",
									pattern: "School Course Certificate"
								}
							}
						}
					]
				}
			}
		]
	},
	dominiqueShareCred: {
		id: "32f54163-7166-48f1-93d8-ff217bdb0653",
		input_descriptors: [
			{
				id: "course-id",
				constraints: {
					fields: [
						{
							path: ["$.type"],
							filter: {
								type: "array",
								contains: {
									type: "string",
									enum: [
										"All-Round Carpentry Certificate",
										"Future Engineer Certificate",
										"Marketing Certificate"
									]
								}
							}
						}
					]
				}
			}
		]
	},
	dominiqueApplyForJob: {
		id: "32f54163-7166-48f1-93d8-ff217bdb0653",
		input_descriptors: [
			{
				id: "national-id",
				constraints: {
					fields: [
						{
							path: ["$.type"],
							filter: {
								type: "array",
								contains: {
									type: "string",
									pattern: "National ID"
								}
							}
						},
						{
							path: ["$.credentialSubject.Surname"],
							filter: {
								type: "string",
								pattern: "Veritas"
							}
						}
					]
				}
			},
			{
				id: "course-id",
				constraints: {
					fields: [
						{
							path: ["$.type"],
							filter: {
								type: "array",
								contains: {
									type: "string",
									pattern: "School Course Certificate"
								}
							}
						}
					]
				}
			},
			{
				id: "cert-id",
				constraints: {
					fields: [
						{
							path: ["$.type"],
							filter: {
								type: "array",
								contains: {
									type: "string",
									enum: [
										"All-Round Carpentry Certificate",
										"Future Engineer Certificate",
										"Marketing Certificate"
									]
								}
							}
						}
					]
				}
			}
		]
	},
	peterLogin: {
		id: "32f54163-7166-48f1-93d8-ff217bdb0653",
		input_descriptors: [
			{
				id: "staff-id",
				constraints: {
					fields: [
						{
							path: ["$.type"],
							filter: {
								type: "array",
								contains: {
									type: "string",
									pattern: "Staff ID"
								}
							}
						},
						{
							path: ["$.id"],
							filter: {
								type: "string",
								// prettier-ignore
								pattern: ".*kw1c.*"
							}
						}
					]
				}
			}
		]
	},
	imaniLogin: {
		id: "32f54163-7166-48f1-93d8-ff217bdb0653",
		input_descriptors: [
			{
				id: "employee-id",
				constraints: {
					fields: [
						{
							path: ["$.type"],
							filter: {
								type: "array",
								contains: {
									type: "string",
									pattern: "Employee ID"
								}
							}
						},
						{
							path: ["$.id"],
							filter: {
								type: "string",
								// prettier-ignore
								pattern: ".*futuretech.*"
							}
						}
					]
				}
			}
		]
	}
};
