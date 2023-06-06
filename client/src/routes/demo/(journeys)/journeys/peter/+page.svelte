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
		currNode,
		nodeCount,
		peterAssignedInternship,
		peterEnrolledStudent,
		peterVerifiedInternship
	} from "$lib/stores/flows.store";
	import { onMount } from "svelte";

	onMount(() => {
		nodeCount.set(0);
		currNode.set(0);
	});
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>Hi Peter. Let’s get you <Highlight>started with enrolling your students.</Highlight> Select your
			experience to get started.</Typography>
	</div>
	<div class="desc">
		<Typography variant="button">
			Select the experience to start Peter’s journey and evaluate and enrol students.
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
								>Verify Student and enrol on Internationalisation course.</Typography>
						</div>
						<div class="desc">
							<Typography>
								Here you will use your self-sovereign identity to connect to the KW1C staff
								dashboard, assess student eligibility for international internships, and enrol
								students onto the internationalisation course.
							</Typography>
						</div>
					</div>
					<Button
						variant="{$peterEnrolledStudent ? 'completed' : 'secondary'}"
						onClick="{() => {
							goto('/demo/journeys/peter/login-kw1c');
						}}"
						label="{$peterEnrolledStudent ? 'Retry' : 'Get Started'}" />
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
								>Issue internationalisation course badges and assign student internship placements.</Typography>
						</div>
						<div class="desc">
							<Typography>
								In this journey you will issue internationalisation badges to students who were
								successful in their course studies and assign a student an international internship
								placement.
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
						label="{$peterAssignedInternship ? 'Retry' : 'Get Started'}" />
				</div>
			</Card>
		</div>
		<div class="card">
			<Card withBorder="{true}">
				<div class="card-content">
					<Avatar image="/imgs/pic-placeholder.png" />
					<div class="text">
						<div class="heading">
							<Typography variant="card-header">Verify students internship credentials</Typography>
						</div>
						<div class="desc">
							<Typography>
								After the return of students from their international internship you will verify
								their participation and successful completion of their internship by verifying their
								new credentials issued by international companies.
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
						label="{$peterVerifiedInternship ? 'Retry' : 'Get Started'}" />
				</div>
			</Card>
		</div>
		{#if $peterAssignedInternship && $peterVerifiedInternship && $peterEnrolledStudent}
			<div class="other">
				<Button
					variant="secondary"
					onClick="{() => goto('/demo/choose-journey')}"
					label="Try Another Journey" />
			</div>
		{/if}
	</div>
</div>
