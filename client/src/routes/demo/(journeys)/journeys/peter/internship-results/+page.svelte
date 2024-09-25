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
						width: 30%;

						&:last-of-type {
							width: 40%;
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
							justify-content: center;
						}

						.header {
							padding-bottom: 20px;
						}

						.action {
							text-align: center;
							width: 100%;
						}
					}
				}
			}
		}
	}

	.button {
		min-width: max-content;
		font-family: var(--kw1c-font);
		border: none;
		background: var(--kw1c-red-900);
		color: var(--white-300);
		font-size: 20px;
		margin: 20px;
		box-sizing: border-box;
		font-weight: 500;
		border-radius: 40px;
		padding: 12px 30px;
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
	import { Typography, Kw1c } from "$lib/components";
	import {
		currNode,
		nodeCount,
		peterAssignedCompany,
		peterAssignedStudent
	} from "$lib/stores/flows.store";
	import { highlight } from "$lib/utils/highlight";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";

	onMount(() => {
		currNode.set(0);
		nodeCount.set(3);
	});
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{@html highlight(
				$_("journeys.peter.students_returned_from_internships_now_verify_internship_completion")
			)}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>{$_("journeys.peter.click_verify_completion_to_proceed_To_verify")}</Typography>
	</div>

	<div class="dash">
		<Kw1c variant="white" title="{$_('journeys.peter.internship_students').toUpperCase()}">
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
					<div class="column">
						<div class="header">
							<Typography variant="sub-text" fontVariant="kw1c"
								>{$_("journeys.peter.student_applicant")}</Typography>
						</div>
						<div class="data">
							<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-blue-900"
								>{$_("applicants.Sarah_Jones").toUpperCase()}</Typography>
						</div>
						<div class="data">
							<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-blue-900"
								>{$_("applicants.Ivar_Leifsson").toUpperCase()}</Typography>
						</div>
						<div class="data">
							<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-blue-900"
								>{$_("applicants.Lagertha_Bonde").toUpperCase()}</Typography>
						</div>
					</div>

					<div class="column">
						<div class="header">
							<Typography variant="sub-text" fontVariant="kw1c"
								>{$_("journeys.peter.internship_placement")}</Typography>
						</div>
						<div class="data">
							<Typography variant="kw1c-sub-text" fontVariant="kw1c" color="--kw1c-red-900"
								>{$peterAssignedCompany}</Typography>
						</div>
						<div class="data">
							<Typography variant="kw1c-sub-text" fontVariant="kw1c" color="--kw1c-red-900"
								>{$peterAssignedCompany}</Typography>
						</div>
						<div class="data">
							<Typography variant="kw1c-sub-text" fontVariant="kw1c" color="--kw1c-red-900"
								>{$peterAssignedCompany}</Typography>
						</div>
					</div>

					<div class="column">
						<div class="header action">
							<Typography variant="sub-text" fontVariant="kw1c"
								>{$_("journeys.peter.action")}</Typography>
						</div>
						<div class="button-container">
							<button
								class="{`button ${$peterAssignedStudent !== 'Sarah Jones' && 'disabled'}`}"
								on:click="{() => {
									goto('/demo/journeys/peter/verify-internship');
								}}">{$_("journeys.peter.verify_completion").toUpperCase()}</button>
						</div>

						<div class="button-container">
							<button
								class="{`button ${$peterAssignedStudent !== 'Ivar Leifsson' && 'disabled'}`}"
								on:click="{() => {
									goto('/demo/journeys/peter/verify-internship');
								}}">{$_("journeys.peter.verify_completion").toUpperCase()}</button>
						</div>
						<div class="button-container">
							<button
								class="{`button ${$peterAssignedStudent !== 'Lagertha Bonde' && 'disabled'}`}"
								on:click="{() => {
									goto('/demo/journeys/peter/verify-internship');
								}}">{$_("journeys.peter.verify_completion").toUpperCase()}</button>
						</div>
					</div>
				</div>
			</div>
		</Kw1c>
	</div>
</div>
