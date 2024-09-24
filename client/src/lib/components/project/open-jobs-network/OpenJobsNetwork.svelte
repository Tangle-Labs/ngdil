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
			filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));

			.logo {
				height: 60px;
				display: flex;
				align-items: center;

				img {
					height: 60px;
					padding-right: 20px;
				}
			}

			.tabs {
				display: flex;

				.tab {
					display: flex;
					flex-wrap: wrap;
					width: 90px;
					justify-content: center;
					align-items: center;
					align-content: center;

					.square {
						height: 30px;
						width: 30px;
						border-radius: 5px;
						background: var(--black-500);
					}

					.bar {
						height: 12px;
						width: 70px;
						background: var(--black-300);
						border-radius: 10px;
						margin-top: 5px;
					}
				}
			}
		}

		.content {
			min-height: 50vh;
			position: relative;
		}
	}
</style>

<script lang="ts">
	import { Typography } from "$lib/components";
	import { _ } from "svelte-i18n";
</script>

<div class="container">
	<div class="nav">
		<div class="logo">
			<img src="/imgs/openjobs.png" alt="" />
			<Typography variant="card-header" color="--bbc-blue"
				>{$_("components.open_jobs_network")}</Typography
			>
		</div>
		<div class="tabs">
			<div class="tab">
				<div class="square"></div>
				<div class="bar"></div>
			</div>
			<div class="tab">
				<div class="square"></div>
				<div class="bar"></div>
			</div>
			<div class="tab">
				<div class="square"></div>
				<div class="bar"></div>
			</div>
			<div class="tab">
				<div class="square"></div>
				<div class="bar"></div>
			</div>
			<div class="tab">
				<div class="square"></div>
				<div class="bar"></div>
			</div>
		</div>
	</div>
	<div class="content">
		<slot />
	</div>
</div>
