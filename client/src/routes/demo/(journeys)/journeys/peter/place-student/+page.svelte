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
			.text-block {
				padding-bottom: 20px;
			}

			.dash-card {
				width: 72.5%;
				position: absolute;
				top: 50px;
				right: 5%;
				border-top-right-radius: 20px;
				border-top-left-radius: 20px;

				.dash-content {
					display: flex;
					width: 100%;
					justify-content: space-between;
					padding-bottom: 20px;

					.meta {
						width: 25%;

						.header {
							padding-bottom: 7.5px;
						}
					}

					.internship {
						width: 35%;
						padding: 0;

						img {
							width: 100%;
							border-top-right-radius: 20px;
							border-top-left-radius: 20px;
						}

						.intern-content {
							padding: 20px;

							.button {
								width: 100%;
								margin: 0;
								margin-top: 20px;
							}
						}
					}
				}
			}

			.card {
				background: white;
				border-radius: 20px;
				padding: 20px;
				box-sizing: border-box;
				filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));
			}
		}
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
		font-size: var(--button-text-size);
		width: calc(100% - 40px);
		margin: 20px;
		box-sizing: border-box;
		border-radius: 40px;
		padding: 10px;
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
	import { Typography, Kw1c, Modal, Loading } from "$lib/components";
	import {
		currNode,
		dominqueCourses,
		peterAssignecCompanyCountry,
		peterAssignedCompany,
		peterAssignedStudent
	} from "$lib/stores/flows.store";
	import { highlight } from "$lib/utils/highlight";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";

	let state: "init" | "loading" | "loaded" = "init";
	let showModal = false;

	function handleModalClick() {
		if (state === "loaded") {
			goto("/demo/journeys/peter/student-placed");
		} else {
			state = "loading";
			setTimeout(() => {
				currNode.set(5);
				state = "loaded";
			}, 5000);
		}
	}

	onMount(() => {
		currNode.set(4);
	});
</script>

<div class="container">
	<Modal bind:isOpen="{showModal}" borderRadius="{16}">
		<div class="modal-content">
			<img src="/imgs/kw1c-white.png" alt="" class="logo" />
			<span style:text-transform="uppercase">
				{#if state === "loaded"}
					<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-red-900">
						{$_("journeys.peter.assigned_internship", {
							values: { PeterAssignedStudent: $peterAssignedStudent?.split(" ")[0] }
						})}
					</Typography>
				{:else}
					<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-red-900">
						{$_("journeys.peter.about_to_assign_internship", {
							values: { PeterAssignedStudent: $peterAssignedStudent?.split(" ")[0] }
						})}
						<br />
					</Typography>
					<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-blue-900"
						>{$peterAssignedCompany}</Typography
					>
				{/if}
			</span>
			<div class="p">
				{#if state === "loaded"}
					{$_("journeys.peter.click_continue_to_proceed")}
				{:else}
					{$_("journeys.peter.assign_internship_btn_desc")}
				{/if}
			</div>
			{#if state === "loading"}
				<Loading img="/imgs/blue-loading.png" />
				<div class="subtext">
					<Typography variant="sub-text">{$_("journeys.peter.awaiting_confirmation")}</Typography>
				</div>
			{:else}
				<button class="button" on:click="{handleModalClick}"
					>{state === "loaded"
						? $_("components.continue").toUpperCase()
						: $_("journeys.peter.assign_placement").toUpperCase()}</button
				>
			{/if}
			<div class="subtext">
				<Typography variant="sub-text" />
			</div>
		</div>
	</Modal>

	<div class="heading">
		<Typography variant="heading">
			{@html highlight(
				$_("journeys.peter.2_relevent_internship", {
					values: { PeterAssignedStudent: $peterAssignedStudent?.split(" ")[0] }
				})
			)}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>
			{$_("journeys.peter.click_assign_internship_btn_to_student")}
		</Typography>
	</div>

	<div class="dash">
		<Kw1c variant="white" title="{$_('journeys.peter.student_internship_placement').toUpperCase()}">
			<div class="sidebar">
				{#each Array(5) as i}
					<div class="menu-item">
						<div class="square"></div>
						<div class="rect"></div>
					</div>
				{/each}
			</div>
			<div class="card dash-card">
				<div class="dash-content">
					<div class="meta">
						<div class="text-block">
							<div class="header">
								<Typography fontVariant="kw1c" variant="sub-text"
									>{$_("journeys.peter.student_applicant")}</Typography
								>
							</div>
							<div class="content">
								<Typography fontVariant="kw1c" variant="kw1c-header" color="--kw1c-blue-900"
									>{$peterAssignedStudent?.toUpperCase()}</Typography
								>
							</div>
						</div>

						<div class="text-block">
							<div class="header">
								<Typography fontVariant="kw1c" variant="sub-text"
									>{$_("journeys.peter.internship_category")}</Typography
								>
							</div>
							<div class="content">
								<Typography fontVariant="kw1c" variant="kw1c-sub-text" color="--kw1c-red-900"
									>{$_("journeys.peter.3d_print_design")}</Typography
								>
							</div>
						</div>
					</div>

					{#each dominqueCourses[2].internships as internship}
						<div class="card internship">
							<img src="/imgs/engineer.png" alt="" />
							<div class="intern-content">
								<div>
									<div class="location">
										<Typography variant="kw1c-sub-text" fontVariant="kw1c" color="--kw1c-red-900"
											>{internship.location}</Typography
										>
									</div>
									<div class="org">
										<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-blue-900"
											>{internship.name}</Typography
										>
									</div>
								</div>
								<button
									class="button"
									on:click="{() => {
										peterAssignedCompany.set(internship.name);
										peterAssignecCompanyCountry.set(internship.location.split(',')[1]);
										showModal = true;
									}}">{$_("journeys.peter.assign_placement").toUpperCase()}</button
								>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</Kw1c>
	</div>
</div>
