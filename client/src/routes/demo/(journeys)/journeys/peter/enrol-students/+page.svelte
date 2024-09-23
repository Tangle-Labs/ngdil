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
		font-weight: 500;
		box-sizing: border-box;
		border-radius: 40px;
		padding: 12px;
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
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { currNode, peterChosenStudents } from "$lib/stores/flows.store";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";

	let students = {
		"Sarah Jones": false,
		"Ivar Leifsson": false,
		"Lagertha Bonde": false
	};
	let showModal = false;

	function handleIssueCourseInvites() {
		if (selected.length > 0) {
			peterChosenStudents.set(selected);
			showModal = true;
		}
	}

	onMount(() => {
		currNode.set(4);
	});

	$: selected = Object.keys(students).filter((s) => students[s]);
</script>

<div class="container">
	<Modal borderRadius="{16}" bind:isOpen="{showModal}">
		<div class="modal-content">
			<img src="/imgs/kw1c-white.png" alt="" class="logo" />
			<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-red-900">
				{$_("journeys.peter.about_to_invite_students_on_course", {
					values: { StudentCount: selected.length }
				}).toUpperCase()}
			</Typography>
			<div class="p">{$_("journeys.peter.click_send_invites_to_confirm")}</div>
			<button class="button" on:click="{() => goto('/demo/journeys/peter/course-students')}"
				>{$_("journeys.peter.send_invites").toUpperCase()}</button>
			<div class="subtext">
				<Typography variant="sub-text" />
			</div>
		</div>
	</Modal>

	<div class="heading">
		<Typography variant="heading">
			Three students are <Highlight>looking to get this badge.</Highlight> Let’s select the students
			and issue their course invites.
			<!-- {$_("journeys.peter.select_students_and_issue_course_invites")} -->
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>
			{$_("journeys.peter.select_students_and_click_issue_course_invite")}
		</Typography>
	</div>

	<div class="dash">
		<Kw1c
			variant="white"
			title="{$_('journeys.peter.internationalisation_course_applicants').toUpperCase()}">
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
						<div class="data">
							<Radio bind:checked="{students['Sarah Jones']}" />
						</div>
						<div class="data">
							<Radio bind:checked="{students['Ivar Leifsson']}" />
						</div>
						<div class="data">
							<Radio bind:checked="{students['Lagertha Bonde']}" />
						</div>
					</div>

					<div class="column">
						<div class="header">
							<Typography variant="sub-text" fontVariant="kw1c"
								>{$_("journeys.peter.student_applicant")}</Typography>
						</div>
						<div class="data">
							<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-blue-900"
								>{$_("applicants.Sarah_Jones")}</Typography>
						</div>
						<div class="data">
							<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-blue-900"
								>{$_("applicants.Ivar_Leifsson")}</Typography>
						</div>
						<div class="data">
							<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-blue-900"
								>{$_("applicants.Lagertha_Bonde")}</Typography>
						</div>
					</div>

					<div class="column">
						<div class="header">
							<Typography variant="sub-text" fontVariant="kw1c"
								>{$_("journeys.peter.internship_category")}</Typography>
						</div>
						<div class="data">
							<Typography variant="kw1c-sub-text" fontVariant="kw1c" color="--kw1c-red-900"
								>{$_("journeys.peter.3d_print_design")}</Typography>
						</div>
						<div class="data">
							<Typography variant="kw1c-sub-text" fontVariant="kw1c" color="--kw1c-red-900"
								>{$_("journeys.peter.3d_print_design")}</Typography>
						</div>
						<div class="data">
							<Typography variant="kw1c-sub-text" fontVariant="kw1c" color="--kw1c-red-900"
								>{$_("journeys.peter.3d_print_design")}</Typography>
						</div>
					</div>

					<div class="column">
						<div class="header action">
							<Typography variant="sub-text" fontVariant="kw1c"
								>{$_("journeys.peter.course_application")}</Typography>
						</div>

						<div class="data">
							<Typography variant="kw1c-sub-text" fontVariant="kw1c" color="--kw1c-red-900"
								>{$_("journeys.peter.internatinalisation_course")}</Typography>
						</div>

						<div class="data">
							<Typography variant="kw1c-sub-text" fontVariant="kw1c" color="--kw1c-red-900"
								>{$_("journeys.peter.internatinalisation_course")}</Typography>
						</div>

						<div class="data">
							<Typography variant="kw1c-sub-text" fontVariant="kw1c" color="--kw1c-red-900"
								>{$_("journeys.peter.internatinalisation_course")}</Typography>
						</div>
					</div>
				</div>

				<div class="button-container">
					<button
						class="{`button ${selected.length <= 0 && 'disabled'}`}"
						on:click="{handleIssueCourseInvites}"
						>{$_("journeys.peter.send_invitations").toUpperCase()}</button>
				</div>
			</div>
		</Kw1c>
	</div>
</div>
