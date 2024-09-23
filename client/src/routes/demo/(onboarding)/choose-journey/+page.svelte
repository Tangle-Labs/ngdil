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
			width: 100%;
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
	import { completedJourneys, currentJourney, sessionId, eventUri } from "$lib/stores/flows.store";
	import { currStep } from "$lib/stores/onboarding.store";
	import { apiClient } from "$lib/utils/axios.utils";
	import { onMount } from "svelte";
	import "@tanglelabs/open-id-qr";
	let qr: string;

	import { _ } from "svelte-i18n";
	import { highlight } from "$lib/utils/highlight";

	const journeys = {
		dominique: {
			heading: $_("onboarding.choose_journey.dominique.heading"),
			p1: $_("onboarding.choose_journey.dominique.p1"),
			p2: $_("onboarding.choose_journey.dominique.p2"),
			img: "/imgs/dominique.png"
		},
		peter: {
			heading: $_("onboarding.choose_journey.peter.heading"),
			p1: $_("onboarding.choose_journey.peter.p1"),
			p2: $_("onboarding.choose_journey.peter.p2"),
			img: "/imgs/peter.png"
		},
		imani: {
			heading: $_("onboarding.choose_journey.imani.heading"),
			p1: $_("onboarding.choose_journey.imani.p1"),
			p2: $_("onboarding.choose_journey.imani.p2"),
			img: "/imgs/imani.png"
		}
	};
	let isOpen = false;
	let selectedJourney: "dominique" | "peter" | "imani" | null = null;
	let qrVisible = false;
	let buttonVisible = false;
	let renderQr = false;

	onMount(() => {
		currStep.set(2);
	});

	function watchQr(qr: string) {
		console.log(qr);
		if (!qr) return;
		renderQr = true;
		document.addEventListener("open-id-qr-success", (e) => {
			if (e.detail.type === "vc") buttonVisible = true;
		});
	}

	apiClient.get("/");

	onMount(() => {
		currStep.set(2);
	});

	$: watchQr(qr);
	$: journey = selectedJourney && journeys[selectedJourney];
</script>

