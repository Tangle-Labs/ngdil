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
				justify-content: flex-start;
				box-sizing: border-box;

				flex-wrap: wrap;
				text-align: left;

				.heading {
					.crowns {
						height: 15px;
						width: unset;
						padding: 0;
					}
				}
				.qr {
					padding: 10px 0;
				}
			}
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, Kw1c, Card, Hightlight, Phone } from "$lib/components";
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
		const { data } = await apiClient.post("/siop", {
			clientMetadata: {
				logoUri: `${PUBLIC_CLIENT_URI}/imgs/kw1c-white.png`,
				clientName: "Koning Willem I College"
			}
		});
		qr = data.uri;
	};

	function watchQr(qr: string) {
		if (!qr) return;
		document.addEventListener("open-id-qr-success", (e) => {
			if (e.detail.type === "id") {
				goto("/demo/journeys/dominique/choose-course");
			}
		});
	}

	loadQr();
	$: watchQr(qr);
	currNode.set(0);
	nodeCount.set(5);

	onMount(() => {});
</script>

<div class="container">
	<Phone variant="kw1c" bind:animatePhone="{animatePhone}" />
	<div class="heading">
		<Typography variant="heading">
			{@html highlight($_("journeys.dominique.enroll_to_course_of_choice"))}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>{$_("journeys.dominique.scan_and_conn_to_kw1c")}</Typography>
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
									>{$_("journeys.dominique.login_to_kw1c").toUpperCase()}</Typography>
							</div>
						</div>
						{#if qr}
							<div class="qr">
								{#key qr}
									<open-id-qr size="{180}" request-uri="{qr}" event-stream-uri="{$eventUri}"
									></open-id-qr>
								{/key}
							</div>
						{/if}
						<div class="desc">
							<Typography variant="kw1c-sub-text"
								>{$_("journeys.dominique.scan_to_access_kw1c")}</Typography>
						</div>
					</div>
				</Card>
			</div>
		</Kw1c>
	</div>
</div>
