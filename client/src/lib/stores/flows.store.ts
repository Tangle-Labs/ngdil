import { persisted } from "svelte-local-storage-store";

export type Journeys = "dominique" | "peter" | "imani";

export const currentJourney = persisted<Journeys | null>("journeySelected", null);

/**
 * Dominique Courses
 */

export const dominiqueSelectedCourse = persisted<"engineer" | "dentist" | "designer" | null>(
	"dominique-selectedCourse",
	null
);
export const dominiqueEarnedCourseCred = persisted("dominique-earnedCourseCred", false);
export const dominiqueSharedCred = persisted("dominique-earnedSharedCred", false);
export const dominiqueAppliedForJob = persisted("dominique-appliedForJob", false);

export const dominqueCourses = {
	engineer: {
		category: "ENGINEERING AND LABORATORY",
		name: "FUTURE ENGINEER"
	},
	dentist: {
		category: "CARE AND WELFARE",
		name: "DENTAL ASSISTANT"
	},
	designer: {
		category: "CREATIVE / MEDIA, ICT AND DESIGN",
		name: "MEDIA DESIGNER"
	}
};

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
