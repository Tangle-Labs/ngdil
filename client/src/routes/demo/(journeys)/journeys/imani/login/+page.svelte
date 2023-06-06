<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.card-container {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			text-align: center;

			.header {
				padding-bottom: 10px;
			}

			.login-card {
				background: var(--future-tech-green);
				width: 200px;
				padding: 20px;

				img {
					width: 200px;

					&:hover {
						cursor: pointer;
					}
				}

				.heading {
					padding: 10px;
				}
			}
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, FutureTech, Phone } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { currNode, nodeCount } from "$lib/stores/flows.store";
	import { onMount } from "svelte";

	let animatePhone = false;

	const handleClick = () => {
		animatePhone = true;
		setTimeout(() => {
			goto("/demo/journeys/imani/applications");
		}, 12_000);
	};

	onMount(() => {
		currNode.set(0);
		nodeCount.set(5);
	});
</script>

<Phone variant="futureTech" bind:animatePhone="{animatePhone}" />

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>It’s a new day, so <Highlight>let’s get started by logging in</Highlight> to the Future Tech Co.
			staff dashboard using your SSI.</Typography
		>
	</div>
	<div class="sub-text">
		<Typography
			>Scan the QR code in your mobile wallet to connect to the Future Tech Co. dashboard.</Typography
		>
	</div>
	<div class="dash">
		<FutureTech withSidebar="{false}">
			<div class="card-container">
				<div class="header">
					<Typography variant="kw1c-header" fontVariant="kw1c">STAFF CONNECT</Typography>
				</div>
				<div class="login-card">
					<img src="/imgs/qr.png" alt="" on:click="{handleClick}" />
					<div class="heading">
						<Typography variant="list" color="--future-tech-green-300">Scan QR to Login</Typography>
					</div>

					<div class="p">
						<Typography color="--white-300"
							>Scan the QR to login to connect to Future Tech Co.</Typography
						>
					</div>
				</div>
			</div>
		</FutureTech>
	</div>
</div>
