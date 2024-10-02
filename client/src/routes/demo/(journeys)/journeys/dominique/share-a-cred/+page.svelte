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
	import { Typography, OpenJobsNetwork, Phone, Card } from "$lib/components";
	import { currNode, eventUri } from "$lib/stores/flows.store";
	import { apiClient } from "$lib/utils/axios.utils";
	import { onMount } from "svelte";
	import { PUBLIC_CLIENT_URI } from "$env/static/public";
	import "@tanglelabs/open-id-qr";

	function watchQr(qr: string) {
		if (!qr) return;
		document.addEventListener("open-id-qr-success", (e) => {
			if (e.detail.type === "id") goto("/demo/journeys/dominique/open-jobs");
		});
	}

	$: watchQr(qr);

	let animatePhone = false;

	let qr: string;
	import { _ } from "svelte-i18n";
	import { highlight } from "$lib/utils/highlight";

	const loadQr = async function () {
		const { data } = await apiClient.post("/siop", {
			clientMetadata: {
				logoUri: `${PUBLIC_CLIENT_URI}/imgs/openjobs.png`,
				clientName: "Open Jobs Network"
			}
		});
		qr = data.uri;
	};

	onMount(() => {
		loadQr();
		currNode.set(0);
	});
</script>

<Phone bind:animatePhone="{animatePhone}" variant="openJobs" />
<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{@html highlight($_("journeys.dominique.lets_conn_to_open_jobs_network"))}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>
			{$_("journeys.dominique.scan_qr_and_conn_pvtly_to_open_jobs")}
		</Typography>
	</div>
	<div class="dash">
		<OpenJobsNetwork>
			<div class="card">
				<Card borderRadius="{16}">
					<div class="card-content">
						{#if qr}
							{#key qr}
								<open-id-qr request-uri="{qr}" event-stream-uri="{$eventUri}" size="{200}"
								></open-id-qr>
							{/key}
						{/if}
						<div class="heading">
							<Typography variant="card-header" color="--bbc-blue"
								>{$_("journeys.dominique.login_to_open_jobs_network")}</Typography
							>
						</div>
						<div class="desc">
							<Typography variant="sub-text"
								>{$_("journeys.dominique.scan_qr_to_login_to_open_jobs_network")}</Typography
							>
						</div>
					</div>
				</Card>
			</div>
		</OpenJobsNetwork>
	</div>
</div>
