const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","downloads/vira-demo-app.apk","favicon.png","fonts/TWKLausannePan-300.woff2","fonts/TWKLausannePan-400.woff2","fonts/TWKLausannePan-500.woff2","fonts/TWKLausannePan-600.woff2","fonts/TWKLausannePan-700.woff2","fonts/TWKLausannePan-800.woff2","imgs/EduBadge.png","imgs/apple.png","imgs/back.svg","imgs/bbc.png","imgs/blue-loading.png","imgs/carpenter.png","imgs/check-circle.png","imgs/checked.png","imgs/dentist.png","imgs/designer.png","imgs/dominique-1.svg","imgs/dominique-2.svg","imgs/dominique-3.svg","imgs/dominique.png","imgs/engineer.png","imgs/future-tech.png","imgs/gov.svg","imgs/holz.svg","imgs/hta.png","imgs/imani-1.svg","imgs/imani-2.svg","imgs/imani.png","imgs/impierce.png","imgs/inbox.png","imgs/irish.svg","imgs/kw1c-blue.png","imgs/kw1c-crowns.png","imgs/kw1c-white.png","imgs/linux.png","imgs/loading.png","imgs/madrid.svg","imgs/marketing.png","imgs/missing.png","imgs/monaco.svg","imgs/ngdil.svg","imgs/norge.svg","imgs/oak.svg","imgs/open-jobs-check.png","imgs/openjobs.png","imgs/peter-1.svg","imgs/peter-2.svg","imgs/peter-3.svg","imgs/peter.png","imgs/phone.png","imgs/pic-placeholder.png","imgs/qr.png","imgs/show.svg","imgs/swoosh.svg","imgs/tl-logo.png","imgs/unime-logo.jpg","imgs/unime-side.png","imgs/verified.png","imgs/vira-side.png","imgs/vira.png","imgs/volunteer.svg","imgs/werk.png","imgs/windows.png","style.css"]),
	mimeTypes: {".apk":"application/vnd.android.package-archive",".png":"image/png",".woff2":"font/woff2",".svg":"image/svg+xml",".jpg":"image/jpeg",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.7e309f3e.js","app":"_app/immutable/entry/app.cbbeda96.js","imports":["_app/immutable/entry/start.7e309f3e.js","_app/immutable/chunks/index.c696c2c0.js","_app/immutable/chunks/singletons.480d2b50.js","_app/immutable/chunks/index.dbd32e4c.js","_app/immutable/entry/app.cbbeda96.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.c696c2c0.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-aac129cc.js')),
			__memo(() => import('./chunks/1-ba3be396.js')),
			__memo(() => import('./chunks/2-824381f9.js')),
			__memo(() => import('./chunks/3-47d57709.js')),
			__memo(() => import('./chunks/4-686ac16c.js')),
			__memo(() => import('./chunks/5-16d0a893.js')),
			__memo(() => import('./chunks/6-7eaa2fb4.js')),
			__memo(() => import('./chunks/7-616f0b32.js')),
			__memo(() => import('./chunks/8-89b9534f.js')),
			__memo(() => import('./chunks/9-e1b08c2f.js')),
			__memo(() => import('./chunks/10-ce961e66.js')),
			__memo(() => import('./chunks/11-cbb0cb84.js')),
			__memo(() => import('./chunks/12-435e2a21.js')),
			__memo(() => import('./chunks/13-97f692ae.js')),
			__memo(() => import('./chunks/14-01e681e8.js')),
			__memo(() => import('./chunks/15-2f704f84.js')),
			__memo(() => import('./chunks/16-edf68237.js')),
			__memo(() => import('./chunks/17-123807e7.js')),
			__memo(() => import('./chunks/18-30d30b3a.js')),
			__memo(() => import('./chunks/19-8a4e0b0a.js')),
			__memo(() => import('./chunks/20-544396ea.js')),
			__memo(() => import('./chunks/21-f549907f.js')),
			__memo(() => import('./chunks/22-1492e6f3.js')),
			__memo(() => import('./chunks/23-a0941069.js')),
			__memo(() => import('./chunks/24-7a39ecfc.js')),
			__memo(() => import('./chunks/25-a24349d0.js')),
			__memo(() => import('./chunks/26-50949443.js')),
			__memo(() => import('./chunks/27-6fe31a2a.js')),
			__memo(() => import('./chunks/28-1cd611f2.js')),
			__memo(() => import('./chunks/29-2bd18b7f.js')),
			__memo(() => import('./chunks/30-348644fc.js')),
			__memo(() => import('./chunks/31-da07f3cd.js')),
			__memo(() => import('./chunks/32-141d69a2.js')),
			__memo(() => import('./chunks/33-8209858e.js')),
			__memo(() => import('./chunks/34-d12995c1.js')),
			__memo(() => import('./chunks/35-072ab1a2.js')),
			__memo(() => import('./chunks/36-b696fbdf.js')),
			__memo(() => import('./chunks/37-341d5e5d.js')),
			__memo(() => import('./chunks/38-f29919e1.js')),
			__memo(() => import('./chunks/39-77a8031a.js')),
			__memo(() => import('./chunks/40-3e9ca7e2.js')),
			__memo(() => import('./chunks/41-63c98998.js')),
			__memo(() => import('./chunks/42-f8fca9a4.js')),
			__memo(() => import('./chunks/43-3acf863f.js')),
			__memo(() => import('./chunks/44-43f53077.js')),
			__memo(() => import('./chunks/45-c0409157.js')),
			__memo(() => import('./chunks/46-e63d6ad5.js')),
			__memo(() => import('./chunks/47-e52621ad.js')),
			__memo(() => import('./chunks/48-7f1baab3.js')),
			__memo(() => import('./chunks/49-21b3d8ab.js')),
			__memo(() => import('./chunks/50-9c5f608f.js')),
			__memo(() => import('./chunks/51-dadf002c.js')),
			__memo(() => import('./chunks/52-9d52e11b.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/demo/(onboarding)",
				pattern: /^\/demo\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/demo/(onboarding)/choose-journey",
				pattern: /^\/demo\/choose-journey\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/demo/(onboarding)/download-wallet",
				pattern: /^\/demo\/download-wallet\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique",
				pattern: /^\/demo\/journeys\/dominique\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/apply-for-job",
				pattern: /^\/demo\/journeys\/dominique\/apply-for-job\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/choose-course",
				pattern: /^\/demo\/journeys\/dominique\/choose-course\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/earn-a-cred",
				pattern: /^\/demo\/journeys\/dominique\/earn-a-cred\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/finalize-application",
				pattern: /^\/demo\/journeys\/dominique\/finalize-application\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/finished-course",
				pattern: /^\/demo\/journeys\/dominique\/finished-course\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/get-staff-id",
				pattern: /^\/demo\/journeys\/dominique\/get-staff-id\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/job-secured",
				pattern: /^\/demo\/journeys\/dominique\/job-secured\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/new-message",
				pattern: /^\/demo\/journeys\/dominique\/new-message\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/open-jobs",
				pattern: /^\/demo\/journeys\/dominique\/open-jobs\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/share-a-cred",
				pattern: /^\/demo\/journeys\/dominique\/share-a-cred\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/shared-cred",
				pattern: /^\/demo\/journeys\/dominique\/shared-cred\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/study",
				pattern: /^\/demo\/journeys\/dominique\/study\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/view-jobs",
				pattern: /^\/demo\/journeys\/dominique\/view-jobs\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani",
				pattern: /^\/demo\/journeys\/imani\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/applicant",
				pattern: /^\/demo\/journeys\/imani\/applicant\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/applications",
				pattern: /^\/demo\/journeys\/imani\/applications\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/badge-holders",
				pattern: /^\/demo\/journeys\/imani\/badge-holders\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/badges",
				pattern: /^\/demo\/journeys\/imani\/badges\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/company-badges",
				pattern: /^\/demo\/journeys\/imani\/company-badges\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/confirm-badge",
				pattern: /^\/demo\/journeys\/imani\/confirm-badge\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/hired-applicant",
				pattern: /^\/demo\/journeys\/imani\/hired-applicant\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/issue-id",
				pattern: /^\/demo\/journeys\/imani\/issue-id\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/issued-badge",
				pattern: /^\/demo\/journeys\/imani\/issued-badge\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/login",
				pattern: /^\/demo\/journeys\/imani\/login\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/new-badge",
				pattern: /^\/demo\/journeys\/imani\/new-badge\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/results",
				pattern: /^\/demo\/journeys\/imani\/results\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/train-staff",
				pattern: /^\/demo\/journeys\/imani\/train-staff\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter",
				pattern: /^\/demo\/journeys\/peter\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/course-results",
				pattern: /^\/demo\/journeys\/peter\/course-results\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/course-students",
				pattern: /^\/demo\/journeys\/peter\/course-students\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/enrol-students",
				pattern: /^\/demo\/journeys\/peter\/enrol-students\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/enrolled-students",
				pattern: /^\/demo\/journeys\/peter\/enrolled-students\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/internship-results",
				pattern: /^\/demo\/journeys\/peter\/internship-results\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/login-kw1c",
				pattern: /^\/demo\/journeys\/peter\/login-kw1c\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/place-student",
				pattern: /^\/demo\/journeys\/peter\/place-student\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/student-placed",
				pattern: /^\/demo\/journeys\/peter\/student-placed\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/students",
				pattern: /^\/demo\/journeys\/peter\/students\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/verified-internship",
				pattern: /^\/demo\/journeys\/peter\/verified-internship\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/verify-internship",
				pattern: /^\/demo\/journeys\/peter\/verify-internship\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/view-applications",
				pattern: /^\/demo\/journeys\/peter\/view-applications\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/view-application",
				pattern: /^\/demo\/journeys\/peter\/view-application\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/view-courses",
				pattern: /^\/demo\/journeys\/peter\/view-courses\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/demo/(onboarding)/wallets/[slug]",
				pattern: /^\/demo\/wallets\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 51 },
				endpoint: null
			},
			{
				id: "/qr",
				pattern: /^\/qr\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 52 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
