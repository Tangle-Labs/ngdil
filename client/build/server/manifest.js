const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["downloads/vira-demo-app.apk","favicon.png","fonts/TWKLausannePan-300.woff2","fonts/TWKLausannePan-400.woff2","fonts/TWKLausannePan-500.woff2","fonts/TWKLausannePan-600.woff2","fonts/TWKLausannePan-700.woff2","fonts/TWKLausannePan-800.woff2","imgs/EduBadge.png","imgs/apple.png","imgs/back.svg","imgs/bbc.png","imgs/blue-loading.png","imgs/carpenter.png","imgs/check-circle.png","imgs/checked.png","imgs/dentist.png","imgs/designer.png","imgs/dominique-1.svg","imgs/dominique-2.svg","imgs/dominique-3.svg","imgs/dominique.png","imgs/engineer.png","imgs/future-tech.png","imgs/gov.svg","imgs/holz.svg","imgs/hta.png","imgs/imani-1.svg","imgs/imani-2.svg","imgs/imani.png","imgs/impierce.png","imgs/inbox.png","imgs/irish.svg","imgs/kw1c-blue.png","imgs/kw1c-crowns.png","imgs/kw1c-white.png","imgs/lang.svg","imgs/linux.png","imgs/loading.png","imgs/madrid.svg","imgs/marketing.png","imgs/missing.png","imgs/monaco.svg","imgs/ngdil.svg","imgs/norge.svg","imgs/oak.svg","imgs/open-jobs-check.png","imgs/openjobs.png","imgs/peter-1.svg","imgs/peter-2.svg","imgs/peter-3.svg","imgs/peter.png","imgs/phone.png","imgs/pic-placeholder.png","imgs/qr.png","imgs/show.svg","imgs/swoosh.svg","imgs/tl-logo.png","imgs/unime-logo.jpg","imgs/unime-side.png","imgs/verified.png","imgs/vira-side.png","imgs/vira.png","imgs/volunteer.svg","imgs/werk.png","imgs/windows.png","style.css"]),
	mimeTypes: {".png":"image/png",".woff2":"font/woff2",".svg":"image/svg+xml",".jpg":"image/jpeg",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.BG6Ir09J.js","app":"_app/immutable/entry/app.C1pFjr5D.js","imports":["_app/immutable/entry/start.BG6Ir09J.js","_app/immutable/chunks/entry.dRRcpOW3.js","_app/immutable/chunks/scheduler.BSbnpsnJ.js","_app/immutable/chunks/index.ucjh5kku.js","_app/immutable/entry/app.C1pFjr5D.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/scheduler.BSbnpsnJ.js","_app/immutable/chunks/index.CHa0mS77.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DBvpt4q4.js')),
			__memo(() => import('./chunks/1-m85hghq2.js')),
			__memo(() => import('./chunks/2-B_GkKBr9.js')),
			__memo(() => import('./chunks/3-BsViYAW_.js')),
			__memo(() => import('./chunks/4-C-YKUGH3.js')),
			__memo(() => import('./chunks/5-u37eXM_i.js')),
			__memo(() => import('./chunks/6-DFKZ-xxP.js')),
			__memo(() => import('./chunks/7-D35a8cuL.js')),
			__memo(() => import('./chunks/8-C52sxDVY.js')),
			__memo(() => import('./chunks/9-BE81mmHE.js')),
			__memo(() => import('./chunks/10-BK89zyyI.js')),
			__memo(() => import('./chunks/11-CHsAgCCq.js')),
			__memo(() => import('./chunks/12-BwhzPuHU.js')),
			__memo(() => import('./chunks/13-C71A9iIg.js')),
			__memo(() => import('./chunks/14-st9cR6gy.js')),
			__memo(() => import('./chunks/15-DgPmvhyu.js')),
			__memo(() => import('./chunks/16-Dri_NKSy.js')),
			__memo(() => import('./chunks/17-DN1ZIJG_.js')),
			__memo(() => import('./chunks/18-DjldQSyK.js')),
			__memo(() => import('./chunks/19-CuzJtvrs.js')),
			__memo(() => import('./chunks/20-5ahUyZGb.js')),
			__memo(() => import('./chunks/21-C11L2HLx.js')),
			__memo(() => import('./chunks/22-Bn_numNx.js')),
			__memo(() => import('./chunks/23-B3thMcKT.js')),
			__memo(() => import('./chunks/24-B07VGKFW.js')),
			__memo(() => import('./chunks/25-D26sj3x8.js')),
			__memo(() => import('./chunks/26-DkMLC0yN.js')),
			__memo(() => import('./chunks/27-DivsebZY.js')),
			__memo(() => import('./chunks/28-vpEDGnjg.js')),
			__memo(() => import('./chunks/29-DGJgJzIH.js')),
			__memo(() => import('./chunks/30-CPAhssPE.js')),
			__memo(() => import('./chunks/31-CUVJLf5F.js')),
			__memo(() => import('./chunks/32-d8tOhTRY.js')),
			__memo(() => import('./chunks/33-CN3PTuCD.js')),
			__memo(() => import('./chunks/34-Wrx_mnjn.js')),
			__memo(() => import('./chunks/35-xu00O-Dw.js')),
			__memo(() => import('./chunks/36-BG37r2LP.js')),
			__memo(() => import('./chunks/37-CH6KTBpQ.js')),
			__memo(() => import('./chunks/38-D4SGoz2M.js')),
			__memo(() => import('./chunks/39-Bz7sCak5.js')),
			__memo(() => import('./chunks/40-p9lVqAsR.js')),
			__memo(() => import('./chunks/41-iGPnJRW-.js')),
			__memo(() => import('./chunks/42-CAZPjrhr.js')),
			__memo(() => import('./chunks/43-xSDH0Buw.js')),
			__memo(() => import('./chunks/44-CTz9nxZs.js')),
			__memo(() => import('./chunks/45-DoVZcf_x.js')),
			__memo(() => import('./chunks/46-BpbKfEIU.js')),
			__memo(() => import('./chunks/47-B3aKTcPi.js')),
			__memo(() => import('./chunks/48-CFeGGmvl.js')),
			__memo(() => import('./chunks/49-Cf_BBxsr.js')),
			__memo(() => import('./chunks/50-DElja6t1.js')),
			__memo(() => import('./chunks/51-BwgjUyuh.js')),
			__memo(() => import('./chunks/52-BlPbQrhe.js')),
			__memo(() => import('./chunks/53-MuvfzPwT.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/demo/(onboarding)",
				pattern: /^\/demo\/?$/,
				params: [],
				page: { layouts: [0,2,4,], errors: [1,,,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/demo/(onboarding)/choose-journey",
				pattern: /^\/demo\/choose-journey\/?$/,
				params: [],
				page: { layouts: [0,2,4,], errors: [1,,,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/demo/(onboarding)/download-wallet",
				pattern: /^\/demo\/download-wallet\/?$/,
				params: [],
				page: { layouts: [0,2,4,], errors: [1,,,], leaf: 51 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique",
				pattern: /^\/demo\/journeys\/dominique\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/apply-for-job",
				pattern: /^\/demo\/journeys\/dominique\/apply-for-job\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/choose-course",
				pattern: /^\/demo\/journeys\/dominique\/choose-course\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/earn-a-cred",
				pattern: /^\/demo\/journeys\/dominique\/earn-a-cred\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/finalize-application",
				pattern: /^\/demo\/journeys\/dominique\/finalize-application\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/finished-course",
				pattern: /^\/demo\/journeys\/dominique\/finished-course\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/get-staff-id",
				pattern: /^\/demo\/journeys\/dominique\/get-staff-id\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/job-secured",
				pattern: /^\/demo\/journeys\/dominique\/job-secured\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/new-message",
				pattern: /^\/demo\/journeys\/dominique\/new-message\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/open-jobs",
				pattern: /^\/demo\/journeys\/dominique\/open-jobs\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/share-a-cred",
				pattern: /^\/demo\/journeys\/dominique\/share-a-cred\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/shared-cred",
				pattern: /^\/demo\/journeys\/dominique\/shared-cred\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/study",
				pattern: /^\/demo\/journeys\/dominique\/study\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/dominique/view-jobs",
				pattern: /^\/demo\/journeys\/dominique\/view-jobs\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani",
				pattern: /^\/demo\/journeys\/imani\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/applicant",
				pattern: /^\/demo\/journeys\/imani\/applicant\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/applications",
				pattern: /^\/demo\/journeys\/imani\/applications\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/badge-holders",
				pattern: /^\/demo\/journeys\/imani\/badge-holders\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/badges",
				pattern: /^\/demo\/journeys\/imani\/badges\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/company-badges",
				pattern: /^\/demo\/journeys\/imani\/company-badges\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/confirm-badge",
				pattern: /^\/demo\/journeys\/imani\/confirm-badge\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/hired-applicant",
				pattern: /^\/demo\/journeys\/imani\/hired-applicant\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/issue-id",
				pattern: /^\/demo\/journeys\/imani\/issue-id\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/issued-badge",
				pattern: /^\/demo\/journeys\/imani\/issued-badge\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/login",
				pattern: /^\/demo\/journeys\/imani\/login\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/new-badge",
				pattern: /^\/demo\/journeys\/imani\/new-badge\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/results",
				pattern: /^\/demo\/journeys\/imani\/results\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/imani/train-staff",
				pattern: /^\/demo\/journeys\/imani\/train-staff\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter",
				pattern: /^\/demo\/journeys\/peter\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/course-results",
				pattern: /^\/demo\/journeys\/peter\/course-results\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/course-students",
				pattern: /^\/demo\/journeys\/peter\/course-students\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/enrol-students",
				pattern: /^\/demo\/journeys\/peter\/enrol-students\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/enrolled-students",
				pattern: /^\/demo\/journeys\/peter\/enrolled-students\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/internship-results",
				pattern: /^\/demo\/journeys\/peter\/internship-results\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/login-kw1c",
				pattern: /^\/demo\/journeys\/peter\/login-kw1c\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/place-student",
				pattern: /^\/demo\/journeys\/peter\/place-student\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/student-placed",
				pattern: /^\/demo\/journeys\/peter\/student-placed\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/students",
				pattern: /^\/demo\/journeys\/peter\/students\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/verified-internship",
				pattern: /^\/demo\/journeys\/peter\/verified-internship\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/verify-internship",
				pattern: /^\/demo\/journeys\/peter\/verify-internship\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/view-applications",
				pattern: /^\/demo\/journeys\/peter\/view-applications\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/view-application",
				pattern: /^\/demo\/journeys\/peter\/view-application\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/demo/(journeys)/journeys/peter/view-courses",
				pattern: /^\/demo\/journeys\/peter\/view-courses\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/demo/(onboarding)/wallets/[slug]",
				pattern: /^\/demo\/wallets\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4,], errors: [1,,,], leaf: 52 },
				endpoint: null
			},
			{
				id: "/qr",
				pattern: /^\/qr\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 53 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
