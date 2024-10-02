import { P as PUBLIC_BASE_URI } from './public-4gV5o9PL.js';
import { p as persisted } from './index2-CJ31w3Iq.js';
import { w as writable } from './index-C71yHpU5.js';

const JourneyInfo = {
  dominique: {
    name: "Dominique Veritas",
    desc: "Student"
  },
  peter: {
    name: "Peter v.d. Meijden",
    desc: "Enrollment Officer"
  },
  imani: {
    name: "Imani Jameson",
    desc: "HR Manager"
  }
};
const currentJourney = persisted("journeySelected", null);
const nodeCount = persisted("node-count", 0);
const currNode = persisted("curr-node", 0);
const sessionId = writable();
const eventUri = writable();
sessionId.subscribe((s) => {
  console.log(sessionId);
  eventUri.set(new URL(`/events/${s}`, PUBLIC_BASE_URI).toString());
});
const completedJourneys = persisted("completedJourneys", []);
const dominiqueSelectedCourse = persisted("dominique-selectedCourse", null);
const dominiqueEarnedCourseCred = persisted("dominique-earnedCourseCred", false);
const dominiqueSharedCred = persisted("dominique-earnedSharedCred", false);
const dominiqueAppliedForJob = persisted("dominique-appliedForJob", false);
const dominqueCourses = [
  {
    category: "Construction",
    name: "All Round Carpenter",
    jobName: "Carpenter Assistant",
    img: "/imgs/carpenter.png",
    internships: [
      { name: "Oak Carpentry Ltd", location: "Yorkshire, United Kingdom", img: "/imgs/oak.svg" },
      { name: "Horz Hamburg", location: "Hamburg, Germany", img: "/imgs/holz.svg" }
    ]
  },
  {
    category: "Marketing and Communications",
    name: "Marketing",
    jobName: "Marketing Assistant",
    img: "/imgs/marketing.png",
    internships: [
      { name: "Madrid Marketing", location: "Madrid, Spain", img: "/imgs/madrid.svg" },
      { name: "Marketing Masters Monaco", location: "Monte Carlo, Monaco", img: "/imgs/monaco.svg" }
    ]
  },
  {
    category: "Engineering and Laboratory",
    name: "Future Engineer",
    jobName: "3d Future Engineer",
    img: "/imgs/engineer.png",
    internships: [
      { name: "3d Print Norge", location: "Oslo, Norway", img: "/imgs/norge.svg" },
      { name: "Irish Future Print Co.", location: "Dublin, Ireland", img: "/imgs/irish.svg" }
    ]
  }
];
const peterEnrolledStudent = persisted("peter-enrolledStudent", false);
const peterAssignedInternship = persisted("peter-assignedInternship", false);
const peterVerifiedInternship = persisted("peter-verifiedInternship", false);
const peterChosenStudent = persisted("peter-chosenStudent", null);
const peterChosenStudents = persisted("peter-chosenStudents", []);
const peterAssignedBadges = persisted("peter-assignedStudentsBadges", []);
const peterAssignedStudent = persisted("peter-assignedStudent", null);
const peterAssignedCompany = persisted("peter-assignedCompany", null);
const peterAssignecCompanyCountry = persisted("peter-assignecCountry", "");
const imaniHiredEmployee = persisted("imani-hiredEmployee", false);
const imaniIssuedBadge = persisted("imani-issuedBadge", false);
const imaniChosenApplicant = persisted("imani-chosenApplicant", null);
const imaniBadgeVariant = persisted(
  "imani-chosenBadgeVariant",
  "crest"
);
const imaniBadgeColor = persisted("imani-chosenBadgeColor", "var(--green-900)");
const imaniBadgeName = persisted("imani-badgeName", "");
const imaniBadgeDesc = persisted("imani-badgeDesc", "");
const imaniChosenStaff = persisted("imani-chosenStaff", []);
const imaniIssuedStaff = persisted("imani-issuedStaff", []);

export { peterAssignecCompanyCountry as A, peterChosenStudent as B, JourneyInfo as J, currNode as a, completedJourneys as b, currentJourney as c, dominiqueEarnedCourseCred as d, dominiqueSharedCred as e, dominiqueAppliedForJob as f, eventUri as g, dominiqueSelectedCourse as h, dominqueCourses as i, imaniHiredEmployee as j, imaniIssuedBadge as k, imaniChosenApplicant as l, imaniIssuedStaff as m, nodeCount as n, imaniBadgeName as o, imaniBadgeColor as p, imaniBadgeVariant as q, imaniBadgeDesc as r, imaniChosenStaff as s, peterEnrolledStudent as t, peterAssignedInternship as u, peterVerifiedInternship as v, peterChosenStudents as w, peterAssignedCompany as x, peterAssignedStudent as y, peterAssignedBadges as z };
//# sourceMappingURL=flows.store-Ch_DhNys.js.map
