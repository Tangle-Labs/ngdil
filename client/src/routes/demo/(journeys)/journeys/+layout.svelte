<style lang="scss">
	.nav {
		background: linear-gradient(180deg, rgba(235, 240, 242, 0) 0%, rgba(235, 240, 242, 0.57) 100%);
		box-sizing: border-box;
		padding: 20px 40px;
		display: flex;
		justify-content: space-between;

		& > .login {
			display: flex;
			align-items: center;
			align-content: center;

			& > .avatar {
				padding: 0 20px;
				position: relative;

				.name,
				.desc {
					padding: 5px 0;
				}

				.desc {
					padding-bottom: 15px;
				}

				& > .dropdown {
					position: absolute;
					top: 72px;
					padding: 30px;
					background: rgba($color: #cfe3ee, $alpha: 0.25);
					border-bottom-left-radius: 8px;
					border-bottom-right-radius: 8px;
					z-index: 20;
				}
			}
		}
	}
	.slot {
		padding: 20px 17vw;
	}

	.overlay {
		position: absolute;
		opacity: 0;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		z-index: 10;
	}

	.bottom {
		padding: 0 17vw 10vh;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;

		& > .progress {
			width: 40%;
		}

		& > .back {
			cursor: pointer;
			position: absolute;
			left: 17.5vw;
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Avatar, Button, ProgressBar, Typography } from "$lib/components";
	import { JourneyInfo, currNode, currentJourney, nodeCount } from "$lib/stores/flows.store";
	import { _ } from "svelte-i18n";

	let expanded = false;
</script>

<div class="nav">
	<img src="/imgs/ngdil.svg" class="logo" alt="" />
	{#if expanded}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="overlay" on:click="{() => (expanded = false)}"></div>
	{/if}

	<div class="login">
		<div class="avatar">
			<Avatar
				variant="small"
				onClick="{() => (expanded = true)}"
				image="{`/imgs/${$currentJourney}.png`}" />
			{#if expanded}
				<div class="dropdown">
					<div class="Name">
						<Typography variant="body" color="--black-700">
							{JourneyInfo[$currentJourney].name}
						</Typography>
					</div>
					<div class="desc">
						<Typography variant="sub-text" color="--black-700">
							{JourneyInfo[$currentJourney].desc}
						</Typography>
					</div>
					<Button
						variant="white"
						onClick="{() => goto('/demo/choose-journey')}"
						label="{$_('components.change')}" />
				</div>
			{/if}
		</div>
		<Button
			onClick="{() => {
				window.open('https://ngdil.com/contact', '_blank');
			}}"
			label="{$_('components.contact_us')}"
			variant="white" />
	</div>
</div>

<div class="slot">
	<slot />
</div>

{#if $nodeCount > 0}
	<div class="bottom">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="back"
			on:click="{() => {
				history.back();
			}}">
			<img src="/imgs/back.svg" alt="" class="icon" />
			<Typography variant="button" color="--black-300">{$_("components.back")}</Typography>
		</div>
		<div class="progress">
			<ProgressBar nodes="{$nodeCount}" current="{$currNode}" />
		</div>
	</div>
{/if}
