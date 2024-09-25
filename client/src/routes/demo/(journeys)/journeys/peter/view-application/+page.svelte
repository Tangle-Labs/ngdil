<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}
	}

	.dash {
		.content {
			display: flex;
			justify-items: center;
			justify-content: space-between;
			padding-right: 15px;
			.sidebar {
				width: 18%;
				background: rgb(255, 255, 255);
				min-height: 100%;
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
				width: 80%;
				background: white;
				border-top-right-radius: 20px;
				border-top-left-radius: 20px;
				margin-top: 15px;
				padding: 20px;
				box-sizing: border-box;

				.card-header {
					display: flex;
					justify-content: space-between;
					align-items: center;
					align-content: center;
					padding-bottom: 40px;

					.button-container {
						width: 40%;
						text-align: center;
					}
				}

				.table {
					display: flex;
					gap: 15px;

					.column {
						display: flex;
						flex-wrap: wrap;
						width: 20%;

						&.badge {
							// width: 30px;
							display: flex;
							align-self: flex-end;
						}

						&:last-of-type {
							padding-left: 10px;
						}

						&:nth-of-type(1) {
							max-width: 60px;
						}

						&.type {
							width: 30%;
						}

						&:nth-of-type(3) {
							width: 30%;
						}

						&:nth-of-type(4) {
							width: 15%;
							align-content: end;
						}

						.data,
						.circle-container,
						.button-container {
							width: 100%;
							height: 60px !important;
							display: flex;
							align-items: center;
							align-content: center;
							padding-bottom: 10px;
						}

						.header {
							height: 30px;
						}

						.action {
							text-align: center;
							width: 100%;
						}

						.circle-container {
							flex-basis: 100%;
						}

						.circle {
							height: 25px;
							width: 25px;
							border-radius: 30px;
							border: 1px solid var(--black-300);
							box-sizing: border-box;
							background: var(--white-700);
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
		padding: 12px;
		font-weight: 500;
		margin-bottom: 0;
		transition: 0.5s all;
		min-width: max-content;

		&.loading {
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
	import { Typography, Kw1c, Modal, Loading, CredModal } from "$lib/components";
	import { credentials } from "$lib/stores/creds";
	import { currNode, peterChosenStudent } from "$lib/stores/flows.store";
	import { highlight } from "$lib/utils/highlight";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";
	let receivedCreds = false;
	let loading = false;

	function handleWait() {
		loading = true;
		setTimeout(() => {
			receivedCreds = true;
			loading = false;
			currNode.set(3);
		}, 8000);
	}

	onMount(() => {
		currNode.set(2);
	});
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{#if !receivedCreds}
				{@html highlight(
					$_("journeys.peter.view_application_enrolled_intro", {
						values: { PeterChosenStudent: $peterChosenStudent?.split(" ")[0] }
					})
				)}
			{:else}
				{@html highlight(
					$_("journeys.peter.view_application_not_enrolled_intro", {
						values: { PeterChosenStudent: $peterChosenStudent?.split(" ")[0] }
					})
				)}
			{/if}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography
			>{receivedCreds
				? $_("journeys.peter.view_application_not_enrolled_sub_text")
				: $_("journeys.peter.view_applications_enrolled_sub_text")}</Typography>
	</div>

	<div class="dash">
		<Kw1c variant="white" title="{$_('journeys.peter.student_applicant').toUpperCase()}">
			<div class="content">
				<div class="sidebar">
					{#each Array(5) as i}
						<div class="menu-item">
							<div class="square"></div>
							<div class="rect"></div>
						</div>
					{/each}
				</div>
				<div class="card">
					<div class="card-header">
						<div class="student">
							<div class="name">
								<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-blue-900"
									>{$peterChosenStudent?.toLocaleUpperCase()}</Typography>
							</div>
							<div class="course">
								<Typography variant="kw1c-sub-text" fontVariant="kw1c" color="--kw1c-red-900"
									>{$_("journeys.peter.3d_print_design")}</Typography>
							</div>
						</div>
						<div class="button-container">
							{#if receivedCreds}
								<button
									class="{`button ${loading && 'loading'}`}"
									on:click="{() => goto('/demo/journeys/peter/enrol-students')}">
									{$_("journeys.peter.enrol_student").toUpperCase()}
								</button>
							{:else}
								<button class="{`button ${loading && 'loading'}`}" on:click="{handleWait}">
									{loading
										? $_("journeys.peter.verifying")
										: $_("journeys.peter.request_credentials")}
								</button>
							{/if}
						</div>
					</div>
					<div class="table">
						<div class="column">
							<div class="header">
								<Typography variant="sub-text" fontVariant="kw1c" color="--white-300">.</Typography>
							</div>
							{#each Array(4) as _, i}
								<div class="circle-container">
									{#if loading}
										<Loading img="/imgs/blue-loading.png" size="30px" />
									{:else if !receivedCreds}
										<div class="circle"></div>
									{:else}
										<img
											src="{`/imgs/${i !== 3 ? 'verified' : 'missing'}.png`}"
											alt=""
											class="circle" />
									{/if}
								</div>
							{/each}
						</div>
						<div class="column type">
							<div class="header">
								<Typography variant="sub-text" fontVariant="kw1c"
									>{$_("journeys.peter.cred_type")}</Typography>
							</div>
							<div class="data">
								<Typography variant="card-header" fontVariant="kw1c"
									>{$_("creds.national_id").toUpperCase()}</Typography>
							</div>
							<div class="data">
								<Typography variant="card-header" fontVariant="kw1c"
									>{$_("creds.college_id").toUpperCase()}</Typography>
							</div>
							<div class="data">
								<Typography variant="card-header" fontVariant="kw1c"
									>{$_("creds.college_badge").toUpperCase()}</Typography>
							</div>
							<div class="data">
								<Typography variant="card-header" fontVariant="kw1c"
									>{$_("creds.internatinalisation_badge").toUpperCase()}</Typography>
							</div>
						</div>

						<div class="column">
							<div class="header">
								<Typography variant="sub-text" fontVariant="kw1c">{$_("issuer.issuer")}</Typography>
							</div>
							<div class="data">
								<Typography variant="list" fontVariant="kw1c">{$_("issuer.the_govt")}</Typography>
							</div>
							<div class="data">
								<Typography variant="list" fontVariant="kw1c"
									>{$_("issuer.koning_willem_i_college")}</Typography>
							</div>
							<div class="data">
								<Typography variant="list" fontVariant="kw1c"
									>{$_("issuer.koning_willem_i_college")}</Typography>
							</div>
							<div class="data">
								<Typography variant="list" fontVariant="kw1c"
									>{$_("issuer.koning_willem_i_college")}</Typography>
							</div>
						</div>

						<div class="column status">
							<div class="header">
								<Typography variant="sub-text" fontVariant="kw1c"
									>{$_("components.status")}</Typography>
							</div>
							{#if receivedCreds}
								<div class="data">
									<Typography variant="status" color="--green-900">
										{$_("components.verified")}
									</Typography>
								</div>
								<div class="data">
									<Typography variant="status" color="--green-900">
										{$_("components.verified")}
									</Typography>
								</div>
								<div class="data">
									<Typography variant="status" color="--green-900">
										{$_("components.verified")}
									</Typography>
								</div>
								<div class="data">
									<Typography variant="status" color="--red-900">
										{$_("components.missing")}
									</Typography>
								</div>
							{:else}
								<div class="data">
									<Typography variant="status" color="--secondary-900">
										{$_("components.pending")}
									</Typography>
								</div>

								<div class="data">
									<Typography variant="status" color="--secondary-900">
										{$_("components.pending")}
									</Typography>
								</div>
								<div class="data">
									<Typography variant="status" color="--secondary-900">
										{$_("components.pending")}
									</Typography>
								</div>
								<div class="data">
									<Typography variant="status" color="--secondary-900">
										{$_("components.pending")}
									</Typography>
								</div>
							{/if}
						</div>
						<div class="column badge">
							{#if receivedCreds}
								<div class="header">
									<Typography variant="sub-text" fontVariant="kw1c" color="--white-300"
										>_</Typography>
								</div>
								<div class="data">
									<CredModal
										name="{$_('creds.national_id')}"
										issuer="{$_('issuer.the_govt')}"
										credential="{{ ...credentials.nationalId, 'Full Name': $peterChosenStudent }}"
										logo="/imgs/gov.svg" />
								</div>
								<div class="data">
									<CredModal
										name="{$_('creds.college_id')}"
										issuer="{$_('issuer.koning_willem_i_college')}"
										credential="{{
											...credentials.collegeId,
											'Student Name': $peterChosenStudent
										}}"
										logo="/imgs/kw1c-white.png" />
								</div>
								<div class="data">
									<CredModal
										name="{$_('creds.college_badge')}"
										issuer="{$_('issuer.koning_willem_i_college')}"
										logo="/imgs/kw1c-white.png"
										credential="{{
											...credentials.courseCred,
											'Student Name': $peterChosenStudent
										}}" />
								</div>
								<div class="data"></div>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</Kw1c>
	</div>
</div>
