<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.dash {
			.card {
				margin: 0px 10%;
				background: white;
				border-radius: 20px;
				display: flex;
				transform: translateY(30px);
				filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));

				.left {
					padding-right: 10px;
					width: 60%;

					img {
						border-top-left-radius: 20px;
						border-bottom-right-radius: 20px;
						width: 100%;
					}

					.heading {
						padding: 20px;
					}

					.bars {
						width: 100%;
						margin: 0px 15px;
						padding-bottom: 30px;
						.bar {
							width: 80%;
							height: 10px;
							margin: 10px;
							background: var(--black-300);
							border-radius: 10px;
						}
					}
				}

				.right {
					padding: 20px;

					& > * {
						padding: 10px 0;
					}
				}
			}
		}
	}

	.modal-header {
		background: var(--bbc-blue);
		width: 100%;
		padding: 20px;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		box-sizing: border-box;

		img {
			height: 30px;
			padding-bottom: 5px;
		}

		& > .logo-text {
			width: 100%;
			text-align: center;
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

		.p {
			color: var(--black-500);
			font-weight: 300;
		}

		img {
			height: 60px;
		}

		.subtext {
			width: 100%;
		}

		.checked {
			height: 60px;
		}

		.loading {
			width: 100%;
		}
	}

	.button-container {
		width: 50%;

		.button {
			margin: 20px 0;
		}
	}

	.button {
		border: none;
		background: var(--bbc-blue);
		color: var(--white-300);
		font-size: var(--button-text-size);
		width: calc(100% - 40px);
		font-weight: 500;
		margin: 20px;
		box-sizing: border-box;
		border-radius: 40px;
		padding: 15px;
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
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, BigBusinessCorp, Modal, Loading } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import {
		currNode,
		dominiqueEarnedCourseCred,
		dominiqueSelectedCourse,
		dominqueCourses
	} from "$lib/stores/flows.store";
	import { apiClient } from "$lib/utils/axios.utils";
	import { createWebsocket } from "$lib/utils/ws.util";
	import { onMount } from "svelte";
	import Qr from "$lib/components/project/Qr/Qr.svelte";
	import { PUBLIC_CLIENT_URI } from "$env/static/public";
	import { _ } from "svelte-i18n";

	let showModal = false;
	let receivedCreds = false;
	let qr: string;
	const ws = createWebsocket();

	ws.onmessage = (event) => {
		const data = JSON.parse(event.data);
		if (data.received) {
			receivedCreds = true;
		}
	};

	onMount(async () => {
		currNode.set(3);
		const {
			data: { uri }
		} = await apiClient.post("/api/oid4vp", {
			presentationStage: "dominiqueApplyForJob",
			clientMetadata: {
				logoUri: new URL("/imgs/bbc.png", PUBLIC_CLIENT_URI).toString(),
				clientName: "Big Business Corp"
			}
		});
		qr = uri;
	});
</script>

<div class="container">
	<Modal withoutPadding="{true}" bind:isOpen="{showModal}" borderRadius="{16}">
		<div class="modal-header">
			<img src="/imgs/bbc.png" alt="" class="logo" />
			<div class="logo-text">
				<Typography color="--white-300" variant="card-header">
					{$_("components.big_business_corp")}</Typography>
			</div>
		</div>
		<div class="modal-content">
			<Typography variant="card-header" color="--bbc-blue"
				>{receivedCreds
					? $_("journeys.dominique.application_received_via_digital_cv")
					: $_("journeys.dominique.requesting_digital_cv")}</Typography>
			<div class="p">
				{receivedCreds
					? $_("journeys.dominique.continue_further_in_browser")
					: $_("journeys.dominique.scan_qr_accept_request_from_bbc")}
			</div>

			{#if receivedCreds}
				<img class="checked" src="/imgs/check-circle.png" alt="" />
				<button class="button" on:click="{() => goto('/demo/journeys/dominique/get-staff-id')}"
					>Continue</button>
			{:else if qr}
				<Qr data="{qr}" size="{200}" />
				<div class="loading">
					<Loading size="30px" img="/imgs/blue-loading.png" />
				</div>
			{/if}
			<div class="subtext">
				<Typography variant="sub-text"
					>{receivedCreds
						? $_("journeys.dominique.click_to_proceed")
						: $_("journeys.dominique.waiting_for_creds")}</Typography>
			</div>
		</div>
	</Modal>
	<div class="heading">
		<Typography variant="heading"
			>Looks like you have all the credentials required. Let’s apply for the position and <Highlight>
				share your credentials.</Highlight>
			<!-- {$_("journeys.dominique.have_all_creds_apply_position")} -->
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>{$_("journeys.dominique.click_apply_now_to_share_creds")}</Typography>
	</div>

	<div class="dash">
		<BigBusinessCorp heading="{$_('journeys.dominique.bbc_job_board')}">
			<div class="card">
				<div class="left">
					<img src="{dominqueCourses[$dominiqueSelectedCourse].img}" alt="" />
					<div class="details">
						<div class="heading">
							<Typography variant="card-header" color="--bbc-blue"
								>{dominqueCourses[$dominiqueSelectedCourse].name}</Typography>
						</div>
						<div class="bars">
							<div class="bar"></div>
							<div class="bar"></div>
							<div class="bar"></div>
						</div>
					</div>
				</div>
				<div class="right">
					<div class="heading">
						<Typography variant="card-header" color="--bbc-blue"
							>{$_("journeys.dominique.application_requirements")}</Typography>
					</div>
					<div class="sub-text">
						<Typography>{$_("journeys.dominique.applicants_req_following_creds")}</Typography>
					</div>
					<div class="list">
						<Typography variant="list">{$_("creds.national_id")}</Typography>
					</div>
					<div class="list">
						<Typography variant="list">{$_("creds.kw1c_diploma")}</Typography>
					</div>
					<div class="list">
						<Typography variant="list"
							>{dominqueCourses[$dominiqueSelectedCourse].name +
								" " +
								$_("creds.certificate")}</Typography>
					</div>

					<div class="button-container">
						<button
							class="button"
							on:click="{() => {
								showModal = true;
							}}">{$_("components.apply_now")}</button>
					</div>
				</div>
			</div>
		</BigBusinessCorp>
	</div>
</div>
