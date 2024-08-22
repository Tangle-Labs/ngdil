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

					img {
						height: 60px;
					}

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
	import { PUBLIC_BASE_URI, PUBLIC_CLIENT_URI } from "$env/static/public";
	import { Typography, Card, Button, Modal } from "$lib/components";
	import Qr from "$lib/components/project/Qr/Qr.svelte";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { wallets } from "$lib/config/config";
	import { currStep } from "$lib/stores/onboarding.store";
	import { apiClient } from "$lib/utils/axios.utils";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";

	let modalVisible = false;

	function handleContinue() {
		currStep.set(2);
		goto("/demo/choose-journey");
	}

	let selectedWallet: number;

	onMount(() => {
		currStep.set(1);
	});
</script>

<Modal bind:isOpen="{modalVisible}" withBorder="{true}" borderRadius="{8}">
	<div class="modal">
		<div class="content">
			<Qr data="{`${PUBLIC_CLIENT_URI}/demo/wallets/${wallets[selectedWallet].name}`}" />
			<div class="title">
				<Typography variant="card-header">
					{$_("onboarding.download_wallet.scan_qr_desc", {
						values: { walletName: wallets[selectedWallet].name }
					})}
				</Typography>
			</div>
			<!-- <div class="icons">
				<img src="/imgs/apple.png" alt="" class="icon" />
				<img src="/imgs/linux.png" alt="" class="icon" />
				<img src="/imgs/windows.png" alt="" class="icon" />
			</div> -->
			<Button
				variant="secondary"
				onClick="{() => goto('/demo/choose-journey')}"
				label="{$_('components.continue')}" />
			<div class="subtitle">
				<Typography variant="sub-text">
					{$_("onboarding.download_wallet.click_to_continue")}
				</Typography>
			</div>
		</div>
		<img src="{wallets[selectedWallet].image}" alt="" class="side" />
	</div>
</Modal>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			To begin with <Highlight>self-sovereign identity</Highlight> you must first have an identity wallet
			app.
			<!-- {$_("onboarding.download_wallet.must_have_wallet")} -->
		</Typography>
	</div>

	<div class="desc">
		<Typography variant="body">
			{$_("onboarding.download_wallet.select_application")}
		</Typography>
	</div>

	<div class="cards">
		<div class="card tl-wallet">
			<Card borderRadius="{8}" withBorder="{true}">
				<div class="card-content">
					<img src="/imgs/vira.png" alt="" />
					<div class="wallet-name">
						<Typography variant="button">
							{$_("onboarding.download_wallet.vira_id_wallet")}
						</Typography>
					</div>
					<div class="info">
						<Typography variant="sub-text"
							>{$_("onboarding.download_wallet.tangle_labs")}</Typography>
					</div>
					<Button
						variant="secondary"
						onClick="{() => {
							selectedWallet = 0;
							modalVisible = true;
						}}"
						label="{$_('components.download')}" />
				</div>
			</Card>
		</div>
		<div class="card impierce-wallet">
			<Card borderRadius="{8}" withBorder="{true}">
				<div class="card-content">
					<img src="/imgs/unime-logo.jpg" alt="" />
					<div class="wallet-name">
						<Typography variant="button">{$_("onboarding.download_wallet.unime")}</Typography>
					</div>
					<div class="info">
						<Typography variant="sub-text">{$_("onboarding.download_wallet.impierce")}</Typography>
					</div>

					<Button
						variant="secondary"
						onClick="{() => {
							selectedWallet = 1;
							modalVisible = true;
						}}"
						label="{$_('components.download')}" />
				</div>
			</Card>
		</div>
	</div>

	<div class="continue">
		<div class="subtitle">
			<Typography>{$_("onboarding.download_wallet.already_downloaded")}</Typography>
		</div>
		<Button variant="white" label="{$_('components.continue')}" onClick="{handleContinue}" />
	</div>
</div>
