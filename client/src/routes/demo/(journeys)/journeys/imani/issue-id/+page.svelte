<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.header {
			width: 100%;
			display: flex;
			justify-content: space-between;
		}

		.table {
			width: 100%;

			th {
				text-align: left;

				&:last-of-type {
					text-align: center;
				}
			}

			td {
				height: 50px;

				&:last-of-type {
					text-align: center;
				}

				.loading {
					display: flex;
					align-items: center;
					align-content: center;
					justify-content: center;

					.text {
						padding-left: 5px;
					}
				}
			}
		}

		.button-container {
			padding: 10px 0;
			width: 100%;
			display: flex;
			justify-content: flex-end;
		}
	}

	.modal-content {
		width: 400px;
		background: white;
		display: flex;
		flex-wrap: wrap;
		padding: 30px;
		box-sizing: border-box;
		justify-content: center;
		text-align: center;

		& > * {
			padding: 10px 0;
			width: 100%;
		}

		img {
			height: 120px;
			width: unset;
		}

		.p {
			padding: 20px 0;
		}

		.subtext {
			width: 100%;
		}

		.checked {
			height: 60px;
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, FutureTech, Button, Loading, Modal } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { currNode, imaniChosenApplicant } from "$lib/stores/flows.store";
	import { onMount } from "svelte";
	import { Confetti } from "svelte-confetti";
	import { _ } from "svelte-i18n";

	let currStage: "init" | "loading" | "issued" = "init";
	let showModal = false;

	function handleIssueCred() {
		showModal = false;
		currStage = "loading";
		setTimeout(() => {
			currNode.set(5);
			currStage = "issued";
		}, 8000);
	}

	onMount(() => {
		currNode.set(4);
	});
</script>

<div class="container">
	<Modal bind:isOpen="{showModal}" borderRadius="{16}">
		<div class="modal-content">
			<img src="/imgs/future-tech.png" alt="" class="logo" />
			<div class="heading">
				<Typography variant="card-header" fontVariant="kw1c" color="--future-tech-green">
					{$_("components.future_tech_co").toUpperCase()}
				</Typography>
			</div>
			<Typography variant="card-header" fontVariant="kw1c" color="--kw1c-red-900">
				{$_("journeys.imani.about_to_issue_applicant_with_emp_id_cred", {
					values: { ChosenApplicant: $imaniChosenApplicant }
				})}
			</Typography>
			<div class="p">
				<Typography color="--black-500">
					{$_("journeys.imani.click_issue_cred_to_continue")}
				</Typography>
			</div>
			<Button
				variant="future-tech"
				label="{$_('journeys.imani.issue_cred')}"
				onClick="{handleIssueCred}" />
			<div class="subtext">
				<Typography variant="sub-text">{$_("components.cancel")}</Typography>
			</div>
		</div>
	</Modal>
	<div class="heading">
		<Typography variant="heading"
			>{#if currStage === "issued"}
				Great work. {$imaniChosenApplicant?.split(" ")[0]} has <Highlight
					>received their employee ID card.</Highlight> Let’s continue to see what’s next.
				<!-- {$_("journeys.imani.applicant_received_emp_id_card", {
						values: { ChosenApplicant: $imaniChosenApplicant?.split(" ")[0] }
					})} -->
			{:else}
				<Highlight>{$imaniChosenApplicant?.split(" ")[0]} has accepted your job offer</Highlight> and
				joined the system. Let’s issue their employee ID credential.
				<!-- {$_("journeys.imani.applicant_accepted_job_and_joined_system", {
					values: { ChosenApplicant: $imaniChosenApplicant?.split(" ")[0] }
				})} -->
			{/if}</Typography>
	</div>
	<div class="sub-text">
		<Typography
			>{#if currStage === "issued"}
				{$_("journeys.imani.click_continue_to_see_what_you_achieved")}
			{:else}
				{$_("journeys.imani.click_issue_id_to_issue_applicant_emp_id_cred", {
					values: { ChosenApplicant: $imaniChosenApplicant?.split(" ")[0] }
				})}
			{/if}</Typography>
	</div>
	<div
		style="position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;">
		<Confetti
			x="{[-5, 5]}"
			y="{[0, 0.1]}"
			delay="{[500, 5000]}"
			duration="{2000}"
			amount="{500}"
			fallDistance="100vh" />
	</div>
	<div class="dash">
		<FutureTech header="{$_('journeys.imani.company_employees').toUpperCase()}">
			<table class="table">
				<tr>
					<th>
						<Typography variant="sub-text">{$_("journeys.imani.emp_name")}</Typography>
					</th>
					<th>
						<Typography variant="sub-text">{$_("journeys.imani.designation")}</Typography>
					</th>
					<th>
						<Typography variant="sub-text">{$_("journeys.imani.action")}</Typography>
					</th>
				</tr>
				<tr>
					<td>
						<Typography variant="list">{$imaniChosenApplicant}</Typography>
					</td>
					<td>
						<Typography variant="sub-text">{$_("journeys.imani.3d_print_designer")}</Typography>
					</td>
					<td>
						{#if currStage === "init"}
							<Button
								variant="future-tech"
								label="{$_('journeys.imani.issue_id')}"
								onClick="{() => {
									showModal = true;
								}}" />
						{:else if currStage === "loading"}
							<div class="loading">
								<Loading size="1.125rem" />
								<div class="text">
									<Typography variant="status" color="--secondary-900"
										>{$_("components.pending")}</Typography>
								</div>
							</div>
						{:else}
							<Typography variant="status">{$_("components.active")}</Typography>{/if}
					</td>
				</tr>

				<tr>
					<td>
						<Typography variant="list">{$_("applicants.Marcus_Lithero")}</Typography>
					</td>
					<td>
						<Typography variant="sub-text">{$_("journeys.imani.3d_print_designer")}</Typography>
					</td>
					<td>
						<Typography variant="status">{$_("components.active")}</Typography>
					</td>
				</tr>

				<tr>
					<td>
						<Typography variant="list">{$_("applicants.Ada_Liefsso")}</Typography>
					</td>
					<td>
						<Typography variant="sub-text">{$_("journeys.imani.3d_print_designer")}</Typography>
					</td>
					<td>
						<Typography variant="status">{$_("components.active")}</Typography>
					</td>
				</tr>

				<tr>
					<td>
						<Typography variant="list">{$_("applicants.Carter_Jorvig")}</Typography>
					</td>
					<td>
						<Typography variant="sub-text">{$_("journeys.imani.3d_print_designer")}</Typography>
					</td>
					<td>
						<Typography variant="status" color="--kw1c-red-900"
							>{$_("components.expired")}</Typography>
					</td>
				</tr>

				<tr>
					<td>
						<Typography variant="list">{$_("applicants.Malik_Chaudry")}</Typography>
					</td>
					<td>
						<Typography variant="sub-text">{$_("journeys.imani.3d_print_designer")}</Typography>
					</td>
					<td>
						<Typography variant="status">{$_("components.active")}</Typography>
					</td>
				</tr>
			</table>

			{#if currStage === "issued"}
				<div class="button-container">
					<Button
						variant="future-tech"
						label="{$_('components.continue')}"
						onClick="{() => {
							goto('/demo/journeys/imani/hired-applicant');
						}}" />
				</div>
			{/if}
		</FutureTech>
	</div>
</div>
