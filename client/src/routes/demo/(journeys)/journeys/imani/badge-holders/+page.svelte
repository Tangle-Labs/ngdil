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
	import { imaniBadgeName, imaniIssuedStaff } from "$lib/stores/flows.store";
	import { onMount } from "svelte";

	let staff = $imaniIssuedStaff.map((s) => ({ ...s, selected: false }));
	let pending = true;

	onMount(() => {
		setTimeout(() => {
			pending = false;
		}, 9000);
	});
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>Not bad at all, the staff were successful in their training. Let’s issue them their badges.</Typography>
	</div>
	<div class="sub-text">
		<Typography
			>Select the check boxes next to the employees that passed, then click the issue badges button
			to continue.</Typography>
	</div>
	<div class="dash">
		<FutureTech header="{`${$imaniBadgeName.toUpperCase()} BADGE HOLDERS`}">
			<table class="table">
				{#each staff as emp (emp.name)}
					<tr>
						<td>
							<Typography variant="list">{emp.name}</Typography>
						</td>
						<td>
							<Typography variant="sub-text">{emp.role}</Typography>
						</td>
						<td>
							{#if pending}
								<div class="loading">
									<Loading size="1rem" />
									<div class="text">
										<Typography variant="status" color="--secondary-900">Pending</Typography>
									</div>
								</div>
							{:else}
								<Typography variant="status">Accepted</Typography>
							{/if}
						</td>
					</tr>
				{/each}
			</table>

			<div class="button-container">
				<Button
					variant="{pending ? 'future-tech-disabled' : 'future-tech'}"
					label="Continue"
					onClick="{() => goto('/demo/journeys/imani/issued-badge')}" />
			</div>
		</FutureTech>
	</div>
</div>
