import { persisted } from "svelte-local-storage-store";
import { writable } from "svelte/store";

export type Journeys = "dominique" | "peter" | "imani";
export const JourneyInfo = {
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

export const previousPath = writable<string>(window.location.href);

export const currentJourney = persisted<Journeys | null>("journeySelected", null);
export const nodeCount = persisted<number>("node-count", 0);
export const currNode = persisted<number>("curr-node", 0);

export const completedJourneys = persisted<string[]>("completedJourneys", []);

/**
 * Dominique Courses
 */

export const dominiqueSelectedCourse = persisted<number | null>("dominique-selectedCourse", null);
export const dominiqueEarnedCourseCred = persisted("dominique-earnedCourseCred", false);
export const dominiqueSharedCred = persisted("dominique-earnedSharedCred", false);
export const dominiqueAppliedForJob = persisted("dominique-appliedForJob", false);

export const dominqueCourses = [
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

/**
 * Peter Journey
 */

export const peterEnrolledStudent = persisted<boolean>("peter-enrolledStudent", false);
export const peterAssignedInternship = persisted<boolean>("peter-assignedInternship", false);
export const peterVerifiedInternship = persisted<boolean>("peter-verifiedInternship", false);
export const peterChosenStudent = persisted<
	"Sarah Jones" | "Ivar Leifsson" | "Lagertha Bonde" | null
>("peter-chosenStudent", null);
export const peterChosenStudents = persisted<string[]>("peter-chosenStudents", []);
export const peterAssignedBadges = persisted<string[]>("peter-assignedStudentsBadges", []);
export const peterAssignedStudent = persisted<
	"Sarah Jones" | "Ivar Leifsson" | "Lagertha Bonde" | null
>("peter-assignedStudent", null);
export const peterAssignedCompany = persisted<string | null>("peter-assignedCompany", null);
export const peterAssignecCompanyCountry = persisted<string>("peter-assignecCountry", "");

/**
 * Imani's Journey
 */

export const imaniHiredEmployee = persisted<boolean>("imani-hiredEmployee", false);
export const imaniIssuedBadge = persisted<boolean>("imani-issuedBadge", false);
export const imaniChosenApplicant = persisted<
	"Gilian O'Leary" | "Marcus Erikson" | "Cassandra Blanc" | null
>("imani-chosenApplicant", null);
export const imaniBadgeVariant = persisted<"hexagon" | "rounded-hexagon" | "circle" | "crest">(
	"imani-chosenBadgeVariant",
	"crest"
);
export const imaniBadgeColor = persisted<string>("imani-chosenBadgeColor", "var(--green-900)");

export const imaniBadgeName = persisted<string>("imani-badgeName", "");
export const imaniBadgeDesc = persisted<string>("imani-badgeDesc", "");

interface IStaff {
	name: string;
	role: string;
	selected: boolean;
}
export const imaniChosenStaff = persisted<IStaff[]>("imani-chosenStaff", []);

export const imaniIssuedStaff = persisted<IStaff[]>("imani-issuedStaff", []);
