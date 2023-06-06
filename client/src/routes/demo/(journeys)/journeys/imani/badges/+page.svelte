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
	import { currNode, imaniBadgeName, imaniChosenApplicant } from "$lib/stores/flows.store";
	import { onMount } from "svelte";

	let loading = true;

	setTimeout(() => {
		loading = false;
		currNode.set(5);
	}, 5_000);

	onMount(() => {
		currNode.set(4);
	});
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>You’ve successfully <Highlight>created a new badge template.</Highlight> Let’s continue to get
			training the staff.</Typography
		>
	</div>
	<div class="sub-text">
		<Typography>Click continue to proceed to staff training.</Typography>
	</div>
	<div class="dash">
		<FutureTech header="COMPANY BADGES">
			<table class="table">
				<tr>
					<th><Typography variant="sub-text">Badge Name</Typography></th>
					<th></th>
					<th><Typography variant="sub-text">Badge Status</Typography></th>
				</tr>
				<tr>
					<td>
						<Typography variant="list">{$imaniBadgeName}</Typography>
					</td>
					<td> </td>
					<td>
						{#if loading}
							<Loading size="16px" />
						{/if}
						<Typography variant="status" color="{loading ? '--secondary-900' : '--green-900'}"
							>{loading ? "Pending" : "Active"}</Typography
						>
					</td>
				</tr>

				<tr>
					<td>
						<Typography variant="list">Health & Safety</Typography>
					</td>
					<td> </td>
					<td>
						<Typography variant="status">Active</Typography>
					</td>
				</tr>

				<tr>
					<td>
						<Typography variant="list">Communication</Typography>
					</td>
					<td> </td>
					<td>
						<Typography variant="status">Active</Typography>
					</td>
				</tr>

				<tr>
					<td>
						<Typography variant="list">Problem Solving</Typography>
					</td>
					<td> </td>
					<td>
						<Typography variant="status">Active</Typography>
					</td>
				</tr>

				<tr>
					<td>
						<Typography variant="list">Print Automation</Typography>
					</td>
					<td> </td>
					<td>
						<Typography variant="status">Active</Typography>
					</td>
				</tr>
			</table>

			<div class="button-container">
				<Button
					variant="future-tech"
					label="Continue"
					onClick="{() => {
						goto('/demo/journeys/imani/train-staff');
					}}"
				/>
			</div>
		</FutureTech>
	</div>
</div>
