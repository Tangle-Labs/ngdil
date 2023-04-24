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
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, Card, Button } from "$lib/components";
	import { currStep } from "$lib/stores/onboarding.store";

	function handleContinue() {
		currStep.set(2);
		goto("/demo/choose-journey");
	}
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>To begin with self-sovereign identity you must first have an identity wallet app.</Typography
		>
	</div>

	<div class="desc">
		<Typography variant="button">
			Select the application you wish to download by clicking the button and follow the onscreen
			installation instructions to get started.
		</Typography>
	</div>

	<div class="cards">
		<div class="card tl-wallet">
			<Card withBorder="{true}">
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
							null;
						}}"
						label="Download"
					/>
				</div>
			</Card>
		</div>
		<div class="card impierce-wallet">
			<Card withBorder="{true}">
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
							null;
						}}"
						label="Download"
					/>
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
