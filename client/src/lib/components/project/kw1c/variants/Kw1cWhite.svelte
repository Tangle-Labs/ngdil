<style lang="scss">
	.container {
		width: 100%;
		border-radius: 20px;
		box-sizing: border-box;
		overflow: hidden;
		border: 1px solid black;

		.nav {
			width: 100%;
			padding: 10px 40px;
			background: var(--white-300);
			display: flex;
			position: relative;
			filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));

			.logo {
				height: 80px;
			}

			.bottom-bar {
				width: 60%;
				position: absolute;
				height: 15px;
				background: var(--kw1c-red-900);
				bottom: 0;
				left: 20%;
				border-top-right-radius: 12.5px;
				border-top-left-radius: 12.5px;
				padding: 10px;
				display: flex;

				.white-rect {
					width: 15%;
					height: 100%;
					background: var(--white-300);
					border-radius: 5px;
				}

				.translucent-rect {
					width: 70%;
					background: var(--white-300);
					height: 100%;
					margin-left: 17%;
					border-radius: 20px;
					opacity: 0.2;
				}

				.white-circle {
					width: 15px;
					height: 15px;
					border-radius: 20px;
					background: var(--white-300);
					margin-left: 10px;
				}
			}

			.links {
				display: flex;
				justify-content: space-between;
				align-items: center;
				align-content: center;
				padding-left: 30px;
				transform: translateY(-20px);
				width: calc(100% - 200px);

				.tabs {
					display: flex;
					width: 100%;

					.tab {
						height: 15px;
						border-radius: 4px;
						background: var(--kw1c-blue-900);
						margin-right: 20px;
						width: 13.5%;
					}
				}

				.login {
					width: 20%;
					height: 12px;
					border-radius: 20px;
					background: var(--white-300);
					border: 10px solid var(--kw1c-red-900);
				}
			}
		}

		.content {
			min-height: 50vh;
			position: relative;

			.division {
				position: absolute;
				z-index: -1;
				height: 35%;
				background: var(--kw1c-blue-300);
				width: 100%;
			}
		}
	}
</style>

<div class="container">
	<div class="nav">
		<img src="/imgs/kw1c-white.png" alt="" class="logo" />
		<div class="links">
			<div class="tabs">
				<div class="tab"></div>
				<div class="tab"></div>
				<div class="tab"></div>
				<div class="tab"></div>
				<div class="tab"></div>
			</div>
			<div class="login"></div>
		</div>
		<div class="bottom-bar">
			<div class="white-rect"></div>
			<div class="translucent-rect"></div>
			<div class="white-circle"></div>
		</div>
	</div>
	<div class="content">
		<div class="division"></div>
		<slot />
	</div>
</div>
