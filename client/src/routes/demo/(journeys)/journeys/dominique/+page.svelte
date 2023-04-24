<style lang="scss">
	.container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;

		& > * {
			padding: 20px 0;
			width: 100%;
		}

		.desc {
			padding-bottom: 5px;
			padding-top: 5px;
		}
		.sub-title {
			padding-top: 0;
		}

		.cards {
			width: 100%;

			& > .card {
				width: 100%;
				padding: 15px 0;

				.card-content {
					display: flex;
					justify-content: space-between;
					align-items: center;
					text-align: left;

					.text {
						width: calc(100% - 320px);
					}
				}
			}
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, Card, Avatar, Button } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import {
		dominiqueAppliedForJob,
		dominiqueEarnedCourseCred,
		dominiqueSharedCred
	} from "$lib/stores/flows.store";
	import { currStep } from "$lib/stores/onboarding.store";
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>Hi Dominique. <Highlight>Let’s get you started on your learning journey.</Highlight>Select
			your experienceto get started.</Typography>
	</div>
	<div class="desc">
		<Typography variant="button">
			Select the first experience to start Dominique’s journey and enrol at KW1C to obtain your
			course credential.
		</Typography>
	</div>

	<div class="cards">
		<div class="card">
			<Card withBorder="{true}">
				<div class="card-content">
					<Avatar image="/imgs/pic-placeholder.png" />
					<div class="text">
						<div class="heading">
							<Typography variant="card-header"
								>Enrol at KW1C and earn a course credential.</Typography>
						</div>
						<div class="desc">
							<Typography
								>Dominique is a school graduate, excited to enrol as a student at Koning Willem I
								College.</Typography>
						</div>
					</div>
					<Button
						variant="{$dominiqueEarnedCourseCred ? 'completed' : 'secondary'}"
						onClick="{() => {
							goto('/demo/journeys/dominique/earn-a-cred');
						}}"
						label="{$dominiqueEarnedCourseCred ? 'Retry' : 'Get Started'}" />
				</div>
			</Card>
		</div>
		<div class="card">
			<Card withBorder="{true}">
				<div class="card-content">
					<Avatar image="/imgs/pic-placeholder.png" />
					<div class="text">
						<div class="heading">
							<Typography variant="card-header"
								>Share your new credential on social media.</Typography>
						</div>
						<div class="desc">
							<Typography>
								Here you will connect your identity to a social job network and share your new
								credential with prospective employers as you search for a new job.
							</Typography>
						</div>
					</div>
					<Button
						variant="{$dominiqueSharedCred
							? 'completed'
							: $dominiqueEarnedCourseCred
							? 'secondary'
							: 'disabled'}"
						onClick="{() => {
							goto('/demo/journeys/dominique/share-a-cred');
						}}"
						label="{$dominiqueSharedCred ? 'Retry' : 'Get Started'}" />
				</div>
			</Card>
		</div>
		<div class="card">
			<Card withBorder="{true}">
				<div class="card-content">
					<Avatar image="/imgs/pic-placeholder.png" />
					<div class="text">
						<div class="heading">
							<Typography variant="card-header">Apply for a job with your digital CV.</Typography>
						</div>
						<div class="desc">
							<Typography>
								Here you will connect to an interested employer and share a number of credentials as
								a combined digital CV to land you your new job.
							</Typography>
						</div>
					</div>
					<Button
						variant="{$dominiqueAppliedForJob
							? 'completed'
							: $dominiqueSharedCred
							? 'secondary'
							: 'disabled'}"
						onClick="{() => {
							goto('/demo/journeys/dominique/apply-for-job');
						}}"
						label="{$dominiqueAppliedForJob ? 'Retry' : 'Get Started'}" />
				</div>
			</Card>
		</div>
	</div>
</div>
