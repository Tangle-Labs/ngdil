<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}
	}

	.dash {
		.content {
			.sidebar {
				position: absolute;
				top: 0;
				left: 0;
				width: 18%;
				background: rgb(255, 255, 255);
				height: 100%;
				filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));
				display: flex;
				flex-wrap: wrap;
				box-sizing: border-box;
				padding: 20px;
				align-content: flex-start;

				.menu-item {
					display: flex;
					width: 100%;
					align-items: center;
					align-content: center;
					margin: 12px 0;

					.square {
						height: 30px;
						width: 30px;
						border-radius: 4px;
						background: var(--kw1c-blue-900);
						margin-right: 10px;
					}

					.rect {
						width: calc(100% - 40px);
						height: 10px;
						background: var(--white-900);
						border-radius: 10px;
					}
				}
			}

			.card {
				width: 72.5%;
				height: calc(100% - 50px);
				background: white;
				position: absolute;
				bottom: 0;
				right: 5%;
				border-top-right-radius: 20px;
				border-top-left-radius: 20px;
				padding: 20px;
				box-sizing: border-box;

				.table {
					display: flex;

					.column {
						display: flex;
						flex-wrap: wrap;
						width: 33%;

						&.col-1 {
							width: 50px;
						}

						.data,
						.button-container {
							width: 100%;
							height: 60px !important;
							display: flex;
							align-items: center;
							align-content: center;
							padding-bottom: 10px;
						}

						.button-container {
							transform: translateY(-10px);
						}

						.header {
							padding-bottom: 20px;
						}
					}
				}
			}
		}
	}

	.button-container {
		margin-left: 60%;
		width: 40%;
	}

	.modal-content {
		width: 400px;
		background: white;
		display: flex;
		flex-wrap: wrap;
		padding: 30px;
		box-sizing: border-box;
		justify-content: center;
		text-align: center;

		& > * {
			padding: 10px 0;
		}

		.p {
			color: var(--black-500);
			font-weight: 300;
		}

		img {
			height: 120px;
		}

		.subtext {
			width: 100%;
		}

		.checked {
			height: 60px;
		}
	}

	.button {
		font-family: var(--kw1c-font);
		border: none;
		background: var(--kw1c-red-900);
		color: var(--white-300);
		font-size: 20px;
		width: calc(100% - 40px);
		margin: 20px;
		box-sizing: border-box;
		border-radius: 40px;
		padding: 12px;
		font-weight: 500;

		margin-bottom: 0;
		transition: 0.5s all;

		&.disabled {
			background: var(--black-300);

			&:hover {
				cursor: unset;
				background: var(--black-300);
			}
		}

		&:hover {
			cursor: pointer;
			background: var(--red-700);
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, Kw1c, Modal, Loading, Radio } from "$lib/components";
	import { currNode, peterAssignedBadges, peterChosenStudents } from "$lib/stores/flows.store";
	import { highlight } from "$lib/utils/highlight";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";

	let students = {
		"Sarah Jones": false,
		"Ivar Leifsson": false,
		"Lagertha Bonde": false
	};
	let showModal = false;
	let state: "init" | "loading" | "loaded" = "init";

	function handleIssueCourseBadges() {
		if (selected.length > 0) {
			peterAssignedBadges.set(selected);
			showModal = true;
		}
	}
	function handleModalClick() {
		if (state === "loaded") {
			goto("/demo/journeys/peter/students");
		} else {
			state = "loading";
			setTimeout(() => {
				state = "loaded";
				currNode.set(2);
			}, 3_000);
		}
	}

	onMount(() => {
		currNode.set(1);
	});

	$: selected = Object.keys(students).filter((s) => students[s]);
</script>

<div class="container">
	<Modal bind:isOpen="{showModal}" borderRadius="{16}">
		<div class="modal-content">
			<img src="/imgs/kw1c-white.png" alt="" class="logo" />
			<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-red-900"
				>{#if state === "loaded"}
					{$_("journeys.peter.issued_student_courses_badges", {
						values: { BadgeCount: selected.length }
					}).toUpperCase()}
				{:else}
					{$_("journeys.peter.about_to_issue_student_courses_badges", {
						values: { BadgeCount: selected.length }
					}).toUpperCase()}
				{/if}</Typography>
			<div class="p">
				{#if state === "loaded"}
					{$_("journeys.peter.click_continue_to_assign_internships")}
				{:else}
					{$_("journeys.peter.click_issue_badges_to_issue_selected_students")}
				{/if}
			</div>
			{#if state === "loading"}
				<Loading img="/imgs/blue-loading.png" />
			{:else}
				<button class="button" on:click="{handleModalClick}"
					>{state === "init"
						? $_("journeys.peter.issue_badges").toUpperCase()
						: $_("components.continue").toUpperCase()}</button>
			{/if}
			<div class="subtext">
				<Typography variant="sub-text" />
			</div>
		</div>
	</Modal>

	<div class="heading">
		<Typography variant="heading">
			{@html highlight($_("journeys.peter.all_passed_now_issue_course_badges"))}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>
			{$_("journeys.peter.select_students_and_issue_their_badges")}
		</Typography>
	</div>

	<div class="dash">
		<Kw1c
			variant="white"
			title="{$_('journeys.peter.internationalisation_course_students').toUpperCase()}">
			<div class="sidebar">
				{#each Array(5) as i}
					<div class="menu-item">
						<div class="square"></div>
						<div class="rect"></div>
					</div>
				{/each}
			</div>
			<div class="card">
				<div class="table">
					<div class="column col-1">
						<div class="header">
							<Typography variant="sub-text" fontVariant="kw1c" color="--white-300">.</Typography>
						</div>
						{#each $peterChosenStudents as student (student)}
							<div class="data">
								<Radio bind:checked="{students[student]}" />
							</div>
						{/each}
					</div>

					<div class="column">
						<div class="header">
							<Typography variant="sub-text" fontVariant="kw1c"
								>{$_("journeys.peter.student_applicant")}</Typography>
						</div>
						{#each $peterChosenStudents as student}
							<div class="data">
								<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-blue-900"
									>{student.toUpperCase()}</Typography>
							</div>
						{/each}
					</div>

					<div class="column">
						<div class="header">
							<Typography variant="sub-text" fontVariant="kw1c"
								>{$_("journeys.peter.internship_category")}</Typography>
						</div>

						{#each $peterChosenStudents as student (student)}
							<div class="data">
								<Typography variant="kw1c-sub-text" fontVariant="kw1c" color="--kw1c-red-900"
									>{$_("journeys.peter.3d_print_design")}</Typography>
							</div>
						{/each}
					</div>

					<div class="column">
						<div class="header action">
							<Typography variant="sub-text" fontVariant="kw1c"
								>{$_("journeys.peter.course_result")}</Typography>
						</div>

						{#each $peterChosenStudents as student (student)}
							<div class="data">
								<Typography variant="kw1c-sub-text" fontVariant="kw1c" color="--green-900"
									>{$_("journeys.peter.pass").toUpperCase()}</Typography>
							</div>
						{/each}
					</div>
				</div>

				<div class="button-container">
					<button
						class="{`button ${selected.length <= 0 && 'disabled'}`}"
						on:click="{handleIssueCourseBadges}"
						>{$_("journeys.peter.issue_course_badges").toUpperCase()}</button>
				</div>
			</div>
		</Kw1c>
	</div>
</div>
