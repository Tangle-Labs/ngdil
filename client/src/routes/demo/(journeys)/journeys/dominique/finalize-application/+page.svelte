<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.dash {
			.card {
				margin: 20px 10%;
				background: white;
				border: 1px solid var(--white-900);
				border-radius: 20px;
				display: flex;

				.left {
					padding-right: 10px;

					img {
						border-top-left-radius: 20px;
						border-bottom-right-radius: 20px;
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

		.subtext {
			width: 100%;
		}

		.checked {
			height: 60px;
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
			background: var(--blue-900);
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, BigBusinessCorp, Modal, Loading } from "$lib/components";
	import { dominiqueSelectedCourse, dominqueCourses } from "$lib/stores/flows.store";

	let showModal = false;
	let receivedCreds = false;

	function handleWait() {
		setTimeout(() => {
			receivedCreds = true;
		}, 9000);
	}
</script>

<div class="container">
	<Modal bind:isOpen="{showModal}">
		<div class="modal-content">
			<img src="/imgs/bbc.png" alt="" class="logo" />
			<Typography variant="card-header"
				>{receivedCreds
					? "Your application via digital CV has been received by Big Business Corp!"
					: "Big Business Corp is requesting you share your digital CV."}</Typography
			>
			<div class="p">
				{receivedCreds
					? "You may continue further in your browser."
					: "In your mobile wallet accept the request to share credentials with Big Business Corp (you may also add additional credentials that you feel may boost your CV)"}
			</div>
			{#if receivedCreds}
				<img class="checked" src="/imgs/check-circle.png" alt="" />
				<button class="button" on:click="{() => goto('/demo/journeys/dominique/get-staff-id')}"
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
	<div class="heading">
		<Typography variant="heading"
			>Looks like you have all the credentials required. Let’s apply for the position and share your
			credentials.</Typography
		>
	</div>
	<div class="sub-text">
		<Typography
			>Click the apply now button to share multiple credentials as your digital CV.</Typography
		>
	</div>

	<div class="dash">
		<BigBusinessCorp>
			<div class="card">
				<div class="left">
					<img src="{`/imgs/${$dominiqueSelectedCourse}.png`}" alt="" />

					<div class="details">
						<div class="heading">
							<Typography variant="card-header" color="--bbc-blue"
								>{dominqueCourses[$dominiqueSelectedCourse].name}</Typography
							>
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
							>Application Requirements</Typography
						>
					</div>
					<div class="sub-text">
						<Typography
							>To apply for this role, applicants are required to share the following credentials</Typography
						>
					</div>
					<div class="list">
						<Typography variant="list">National ID</Typography>
					</div>
					<div class="list">
						<Typography variant="list">KW1C Diploma</Typography>
					</div>
					<div class="list">
						<Typography variant="list">Personal Statement</Typography>
					</div>

					<button
						class="button"
						on:click="{() => {
							showModal = true;
							handleWait();
						}}">Apply Now</button
					>
				</div>
			</div>
		</BigBusinessCorp>
	</div>
</div>
