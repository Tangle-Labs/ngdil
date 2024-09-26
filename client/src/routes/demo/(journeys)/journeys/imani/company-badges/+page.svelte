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
	import { Typography, FutureTech, Button } from "$lib/components";
	import { currNode, nodeCount } from "$lib/stores/flows.store";
	import { highlight } from "$lib/utils/highlight";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";

	onMount(() => {
		currNode.set(1);
		nodeCount.set(8);
	});
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{@html highlight($_("journeys.imani.future_tech_to_create_new_badge"))}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>
			{$_("journeys.imani.create_new_badge_btn_desc")}
		</Typography>
	</div>
	<div class="dash">
		<FutureTech header="{$_('journeys.imani.company_badges').toUpperCase()}">
			<table class="table">
				<tr>
					<th><Typography variant="sub-text">{$_("journeys.imani.badge_name")}</Typography></th>
					<th></th>
					<th><Typography variant="sub-text">{$_("journeys.imani.badge_status")}</Typography></th>
				</tr>
				<tr>
					<td>
						<Typography variant="list">{$_("journeys.imani.health_safety")}</Typography>
					</td>
					<td> </td>
					<td>
						<Typography variant="status">{$_("components.active")}</Typography>
					</td>
				</tr>
				<tr>
					<td>
						<Typography variant="list">{$_("journeys.imani.communication")}</Typography>
					</td>
					<td> </td>
					<td>
						<Typography variant="status">{$_("components.active")}</Typography>
					</td>
				</tr>
				<tr>
					<td>
						<Typography variant="list">{$_("journeys.imani.problem_solving")}</Typography>
					</td>
					<td> </td>
					<td>
						<Typography variant="status">{$_("components.active")}</Typography>
					</td>
				</tr>
				<tr>
					<td>
						<Typography variant="list">{$_("journeys.imani.print_automation")}</Typography>
					</td>
					<td> </td>
					<td>
						<Typography variant="status">{$_("components.active")}</Typography>
					</td>
				</tr>
			</table>

			<div class="button-container">
				<Button
					variant="future-tech"
					label="{$_('journeys.imani.create_new_badge')}"
					onClick="{() => {
						goto('/demo/journeys/imani/new-badge');
					}}"
				/>
			</div>
		</FutureTech>
	</div>
</div>
