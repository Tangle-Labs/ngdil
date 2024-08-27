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
						width: 32%;

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
							display: flex;
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
		font-family: var(--kw1c-font);
		border: none;
		background: var(--kw1c-red-900);
		color: var(--white-300);
		font-size: var(--button-text-size);
		width: calc(100% - 40px);
		margin: 20px;
		box-sizing: border-box;
		border-radius: 40px;
		padding: 10px;
		margin-bottom: 0;
		transition: 0.5s all;

		&:hover {
			cursor: pointer;
			background: var(--red-700);
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, Kw1c, Modal, Loading } from "$lib/components";
	import Button from "$lib/components/ui/Button/Button.svelte";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { currNode, dominiqueSelectedCourse, peterChosenStudent } from "$lib/stores/flows.store";
	import { _ } from "svelte-i18n";
	import { onMount } from "svelte";
	let receivedCreds = false;

	function handleWait() {
		setTimeout(() => {
			receivedCreds = true;
		}, 8000);
	}

	onMount(() => {
		currNode.set(1);
	});

	let showModal = false;
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			The students are keen to get on their international internships. Let’s see <Highlight>
				if they meet the requirements.</Highlight>
			<!-- {$_("journeys.peter.view_applications_intro")} -->
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>{$_("journeys.peter.view_applications_sub_text")}</Typography>
	</div>

	<div class="dash">
		<Kw1c variant="white" title="{$_('journeys.peter.internship_applications').toUpperCase()}">
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
								>{$_("journeys.peter.sinternship_category")}</Typography>
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
								>{$_("journeys.peter.action")}</Typography>
						</div>
						<div class="button-container">
							<Button
								onClick="{() => {
									peterChosenStudent.set('Sarah Jones');
									goto('/demo/journeys/peter/view-application');
								}}"
								variant="kw1c"
								label="{$_('journeys.peter.view_application')}" />
						</div>

						<div class="button-container">
							<Button
								onClick="{() => {
									peterChosenStudent.set('Ivar Leifsson');
									goto('/demo/journeys/peter/view-application');
								}}"
								variant="kw1c"
								label="{$_('journeys.peter.view_application')}" />
						</div>

						<div class="button-container">
							<Button
								onClick="{() => {
									peterChosenStudent.set('Lagertha Bonde');
									goto('/demo/journeys/peter/view-application');
								}}"
								variant="kw1c"
								label="{$_('journeys.peter.view_application')}" />
						</div>
					</div>
				</div>
			</div>
		</Kw1c>
	</div>
</div>
