<style lang="scss">
	.container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;

		& > * {
			padding: 20px 0;
			width: 100%;
		}

		.desc {
			padding-bottom: 5px;
			padding-top: 5px;
		}
		.sub-title {
			padding-top: 0;
		}

		.cards {
			width: 100%;

			& > .card {
				width: 100%;
				padding: 15px 0;

				.card-content {
					display: flex;
					justify-content: space-between;
					align-items: center;
					text-align: left;

					.text {
						width: calc(100% - 320px);
					}
				}
			}
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, Card, Avatar, Button } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import {
		currNode,
		imaniHiredEmployee,
		imaniIssuedBadge,
		nodeCount
	} from "$lib/stores/flows.store";
	import { currStep } from "$lib/stores/onboarding.store";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";

	onMount(() => {
		nodeCount.set(0);
		currNode.set(0);
	});
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>{#if $imaniHiredEmployee}
				<Highlight>Great new hire.</Highlight> Let’s get creating a new open badge and training the staff.
				<!-- {$_("journeys.imani.imani_hired_emp_intro")} -->
			{:else}
				Hi Imani. Let’s <Highlight>get you hiring some experienced staff</Highlight>. Select your
				first experience to get started.
				<!-- {$_("journeys.imani.imani_yet_to_hire_emp_intro")} -->
			{/if}</Typography>
	</div>
	<div class="desc">
		<Typography variant="button">
			{$imaniHiredEmployee
				? $_("journeys.imani.select_next_experience")
				: $_("journeys.imani.select_first_journey")}
		</Typography>
	</div>

	<div class="cards">
		<div class="card">
			<Card withBorder="{true}">
				<div class="card-content">
					<Avatar image="/imgs/imani-1.svg" />
					<div class="text">
						<div class="heading">
							<Typography variant="card-header">{$_("journeys.imani.hiring_emp_with_digital_cv")}</Typography>
						</div>
						<div class="desc">
							<Typography>
								{$_("journeys.imani.business_portal_dashboard_desc")}	
							</Typography>
						</div>
					</div>
					<Button
						variant="{$imaniHiredEmployee ? 'completed' : 'secondary'}"
						onClick="{() => {
							goto('/demo/journeys/imani/login');
						}}"
						label="{$imaniHiredEmployee
							? $_('components.retry')
							: $_('components.get_started')}" />
				</div>
			</Card>
		</div>

		<div class="card">
			<Card withBorder="{true}">
				<div class="card-content">
					<Avatar image="/imgs/imani-2.svg" />
					<div class="text">
						<div class="heading">
							<Typography variant="card-header">{$_("journeys.imani.create_and_issue_company_skill_badge")}</Typography>
						</div>
						<div class="desc">
							<Typography>
								{$_("journeys.imani.company_skill_badge_desc")}
							</Typography>
						</div>
					</div>
					<Button
						variant="{$imaniIssuedBadge
							? 'completed'
							: $imaniHiredEmployee
							? 'secondary'
							: 'disabled'}"
						onClick="{() => {
							goto('/demo/journeys/imani/company-badges');
						}}"
						label="{$imaniIssuedBadge
							? $_('components.retry')
							: $_('components.get_started')}" />
				</div>
			</Card>
		</div>
		{#if $imaniHiredEmployee && $imaniIssuedBadge}
			<div class="other">
				<Button
					variant="secondary"
					onClick="{() => goto('/demo/choose-journey')}"
					label={$_("components.try_another_journey")} />
			</div>
		{/if}
	</div>
</div>
