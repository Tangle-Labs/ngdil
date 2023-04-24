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
	import { imaniChosenApplicant } from "$lib/stores/flows.store";
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>Future Tech Co. <Highlight>is big on employee development.</Highlight> Let’s create a new badge
			so we can train staff.</Typography>
	</div>
	<div class="sub-text">
		<Typography
			>Click the Create New Badge button to continue and create a new open badge template.</Typography>
	</div>
	<div class="dash">
		<FutureTech header="COMPANY BADGES">
			<table class="table">
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
					label="Create New Badge"
					onClick="{() => {
						goto('/demo/journeys/imani/new-badge');
					}}" />
			</div>
		</FutureTech>
	</div>
</div>
