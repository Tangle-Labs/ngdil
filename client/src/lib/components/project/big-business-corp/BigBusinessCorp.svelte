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
			background: var(--bbc-blue);
			display: flex;
			box-sizing: border-box;
			position: relative;
			justify-content: center;
			position: relative;
			filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));

			.logo {
				align-items: center;
				display: flex;
				flex-wrap: wrap;
				justify-content: center;

				img {
					height: 25px;
					padding-right: 20px;
				}

				.text {
					width: 100%;
					text-align: center;
				}
			}

			.tabs {
				position: absolute;
				width: calc(40% - 180px);
				height: 10px;
				bottom: 30px;
				right: 40px;
				display: flex;
				justify-content: space-between;

				.tab {
					width: 22%;
					height: 100%;
					background: var(--black-500);
					border-radius: 10px;
				}
			}
		}

		.heading {
			width: 100%;
			text-align: center;
			padding-top: 30px;
		}

		.content {
			min-height: 50vh;
			background: var(--bbc-background);
			position: relative;
			overflow-y: scroll;
			overflow-x: hidden;
		}
	}
</style>

<script lang="ts">
	import { Typography } from "$lib/components";
	import { _ } from "svelte-i18n";

	export let heading = "";
</script>

<div class="container">
	<div class="nav">
		<div class="logo">
			<img src="/imgs/bbc.png" alt="" />
			<div class="text">
				<Typography color="--white-300" variant="card-header"
					>{$_("components.big_business_corp")}</Typography>
			</div>
		</div>
		<div class="tabs">
			<div class="tab"></div>
			<div class="tab"></div>
			<div class="tab"></div>
			<div class="tab"></div>
		</div>
	</div>
	<div class="content">
		{#if heading}
			<div class="heading">
				<Typography variant="kw1c-header" color="--bbc-blue">{heading}</Typography>
			</div>
		{/if}
		<slot />
	</div>
</div>
