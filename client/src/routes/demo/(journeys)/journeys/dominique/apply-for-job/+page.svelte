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
	import "@tanglelabs/open-id-qr";
	import { goto } from "$app/navigation";
	import { Phone, Typography, BigBusinessCorp, Card } from "$lib/components";
	import { PUBLIC_CLIENT_URI } from "$env/static/public";
	import { apiClient } from "$lib/utils/axios.utils";
	import { eventUri } from "$lib/stores/flows.store";

	let qr: string;
	import { _ } from "svelte-i18n";
	import { highlight } from "$lib/utils/highlight";
	import { onMount } from "svelte";

	function watchQr(qr: string) {
		if (!qr) return;
		document.addEventListener("open-id-qr-success", (e) => {
			if (e.detail.type === "id") goto("/demo/journeys/dominique/view-jobs");
		});
	}

	$: watchQr(qr);

	const loadQr = async function () {
		const { data } = await apiClient.post("/siop", {
			clientMetadata: {
				logoUri: `${PUBLIC_CLIENT_URI}/imgs/bbc.png`,
				clientName: "Big Business Corp"
			}
		});
		qr = data.uri;
	};
	let animatePhone = false;

	onMount(() => {
		loadQr();
	});
</script>

<Phone variant="bbc" bind:animatePhone="{animatePhone}" />
<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{@html highlight($_("journeys.dominique.view_jobs"))}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>
			{$_("journeys.dominique.scan_and_conn_to_bbc")}
		</Typography>
	</div>
	<div class="dash">
		<BigBusinessCorp>
			<div class="card">
				<div class="text">
					<Typography variant="card-header" color="--bbc-blue">
						{$_("journeys.dominique.passwordless_login")}
					</Typography>
				</div>
				<Card borderRadius="{16}">
					<div class="card-content">
						{#if qr}
							{#key qr}
								<open-id-qr request-uri="{qr}" event-stream-uri="{$eventUri}" size="{200}"
								></open-id-qr>
							{/key}
						{/if}
						<div class="heading">
							<Typography variant="card-header" color="--bbc-blue">
								{$_("journeys.dominique.scan_qr_to_login")}
							</Typography>
						</div>
						<div class="desc">
							<Typography variant="sub-text">
								{$_("journeys.dominique.scan_qr_login_desc")}
							</Typography>
						</div>
					</div>
				</Card>
			</div>
		</BigBusinessCorp>
	</div>
</div>
