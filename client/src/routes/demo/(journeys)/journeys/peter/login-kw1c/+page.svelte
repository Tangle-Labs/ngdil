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
	import { currNode, eventUri, nodeCount } from "$lib/stores/flows.store";
	import { onMount } from "svelte";
	import Qr from "$lib/components/project/Qr/Qr.svelte";
	import { apiClient } from "$lib/utils/axios.utils";
	import { createWebsocket } from "$lib/utils/ws.util";
	import { PUBLIC_CLIENT_URI } from "$env/static/public";
	import "@tanglelabs/open-id-qr";

	let animatePhone = false;
	let qr: string;
	import { _ } from "svelte-i18n";
	import { highlight } from "$lib/utils/highlight";

	const loadQr = async function () {
		const { data } = await apiClient.post("/api/oid4vp", {
			presentationStage: "peterLogin",
			clientMetadata: {
				logoUri: new URL("/imgs/kw1c-white.png", PUBLIC_CLIENT_URI).toString(),
				clientName: "Koning Willem I College"
			}
		});
		qr = data.uri;
	};
	function watchQr(qr: string) {
		if (!qr) return;
		document.addEventListener("open-id-qr-success", (e) => {
			if (e.detail.type === "vp") goto("/demo/journeys/peter/view-applications");
		});
	}

	$: watchQr(qr);
	onMount(() => {
		nodeCount.set(5);
		currNode.set(0);
		loadQr();
	});
</script>

<Phone variant="kw1cStaff" bind:animatePhone="{animatePhone}" />
<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{@html highlight($_("journeys.peter.use_passwordless_login_to_access_kw1c_staff_portal"))}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>
			{$_("journeys.peter.scan_qr_and_accept_request_to_access_kw1c_portal")}
		</Typography>
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
									>{$_("journeys.peter.login_to_kw1c").toUpperCase()}</Typography
								>
							</div>
						</div>
						{#if qr}
							{#key qr}
								<open-id-qr request-uri="{qr}" event-stream-uri="{$eventUri}" size="{220}"
								></open-id-qr>
							{/key}
						{/if}
						<div class="desc">
							<Typography variant="kw1c-sub-text"
								>{$_("journeys.peter.scan_qr_to_access_kw1c_staff_portal")}</Typography
							>
						</div>
					</div>
				</Card>
			</div>
		</Kw1c>
	</div>
</div>
