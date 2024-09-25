<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.dash {
			.card {
				margin: 0px 10% 10%;
				background: white;
				border-radius: 20px;
				filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));

				display: flex;
				transform: translateY(30px);

				.left {
					padding-right: 10px;
					width: 70%;

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

		img {
			height: 60px;
		}

		.p {
			color: var(--black-500);
			width: 100%;
		}

		.subtext,
		.loading {
			width: 100%;
		}

		.checked {
			height: 60px;
		}
	}

	.button-container {
		min-width: max-content;
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
		margin: 20px;
		box-sizing: border-box;
		border-radius: 40px;
		font-weight: 500;
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
	import {
		currNode,
		dominiqueSelectedCourse,
		dominqueCourses,
		eventUri
	} from "$lib/stores/flows.store";
	import { apiClient } from "$lib/utils/axios.utils";
	import { onMount } from "svelte";
	import Confetti from "svelte-confetti";

	import "@tanglelabs/open-id-qr";

	function watchQr(qr: string) {
		if (!qr) return;
		document.addEventListener("open-id-qr-success", (e) => {
			if (e.detail.type === "vc") receivedCreds = true;
		});
	}

	$: watchQr(qr);
	import { _ } from "svelte-i18n";
	import { highlight } from "$lib/utils/highlight";

	let showModal = false;
	let receivedCreds = false;
	let qr: string;

	onMount(async () => {
		currNode.set(4);
		const { data } = await apiClient.post("/api/credential-offer", {
			credential: "Staff ID",
			issuer: "bbc"
		});
		qr = data.uri;
	});
</script>

<div class="container">
	<Modal withoutPadding="{true}" bind:isOpen="{showModal}" borderRadius="{16}">
		<div class="modal-header">
			<img src="/imgs/bbc.png" alt="" class="logo" />
			<div class="logo-text">
				<Typography color="--white-300" variant="card-header"
					>{$_("components.big_business_corp")}</Typography>
			</div>
		</div>
		<div class="modal-content">
			<Typography variant="card-header" color="--bbc-blue"
				>{receivedCreds
					? $_("journeys.dominique.accepted_following_cred")
					: $_("creds.bbc_staff_id")}</Typography>
			<div class="p">
				{receivedCreds
					? $_("creds.bbc_staff_id")
					: $_("journeys.dominique.scan_qr_accept_cred_from_bbc")}
			</div>
			{#if receivedCreds}
				<img class="checked" src="/imgs/check-circle.png" alt="" />
				<button class="button" on:click="{() => goto('/demo/journeys/dominique/job-secured')}"
					>{$_("components.continue")}</button>
			{:else if qr}
				<open-id-qr request-uri="{qr}" event-stream-uri="{$eventUri}" size="{200}"></open-id-qr>
				<div class="loading">
					<Loading size="30px" img="/imgs/blue-loading.png" />
				</div>
			{/if}
			<div class="subtext">
				<Typography variant="sub-text"
					>{receivedCreds
						? $_("journeys.dominique.click_to_proceed")
						: $_("journeys.dominique.awaiting_confirmation")}</Typography>
			</div>
		</div>
	</Modal>
	<div class="heading">
		<Typography variant="heading">
			{@html highlight($_("journeys.dominique.got_job_bbc_issued_staff_id"))}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>
			{$_("journeys.dominique.get_staff_id_btn_desc")}</Typography>
	</div>
	<div
		style="position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;">
		<Confetti
			x="{[-5, 5]}"
			y="{[0, 0.1]}"
			delay="{[500, 5000]}"
			duration="{2000}"
			amount="{500}"
			fallDistance="100vh" />
	</div>

	<div class="dash">
		<BigBusinessCorp heading="{$_('journeys.dominique.congrats_you_got_the_job')}">
			<div class="card">
				<div class="left">
					<img src="{dominqueCourses[$dominiqueSelectedCourse].img}" alt="" />
					<div class="details">
						<div class="heading">
							<Typography variant="card-header" color="--bbc-blue"
								>{$_("onboarding.choose_journey.dominique_veritas")}</Typography>
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
							>{dominqueCourses[$dominiqueSelectedCourse].name}</Typography>
					</div>
					<div class="sub-text">
						<Typography>
							{$_("journeys.dominique.bbc_welcomes_to_team_and_send_cred")}
						</Typography>
					</div>
					<div class="list">
						<Typography variant="list">{$_("creds.bbc_staff_id")}</Typography>
					</div>

					<div class="button-container">
						<button
							class="button"
							on:click="{() => {
								showModal = true;
							}}">{$_("journeys.dominique.get_staff_id")}</button>
					</div>
				</div>
			</div>
		</BigBusinessCorp>
	</div>
</div>
