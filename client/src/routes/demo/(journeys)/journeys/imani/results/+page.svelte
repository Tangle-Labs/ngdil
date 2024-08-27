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
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import {
		currNode,
		imaniBadgeName,
		imaniChosenStaff,
		imaniIssuedStaff
	} from "$lib/stores/flows.store";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";

	let staff = $imaniChosenStaff.map((s) => ({ ...s, selected: false }));
	let staffCount = staff.length;
	let showModal = false;

	function handleIssueCred() {
		imaniIssuedStaff.set(staff.filter((s) => s.selected));
		goto("/demo/journeys/imani/badge-holders");
	}

	onMount(() => {
		currNode.set(7);
	});
</script>

<div class="container">
	<Modal bind:isOpen="{showModal}" borderRadius="{16}">
		<div class="modal-content">
			<img src="/imgs/future-tech.png" alt="" class="logo" />
			<div class="heading">
				<Typography variant="card-header" fontVariant="kw1c" color="--future-tech-green"
					>{$_("components.future_tech_co").toUpperCase()}</Typography>
			</div>
			<Typography variant="card-header" fontVariant="kw1c" color="--kw1c-red-900">
				{$_("journeys.imani.about_to_issue_badges", {
					values: { StaffCount: staffCount, BadgeName: $imaniBadgeName }
				})}
			</Typography>
			<div class="p">
				<Typography color="--black-500">
					{$_("journeys.imani.click_issue_badge_to_issue_and_continue")}
				</Typography>
			</div>
			<Button
				variant="future-tech"
				label="{$_('journeys.imani.issue_badges')}"
				onClick="{handleIssueCred}" />
			<div class="subtext">
				<Typography variant="sub-text">{$_("components.cancel")}</Typography>
			</div>
		</div>
	</Modal>
	<div class="heading">
		<Typography variant="heading"
			>Not bad at all, the <Highlight>staff were successful in their training.</Highlight> Let’s issue
			them their badges.
			<!-- {$_("journeys.imani.staff_successfully_trained_now_issue_badges")} -->
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>
			{$_("journeys.imani.select_emp_that_passed_then_click_issue_badges")}
		</Typography>
	</div>
	<div class="dash">
		<FutureTech
			header="{$imaniBadgeName.toUpperCase() + ' ' + $_('journeys.imani.trainees').toUpperCase()}">
			<table class="table">
				<tr>
					<th></th>
					<th><Typography variant="sub-text">{$_("journeys.imani.emp_name")}</Typography></th>
					<th><Typography variant="sub-text">{$_("journeys.imani.designation")}</Typography></th>
					<th><Typography variant="sub-text">{$_("journeys.imani.course_result")}</Typography></th>
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
						<td>
							<Typography variant="status">{$_("components.passed")}</Typography>
						</td>
					</tr>
				{/each}
			</table>

			<div class="button-container">
				<Button
					variant="future-tech"
					label="{$_('journeys.imani.issue_badges')}"
					onClick="{() => {
						showModal = true;
						staffCount = staff.filter((e) => e.selected).length;
					}}" />
			</div>
		</FutureTech>
	</div>
</div>
