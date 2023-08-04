<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.card {
			width: 50%;
			width: 240px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			.text {
				width: 100%;
				text-align: center;
				padding-bottom: 15px;
			}

			.card-content {
				// padding: 10px;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				text-align: center;
			}
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Phone, Typography, BigBusinessCorp, Card } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { PUBLIC_CLIENT_URI } from "$env/static/public";
	import { apiClient } from "$lib/utils/axios.utils";
	import { WebsocketClient } from "$lib/utils/ws.util";
	import Qr from "$lib/components/project/Qr/Qr.svelte";

	let animatePhone = false;

	let qr: string;

	const loadQr = async function () {
		const { data } = await apiClient.post("/siop", {
			overrideLogo: `${PUBLIC_CLIENT_URI}/imgs/bbc.png`,
			overrideClientName: "Big Business Corp"
		});
		qr = data.uri;
	};

	WebsocketClient.ws.onmessage = (event) => {
		const data = JSON.parse(event.data);
		if (data.login) {
			goto("/demo/journeys/dominique/view-jobs");
		} else {
			console.log(data.login);
			console.log("WTF");
		}
	};

	loadQr();
</script>

<Phone variant="bbc" bind:animatePhone="{animatePhone}" />
<div class="container">
	<div class="heading">
		<Typography variant="heading">
			You made it to the <Highlight>Big Business Corp website. Let’s login</Highlight> to view their
			jobs board.
		</Typography>
	</div>
	<div class="sub-text">
		<Typography
			>In your mobile wallet, scan the QR code & accept the connection request to login privately to
			the Big Business Corp website.</Typography>
	</div>
	<div class="dash">
		<BigBusinessCorp>
			<div class="card">
				<div class="text">
					<Typography variant="card-header" color="--bbc-blue">Passwordless Login</Typography>
				</div>
				<Card borderRadius="{16}">
					<div class="card-content">
						{#if qr}
							<Qr data="{qr}" size="{200}" />
						{/if}

						<div class="heading">
							<Typography variant="card-header" color="--bbc-blue">Scan QR to Login</Typography>
						</div>
						<div class="desc">
							<Typography variant="sub-text"
								>Scan the QR to login to the Big Business Corp website.</Typography>
						</div>
					</div>
				</Card>
			</div>
		</BigBusinessCorp>
	</div>
</div>
