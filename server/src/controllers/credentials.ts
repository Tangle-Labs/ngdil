import { PUBLIC_CLIENT_URI } from "@/config";
import { IdentityService } from "@/services/identity.service";
import { ServiceFactory } from "@/services/servicefactory";
import { nanoid } from "nanoid";

export const credentialDefs = {
	"Future Engineer": {
		type: "Future Engineer Certificate",
		body: {
			"Course Name": "Technician Engineering",
			Faculty: "Engineering",
			"Course Type": "Higher National Certificate",
			"EQF Level": 4,
			Duration: "4 Years",

			"Date Issued": new Date().toLocaleDateString(),
			Description:
				"Development of technical skills such as CAD drawing, welding, building circuits and programming. As well as a good theoretical basis of various techniques. In addition to general subjects such as Dutch, English and math.",
			Language: "Dutch",
			enrichment: {
				logo_uri: `${PUBLIC_CLIENT_URI}/imgs/kw1c-white.png`
			}
		},
		domain: "kw1c.ngdil.com"
	},
	"All Round Carpenter": {
		type: "All-Round Carpentry Certificate",
		body: {
			"Course Name": "All-Round Carpentry",
			Faculty: "Construction",
			"Course Type": "Vocational Diploma",
			"EQF Level": 3,
			Duration: "3 Years",
			"Date Issued": new Date().toLocaleDateString(),
			Description:
				"One day a week lessons at school to work on the theory of carpentry with four days of vocational training. Broad proficiency training in all-round carpentry.",
			Language: "Dutch",
			enrichment: {
				logo_uri: `${PUBLIC_CLIENT_URI}/imgs/kw1c-white.png`
			}
		},
		domain: "kw1c.ngdil.com"
	},
	Marketing: {
		type: "Marketing Certificate",
		body: {
			"Course Name": "Marketing Communications",
			Faculty: "Business",
			"Course Type": "Higher National Certificate",
			"EQF Level": "4",
			"Date Issued": new Date().toLocaleDateString(),
			Duration: "3 years",
			Description:
				"Market research and product promotions through video and online media. Company brand image and identity communications including participation in the interdisciplinary business services project.",
			Language: "Dutch",
			enrichment: {
				logo_uri: `${PUBLIC_CLIENT_URI}/imgs/kw1c-white.png`
			}
		},
		domain: "kw1c.ngdil.com"
	},
	"Staff ID": {
		type: "Staff ID",
		body: {
			Issuer: "Big Business Corp",
			"Staff Name": "Dominique Veritas",
			"Job Title": "Intern",
			"Staff Number": "BBC23884069",
			"Date Issued": new Date().toLocaleDateString(),
			enrichment: {
				logo_uri: `${PUBLIC_CLIENT_URI}/imgs/bbc.png`
			}
		},
		domain: "bigbusinesscorp.ngdil.com"
	}
};

