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
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { completedJourneys, imaniIssuedBadge } from "$lib/stores/flows.store";
	import { highlight } from "$lib/utils/highlight";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";

	function handleFinishCourse() {
		goto("/demo/choose-journey");
	}

	onMount(() => {
		imaniIssuedBadge.set(true);
		completedJourneys.update((u) => {
			const _unique = u.filter((_u) => _u !== "imani");
			_unique.push("imani");
			return _unique;
		});
	});
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{@html highlight($_("journeys.imani.successfully_created_new_badge_and_issued_to_team"))}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>
			{$_("journeys.imani.heres_what_you_achieved")}
		</Typography>
	</div>
	<div class="card">
		<Card withBorder="{true}">
			<div class="card-content">
				<div class="content">
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list"
							>{$_("journeys.imani.created_open_badge_template")}</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">{$_("journeys.imani.trained_eligible_staff")}</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">{$_("journeys.imani.issued_open_badge_to_emp")}</Typography>
					</div>

					<div class="p">
						<Typography>
							{$_("journeys.imani.completed_imani_journey")}
							<br /><br />
							{$_("journeys.imani.explore_other_journeys")}
						</Typography>
					</div>
					<Button
						variant="secondary"
						label="{$_('components.continue')}"
						onClick="{handleFinishCourse}" />&nbsp;
					<Button
						variant="white"
						label="{$_('journeys.imani.contact_ngdil')}"
						onClick="{() => window.open('https://ngdil.com/contact', '_blank')}" />
				</div>
				<div class="img">
					<img src="/imgs/imani-2.svg" alt="" />
				</div>
			</div>
		</Card>
	</div>
</div>
