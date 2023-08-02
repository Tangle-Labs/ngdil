import { PUBLIC_CLIENT_URI } from "@/config";

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
