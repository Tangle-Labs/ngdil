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
	import { Typography, FutureTech, Button, Modal, Radio } from "$lib/components";
	import { currNode, imaniChosenStaff } from "$lib/stores/flows.store";
	import { highlight } from "$lib/utils/highlight";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";

	let staff = [
		{
			name: $_("applicants.Gilian_OLeary"),
			role: $_("journeys.imani.3d_print_designer"),
			selected: false
		},
		{
			name: $_("applicants.Marcus_Erikson"),
			role: $_("journeys.imani.technical_engineer"),
			selected: false
		},
		{
			name: $_("applicants.Ada_Liefsson"),
			role: $_("journeys.imani.senior_3d_print_operator"),
			selected: false
		},
		{
			name: $_("applicants.Malik_Chaudry"),
			role: $_("journeys.imani.3d_print_designer"),
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

	$: disabled = staff.filter((s) => s.selected).length < 1;
</script>

<Modal bind:isOpen="{showModal}" borderRadius="{16}">
	<div class="modal-content">
		<img src="/imgs/future-tech.png" alt="" class="logo" />
		<div class="heading">
			<Typography variant="card-header" fontVariant="kw1c" color="--future-tech-green"
				>{$_("components.future_tech_co").toUpperCase()}</Typography>
		</div>
		<Typography variant="card-header" fontVariant="kw1c" color="--kw1c-red-900">
			{$_("journeys.imani.staff_attended_training_see_results")}
		</Typography>
		<div class="p">
			<Typography color="--black-500">
				{$_("journeys.imani.to_view_staff_result_click_continue_to_result")}
			</Typography>
		</div>
		<Button
			variant="future-tech"
			label="{$_('journeys.imani.continue_to_result')}"
			onClick="{handleTrainStaff}" />
		<div class="subtext">
			<Typography variant="sub-text">{$_("components.cancel")}</Typography>
		</div>
	</div>
</Modal>
<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{@html highlight($_("journeys.imani.4_staff_available_for_training_select_1"))}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>
			{$_("journeys.imani.select_emp_to_train_and_click_train_staff")}
		</Typography>
	</div>
	<div class="dash">
		<FutureTech header="{$_('journeys.imani.company_employees').toUpperCase()}">
			<table class="table">
				<tr>
					<th></th>
					<th><Typography variant="sub-text">{$_("journeys.imani.emp_name")}</Typography></th>
					<th><Typography variant="sub-text">{$_("journeys.imani.designation")}</Typography></th>
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
				<Button
					variant="{disabled ? 'future-tech-disabled' : 'future-tech'}"
					label="{$_('journeys.imani.train_staff')}"
					onClick="{() => (showModal = true)}" />
			</div>
		</FutureTech>
	</div>
</div>
