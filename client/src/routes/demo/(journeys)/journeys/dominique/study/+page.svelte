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
	import { dominqueCourses, dominiqueSelectedCourse, currNode } from "$lib/stores/flows.store";
	import { onMount } from "svelte";
	import { Confetti } from "svelte-confetti";
	import { apiClient } from "$lib/utils/axios.utils";
	import Qr from "$lib/components/project/Qr/Qr.svelte";
	import { qrcode } from "svelte-qrcode-action";
	import { websocketClient } from "$lib/utils/ws.util";

	let progress = 0;
	let studied = false;
	let showModal = false;
	let receivedCreds = false;
	let qr: string;

	onMount(async () => {
		const { data } = await apiClient.post("/api/credential-offer", {
			credential: dominqueCourses[$dominiqueSelectedCourse].name
		});
		qr = data.request;
		currNode.set(2);
	});

	websocketClient.onmessage = (event) => {
		const data = JSON.parse(event.data);
		if (data.creds) {
			receivedCreds = true;
		} else {
			console.log(data.login);
			console.log("WTF");
		}
	};
</script>

<div class="container">
	<Modal bind:isOpen="{showModal}" borderRadius="{16}">
		<div class="modal-content">
			<img src="/imgs/kw1c-white.png" alt="" class="logo" />
			<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-red-900"
				>{receivedCreds
					? "YOU HAVE RECEIVED & ACCEPTED YOUR NEW COURSE CREDENTIAL."
					: "KW1C HAS SENT YOU A NEW COURSE CREDENTIAL"}</Typography>
			<div class="p">
				{receivedCreds
					? "This is now visible in your wallet and free for you to share with anyone, at any time. "
					: "In your mobile wallet accept the credential from KW1C to receive your new qualification."}
			</div>
			{#if receivedCreds}
				<img class="checked" src="/imgs/checked.png" alt="" />
				<div class="button">
					<Button
						label="CONTINUE"
						variant="kw1c"
						onClick="{() => goto('/demo/journeys/dominique/finished-course')}" />
				</div>
			{:else if qr}
				<Qr data="{qr}" size="{250}" />
			{/if}
			<div class="subtext">
				<Typography variant="sub-text"
					>{receivedCreds
						? "Click Continue to proceed"
						: "Awaiting credential acceptance..."}</Typography>
			</div>
		</div>
	</Modal>
	<div class="heading">
		{#if studied}
			<Typography variant="heading">
				<Hightlight>Exciting times. You have completed your course</Hightlight>with top marks. Let’s
				get your credential.
			</Typography>
		{:else}
			<Typography variant="heading">
				Congratulations. <Hightlight>You have been accepted</Hightlight> on the course. Now you need
				to complete your studies.</Typography>
		{/if}
	</div>
	<div class="sub-text">
		<Typography>
			{#if studied}
				Click the get credential button to receive your credential from KW1C.
			{:else}
				Click the start studying button to continue and complete the course.
			{/if}</Typography>
	</div>
	{#if studied}
		<div
			style="position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;">
			<Confetti
				x="{[-5, 5]}"
				y="{[0, 0.1]}"
				delay="{[500, 5000]}"
				duration="2000"
				amount="500"
				fallDistance="100vh" />
		</div>
	{/if}
	<div class="dash-outer">
		<Kw1c variant="blue">
			<div class="dashboard">
				<div class="title">
					<Typography variant="kw1c-header" fontVariant="kw1c"
						>{studied
							? "CONGRATULATIONS DOMINIQUE, YOU HAVE COMPLETED YOUR COURSE!"
							: "HELLO DOMINIQUE, WELCOME TO YOUR NEW COURSE"}</Typography>
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
								label="GET CREDENTIAL"
								onClick="{() => {
									showModal = true;
								}}" />
						{:else}
							<Button
								variant="kw1c"
								label="START STUDYING"
								onClick="{() => {
									currNode.set(3);
									studied = true;
									progress = 100;
								}}" />
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
