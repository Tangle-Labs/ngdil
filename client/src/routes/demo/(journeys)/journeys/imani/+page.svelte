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
	import { imaniHiredEmployee, imaniIssuedBadge } from "$lib/stores/flows.store";
	import { currStep } from "$lib/stores/onboarding.store";
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>Hi Imani. Let’s <Highlight>get you hiring some experienced staff</Highlight>. Select your
			first experience to get started.</Typography>
	</div>
	<div class="desc">
		<Typography variant="button">
			Select the first experience to start Imani’s journey and get hiring a new employee.
		</Typography>
	</div>

	<div class="cards">
		<div class="card">
			<Card withBorder="{true}">
				<div class="card-content">
					<Avatar image="/imgs/pic-placeholder.png" />
					<div class="text">
						<div class="heading">
							<Typography variant="card-header">Hiring an employee with a digital CV</Typography>
						</div>
						<div class="desc">
							<Typography>
								Here you will login to your business portal using your self-sovereign identity,
								verify applicant credentials, select a new hire, and issue an employee ID card.
							</Typography>
						</div>
					</div>
					<Button
						variant="{$imaniHiredEmployee ? 'completed' : 'secondary'}"
						onClick="{() => {
							goto('/demo/journeys/imani/login');
						}}"
						label="{$imaniHiredEmployee ? 'Retry' : 'Get Started'}" />
				</div>
			</Card>
		</div>

		<div class="card">
			<Card withBorder="{true}">
				<div class="card-content">
					<Avatar image="/imgs/pic-placeholder.png" />
					<div class="text">
						<div class="heading">
							<Typography variant="card-header">Create and issue company skills badge</Typography>
						</div>
						<div class="desc">
							<Typography>
								Here you will create a reusable open badge template, select your employees for
								training, and privately issue skills badges to successful trainees.
							</Typography>
						</div>
					</div>
					<Button
						variant="{$imaniIssuedBadge
							? 'completed'
							: $imaniHiredEmployee
							? 'secondary'
							: 'disabled'}"
						onClick="{() => {
							goto('/demo/journeys/imani/company-badges');
						}}"
						label="{$imaniIssuedBadge ? 'Retry' : 'Get Started'}" />
				</div>
			</Card>
		</div>
		{#if $imaniHiredEmployee && $imaniIssuedBadge}
			<div class="other">
				<Button
					variant="secondary"
					onClick="{() => goto('/demo/choose-journey')}"
					label="Try Another Journey" />
			</div>
		{/if}
	</div>
</div>
