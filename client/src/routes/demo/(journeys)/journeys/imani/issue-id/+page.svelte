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
				<Typography variant="card-header" fontVariant="kw1c" color="--future-tech-green"
					>FUTURE TECH CO.</Typography>
			</div>
			<Typography variant="card-header" fontVariant="kw1c" color="--kw1c-red-900"
				>You are about to issue {$imaniChosenApplicant} with an Employee ID Credential</Typography>
			<div class="p">
				<Typography color="--black-500">
					To continue and issue the credential please click the issue credential button.
				</Typography>
			</div>
			<Button variant="future-tech" label="Issue Credential" onClick="{handleIssueCred}" />
			<div class="subtext">
				<Typography variant="sub-text">Cancel</Typography>
			</div>
		</div>
	</Modal>
	<div class="heading">
		<Typography variant="heading"
			>{#if currStage === "issued"}
				Great work. {$imaniChosenApplicant?.split(" ")[0]} has <Highlight
					>received their employee ID card.</Highlight> Let’s continue to see what’s next.
			{:else}
				<Highlight>{$imaniChosenApplicant?.split(" ")[0]} has accepted your job offer</Highlight> and
				joined the system. Let’s issue their employee ID credential.
			{/if}</Typography>
	</div>
	<div class="sub-text">
		<Typography
			>{#if currStage === "issued"}
				Click the continue button to proceed and see what you have achieved so far.
			{:else}
				Click the issue ID button to issue {$imaniChosenApplicant?.split(" ")[0]} with an employee ID
				credential from the company.
			{/if}</Typography>
	</div>
	<div
		style="position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;">
		<Confetti
			x="{[-5, 5]}"
			y="{[0, 0.1]}"
			delay="{[500, 5000]}"
			duration="2000"
			amount="500"
			fallDistance="100vh" />
	</div>
	<div class="dash">
		<FutureTech header="COMPANY EMPLOYEES">
			<table class="table">
				<tr>
					<th>
						<Typography variant="sub-text">Employee Name</Typography>
					</th>
					<th>
						<Typography variant="sub-text">Designation</Typography>
					</th>
					<th>
						<Typography variant="sub-text">Action</Typography>
					</th>
				</tr>
				<tr>
					<td>
						<Typography variant="list">{$imaniChosenApplicant}</Typography>
					</td>
					<td>
						<Typography variant="sub-text">3d Print Designer</Typography>
					</td>
					<td>
						{#if currStage === "init"}
							<Button
								variant="future-tech"
								label="Issue ID"
								onClick="{() => {
									showModal = true;
								}}" />
						{:else if currStage === "loading"}
							<div class="loading">
								<Loading size="1.125rem" />
								<div class="text">
									<Typography variant="status" color="--secondary-900">Pending</Typography>
								</div>
							</div>
						{:else}
							<Typography variant="status">Active</Typography>{/if}
					</td>
				</tr>

				<tr>
					<td>
						<Typography variant="list">Marcus Lithero</Typography>
					</td>
					<td>
						<Typography variant="sub-text">3d Print Designer</Typography>
					</td>
					<td>
						<Typography variant="status">Active</Typography>
					</td>
				</tr>

				<tr>
					<td>
						<Typography variant="list">Ada Liefsson</Typography>
					</td>
					<td>
						<Typography variant="sub-text">3d Print Designer</Typography>
					</td>
					<td>
						<Typography variant="status">Active</Typography>
					</td>
				</tr>

				<tr>
					<td>
						<Typography variant="list">Carter Jorvig</Typography>
					</td>
					<td>
						<Typography variant="sub-text">3d Print Designer</Typography>
					</td>
					<td>
						<Typography variant="status" color="--kw1c-red-900">Expired</Typography>
					</td>
				</tr>

				<tr>
					<td>
						<Typography variant="list">Malik Chaudry</Typography>
					</td>
					<td>
						<Typography variant="sub-text">3d Print Designer</Typography>
					</td>
					<td>
						<Typography variant="status">Active</Typography>
					</td>
				</tr>
			</table>

			{#if currStage === "issued"}
				<div class="button-container">
					<Button
						variant="future-tech"
						label="Continue"
						onClick="{() => {
							goto('/demo/journeys/imani/hired-applicant');
						}}" />
				</div>
			{/if}
		</FutureTech>
	</div>
</div>
