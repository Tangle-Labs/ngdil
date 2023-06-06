const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","fonts/TWKLausannePan-300.woff2","fonts/TWKLausannePan-400.woff2","fonts/TWKLausannePan-500.woff2","fonts/TWKLausannePan-600.woff2","fonts/TWKLausannePan-700.woff2","fonts/TWKLausannePan-800.woff2","imgs/bbc.png","imgs/blue-loading.png","imgs/carpenter.png","imgs/check-circle.png","imgs/checked.png","imgs/dentist.png","imgs/designer.png","imgs/dominique.png","imgs/engineer.png","imgs/future-tech.png","imgs/gov.svg","imgs/holz.svg","imgs/imani.png","imgs/impierce.png","imgs/inbox.png","imgs/irish.svg","imgs/kw1c-blue.png","imgs/kw1c-white.png","imgs/loading.png","imgs/madrid.svg","imgs/marketing.png","imgs/missing.png","imgs/monaco.svg","imgs/ngdil.svg","imgs/norge.svg","imgs/oak.svg","imgs/open-jobs-check.png","imgs/openjobs.png","imgs/peter.png","imgs/phone.png","imgs/pic-placeholder.png","imgs/qr.png","imgs/show.svg","imgs/swoosh.svg","imgs/verified.png","imgs/vira.png","style.css"]),
	mimeTypes: {".png":"image/png",".woff2":"font/woff2",".svg":"image/svg+xml",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-89c3fc8e.js","imports":["_app/immutable/start-89c3fc8e.js","_app/immutable/chunks/index-6e3ec9d0.js","_app/immutable/chunks/singletons-d91c215a.js","_app/immutable/chunks/index-d7ecdb1d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-6a9681ee.js'),
			() => import('./chunks/1-ab2c6edd.js'),
			() => import('./chunks/2-b74ded17.js'),
			() => import('./chunks/3-c3d11030.js'),
			() => import('./chunks/4-95b65e04.js'),
			() => import('./chunks/5-5a380dd1.js'),
			() => import('./chunks/6-ac62d27f.js'),
			() => import('./chunks/7-5c0e1ce9.js'),
			() => import('./chunks/8-105209f1.js'),
			() => import('./chunks/9-59fd16d8.js'),
			() => import('./chunks/10-8aae5dfd.js'),
			() => import('./chunks/11-52664722.js'),
			() => import('./chunks/12-7263544c.js'),
			() => import('./chunks/13-58bdfd17.js'),
			() => import('./chunks/14-c62452d2.js'),
			() => import('./chunks/15-30c0f0e2.js'),
			() => import('./chunks/16-9b1344b5.js'),
			() => import('./chunks/17-c34ed7a3.js'),
			() => import('./chunks/18-c897ab33.js'),
			() => import('./chunks/19-ed20641a.js'),
			() => import('./chunks/20-f30fe1e3.js'),
			() => import('./chunks/21-cc3e1926.js'),
			() => import('./chunks/22-05eb0a77.js'),
			() => import('./chunks/23-3cb0ca62.js'),
			() => import('./chunks/24-606e4ab5.js'),
			() => import('./chunks/25-2373a51b.js'),
			() => import('./chunks/26-33dddd76.js'),
			() => import('./chunks/27-9e3527ff.js'),
			() => import('./chunks/28-d9615185.js'),
			() => import('./chunks/29-84c8c5d2.js'),
			() => import('./chunks/30-23600330.js'),
			() => import('./chunks/31-6c3f175e.js'),
			() => import('./chunks/32-df5a9ab3.js'),
			() => import('./chunks/33-efb0a6cf.js'),
			() => import('./chunks/34-7043af83.js'),
			() => import('./chunks/35-00d63eed.js'),
			() => import('./chunks/36-c6b26fdd.js'),
			() => import('./chunks/37-d0d6802d.js'),
			() => import('./chunks/38-c7956340.js'),
			() => import('./chunks/39-01cb1218.js'),
			() => import('./chunks/40-5c4fcb7b.js'),
			() => import('./chunks/41-2695b3e6.js'),
			() => import('./chunks/42-5bcb44d6.js'),
			() => import('./chunks/43-5cef23d6.js'),
			() => import('./chunks/44-30a6ef1f.js'),
			() => import('./chunks/45-bce2eba1.js'),
			() => import('./chunks/46-5a6402d4.js'),
			() => import('./chunks/47-942079b9.js'),
			() => import('./chunks/48-3235ef4c.js'),
			() => import('./chunks/49-f0ecd5d1.js'),
			() => import('./chunks/50-d0626bd4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/demo/(onboarding)",
				pattern: /^\/demo\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/demo/(onboarding)/choose-journey",
				pattern: /^\/demo\/choose-journey\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/demo/(onboarding)/download-wallet",
				pattern: /^\/demo\/download-wallet\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique",
				pattern: /^\/demo\/journeys\/dominique\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/apply-for-job",
				pattern: /^\/demo\/journeys\/dominique\/apply-for-job\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/choose-course",
				pattern: /^\/demo\/journeys\/dominique\/choose-course\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/earn-a-cred",
				pattern: /^\/demo\/journeys\/dominique\/earn-a-cred\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/finalize-application",
				pattern: /^\/demo\/journeys\/dominique\/finalize-application\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/finished-course",
				pattern: /^\/demo\/journeys\/dominique\/finished-course\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/get-staff-id",
				pattern: /^\/demo\/journeys\/dominique\/get-staff-id\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/job-secured",
				pattern: /^\/demo\/journeys\/dominique\/job-secured\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/new-message",
				pattern: /^\/demo\/journeys\/dominique\/new-message\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/open-jobs",
				pattern: /^\/demo\/journeys\/dominique\/open-jobs\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/share-a-cred",
				pattern: /^\/demo\/journeys\/dominique\/share-a-cred\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/shared-cred",
				pattern: /^\/demo\/journeys\/dominique\/shared-cred\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/study",
				pattern: /^\/demo\/journeys\/dominique\/study\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/view-jobs",
				pattern: /^\/demo\/journeys\/dominique\/view-jobs\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani",
				pattern: /^\/demo\/journeys\/imani\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/applicant",
				pattern: /^\/demo\/journeys\/imani\/applicant\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/applications",
				pattern: /^\/demo\/journeys\/imani\/applications\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/badge-holders",
				pattern: /^\/demo\/journeys\/imani\/badge-holders\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/badges",
				pattern: /^\/demo\/journeys\/imani\/badges\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/company-badges",
				pattern: /^\/demo\/journeys\/imani\/company-badges\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/confirm-badge",
				pattern: /^\/demo\/journeys\/imani\/confirm-badge\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/hired-applicant",
				pattern: /^\/demo\/journeys\/imani\/hired-applicant\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/issue-id",
				pattern: /^\/demo\/journeys\/imani\/issue-id\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/issued-badge",
				pattern: /^\/demo\/journeys\/imani\/issued-badge\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/login",
				pattern: /^\/demo\/journeys\/imani\/login\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/new-badge",
				pattern: /^\/demo\/journeys\/imani\/new-badge\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/results",
				pattern: /^\/demo\/journeys\/imani\/results\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/train-staff",
				pattern: /^\/demo\/journeys\/imani\/train-staff\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter",
				pattern: /^\/demo\/journeys\/peter\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/course-results",
				pattern: /^\/demo\/journeys\/peter\/course-results\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/course-students",
				pattern: /^\/demo\/journeys\/peter\/course-students\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/enrol-students",
				pattern: /^\/demo\/journeys\/peter\/enrol-students\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/enrolled-students",
				pattern: /^\/demo\/journeys\/peter\/enrolled-students\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/internship-results",
				pattern: /^\/demo\/journeys\/peter\/internship-results\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/login-kw1c",
				pattern: /^\/demo\/journeys\/peter\/login-kw1c\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/place-student",
				pattern: /^\/demo\/journeys\/peter\/place-student\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/student-placed",
				pattern: /^\/demo\/journeys\/peter\/student-placed\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/students",
				pattern: /^\/demo\/journeys\/peter\/students\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/verified-internship",
				pattern: /^\/demo\/journeys\/peter\/verified-internship\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/verify-internship",
				pattern: /^\/demo\/journeys\/peter\/verify-internship\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/view-applications",
				pattern: /^\/demo\/journeys\/peter\/view-applications\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/view-application",
				pattern: /^\/demo\/journeys\/peter\/view-application\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/view-courses",
				pattern: /^\/demo\/journeys\/peter\/view-courses\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 47 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
