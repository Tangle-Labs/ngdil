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
					width: 30%;
					display: flex;
					flex-wrap: wrap;
					align-items: flex-start;
					align-content: flex-start;
					justify-content: center;
					text-align: center;
					padding: 20px;
					box-sizing: border-box;
					border-radius: 10px;
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
							margin: 10px 0;
							border-radius: 10px;
						}
					}
				}

				.cards {
					width: 50%;
					margin: 0px 20px;
					.card {
						height: 30%;
						width: 100%;
						padding: 15px;
						background: white;
						border-radius: 10px;
						box-sizing: border-box;
						margin-bottom: 20px;
						border: 1px solid var(--white-700);
						display: flex;
						align-items: center;
						align-content: center;

						.pic {
							height: 100px;
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
								background: var(--white-900);
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
					width: 35%;
					padding: 20px;
					background: white;
					border: 1px solid var(--white-700);
					border-radius: 10px;
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					text-align: center;

					.header,
					img,
					.issued-by {
						padding-bottom: 15px;
					}

					img {
						height: 100px;
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
			background: var(--blue-900);
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, OpenJobsNetwork, Avatar, Modal, Loading } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { dominiqueSelectedCourse, dominqueCourses } from "$lib/stores/flows.store";
	let receivedCreds = false;

	function handleWait() {
		setTimeout(() => {
			receivedCreds = true;
		}, 8000);
	}

	let showModal = false;
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>You’re all <Highlight>logged in to the Open Jobs Network.</Highlight> Now, share your credential
			with potential employers.</Typography
		>
	</div>
	<div class="sub-text">
		<Typography
			>Click the share credential button to share your credential on your Open Jobs Network profile.</Typography
		>
	</div>
	<Modal bind:isOpen="{showModal}">
		<div class="modal-content">
			<img src="/imgs/openjobs.png" alt="" class="logo" />
			<Typography variant="card-header"
				>{receivedCreds
					? "The Open Jobs Network has received your confirmation to share your credential!"
					: "Allow the Open Jobs Network to share your credential "}</Typography
			>
			<div class="p">
				{receivedCreds
					? "You may continue further in the browser. "
					: "In your mobile wallet accept the request to share the credentials with Open Jobs Network to get share your credentials to employers."}
			</div>
			{#if receivedCreds}
				<img class="checked" src="/imgs/open-jobs-check.png" alt="" />
				<button class="button" on:click="{() => goto('/demo/journeys/dominique/new-message')}"
					>CONTINUE</button
				>
			{:else}
				<Loading img="/imgs/blue-loading.png" />
			{/if}
			<div class="subtext">
				<Typography variant="sub-text"
					>{receivedCreds ? "Click continue to proceed" : "Waiting for credentials"}</Typography
				>
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
							>{dominqueCourses[$dominiqueSelectedCourse].name}</Typography
						>
					</div>
					<div class="issued-by">
						<Typography variant="sub-text">Issued by Konning Willem 1 College</Typography>
					</div>
					<button
						class="button"
						on:click="{() => {
							showModal = true;
							handleWait();
						}}">Share Credential</button
					>
				</div>
			</div>
		</OpenJobsNetwork>
	</div>
</div>
