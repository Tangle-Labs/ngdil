<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.application {
			display: flex;
			width: 100%;
			justify-content: space-between;
			padding: 20px;
			box-sizing: border-box;

			.info {
				width: 50%;

				.bar {
					height: 10px;
					width: 100%;
					background: var(--white-700);
					margin-top: 10px;
					border-radius: 10px;
				}
			}
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, FutureTech, Button } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { currNode, imaniChosenApplicant } from "$lib/stores/flows.store";
	import { onMount } from "svelte";

	onMount(() => {
		currNode.set(1);
	});
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>You’re in, and it appears you have <Highlight>three new applications</Highlight>. View
			applicants to choose who to hire.</Typography
		>
	</div>
	<div class="sub-text">
		<Typography>Click the view applicant button next to the applicant you want to hire.</Typography>
	</div>
	<div class="dash">
		<FutureTech header="3D ENGINEER JOB APPLICATIONS">
			<div class="application">
				<div class="info">
					<div class="name">
						<Typography variant="list" fontVariant="kw1c" color="--future-tech-green"
							>Gilian O'Leary</Typography
						>
					</div>
					<div class="bar"></div>
				</div>
				<div class="action">
					<Button
						label="View Applicant"
						variant="future-tech"
						onClick="{() => {
							imaniChosenApplicant.set("Gilian O'Leary");
							goto('/demo/journeys/imani/applicant');
						}}"
					/>
				</div>
			</div>

			<div class="application">
				<div class="info">
					<div class="name">
						<Typography variant="list" fontVariant="kw1c" color="--future-tech-green"
							>Marcus Erikson</Typography
						>
					</div>
					<div class="bar"></div>
				</div>
				<div class="action">
					<Button
						label="View Applicant"
						variant="future-tech"
						onClick="{() => {
							imaniChosenApplicant.set('Marcus Erikson');
							goto('/demo/journeys/imani/applicant');
						}}"
					/>
				</div>
			</div>

			<div class="application">
				<div class="info">
					<div class="name">
						<Typography variant="list" fontVariant="kw1c" color="--future-tech-green"
							>Cassandra Blanc</Typography
						>
					</div>
					<div class="bar"></div>
				</div>
				<div class="action">
					<Button
						label="View Applicant"
						variant="future-tech"
						onClick="{() => {
							imaniChosenApplicant.set('Cassandra Blanc');
							goto('/demo/journeys/imani/applicant');
						}}"
					/>
				</div>
			</div>
		</FutureTech>
	</div>
</div>
