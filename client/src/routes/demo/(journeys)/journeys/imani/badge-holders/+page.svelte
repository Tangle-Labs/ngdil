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
	import { Typography, FutureTech, Button, Loading } from "$lib/components";
	import { currNode, imaniBadgeName, imaniIssuedStaff } from "$lib/stores/flows.store";
	import { highlight } from "$lib/utils/highlight";
	import { onMount } from "svelte";
	import { Confetti } from "svelte-confetti";
	import { _ } from "svelte-i18n";

	let staff = $imaniIssuedStaff.map((s) => ({ ...s, selected: false }));
	let pending = true;

	onMount(() => {
		setTimeout(() => {
			pending = false;
			currNode.set(8);
		}, 9000);
	});
</script>

{#if !pending}
	<div
		style="position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;"
	>
		<Confetti
			x="{[-5, 5]}"
			y="{[0, 0.1]}"
			delay="{[500, 5000]}"
			duration="{2000}"
			amount="{500}"
			fallDistance="100vh"
		/>
	</div>
{/if}

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{@html highlight($_("journeys.imani.successfully_trained_issued_badge_to_emp"))}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>
			{$_("journeys.imani.click_to_see_self_sovereign_id_desc")}
		</Typography>
	</div>
	<div class="dash">
		<FutureTech
			header="{$imaniBadgeName.toUpperCase() +
				' ' +
				$_('journeys.imani.badge_holders').toUpperCase()}"
		>
			<table class="table">
				<tr>
					<th><Typography variant="sub-text">{$_("journeys.imani.emp_name")}</Typography></th>
					<th><Typography variant="sub-text">{$_("journeys.imani.designation")}</Typography></th>
					<th><Typography variant="sub-text">{$_("journeys.imani.badge_status")}</Typography></th>
				</tr>
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
										<Typography variant="status" color="--secondary-900"
											>{$_("components.pending")}</Typography
										>
									</div>
								</div>
							{:else}
								<Typography variant="status">{$_("components.accepted")}</Typography>
							{/if}
						</td>
					</tr>
				{/each}
			</table>

			<div class="button-container">
				<Button
					variant="{pending ? 'future-tech-disabled' : 'future-tech'}"
					label="{$_('components.continue')}"
					onClick="{() => goto('/demo/journeys/imani/issued-badge')}"
				/>
			</div>
		</FutureTech>
	</div>
</div>
