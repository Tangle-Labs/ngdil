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
					min-height: 320px;

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
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { completedJourneys, dominiqueAppliedForJob } from "$lib/stores/flows.store";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";

	function handleFinishCourse() {
		goto("/demo/choose-journey");
	}

	onMount(() => {
		completedJourneys.update((u) => {
			const _unique = u.filter((_u) => _u !== "dominique");
			_unique.push("dominique");
			return _unique;
		});
		dominiqueAppliedForJob.set(true);
	});
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			><Highlight>You are now an employee of the Big Business Corp.</Highlight> Let’s see what you have
			achieved.
			<!-- {$_("journeys.dominique.you_are_now_emp")} -->
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>
			{$_("journeys.dominique.heres_what_you_achieved")}
		</Typography>
	</div>
	<div class="card">
		<Card withBorder="{true}">
			<div class="card-content">
				<div class="content">
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list"
							>{$_("journeys.dominique.connected_pvtly_bbc_website")}</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list"
							>{$_("journeys.dominique.shared_multiple_creds_as_cv")}</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">{$_("journeys.dominique.got_the_job")}</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list"
							>{$_("journeys.dominique.securely_received_staff_id_cred")}</Typography>
					</div>
					<div class="p">
						<Typography>
							{$_("journeys.dominique.successfully_completed_dominique_journey")}
							<br /><br />
							{$_("journeys.dominique.explore_other_journeys_desc")}
						</Typography>
					</div>
					<Button
						variant="secondary"
						label="{$_('components.continue')}"
						onClick="{handleFinishCourse}" />&nbsp;
					<Button
						variant="white"
						label="{$_('journeys.dominique.contact_ngdil')}"
						onClick="{() => window.open('https://ngdil.com/contact', '_blank')}" />
				</div>
				<div class="img">
					<img src="/imgs/dominique-3.svg" alt="" />
				</div>
			</div>
		</Card>
	</div>
</div>
