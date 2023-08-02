<style lang="scss">
	.container {
		display: flex;
		flex-wrap: wrap;
		text-align: center;
		justify-content: center;

		& > * {
			padding: 20px 0;
			width: 100%;
		}

		& > .cards {
			display: flex;
			width: 40vw;
			justify-content: space-between;

			& > .card {
				width: 48%;

				.card-content {
					padding-bottom: 15px;

					.info {
						padding: 10px;
					}
				}
			}
		}

		.subtitle {
			padding-bottom: 10px;
		}

		.heading,
		.desc {
			width: 40vw;
		}
	}

	.modal {
		display: flex;

		.content {
			padding: 20px;
			display: flex;
			flex-wrap: wrap;
			width: 30vw;
			align-items: center;
			align-content: center;
			justify-content: center;
			text-align: center;

			.qr {
				height: 200px;
				margin-bottom: 20px;
			}

			.title,
			.caption {
				width: 100%;
				padding: 10px 0;
			}

			.icons {
				width: 100%;
				padding: 20px 0;

				.icon {
					height: 50px;
				}
			}

			.subtitle {
				padding-top: 20px;
				width: 100%;
			}
		}

		.side {
			height: 60vh;
			transform: translateX(15px);
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, Card, Button, Modal } from "$lib/components";
	import { currStep } from "$lib/stores/onboarding.store";
	import { apiClient } from "$lib/utils/axios.utils";

	let modalVisible = false;

	const loadQr = async function () {
		const { data } = await apiClient.get("/siop");
	};

	loadQr();
	function handleContinue() {
		currStep.set(2);
		goto("/demo/choose-journey");
	}
</script>

<Modal bind:isOpen="{modalVisible}" withBorder="{true}" borderRadius="8">
	<div class="modal">
		<div class="content">
			<img src="/imgs/qr.png" alt="" class="qr" />
			<div class="title">
				<Typography variant="card-header"
					>Scan the QR code to download the vira identity wallet</Typography>
			</div>
			<div class="caption">Or click the icon to download for desktop</div>
			<div class="icons">
				<img src="/imgs/apple.png" alt="" class="icon" />
				<img src="/imgs/linux.png" alt="" class="icon" />
				<img src="/imgs/windows.png" alt="" class="icon" />
			</div>
			<Button variant="secondary" onClick="{() => goto('/demo/choose-journey')}" label="Continue" />
			<div class="subtitle">
				<Typography variant="sub-text"
					>Click to continue once you have downloaded your wallet</Typography>
			</div>
		</div>
		<img src="/imgs/vira-side.png" alt="" class="side" />
	</div>
</Modal>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>To begin with self-sovereign identity you must first have an identity wallet app.</Typography>
	</div>

	<div class="desc">
		<Typography variant="body">
			Select the application you wish to download by clicking the button and follow the onscreen
			installation instructions to get started.
		</Typography>
	</div>

	<div class="cards">
		<div class="card tl-wallet">
			<Card borderRadius="8" withBorder="{true}">
				<div class="card-content">
					<img src="/imgs/vira.png" />
					<div class="wallet-name">
						<Typography variant="button">Vira Identity Wallet</Typography>
					</div>
					<div class="info">
						<Typography variant="sub-text">From Tangle Labs</Typography>
					</div>
					<Button
						variant="secondary"
						onClick="{() => {
							modalVisible = true;
						}}"
						label="Download" />
				</div>
			</Card>
		</div>
		<div class="card impierce-wallet">
			<Card borderRadius="8" withBorder="{true}">
				<div class="card-content">
					<img src="/imgs/impierce.png" />
					<div class="wallet-name">
						<Typography variant="button">Impierce Wallet</Typography>
					</div>
					<div class="info">
						<Typography variant="sub-text">From Impierce</Typography>
					</div>

					<Button
						variant="secondary"
						onClick="{() => {
							modalVisible = true;
						}}"
						label="Download" />
				</div>
			</Card>
		</div>
	</div>

	<div class="continue">
		<div class="subtitle">
			<Typography>Already downloaded the wallet?</Typography>
		</div>
		<Button variant="white" label="continue" onClick="{handleContinue}" />
	</div>
</div>
