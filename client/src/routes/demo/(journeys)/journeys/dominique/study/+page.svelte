<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.dashboard {
			padding: 50px 15%;

			.details {
				padding-top: 20px;
				display: flex;
				align-items: center;
				align-content: center;
				width: 100%;
				justify-content: space-between;
			}

			.cards {
				width: 100%;
				display: flex;
				justify-content: space-between;
				padding-top: 30px;

				.card {
					padding: 20px;
					box-sizing: border-box;
					width: 23%;
					border-radius: 15px;
					background: white;
					height: fit-content;
					filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));

					.dash {
						height: 20px;
						background: var(--white-900);
						border-radius: 5px;
						margin-bottom: 10px;
					}

					.red-dash {
						height: 15px;
						background: var(--red-700);
						width: 60%;
					}

					.blue-dash {
						background: var(--blue-700);
					}

					.gray-dash {
						height: 14px;
						width: 85%;

						&:nth-last-of-type(2) {
							width: 70%;
						}
					}
				}
			}
		}
	}

	.button {
		width: 250px;
		display: flex;
		justify-content: flex-end;
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

		.button {
			width: 100%;
			margin-top: 20px;
		}

		.loading {
			width: 100%;
		}

		.subtext {
			width: 100%;
		}

		.checked {
			height: 60px;
		}

		.button {
			justify-content: center;
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, Kw1c, Modal, Loading, Hightlight, Button } from "$lib/components";
	import {
		dominqueCourses,
		dominiqueSelectedCourse,
		currNode,
		eventUri
	} from "$lib/stores/flows.store";
	import { onMount } from "svelte";
	import { Confetti } from "svelte-confetti";
	import { apiClient } from "$lib/utils/axios.utils";

	import { qrcode } from "svelte-qrcode-action";
	import { createWebsocket } from "$lib/utils/ws.util";
	import "@tanglelabs/open-id-qr";
	import { _ } from "svelte-i18n";
	import { highlight } from "$lib/utils/highlight";

	let studied = false;
	let progress: number = 0;
	let qr: string;
	let showModal = false;
	let receivedCreds: boolean = false;

	const handleStudy = () => {
		currNode.set(3);
		studied = true;
		const counting = setInterval(() => {
			if (progress > 100) clearInterval(counting);
			progress = progress < 100 ? progress + 1 : progress;
		}, 1);
	};

	function watchQr(qr: string) {
		if (!qr) return;
		document.addEventListener("open-id-qr-success", (e) => {
			if (e.detail.type === "vc") receivedCreds = true;
		});
	}

	$: watchQr(qr);

	onMount(async () => {
		const { data } = await apiClient.post("/api/credential-offer", {
			credential: dominqueCourses[$dominiqueSelectedCourse].name,
			issuer: "kw1c"
		});
		qr = data.uri;
		currNode.set(2);
	});
</script>

<div class="container">
	<Modal bind:isOpen="{showModal}" borderRadius="{16}">
		<div class="modal-content">
			<img src="/imgs/kw1c-white.png" alt="" class="logo" />
			<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-red-900"
				>{receivedCreds
					? $_("journeys.dominique.received_and_accepted_new_course_cred").toUpperCase()
					: $_("journeys.dominique.kw1c_sent_new_course_cred").toUpperCase()}</Typography>
			<div class="p">
				{receivedCreds
					? $_("journeys.dominique.visible_in_wallet_and_free_for_you_to_share")
					: $_("journeys.dominique.scan_qr_and_accept_cred_from_kw1c")}
			</div>
			{#if receivedCreds}
				<img class="checked" src="/imgs/checked.png" alt="" />
				<div class="button">
					<Button
						label="{$_('components.continue').toUpperCase()}"
						variant="kw1c"
						onClick="{() => goto('/demo/journeys/dominique/finished-course')}" />
				</div>
			{:else if qr}
				<open-id-qr request-uri="{qr}" size="{200}" event-stream-uri="{$eventUri}"></open-id-qr>
				<div class="loading">
					<Loading img="/imgs/blue-loading.png" size="30px" />
				</div>
			{/if}
			<div class="subtext">
				<Typography variant="sub-text"
					>{receivedCreds
						? $_("journeys.dominique.click_to_proceed")
						: $_("journeys.dominique.awaiting_cred_acceptance")}</Typography>
			</div>
		</div>
	</Modal>
	<div class="heading">
		{#if studied}
			<Typography variant="heading">
				{@html highlight($_("journeys.dominique.completed_course_with_top_mark_now_get_cred"))}
			</Typography>
		{:else}
			<Typography variant="heading">
				{@html highlight($_("journeys.dominique.accepted_on_course_now_study"))}
			</Typography>
		{/if}
	</div>
	<div class="sub-text">
		<Typography>
			{#if studied}
				{$_("journeys.dominique.get_cred_btn_desc")}
			{:else}
				{$_("journeys.dominique.start_studying_btn_desc")}
			{/if}</Typography>
	</div>
	{#if studied}
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
	{/if}
	<div class="dash-outer">
		<Kw1c variant="blue">
			<div class="dashboard">
				<div class="title">
					<Typography variant="kw1c-header" fontVariant="kw1c"
						>{studied
							? $_("journeys.dominique.congrats_dominique_you_completed_course").toUpperCase()
							: $_(
									"journeys.dominique.hello_dominique_welcome_to_new_course"
							  ).toUpperCase()}</Typography>
				</div>
				<div class="details">
					<div class="text">
						<div class="category">
							<Typography variant="kw1c-sub-text" fontVariant="kw1c" color="--kw1c-red-900"
								>{dominqueCourses[$dominiqueSelectedCourse].category.toUpperCase()}</Typography>
						</div>
						<div class="course">
							<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-blue-900"
								>{dominqueCourses[$dominiqueSelectedCourse].name.toUpperCase()}</Typography>
						</div>
					</div>
					<div class="button">
						{#if studied}
							<Button
								variant="kw1c"
								label="{$_('journeys.dominique.get_cred').toUpperCase()}"
								onClick="{() => {
									showModal = true;
								}}" />
						{:else}
							<Button
								variant="kw1c"
								label="{$_('journeys.dominique.start_studying').toUpperCase()}"
								onClick="{handleStudy}" />
						{/if}
					</div>
				</div>
				<div class="cards">
					{#each Array(4) as i}
						<div class="card">
							<div class="dash red-dash"></div>
							<div class="dash blue-dash"></div>
							<div class="dash gray-dash"></div>
							<div class="dash gray-dash"></div>
							<div class="progress">
								<Typography variant="status" fontVariant="kw1c" color="--kw1c-blue-900"
									>{progress}%</Typography>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</Kw1c>
	</div>
</div>
