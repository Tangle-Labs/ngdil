<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.application {
			display: flex;
			width: 100%;
			justify-content: space-between;
			padding: 20px;
			box-sizing: border-box;

			.info {
				width: 50%;

				.bar {
					height: 10px;
					width: 100%;
					background: var(--white-700);
					margin-top: 10px;
					border-radius: 10px;
				}
			}
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, FutureTech, Button } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { currNode, imaniChosenApplicant } from "$lib/stores/flows.store";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";

	onMount(() => {
		currNode.set(1);
	});
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>You’re in, and it appears you have <Highlight>three new applications</Highlight>. View
			applicants to choose who to hire.
			<!-- {$_("journeys.imani.view_3_new_applications_to_hire")} -->
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>
			{$_("journeys.imani.view_applicant_btn_desc")}
		</Typography>
	</div>
	<div class="dash">
		<FutureTech header="{$_('journeys.imani.3d_engineer_job_applications').toUpperCase()}">
			<div class="application">
				<div class="info">
					<div class="name">
						<Typography variant="list" fontVariant="kw1c" color="--future-tech-green">
							{$_("imani_applicant.Gilian_OLeary")}
						</Typography>
					</div>
					<div class="bar"></div>
				</div>
				<div class="action">
					<Button
						label="{$_('journeys.imani.view_applicant')}"
						variant="future-tech"
						onClick="{() => {
							imaniChosenApplicant.set("Gilian O'Leary");
							goto('/demo/journeys/imani/applicant');
						}}" />
				</div>
			</div>

			<div class="application">
				<div class="info">
					<div class="name">
						<Typography variant="list" fontVariant="kw1c" color="--future-tech-green">
							{$_("imani_applicant.Marcus_Erikson")}
						</Typography>
					</div>
					<div class="bar"></div>
				</div>
				<div class="action">
					<Button
						label="{$_('journeys.imani.view_applicant')}"
						variant="future-tech"
						onClick="{() => {
							imaniChosenApplicant.set('Marcus Erikson');
							goto('/demo/journeys/imani/applicant');
						}}" />
				</div>
			</div>

			<div class="application">
				<div class="info">
					<div class="name">
						<Typography variant="list" fontVariant="kw1c" color="--future-tech-green">
							{$_("imani_applicant.Cassandra_Blanc")}
						</Typography>
					</div>
					<div class="bar"></div>
				</div>
				<div class="action">
					<Button
						label="{$_('journeys.imani.view_applicant')}"
						variant="future-tech"
						onClick="{() => {
							imaniChosenApplicant.set('Cassandra Blanc');
							goto('/demo/journeys/imani/applicant');
						}}" />
				</div>
			</div>
		</FutureTech>
	</div>
</div>
