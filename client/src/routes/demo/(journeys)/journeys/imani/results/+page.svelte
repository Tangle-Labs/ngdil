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
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { imaniBadgeName, imaniChosenStaff, imaniIssuedStaff } from "$lib/stores/flows.store";

	let staff = $imaniChosenStaff.map((s) => ({ ...s, selected: false }));

	let showModal = false;

	function handleIssueCred() {
		imaniIssuedStaff.set(staff.filter((s) => s.selected));
		goto("/demo/journeys/imani/badge-holders");
	}
</script>

<div class="container">
	<Modal bind:isOpen="{showModal}">
		<div class="modal-content">
			<img src="/imgs/future-tech.png" alt="" class="logo" />
			<div class="heading">
				<Typography variant="card-header" fontVariant="kw1c" color="--future-tech-green"
					>FUTURE TECH CO.</Typography
				>
			</div>
			<Typography variant="card-header" fontVariant="kw1c" color="--kw1c-red-900"
				>You are about to issue {$imaniChosenStaff.length} badges - {$imaniBadgeName}</Typography
			>
			<div class="p">
				<Typography color="--black-500">
					To continue and issue the badges click the issue badges button.
				</Typography>
			</div>
			<Button variant="future-tech" label="Issue Badges" onClick="{handleIssueCred}" />
			<div class="subtext">
				<Typography variant="sub-text">Cancel</Typography>
			</div>
		</div>
	</Modal>
	<div class="heading">
		<Typography variant="heading"
			>Not bad at all, the <Highlight>staff were successful in their training.</Highlight> Let’s issue
			them their badges.</Typography
		>
	</div>
	<div class="sub-text">
		<Typography
			>Select the check boxes next to the employees that passed, then click the issue badges button
			to continue.</Typography
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
						<td>
							<Typography variant="status">Passed</Typography>
						</td>
					</tr>
				{/each}
			</table>

			<div class="button-container">
				<Button variant="future-tech" label="Issue Badges" onClick="{() => (showModal = true)}" />
			</div>
		</FutureTech>
	</div>
</div>
