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
	import { WebsocketClient } from "$lib/utils/ws.util";
	import { onMount } from "svelte";
	import Qr from "$lib/components/project/Qr/Qr.svelte";

	let showModal = false;
	let receivedCreds = false;
	let qr: string;

	onMount(async () => {
		currNode.set(3);
		const {
			data: { uri }
		} = await apiClient.post("/api/oid4vp", { presentationStage: "dominiqueApplyForJob" });
		qr = uri;
	});

	WebsocketClient.ws.onmessage = (event) => {
		const data = JSON.parse(event.data);
		console.log(data);
		if (data.received) {
			receivedCreds = true;
		}
	};
</script>

<div class="container">
	<Modal withoutPadding="{true}" bind:isOpen="{showModal}" borderRadius="{16}">
		<div class="modal-header">
			<img src="/imgs/bbc.png" alt="" class="logo" />
			<div class="logo-text">
				<Typography color="--white-300" variant="card-header">Big Business Corp</Typography>
			</div>
		</div>
		<div class="modal-content">
			<Typography variant="card-header" color="--bbc-blue"
				>{receivedCreds
					? "Your application via digital CV has been received by Big Business Corp!"
					: "Big Business Corp is requesting you share your digital CV."}</Typography>
			<div class="p">
				{receivedCreds
					? "You may continue further in your browser."
					: "In your mobile wallet scan the QR accept the request to share credentials with Big Business Corp "}
			</div>

			{#if receivedCreds}
				<img class="checked" src="/imgs/check-circle.png" alt="" />
				<button class="button" on:click="{() => goto('/demo/journeys/dominique/get-staff-id')}"
					>Continue</button>
			{:else if qr}
				<Qr data="{qr}" size="{320}" />
			{/if}
			<div class="subtext">
				<Typography variant="sub-text"
					>{receivedCreds ? "Click continue to proceed" : "Waiting for credentials"}</Typography>
			</div>
		</div>
	</Modal>
	<div class="heading">
		<Typography variant="heading"
			>Looks like you have all the credentials required. Let’s apply for the position and <Highlight>
				share your credentials.</Highlight
			></Typography>
	</div>
	<div class="sub-text">
		<Typography
			>Click the apply now button to share multiple credentials as your digital CV.</Typography>
	</div>

	<div class="dash">
		<BigBusinessCorp heading="Big Business Corp Jobs Board">
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
							>Application Requirements</Typography>
					</div>
					<div class="sub-text">
						<Typography
							>To apply for this role, applicants are required to share the following credentials:</Typography>
					</div>
					<div class="list">
						<Typography variant="list">National ID</Typography>
					</div>
					<div class="list">
						<Typography variant="list">KW1C Diploma</Typography>
					</div>
					<div class="list">
						<Typography variant="list"
							>{dominqueCourses[$dominiqueSelectedCourse].name} Certificate</Typography>
					</div>

					<div class="button-container">
						<button
							class="button"
							on:click="{() => {
								showModal = true;
							}}">Apply Now</button>
					</div>
				</div>
			</div>
		</BigBusinessCorp>
	</div>
</div>
