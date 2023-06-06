import { p as persisted } from './index3-4472c736.js';

const currentJourney = persisted("journeySelected", null);
const nodeCount = persisted("node-count", 0);
const currNode = persisted("curr-node", 0);
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

export { currNode as a, dominiqueSharedCred as b, currentJourney as c, dominiqueEarnedCourseCred as d, dominiqueAppliedForJob as e, dominiqueSelectedCourse as f, dominqueCourses as g, imaniIssuedBadge as h, imaniHiredEmployee as i, imaniChosenApplicant as j, imaniIssuedStaff as k, imaniBadgeName as l, imaniBadgeColor as m, nodeCount as n, imaniBadgeVariant as o, imaniBadgeDesc as p, imaniChosenStaff as q, peterEnrolledStudent as r, peterAssignedInternship as s, peterVerifiedInternship as t, peterChosenStudents as u, peterAssignedCompany as v, peterAssignedStudent as w, peterAssignedBadges as x, peterChosenStudent as y, peterAssignecCompanyCountry as z };
//# sourceMappingURL=flows.store-b2e554df.js.map
