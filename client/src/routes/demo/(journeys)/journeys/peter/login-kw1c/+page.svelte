<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.card {
			width: 50%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			width: 270px;
			.card-content {
				padding: 10px;
				display: flex;
				justify-content: flex-start;

				flex-wrap: wrap;
				text-align: left;

				.heading {
					.crowns {
						height: 15px;
						width: unset;
						padding: 0;
					}
				}

				img {
					padding: 20px 0;
					width: 200px;
				}
			}
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, Kw1c, Card, Phone } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { currNode, nodeCount } from "$lib/stores/flows.store";
	import { onMount } from "svelte";
	import Qr from "$lib/components/project/Qr/Qr.svelte";
	import { apiClient } from "$lib/utils/axios.utils";
	import { createWebsocket } from "$lib/utils/ws.util";
	import { PUBLIC_CLIENT_URI } from "$env/static/public";

	let animatePhone = false;
	let qr: string;

	const loadQr = async function () {
		const { data } = await apiClient.post("/api/oid4vp", {
			presentationStage: "peterLogin",
			clientMetadata: {
				logoUri: new URL("/imgs/kw1c-white.png", PUBLIC_CLIENT_URI).toString(),
				clientName: "KW1C"
			}
		});
		qr = data.uri;
	};

	const ws = createWebsocket();
	ws.onmessage = (event) => {
		const data = JSON.parse(event.data);
		if (data.received) {
			goto("/demo/journeys/peter/view-applications");
		}
	};

	onMount(() => {
		nodeCount.set(5);
		currNode.set(0);

		loadQr();
	});
</script>

<Phone variant="kw1cStaff" bind:animatePhone="{animatePhone}" />
<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>Time to get to work. Let’s use <Highlight>passwordless login</Highlight> to access the KW1C staff
			portal.</Typography>
	</div>
	<div class="sub-text">
		<Typography
			>In your identity wallet, scan the QR code and accept the connection request to access the
			KW1C staff portal.</Typography>
	</div>
	<div class="dash">
		<Kw1c variant="blue">
			<div class="card">
				<Card borderRadius="{16}">
					<div class="card-content">
						<div class="heading">
							<img src="/imgs/kw1c-crowns.png" alt="" class="crowns" />
							<div class="heading-text">
								<Typography variant="card-header" fontVariant="kw1c" color="--kw1c-blue-900"
									>LOGIN TO KW1C</Typography>
							</div>
						</div>
						{#if qr}
							<Qr data="{qr}" size="{200}" />
						{/if}
						<div class="desc">
							<Typography variant="kw1c-sub-text"
								>Scan the QR to access the KW1C staff portal.</Typography>
						</div>
					</div>
				</Card>
			</div>
		</Kw1c>
	</div>
</div>
