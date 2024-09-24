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
	import { peterAssignedInternship } from "$lib/stores/flows.store";
	import { highlight } from "$lib/utils/highlight";
	import { _ } from "svelte-i18n";

	function handleFinishCourse() {
		peterAssignedInternship.set(true);
		goto("/demo/journeys/peter");
	}
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{@html highlight($_("journeys.peter.successfully_assigned_placements"))}
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
							>{$_("journeys.peter.evaluated_student_course_results")}</Typography
						>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">{$_("journeys.peter.issued_course_badges")}</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list"
							>{$_("journeys.peter.issued_internship_placements")}</Typography
						>
					</div>
					<div class="p">
						<Typography>
							{$_("journeys.peter.completed_peter_journey")}
							<br /><br />
							{$_("journeys.peter.verify_internship_completion")}
							<br /><br />
							{$_("journeys.peter.click_to_proceed")}
						</Typography>
					</div>
					<Button
						variant="secondary"
						label="{$_('components.continue')}"
						onClick="{handleFinishCourse}"
					/>
				</div>
				<div class="img">
					<img src="/imgs/peter-2.svg" alt="" />
				</div>
			</div>
		</Card>
	</div>
</div>
