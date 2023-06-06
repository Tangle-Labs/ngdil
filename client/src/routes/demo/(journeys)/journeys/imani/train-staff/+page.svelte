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
			}

			td {
				height: 50px;

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
	import { Typography, FutureTech, Button, Loading, Modal, Radio } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import {
		currNode,
		imaniBadgeName,
		imaniChosenApplicant,
		imaniChosenStaff
	} from "$lib/stores/flows.store";
	import { onMount } from "svelte";

	let staff = [
		{
			name: "Gilean O'Leary",
			role: "3D Print Designer",
			selected: false
		},
		{
			name: "Marcus Lithero",
			role: "Technical Engineer",
			selected: false
		},
		{
			name: "Ada Liefsson",
			role: "Senior 3D Print Operator",

			selected: false
		},
		{
			name: "Malik Chaudry",
			role: "3D Print Designer",
			selected: false
		}
	];

	let showModal = false;

	function handleTrainStaff() {
		imaniChosenStaff.set(staff.filter((s) => s.selected));
		goto("/demo/journeys/imani/results");
	}

	onMount(() => {
		currNode.set(6);
	});
</script>

<Modal bind:isOpen="{showModal}" borderRadius="16">
	<div class="modal-content">
		<img src="/imgs/future-tech.png" alt="" class="logo" />
		<div class="heading">
			<Typography variant="card-header" fontVariant="kw1c" color="--future-tech-green"
				>FUTURE TECH CO.</Typography>
		</div>
		<Typography variant="card-header" fontVariant="kw1c" color="--kw1c-red-900"
			>Your staff have attended training. Continue to see results.</Typography>
		<div class="p">
			<Typography color="--black-500">
				To view the staff results from training click the continue to results button.
			</Typography>
		</div>
		<Button variant="future-tech" label="Continue To Results" onClick="{handleTrainStaff}" />
		<div class="subtext">
			<Typography variant="sub-text">Cancel</Typography>
		</div>
	</div>
</Modal>
<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>There are four staff <Highlight>available for the new badge training.</Highlight> Select the staff
			to train.</Typography>
	</div>
	<div class="sub-text">
		<Typography
			>Select the check boxes next to the employees you wish to train, then click the train staff
			button to continue.</Typography>
	</div>
	<div class="dash">
		<FutureTech header="COMPANY EMPLOYEES">
			<table class="table">
				<tr>
					<th></th>
					<th><Typography variant="sub-text">Employee Name</Typography></th>
					<th><Typography variant="sub-text">Desingation</Typography></th>
				</tr>
				{#each staff as emp (emp.name)}
					<tr>
						<td>
							<Radio bind:checked="{emp.selected}" />
						</td>
						<td>
							<Typography variant="list">{emp.name}</Typography>
						</td>
						<td>
							<Typography variant="sub-text">{emp.role}</Typography>
						</td>
						<td></td>
					</tr>
				{/each}
			</table>

			<div class="button-container">
				<Button variant="future-tech" label="Train Staff" onClick="{() => (showModal = true)}" />
			</div>
		</FutureTech>
	</div>
</div>
