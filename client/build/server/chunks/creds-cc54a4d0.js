const credentials = {
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
    Issuer: "Koning Willem 1 College",
    "Student Name": "",
    "Student Number": Math.random().toString(36).slice(2).toUpperCase(),
    "Date Issued": new Date(Date.now() - 1e9).toDateString(),
    "Date Expires": new Date(Date.now() + 1e9).toDateString()
  },
  staffId: {
    Issuer: "",
    "Staff Name": "",
    "Job Title": "",
    Department: "Human Rusources",
    "Date Issued": new Date(Date.now() - 1e9).toDateString(),
    "Date Expires": new Date(Date.now() + 1e9).toDateString()
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
    "Date Issued": new Date(Date.now() - 1e9).toDateString()
  },
  internationalisation: {
    "Course Name": "Internationalisation",
    Language: "Dutch",
    "Activity Start": "07/01/2023",
    "Activity End": "27/03/2023",
    "Date Issued": new Date(Date.now()).toDateString()
  },
  internshipReference: {
    "Badge Name": "Professional Reference",
    Country: "",
    Language: "English",
    Description: "Lorem ipsum dolor sit amet.",
    "Date Issued": new Date(Date.now()).toDateString()
  }
};

export { credentials as c };
//# sourceMappingURL=creds-cc54a4d0.js.map
