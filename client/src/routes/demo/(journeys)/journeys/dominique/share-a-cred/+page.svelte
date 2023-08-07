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
			width: 240px;

			.card-content {
				padding: 10px;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				text-align: left;

				img {
					padding: 20px 0;
					padding-top: 0;
					width: 200px;
				}
			}
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, OpenJobsNetwork, Phone, Card, Hightlight } from "$lib/components";
	import { currNode, nodeCount } from "$lib/stores/flows.store";
	import { apiClient } from "$lib/utils/axios.utils";
	import { createWebsocket } from "$lib/utils/ws.util";
	import { onMount } from "svelte";
	import Qr from "$lib/components/project/Qr/Qr.svelte";
	import { PUBLIC_CLIENT_URI } from "$env/static/public";

	let animatePhone = false;

	let qr: string;

	const loadQr = async function () {
		const { data } = await apiClient.post("/siop", {
			overrideLogo: `${PUBLIC_CLIENT_URI}/imgs/openjobs.png`,
			overrideClientName: "Open Jobs"
		});
		qr = data.uri;
	};

	const ws = createWebsocket();
	ws.onmessage = (event) => {
		const data = JSON.parse(event.data);
		if (data.login) {
			goto("/demo/journeys/dominique/open-jobs");
		}
	};

	onMount(() => {
		loadQr();
		currNode.set(0);
	});
</script>

<Phone bind:animatePhone="{animatePhone}" variant="openJobs" />
<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>It’s time to spread the word. <Hightlight>Let’s connect to the Open Jobs Network</Hightlight>
			to share your credential.</Typography>
	</div>
	<div class="sub-text">
		<Typography
			>In your mobile wallet, scan the QR code & accept the connection request to login privately to
			the Open Jobs Network.</Typography>
	</div>
	<div class="dash">
		<OpenJobsNetwork>
			<div class="card">
				<Card borderRadius="{16}">
					<div class="card-content">
						{#if qr}
							<Qr data="{qr}" size="{200}" />
						{/if}
						<div class="heading">
							<Typography variant="card-header" color="--bbc-blue"
								>Login to Open Jobs Network</Typography>
						</div>
						<div class="desc">
							<Typography variant="sub-text"
								>Scan the QR code to login to the Open Jobs Network website</Typography>
						</div>
					</div>
				</Card>
			</div>
		</OpenJobsNetwork>
	</div>
</div>
