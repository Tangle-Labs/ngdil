<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.card-container {
			width: 100%;
			display: flex;
			flex-direction: column;
			text-align: center;
			align-items: center;
			align-self: center;

			.header {
				padding-bottom: 10px;
			}

			.login-card {
				background: var(--future-tech-green);
				width: 240px;
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
	import { currNode, eventUri, nodeCount } from "$lib/stores/flows.store";
	import { apiClient } from "$lib/utils/axios.utils";
	import { createWebsocket } from "$lib/utils/ws.util";
	import { onMount } from "svelte";
	import Qr from "$lib/components/project/Qr/Qr.svelte";
	import { PUBLIC_CLIENT_URI } from "$env/static/public";
	import "@tanglelabs/open-id-qr";

	let animatePhone = false;
	let qr: string;

	import { _ } from "svelte-i18n";
	import { highlight } from "$lib/utils/highlight";

	const loadQr = async function () {
		const { data } = await apiClient.post("/api/oid4vp", {
			presentationStage: "imaniLogin",
			clientMetadata: {
				logoUri: `${PUBLIC_CLIENT_URI}/imgs/future-tech.png`,
				clientName: "Future Tech Co."
			}
		});
		qr = data.uri;
	};

	function watchQr(qr: string) {
		if (!qr) return;
		document.addEventListener("open-id-qr-success", (e) => {
			if (e.detail.type === "vp") goto("/demo/journeys/imani/applications");
		});
	}

	$: watchQr(qr);

	onMount(() => {
		currNode.set(0);
		nodeCount.set(5);
		loadQr();
	});
</script>

<Phone variant="futureTech" bind:animatePhone="{animatePhone}" />

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{@html highlight($_("journeys.imani.lets_login_to_future_tech_co_staff_dashboard_by_ssi"))}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>
			{$_("journeys.imani.scan_qr_to_conn_to_future_tech_co_dashboard")}
		</Typography>
	</div>
	<div class="dash">
		<FutureTech withSidebar="{false}">
			<div class="card-container">
				<div class="header">
					<Typography variant="card-header" fontVariant="kw1c" color="--future-tech-green"
						>{$_("journeys.imani.staff_connect").toUpperCase()}</Typography
					>
				</div>
				<div class="login-card">
					{#if qr}
						{#key qr}
							<open-id-qr request-uri="{qr}" event-stream-uri="{$eventUri}" size="{240}"
							></open-id-qr>
						{/key}
					{/if}
					<div class="heading">
						<Typography variant="list" color="--future-tech-green-300"
							>{$_("journeys.imani.scan_qr_to_login")}</Typography
						>
					</div>

					<div class="p">
						<Typography color="--white-300"
							>{$_("journeys.imani.scan_qr_to_login_to_future_tech_co")}</Typography
						>
					</div>
				</div>
			</div>
		</FutureTech>
	</div>
</div>
