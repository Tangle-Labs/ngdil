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
	import {
		currNode,
		nodeCount,
		peterAssignedInternship,
		peterEnrolledStudent,
		peterVerifiedInternship
	} from "$lib/stores/flows.store";
	import { highlight } from "$lib/utils/highlight";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";

	onMount(() => {
		nodeCount.set(0);
		currNode.set(0);
	});
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{@html highlight($_("journeys.peter.intro"))}
		</Typography>
	</div>
	<div class="desc">
		<Typography variant="button">
			{$_("journeys.peter.select_experience_to_start_journey")}
		</Typography>
	</div>

	<div class="cards">
		<div class="card">
			<Card withBorder="{true}">
				<div class="card-content">
					<Avatar image="/imgs/peter-1.svg" />
					<div class="text">
						<div class="heading">
							<Typography variant="card-header"
								>{$_(
									"journeys.peter.verify_student_and_enroll_on_internationalisation_course"
								)}</Typography>
						</div>
						<div class="desc">
							<Typography>
								{$_("journeys.peter.verify_student_enroll_desc")}
							</Typography>
						</div>
					</div>
					<Button
						variant="{$peterEnrolledStudent ? 'completed' : 'secondary'}"
						onClick="{() => {
							goto('/demo/journeys/peter/login-kw1c');
						}}"
						label="{$peterEnrolledStudent
							? $_('components.retry')
							: $_('components.get_started')}" />
				</div>
			</Card>
		</div>
		<div class="card">
			<Card withBorder="{true}">
				<div class="card-content">
					<Avatar image="/imgs/peter-2.svg" />
					<div class="text">
						<div class="heading">
							<Typography variant="card-header">
								{$_(
									"journeys.peter.issue_internationalisation_course_badge_and_assign_student_internship"
								)}
							</Typography>
						</div>
						<div class="desc">
							<Typography>
								{$_("journeys.peter.issue_course_badge_desc")}
							</Typography>
						</div>
					</div>
					<Button
						variant="{$peterAssignedInternship
							? 'completed'
							: $peterEnrolledStudent
							? 'secondary'
							: 'disabled'}"
						onClick="{() => {
							goto('/demo/journeys/peter/view-courses');
						}}"
						label="{$peterAssignedInternship
							? $_('components.retry')
							: $_('components.get_started')}" />
				</div>
			</Card>
		</div>
		<div class="card">
			<Card withBorder="{true}">
				<div class="card-content">
					<Avatar image="/imgs/peter-3.svg" />
					<div class="text">
						<div class="heading">
							<Typography variant="card-header"
								>{$_("journeys.peter.verify_students_internship_creds")}</Typography>
						</div>
						<div class="desc">
							<Typography>
								{$_("journeys.peter.verify_students_internship_desc")}
							</Typography>
						</div>
					</div>
					<Button
						variant="{$peterVerifiedInternship
							? 'completed'
							: $peterAssignedInternship
							? 'secondary'
							: 'disabled'}"
						onClick="{() => {
							goto('/demo/journeys/peter/internship-results');
						}}"
						label="{$peterVerifiedInternship
							? $_('components.retry')
							: $_('components.get_started')}" />
				</div>
			</Card>
		</div>
		{#if $peterAssignedInternship && $peterVerifiedInternship && $peterEnrolledStudent}
			<div class="other">
				<Button
					variant="secondary"
					onClick="{() => goto('/demo/choose-journey')}"
					label="{$_('components.try_another_journey')}" />
			</div>
		{/if}
	</div>
</div>