export const getPersonaCreds = async (
	persona: "imani" | "peter" | "dominique",
	recipient: string
) => {
	const identityService = ServiceFactory.get<IdentityService>("identity");
	const creds = [];
	if (persona === "imani") {
		creds.push(
			await identityService.createCredential({
				domain: "gov.ngdil.com",
				recipient,
				type: "National ID",
				body: {
					Surname: "Jameson",
					"Given Name": "Imani",
					"Passport Number": nanoid().toUpperCase(),
					"Date of Birth": "24/12/1997",
					enrichment: {
						logo_uri: `${PUBLIC_CLIENT_URI}/imgs/gov.svg`
					}
				}
			})
		);
		creds.push(
			await identityService.createCredential({
				recipient,
				domain: "futuretech.ngdil.com",
				type: "Employee ID",
				body: {
					Issuer: "Future Tech Co.",
					"Staff Name": "Imani Jameson",
					"Job Title": "Senior Manager",
					Department: "Human Resources",
					"Staff Number": nanoid().toUpperCase(),
					enrichment: {
						logo_uri: `${PUBLIC_CLIENT_URI}/imgs/future-tech.png`
					}
				}
			})
		);
	} else if (persona === "peter") {
		creds.push(
			await identityService.createCredential({
				recipient,
				domain: "gov.ngdil.com",
				type: "National ID",
				body: {
					Surname: "van de Meijden",
					"Given Name": "Peter",
					"Passport Number": nanoid().toUpperCase(),
					"Date of Birth": "08/08/1978",
					enrichment: {
						logo_uri: `${PUBLIC_CLIENT_URI}/imgs/gov.svg`
					}
				}
			})
		);
		creds.push(
			await identityService.createCredential({
				recipient,
				domain: "kw1c.ngdil.com",
				type: "Staff ID",
				body: {
					Issuer: "Koning Willem I College",
					"Staff Name": "Peter van de Meijden",
					"Job Title": "Chief Enrolment Officer",
					Department: "Human Resources",
					"Staff Number": nanoid().toUpperCase(),
					enrichment: {
						logo_uri: `${PUBLIC_CLIENT_URI}/imgs/kw1c-white.png`
					}
				}
			})
		);
	} else {
		creds.push(
			await identityService.createCredential({
				recipient,
				type: "National ID",
				domain: "gov.ngdil.com",
				body: {
					Surname: "Veritas",
					"Given Name": "Dominique",
					"Passport Number": nanoid().toUpperCase(),
					"Date of Birth": "22/12/2001",
					enrichment: {
						logo_uri: `${PUBLIC_CLIENT_URI}/imgs/gov.svg`
					}
				}
			})
		);
		creds.push(
			await identityService.createCredential({
				recipient,
				domain: "kw1c.ngdil.com",
				type: "School Course Certificate",
				body: {
					"Course Name": "Certificate of Secondary Education",
					Faculty: "Academics and Humanities",
					"Course Type": "National Certificate",
					"EQF Level": 3,
					Duration: "2 Years",
					Description:
						"Finalisation of standard national education to a National Certificate level passed with distinction in Dutch, English, Sciences, Geography, Technology, and Mathematics",
					Language: "Dutch",
					enrichment: {
						logo_uri: `${PUBLIC_CLIENT_URI}/imgs/kw1c-white.png`
					}
				}
			})
		);
		creds.push(
			await identityService.createCredential({
				recipient,
				domain: "volunteercorps.ngdil.com",
				type: "Volunteer Badge",
				body: {
					Issuer: "Volunteer Corps",
					"Holder Name": "Dominique Veritas",
					"Badge Name": "Community Volunteer",
					Description:
						"This is to certify that the named badge holder has participated with and supported the Volunteer Org. through volunteer practices within the local community over a three month period.",
					Country: "Netherlands",
					Language: "Dutch",
					"Activity Start": "07/01/2023",
					"Activity End": "27/03/2023",
					enrichment: {
						logo_uri: `${PUBLIC_CLIENT_URI}/imgs/volunteer.svg`
					}
				}
			})
		);
		creds.push(
			await identityService.createBadge({
				recipient,
				domain: "werkgroepil.ngdil.com",
				type: "Higher Education Information Literacy Level 1",
				body: {
					Issuer: "Werkgroep Information Literacy",
					"Language of Education": "Dutch",
					"Issued to": "Dominique Veritas",
					Description:
						"Information Literacy is the set of integrated skills that includes the reflective discovery of information, the understanding of how information is produced and valued, and the use of information to create new knowledge and ethical participation in learning communities.",
					"Learning outcomes": `LEVEL 1 - To obtain this badge, the student has demonstrated that he/she is able to:
1. Orientation and specification
- identify the need for information on a particular topic
- identify characteristics of information sources on a particular topic
- find suitable information sources and evaluate them based on a particular topic`
				},
				issuer: "Werkgroep Information Literacy",
				image: `${PUBLIC_CLIENT_URI}/imgs/werk.png`
			})
		);
		creds.push(
			await identityService.createBadge({
				recipient,
				domain: "kw1c.ngdil.com",
				type: "Business Innovation & Interdisciplinair Samenwerken",
				body: {
					"Badge Name": "Business Innovation & Interdisciplinair Samenwerken",
					"Language of Education": "Dutch",
					"Issued to": "Dominique Veritas",
					Alignments:
						"This badge illustrates the holder has demonstrated their abilities to collaborate with colleagues, work in a team to solve information problems, use renewal techniques, models, methods and strategies that contribute to the promotion of innovation-oriented developments, creative thinking to generate new ideas or innovative new solutions, innovation of current practices' to improve and present alternative thinking and new methods that can solve work related problems.",
					Criteria:
						"Over the period of 10 weeks the holder of this badge has learned interdisciplinary skill through practical experiences with real companies and institutions in the region. The holder has demonstrated they can collaborate as part of a team, effectively communicate, research and apply new technologies and innovations, creatively solve problems, and contribute to global goals.",
					Evidence:
						"The owner of this badge has learned and worked in an interdisciplinary team on a challenge from a real company or institution from the region. The interdisciplinary team has gone through various phases to arrive at a creative, innovative solution that is suitable for the client. The team presented the learning process and the solution through a pitch to the client."
				},
				issuer: "Koning Willem I College",
				image: `${PUBLIC_CLIENT_URI}/imgs/hta.png`
			})
		);
	}

	return creds.map((c) => c.cred);
};
