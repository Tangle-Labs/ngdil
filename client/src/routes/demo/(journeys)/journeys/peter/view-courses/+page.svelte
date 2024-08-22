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
							text-align: left;
						}

						.blue-bar {
							height: 20px;
							border-radius: 5px;
							width: 70%;
							background: var(--kw1c-blue-900);
							opacity: 0.5;
						}

						.red-bar {
							height: 14px;
							width: 40%;
							background: var(--kw1c-red-900);
							opacity: 0.5;
							border-radius: 10px;
						}

						.mock-button {
							height: 30px;
							width: 70%;
							background: var(--white-300);
							box-sizing: border-box;
							transform: translateY(10px);
							border: 10px solid var(--kw1c-red-900);
							border-radius: 30px;
							opacity: 0.5;
						}

						.button-container {
							transform: translateY(-10px);
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
		font-size: 20px;
		width: calc(100% - 40px);
		box-sizing: border-box;
		border-radius: 40px;
		padding: 10px;
		font-weight: 500;
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
	import { Typography, Kw1c, Button } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import {
		currNode,
		dominiqueSelectedCourse,
		nodeCount,
		peterChosenStudent
	} from "$lib/stores/flows.store";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";
	let receivedCreds = false;

	function handleWait() {
		setTimeout(() => {
			receivedCreds = true;
		}, 8000);
	}

	let showModal = false;

	onMount(() => {
		nodeCount.set(5);
		currNode.set(0);
	});
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{$_("journeys.peter.view_courses_intro")}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>{$_("journeys.peter.view_courses_subtext")}</Typography>
	</div>

	<div class="dash">
		<Kw1c variant="white" title="ACTIVE COURSES">
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
								>{$_("journeys.peter.course_name")}</Typography>
						</div>
						<div class="data">
							<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-blue-900"
								>{$_("journeys.peter.internationalisation")}</Typography>
						</div>
						<div class="data">
							<div class="blue-bar"></div>
						</div>
						<div class="data">
							<div class="blue-bar"></div>
						</div>
					</div>

					<div class="column">
						<div class="header">
							<Typography variant="sub-text" fontVariant="kw1c"
								>{$_("journeys.peter.course_status")}</Typography>
						</div>
						<div class="data">
							<Typography variant="status" fontVariant="kw1c" color="--green-900"
								>{$_("journeys.peter.complete")}</Typography>
						</div>
						<div class="data">
							<div class="red-bar"></div>
						</div>
						<div class="data">
							<div class="red-bar"></div>
						</div>
					</div>

					<div class="column">
						<div class="header">
							<Typography variant="sub-text" fontVariant="kw1c" color="--white-300"
								>{$_("journeys.peter.action")}</Typography>
						</div>
						<div class="button-container">
							<Button
								label="{$_('journeys.peter.view_results')}"
								variant="kw1c"
								onClick="{() => {
									goto('/demo/journeys/peter/course-results');
								}}" />
						</div>

						<div class="button-container">
							<div class="mock-button"></div>
						</div>

						<div class="button-container">
							<div class="mock-button"></div>
						</div>
					</div>
				</div>
			</div>
		</Kw1c>
	</div>
</div>
