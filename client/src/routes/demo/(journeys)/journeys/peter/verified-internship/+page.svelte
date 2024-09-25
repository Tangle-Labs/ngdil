<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.card {
			width: 100%;

			.card-content {
				padding: 20px;
				display: flex;

				.content {
					width: 50%;

					.list {
						display: flex;
						justify-content: flex-start;
						align-items: center;
						align-content: center;
						padding: 15px 0;

						img {
							height: 25px;
							padding-right: 5px;
						}
					}

					.p {
						padding: 30px 0;
					}
				}

				.img {
					width: 50%;
					position: relative;
					box-sizing: border-box;
					margin-left: 30px;
					background: var(--white-500);
					border: 1px solid black;
					border-radius: 10px;

					img {
						display: block;
						position: absolute;
						top: 50%;
						left: 50%;
						height: 275px;
						transform: translate(-50%, -50%);
					}
				}
			}
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, Card, Button } from "$lib/components";
	import { completedJourneys, peterVerifiedInternship } from "$lib/stores/flows.store";
	import { highlight } from "$lib/utils/highlight";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";

	function handleFinishCourse() {
		goto("/demo/choose-journey");
	}

	onMount(() => {
		peterVerifiedInternship.set(true);
		completedJourneys.update((u) => {
			const _unique = u.filter((_u) => _u !== "peter");
			_unique.push("peter");
			return _unique;
		});
	});
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{@html highlight($_("journeys.peter.successfully_evaluated_enrolled_trained_verified"))}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>
			{$_("journeys.peter.heres_what_you_achieved")}
		</Typography>
	</div>
	<div class="card">
		<Card withBorder="{true}">
			<div class="card-content">
				<div class="content">
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list"
							>{$_("journeys.peter.pvtly_requested_creds_for_verification")}</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list"
							>{$_("journeys.peter.securely_verified_and_confirmed_student_internship")}
						</Typography>
					</div>
					<div class="p">
						<Typography>
							{$_("journeys.peter.successfully_verified_student_internships")}
							<br /><br />
							{$_("journeys.peter.learn_about_ssi_in_edu")}
							<br /><br />
							{$_("journeys.peter.get_in_touch_with_ngdil_and_continue_journey")}
						</Typography>
					</div>
					<Button
						variant="secondary"
						label="{$_('components.continue')}"
						onClick="{handleFinishCourse}" />&nbsp;
					<Button
						variant="white"
						label="{$_('journeys.peter.contact_ngdil')}"
						onClick="{() => window.open('https://ngdil.com/contact', '_blank')}" />
				</div>
				<div class="img">
					<img src="/imgs/peter-3.svg" alt="" />
				</div>
			</div>
		</Card>
	</div>
</div>
