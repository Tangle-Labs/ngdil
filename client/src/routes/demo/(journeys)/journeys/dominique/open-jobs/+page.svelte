<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.dash {
			.content {
				width: 100%;
				padding: 40px;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-content: flex-start;
				align-items: flex-start;

				.avatar {
					width: 25%;
					display: flex;
					flex-wrap: wrap;
					align-items: flex-start;
					align-content: flex-start;
					justify-content: center;
					text-align: center;
					padding: 20px;
					box-sizing: border-box;
					border-radius: 20px;
					border: 1px solid var(--white-700);
					background: white;

					.welcome {
						padding-top: 20px;
					}

					.big-bar {
						width: 70%;
						height: 15px;
						background: var(--black-300);
						border-radius: 10px;
						margin-top: 20px;
					}

					.bars {
						width: 80%;
						padding-left: 0 10%;
						margin-top: 20px;

						.bar {
							width: 100%;
							height: 10px;
							background: var(--white-900);
							margin: 30px 0;
							border-radius: 10px;

							&:nth-of-type(2) {
								width: 80%;
							}

							&:nth-of-type(4) {
								width: 70%;
							}
						}
					}
				}

				.cards {
					width: 40%;
					margin: 0px 20px;
					.card {
						height: 30%;
						width: 100%;
						padding: 15px;
						background: white;
						border-radius: 20px;
						box-sizing: border-box;
						margin-bottom: 20px;
						border: 1px solid var(--white-700);
						display: flex;
						align-items: center;
						padding: 20px 30px;
						align-content: center;

						.pic {
							height: 80px;
							width: 100px;
							background: var(--white-700);
							border-radius: 10px;
						}

						.bars {
							padding: 0 12.5px;
							width: calc(100% - 115px);

							.bar {
								width: 100%;
								height: 12.5px;
								border-radius: 10px;
								background: var(--black-300);
								margin: 15px 10px;

								&:nth-of-type(1) {
									width: 70%;
								}

								&:nth-of-type(3) {
									width: 40%;
								}
							}
						}
					}
				}
				.share {
					width: 25%;
					padding: 20px;
					background: white;
					border: 1px solid var(--white-700);
					border-radius: 20px;
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					text-align: center;

					.button {
						margin-bottom: 50px;
					}

					.header {
						margin-bottom: 20px;
					}

					.header,
					img,
					.issued-by {
						width: 100%;
						padding-bottom: 15px;
					}

					.credential {
						width: 100%;
					}

					img {
						height: 60px;
						width: unset;
					}
				}
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
			padding: 20px 0;
		}

		.loading {
			width: 100%;
		}

		.p {
			color: var(--black-500);
			font-weight: 300;
		}

		img {
			height: 80px;
			padding-bottom: 20px;
		}

		.subtext {
			width: 100%;
		}

		.checked {
			height: 60px;
		}
	}

	.button {
		border: none;
		background: var(--open-jobs-blue-900);
		color: var(--white-300);
		font-size: 1.15rem;
		width: calc(100% - 40px);
		margin: 20px;
		box-sizing: border-box;
		border-radius: 40px;
		padding: 15px;
		font-weight: 500;
		margin-bottom: 0;
		transition: 0.5s all;

		&:hover {
			cursor: pointer;
			background: var(--blue-900);
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, OpenJobsNetwork, Avatar, Modal, Loading } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { currNode, dominiqueSelectedCourse, dominqueCourses } from "$lib/stores/flows.store";
	import { apiClient } from "$lib/utils/axios.utils";
	import { createWebsocket } from "$lib/utils/ws.util";
	import { onMount } from "svelte";
	let receivedCreds = false;
	import Qr from "$lib/components/project/Qr/Qr.svelte";
	import { qrcode } from "svelte-qrcode-action";
	import { PUBLIC_CLIENT_URI } from "$env/static/public";
	let qr: string;

	onMount(async () => {
		currNode.set(1);

		const {
			data: { uri }
		} = await apiClient.post("/api/oid4vp", {
			presentationStage: "dominiqueShareCred",
			clientMetadata: {
				logoUri: new URL("/imgs/openjobs.png", PUBLIC_CLIENT_URI).toString(),
				clientName: "Open Jobs Network"
			}
		});
		qr = uri;
	});

	const ws = createWebsocket();
	ws.onmessage = (event) => {
		const data = JSON.parse(event.data);
		if (data.received) {
			receivedCreds = true;
		}
	};

	let showModal = false;
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>You’re all <Highlight>logged in to the Open Jobs Network.</Highlight> Now, share your credential
			with potential employers.</Typography>
	</div>
	<div class="sub-text">
		<Typography
			>Click the share credential button to share your credential on your Open Jobs Network profile.</Typography>
	</div>
	<Modal bind:isOpen="{showModal}" borderRadius="{16}">
		<div class="modal-content">
			<img src="/imgs/openjobs.png" alt="" class="logo" />
			<Typography variant="card-header" color="--bbc-blue"
				>{receivedCreds
					? "The Open Jobs Network has received your confirmation to share your credential!"
					: "Allow the Open Jobs Network to share your credential "}</Typography>
			<div class="p">
				{receivedCreds
					? "You may continue further in the browser. "
					: "In your mobile wallet scan the QR and accept the request to share the credentials with Open Jobs Network to get share your credentials to employers."}
			</div>
			{#if receivedCreds}
				<img class="checked" src="/imgs/open-jobs-check.png" alt="" />
				<button class="button" on:click="{() => goto('/demo/journeys/dominique/new-message')}"
					>Continue</button>
			{:else if qr}
				<Qr data="{qr}" size="{200}" />
				<div class="loading">
					<Loading size="30px" img="/imgs/blue-loading.png" />
				</div>
			{/if}
			<div class="subtext">
				<Typography variant="sub-text"
					>{receivedCreds ? "Click continue to proceed" : "Waiting for credentials"}</Typography>
			</div>
		</div>
	</Modal>
	<div class="dash">
		<OpenJobsNetwork>
			<div class="content">
				<div class="avatar">
					<Avatar variant="small" image="/imgs/dominique.png" />
					<div class="welcome">
						<Typography variant="button">Welcome, Dominique Veritas</Typography>
					</div>
					<div class="big-bar"></div>

					<div class="bars">
						<div class="bar"></div>
						<div class="bar"></div>
						<div class="bar"></div>
						<div class="bar"></div>
					</div>
				</div>

				<div class="cards">
					<div class="card">
						<div class="pic"></div>
						<div class="bars">
							<div class="bar"></div>
							<div class="bar"></div>
							<div class="bar"></div>
						</div>
					</div>

					<div class="card">
						<div class="pic"></div>
						<div class="bars">
							<div class="bar"></div>
							<div class="bar"></div>
							<div class="bar"></div>
						</div>
					</div>

					<div class="card">
						<div class="pic"></div>
						<div class="bars">
							<div class="bar"></div>
							<div class="bar"></div>
							<div class="bar"></div>
						</div>
					</div>
				</div>

				<div class="share">
					<div class="header">
						<Typography variant="list">Your Latest Credentials</Typography>
					</div>
					<img src="/imgs/kw1c-white.png" alt="" class="logo" />
					<div class="credential">
						<Typography variant="card-header"
							>{dominqueCourses[$dominiqueSelectedCourse].name}</Typography>
					</div>
					<div class="issued-by">
						<Typography variant="sub-text">Issued by<br /> Koning Willem I College</Typography>
					</div>
					<button
						class="button"
						on:click="{() => {
							showModal = true;
						}}">Share Credential</button>
				</div>
			</div>
		</OpenJobsNetwork>
	</div>
</div>
