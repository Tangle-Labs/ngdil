<style lang="scss">
	.container {
		width: 100%;
		border-radius: 20px;
		box-sizing: border-box;
		overflow: hidden;
		border: 1px solid black;

		.nav {
			width: 100%;
			padding: 20px 40px;
			background: var(--white-300);
			display: flex;
			box-sizing: border-box;
			position: relative;
			justify-content: space-between;
			position: relative;
			align-items: center;
			filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));

			.logo {
				display: flex;
				justify-content: center;
				align-items: center;
				align-content: center;

				img {
					height: 50px;
					padding-right: 5px;
				}
			}

			.tabs {
				height: 100%;
				width: 50%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				align-content: center;

				.tab {
					height: 15px;
					width: 22%;
					background: var(--black-300);
					border-radius: 30px;
				}
			}
		}

		.slot {
			display: flex;
			justify-content: space-between;
			width: 100%;
			height: 100%;
			min-height: 50vh;
			overflow-y: scroll;
			overflow-x: hidden;
			background: var(--future-tech-background);

			.sidenav {
				background: var(--future-tech-green);
				min-height: 100%;
				width: 20%;
				min-height: 52vh;
				padding: 20px 35px;
				box-sizing: border-box;

				.menu-item {
					width: 100%;
					display: flex;
					align-items: center;
					align-content: center;

					.circle {
						height: 15px;
						aspect-ratio: 1 / 1;
						background: var(--white-300);
						margin: 15px 0;
						border-radius: 10px;
					}

					.rect {
						margin: 12px;
						height: 15px;
						border-radius: 10px;
						width: 100%;

						background: var(--white-300);
					}
				}
			}

			.content {
				min-height: 50vh;
				position: relative;
				display: flex;
				padding: 10px 0;

				.heading {
					padding: 10px 0;
				}
				.cards {
					display: flex;
					padding: 10px 0;

					justify-content: space-between;

					.future-tech-card {
						width: 73%;
					}

					.side-content {
						width: 25%;
						padding: 20px 30px;

						.rect {
							width: 100%;
							height: 15px;
							background: var(--white-700);
							margin: 30px 0;
							border-radius: 20px;
						}
					}
				}
				.card-area {
					width: calc(100% - 40px);
				}
			}
		}
	}

	.future-tech-card {
		background: #ffffff;
		padding: 20px;
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		box-shadow: 0px 2px 6px rgba(41, 41, 47, 0.06);
	}
</style>

<script lang="ts">
	import { Typography } from "$lib/components";
	import { _ } from "svelte-i18n";

	export let withSidebar = true;
	export let header = "";
</script>

<div class="container">
	<div class="nav">
		<div class="logo">
			<img src="/imgs/future-tech.png" alt="" />
			<div class="text">
				<Typography variant="heading" fontVariant="kw1c" color="--future-tech-green"
					>{$_("components.future_tech_co").toUpperCase()}
				</Typography>
			</div>
		</div>
		<div class="tabs">
			<div class="tab"></div>
			<div class="tab"></div>
			<div class="tab"></div>
			<div class="tab"></div>
		</div>
	</div>
	<div class="slot">
		{#if withSidebar}
			<div class="sidenav">
				{#each Array(5) as _}
					<div class="menu-item">
						<div class="circle"></div>
						<div class="rect"></div>
					</div>
				{/each}
			</div>
		{/if}
		<div class="content" style="{`width: ${withSidebar ? 75 : 100}%;`}">
			{#if withSidebar}
				<div class="card-area">
					<div class="heading">
						<Typography variant="card-header" color="--future-tech-green" fontVariant="kw1c"
							>{header}</Typography
						>
					</div>
					<div class="cards">
						<div class="future-tech-card">
							<slot />
						</div>
						<div class="side-content future-tech-card">
							{#each Array(6) as _}
								<div class="rect"></div>
							{/each}
						</div>
					</div>
				</div>
			{:else}
				<slot />
			{/if}
		</div>
	</div>
</div>
