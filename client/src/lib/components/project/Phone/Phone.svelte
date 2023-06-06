<style lang="scss">
	.phone {
		width: 320px;
		position: relative;
		height: 600px;
		position: absolute;
		top: 350px;
		left: 50%;
		transform: translate(-50%, 0);
		z-index: 10000;

		& > .phone__img {
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 10;
		}

		& > .bg {
			height: 485px;
			position: absolute;
			bottom: 25px;
			left: 15px;
			width: 292px;
			background: #ffffff;
		}

		& > .popup {
			position: absolute;
			width: 292px;
			left: 15px;
			bottom: 25px;
			height: 400px;
			background: #fff;
			box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
			z-index: 5;
			border-radius: 10px 10px 0px 0px;
			display: flex;
			justify-content: center;
			align-items: flex-start;
			align-content: flex-start;
			padding: 10px 20px;
			box-sizing: border-box;
			flex-wrap: wrap;

			& > .handle {
				width: 40px;
				background: var(--white-900);
				height: 5px;
			}

			& > .content {
				width: 100%;
				text-align: center;

				& > .content__logo {
					height: 80px;
					padding-top: 20px;
				}

				& > .content__title {
					padding: 15px 0;
				}
			}
		}
	}
</style>

<script lang="ts">
	import Typography from "../../../components/ui/Typography/Typography.svelte";
	import { fly } from "svelte/transition";

	const variants = {
		openJobs: {
			title: "You have successfully logged in to the Open Jobs Network.",
			logo: "/imgs/openjobs.png"
		},
		kw1cStaff: {
			title: "You have successfully logged in to the KW1C Staff Portal.",
			logo: "/imgs/kw1c-white.png"
		},
		kw1c: {
			title: "You have successfully logged in to the KW1C Learner Portal.",
			logo: "/imgs/kw1c-white.png"
		},
		bbc: {
			title: "You have successfully logged in to the Big Business Corp website.",
			logo: "/imgs/bbc.png"
		},
		futureTech: {
			title: "You have successfully logged in to the Future Tech Co. website.",
			logo: "/imgs/future-tech.png"
		}
	};

	export let variant: "openJobs" | "kw1c" | "kw1cStaff" | "bbc" | "futureTech";
	const provider = variants[variant];

	let animateDrawer = false;
	let animateFlash = false;

	export let animatePhone = false;

	function startAnimating() {
		setTimeout(() => {
			animateFlash = true;
		}, 3000);

		setTimeout(() => {
			animateFlash = false;
		}, 3200);

		setTimeout(() => {
			animateDrawer = true;
		}, 4000);

		setTimeout(() => {
			animatePhone = false;
		}, 10_000);
	}

	function watchAnimatePhoneTick(a: boolean) {
		if (!a) return;
		startAnimating();
	}

	$: watchAnimatePhoneTick(animatePhone);
</script>

{#if animatePhone}
	<div
		class="phone"
		in:fly="{{ y: 300, duration: 1100, x: 100 }}"
		out:fly="{{ y: 300, duration: 1100, x: 100 }}"
	>
		<img class="phone__img" src="/imgs/phone.png" />
		{#if animateFlash}
			<div class="bg"></div>
		{/if}

		{#if animateDrawer}
			<div class="popup" in:fly="{{ duration: 1000, y: 100 }}">
				<div class="handle"></div>
				<div class="content">
					<img src="{provider.logo}" alt="" class="content__logo" />
					{#if variant === "futureTech"}
						<div class="content__corp">
							<Typography variant="kw1c-impact" color="--future-tech-green"
								>FUTURE TECH CO.</Typography
							>
						</div>
					{/if}
					<div class="content__title">
						<Typography variant="list">{provider.title}</Typography>
					</div>

					<div class="content__p">
						<Typography>You may continue in your browser app.</Typography>
					</div>
				</div>
			</div>
		{/if}
	</div>
{/if}