<div class="modal">
	<Modal withBorder="{true}" bind:isOpen="{isOpen}" borderRadius="{8}">
		{#if journey}
			<div class="modal-content">
				<div class="left">
					<div class="avatar">
						<Avatar variant="large" image="{journey.img}" />
					</div>
					<div class="heading">
						<Typography variant="card-header">{journey.heading}</Typography>
					</div>
					<div class="p">
						<Typography>{journey.p1}</Typography>
					</div>
					<div class="p"><Typography>{journey.p2}</Typography></div>
					{#if !qrVisible}
						<div class="button">
							<Button
								variant="white"
								label="{$_('components.continue')}"
								onClick="{() => {
									currStep.set(4);
									if (selectedJourney) currentJourney.set(selectedJourney);
									qrVisible = true;
								}}" />
						</div>
					{/if}
				</div>
				{#if qrVisible}
					<div class="right">
						{#if qr}
							<open-id-qr size="200" request-uri="{qr}" event-stream-uri="{$eventUri}"></open-id-qr>
						{/if}

						<div class="scan-header">
							<Typography variant="card-header"
								>{buttonVisible
									? $_("onboarding.choose_journey.cred_confirmed")
									: $_("onboarding.choose_journey.scan_qr_to_receive_cred")}</Typography>
						</div>
						<div class="sub-text">
							<Typography variant="sub-text">
								{buttonVisible
									? $_("onboarding.choose_journey.click_to_begin_journey", {
											values: { selected: selectedJourney }
									  })
									: $_("onboarding.choose_journey.scan_qr_receive_vc", {
											values: { selected: selectedJourney }
									  })}
							</Typography>
						</div>
						{#if buttonVisible}
							<Button
								label="{$_('onboarding.start_journey', { values: { selected: selectedJourney } })}"
								onClick="{() => {
									goto(`/demo/journeys/${selectedJourney}`);
								}}"
								variant="secondary" />
						{:else}
							<Loading size="30px" />
						{/if}
					</div>
				{/if}
			</div>
		{/if}
	</Modal>
</div>
<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{#if $completedJourneys.length === 0}
				{@html highlight($_("onboarding.choose_journey.all_set_choose_journey"))}
			{:else}
				{@html highlight($_("onboarding.choose_journey.welcome_back_choose_journey"))}
			{/if}
		</Typography>
	</div>
	<div class="desc">
		<Typography variant="button">
			{$_("onboarding.choose_journey.click_to_get_started")}
		</Typography>
	</div>
	<div class="sub-title">
		<Typography variant="sub-text">
			({$_("onboarding.choose_journey.exp_stud_journey_first")})
		</Typography>
	</div>
	<div class="cards">
		<div class="card">
			<Card withBorder="{true}" borderRadius="{8}">
				<div class="card-content">
					<Avatar image="/imgs/dominique.png" />
					<div class="text">
						<div class="heading">
							<Typography variant="card-header"
								>{$_("onboarding.choose_journey.dominique_veritas")}</Typography>
						</div>
						<div class="desc">
							<Typography>
								{$_("onboarding.choose_journey.dominique_desc")}
							</Typography>
						</div>
					</div>
					<Button
						variant="{$completedJourneys.includes('dominique') ? 'completed' : 'secondary'}"
						onClick="{async () => {
							selectedJourney = 'dominique';
							currStep.set(3);
							const { data } = await apiClient.post('/api/starting-offer', {
								credentials: [
									'National ID',
									'School Course Certificate',
									'Volunteer Badge',
									'Higher Education Information Literacy Level 1',
									'Business Innovation & Interdisciplinair Samenwerken'
								]
							});
							qr = data.uri;
							isOpen = true;
						}}"
						label="{$completedJourneys.includes('dominique')
							? $_('components.complete')
							: $_('components.get_started')}" />
				</div>
			</Card>
		</div>
		<div class="card">
			<Card withBorder="{true}" borderRadius="{8}">
				<div class="card-content">
					<Avatar image="/imgs/peter.png" />
					<div class="text">
						<div class="heading">
							<Typography variant="card-header"
								>{$_("onboarding.choose_journey.peter_van_de_meijdan")}</Typography>
						</div>
						<div class="desc">
							<Typography>
								{$_("onboarding.choose_journey.peter_desc")}
							</Typography>
						</div>
					</div>
					<Button
						variant="{$completedJourneys.includes('peter') ? 'completed' : 'secondary'}"
						onClick="{async () => {
							selectedJourney = 'peter';
							currStep.set(3);
							const { data } = await apiClient.post('/api/starting-offer', {
								credentials: ['National ID', 'Staff ID']
							});
							qr = data.uri;
							isOpen = true;
						}}"
						label="{$completedJourneys.includes('peter')
							? $_('components.complete')
							: $_('components.get_started')}" />
				</div>
			</Card>
		</div>
		<div class="card">
			<Card withBorder="{true}" borderRadius="{8}">
				<div class="card-content">
					<Avatar image="/imgs/imani.png" />
					<div class="text">
						<div class="heading">
							<Typography variant="card-header"
								>{$_("onboarding.choose_journey.imani_jameson")}</Typography>
						</div>
						<div class="desc">
							<Typography>
								{$_("onboarding.choose_journey.imani_desc")}
							</Typography>
						</div>
					</div>
					<Button
						variant="{$completedJourneys.includes('imani') ? 'completed' : 'secondary'}"
						onClick="{async () => {
							selectedJourney = 'imani';
							currStep.set(3);
							const { data } = await apiClient.post('/api/starting-offer', {
								credentials: ['National ID', 'Employee ID']
							});

							qr = data.uri;
							isOpen = true;
						}}"
						label="{$completedJourneys.includes('imani')
							? $_('components.complete')
							: $_('components.get_started')}" />
				</div>
			</Card>
		</div>
	</div>
</div>
