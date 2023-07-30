export const presentationDefinitions = {
	dominiqueEnrolCourse: {
		id: "32f54163-7166-48f1-93d8-ff217bdb0653",
		input_descriptors: [
			{
				id: "nationa-id",
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
	dominiqueShareCred: {}
};
