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
	import {
		currNode,
		dominiqueAppliedForJob,
		dominiqueEarnedCourseCred,
		dominiqueSharedCred,
		nodeCount
	} from "$lib/stores/flows.store";
	import { highlight } from "$lib/utils/highlight";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";

	onMount(() => {
		nodeCount.set(0);
		currNode.set(0);
	});
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{@html highlight($_("journeys.dominique.intro"))}
		</Typography>
	</div>
	<div class="desc">
		<Typography variant="button">
			{$_("journeys.dominique.select_first_experience")}
		</Typography>
	</div>

	<div class="cards">
		<div class="card">
			<Card withBorder="{true}">
				<div class="card-content">
					<Avatar image="/imgs/dominique-1.svg" />
					<div class="text">
						<div class="heading">
							<Typography variant="card-header">
								{$_("journeys.dominique.enroll_to_kw1c")}
							</Typography>
						</div>
						<div class="desc">
							<Typography>
								{$_("journeys.dominique.kw1c_desc")}
							</Typography>
						</div>
					</div>
					<Button
						variant="{$dominiqueEarnedCourseCred ? 'completed' : 'secondary'}"
						onClick="{() => {
							nodeCount.set(5);
							goto('/demo/journeys/dominique/earn-a-cred');
						}}"
						label="{$dominiqueEarnedCourseCred
							? $_('components.retry')
							: $_('components.get_started')}"
					/>
				</div>
			</Card>
		</div>
		<div class="card">
			<Card withBorder="{true}">
				<div class="card-content">
					<Avatar image="/imgs/dominique-2.svg" />
					<div class="text">
						<div class="heading">
							<Typography variant="card-header">
								{$_("journeys.dominique.social_media")}
							</Typography>
						</div>
						<div class="desc">
							<Typography>
								{$_("journeys.dominique.social_media_desc")}
							</Typography>
						</div>
					</div>
					<Button
						variant="{$dominiqueSharedCred
							? 'completed'
							: $dominiqueEarnedCourseCred
							? 'secondary'
							: 'disabled'}"
						onClick="{() => {
							nodeCount.set(4);
							goto('/demo/journeys/dominique/share-a-cred');
						}}"
						label="{$dominiqueSharedCred ? $_('components.retry') : $_('components.get_started')}"
					/>
				</div>
			</Card>
		</div>
		<div class="card">
			<Card withBorder="{true}">
				<div class="card-content">
					<Avatar image="/imgs/dominique-3.svg" />
					<div class="text">
						<div class="heading">
							<Typography variant="card-header">{$_("journeys.dominique.apply_job")}</Typography>
						</div>
						<div class="desc">
							<Typography>
								{$_("journeys.dominique.apply_job_desc")}
							</Typography>
						</div>
					</div>
					<Button
						variant="{$dominiqueAppliedForJob
							? 'completed'
							: $dominiqueSharedCred
							? 'secondary'
							: 'disabled'}"
						onClick="{() => {
							nodeCount.set(5);
							goto('/demo/journeys/dominique/apply-for-job');
						}}"
						label="{$dominiqueAppliedForJob
							? $_('components.retry')
							: $_('components.get_started')}"
					/>
				</div>
			</Card>
		</div>
		{#if $dominiqueAppliedForJob && $dominiqueEarnedCourseCred && $dominiqueSharedCred}
			<div class="other" style="{'padding-top: 20px'}">
				<Button
					variant="secondary"
					onClick="{() => goto('/demo/choose-journey')}"
					label="{$_('journeys.dominique.try_another_journey')}"
				/>
			</div>
		{/if}
	</div>
</div>
