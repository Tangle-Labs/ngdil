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
	import { imaniBadgeName, imaniChosenApplicant, imaniChosenStaff } from "$lib/stores/flows.store";

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

	function handleTrainStaff() {
		imaniChosenStaff.set(staff.filter((s) => s.selected));
		goto("/demo/journeys/imani/results");
	}
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>There are four staff available for the new badge training. Select the staff to train.</Typography
		>
	</div>
	<div class="sub-text">
		<Typography
			>Select the check boxes next to the employees you wish to train, then click the train staff
			button to continue.</Typography
		>
	</div>
	<div class="dash">
		<FutureTech header="{`${$imaniBadgeName.toUpperCase()} TRAINEES`}">
			<table class="table">
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
				<Button variant="future-tech" label="Train Staff" onClick="{handleTrainStaff}" />
			</div>
		</FutureTech>
	</div>
</div>
