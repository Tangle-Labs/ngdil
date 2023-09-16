export const credentials = {
	nationalId: {
		"Full Name": "",
		"Passport Number": Math.random().toString(36).slice(2).toString().toUpperCase(),
		Nationality: "Netherlands",
		"Date of Birth": "01/01/1999",
		"Date Issued": "15/09/2018",
		"Date Expires": "14/09/2028"
	},
	courseCred: {
		"Student Name": "",
		"Course Name": "3D Engineering",
		"Course Type": "Higher National Certificate",
		"EQF Level": "4",
		Duration: "4 Years",
		"Date Issued": new Date(Date.now()).toDateString(),
		Language: "Dutch"
	},
	collegeId: {
		Issuer: "Koning Willem I College",
		"Student Name": "",
		"Student Number": Math.random().toString(36).slice(2).toUpperCase(),
		"Date Issued": new Date(Date.now() - 1_000_000_000).toDateString(),
		"Date Expires": new Date(Date.now() + 1_000_000_000).toDateString()
	},
	staffId: {
		Issuer: "",
		"Staff Name": "",
		"Job Title": "",
		Department: "Human Rusources",
		"Date Issued": new Date(Date.now() - 1_000_000_000).toDateString(),
		"Date Expires": new Date(Date.now() + 1_000_000_000).toDateString()
	},
	internshipBadge: {
		Issuer: "",
		"Intern Name": "",
		Country: "",
		"Activity Start": "07/01/2023",
		"Activity End": "27/03/2023",
		"Date Issued": new Date(Date.now()).toDateString()
	},
	personalStatement: {
		"Full Name": "",
		"Passport Number": Math.random().toString(36).slice(2).toString().toUpperCase(),
		Statement: "lorem ipsum dolor sit amet",
		"Date Issued": new Date(Date.now() - 1_000_000_000).toDateString()
	},
	internationalisation: {
		"Course Name": "Internationalisation",
		Language: "Dutch",
		"Activity Start": "07/01/2023",
		"Activity End": "27/03/2023",
		"Date Issued": new Date(Date.now()).toDateString(),
		Description:
			"This open badge recognizes the recipient's successful completion of an internationalization course at KW1C, which equipped them with valuable cultural and international education to support their success in international internship programs. The badge represents their ability to navigate diverse cultural  settings, communicate effectively across borders, and adapt to new and unfamiliar environments, making them a valuable asset to any international team."
	},
	internshipReference: {
		"Badge Name": "Professional Reference",
		Country: "",
		Language: "English",
		Description: "Lorem ipsum dolor sit amet.",
		"Date Issued": new Date(Date.now()).toDateString()
	},
	volunteerBadge: {
		Issuer: "Volunteer Corps",
		"Holder Name": "",
		"Badge Name": "Community Volunteer",
		Description:
			"This open badge acknowledges the recipient's dedication and contribution to a 3-month volunteering position, highlighting their commitment to making a positive impact in their community. The badge represents their selfless service and the valuable skills and experience they gained through their volunteer work.",
		Country: "Netherlands",
		Language: "Dutch",
		"Activity Start": "07/01/2023",
		"Activity End": "27/03/2023"
	}
};
