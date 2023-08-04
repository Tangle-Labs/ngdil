<style lang="scss">
	.container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		text-align: center;

		& > * {
			padding: 20px 0;
		}

		.desc {
			padding-bottom: 5px;
			width: 100%;
		}
		.sub-title {
			padding-top: 0;
		}

		.cards {
			width: 100%;

			& > .card {
				width: 100%;
				padding: 10px 0;

				.card-content {
					display: flex;
					justify-content: space-between;
					align-items: center;
					text-align: left;

					.text {
						width: calc(100% - 300px);
					}

					& > * {
						margin-right: 20px;

						&:last-of-type {
							margin-right: 0;
						}
					}
				}
			}
		}

		& > .heading,
		& > .desc {
			width: 40vw;
		}
	}

	.modal-content {
		display: flex;
		transition: all 0.5s;
		padding-bottom: 30px;

		& > * {
			& > * {
				padding: 20px;
			}
			& > .p {
				padding: 10px 20px;
			}
		}

		.left {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			max-width: 400px;
		}

		.right {
			display: flex;
			justify-content: center;
			width: 400px;
			flex-wrap: wrap;
			align-items: flex-start;
			align-content: flex-start;
			text-align: center;
			padding: 10px 20px;

			.qr {
				height: 145px;
				width: 145px;
			}

			.sub-text {
				padding: 0px 20px;
				width: 100%;
				padding-bottom: 30px;
			}
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, Loading, Card, Avatar, Button, Modal } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { completedJourneys, currentJourney } from "$lib/stores/flows.store";
	import { apiClient } from "$lib/utils/axios.utils";
	import Qr from "$lib/components/project/Qr/Qr.svelte";
	import { onMount } from "svelte";
	import { WebsocketClient } from "$lib/utils/ws.util";
	import { PUBLIC_CLIENT_URI } from "$env/static/public";

	let qr: string;

	const loadQr = async function () {
		const { data } = await apiClient.post("/siop");
		qr = data.uri;
	};

	onMount(async () => {
		await loadQr();

		// ws.onopen = () => {
		// 	// ws.send(JSON.stringify({ action: "join" }));
		// };

		WebsocketClient.ws.onmessage = (event) => {
			const data = JSON.parse(event.data);
			if (data.login) {
				goto("/demo/choose-journey");
			} else {
				console.log(data.login);
				console.log("WTF");
			}
		};
	});
</script>

<div class="modal"></div>
<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>You’re all set! <Highlight>Let’s choose the user journey</Highlight> you would like to explore
			{$completedJourneys.length > 0 ? "next" : "first"}.</Typography>
	</div>
	<div class="desc">
		<Typography variant="button"
			>Click the get started button to select the journey you would like to experience.
		</Typography>
	</div>
	<div class="sub-title">
		<Typography variant="sub-text">
			(It is recommended to experience the student journey first.)
		</Typography>
	</div>
	<div class="cards">
		{#if qr}
			<Qr size="{250}" data="{qr}" />
		{/if}
	</div>
</div>
