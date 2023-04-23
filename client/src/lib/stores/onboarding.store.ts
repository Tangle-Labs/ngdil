import { persisted } from "svelte-local-storage-store";

export const currStep = persisted<number>("onboardingCurrStep", 0);
