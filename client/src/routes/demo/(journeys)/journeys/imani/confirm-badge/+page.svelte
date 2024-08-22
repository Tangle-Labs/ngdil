<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.card-header {
			width: 100%;
			display: flex;
			justify-content: space-between;
			padding: 10px 15px;
		}

		.badge {
			display: flex;
			padding: 10px 20px;

			& > .badge {
				padding: 0;
			}

			.data {
				padding: 0 30px;

				.text-block {
					padding-bottom: 10px;
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
	import { Typography, FutureTech, Button, Loading, Modal, Badge } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import {
		currNode,
		imaniBadgeColor,
		imaniBadgeDesc,
		imaniBadgeName,
		imaniBadgeVariant
	} from "$lib/stores/flows.store";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";

	onMount(() => {
		currNode.set(3);
	});
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>Your badge template is looking great. <Highlight>Let’s save the badge</Highlight> template so
			it is available for trainees.
			<!-- {$_("journeys.imani.save_badge_template_for_trainees")} -->
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>
			{$_("journeys.imani.save_badge_btn_desc")}
		</Typography>
	</div>
	<div class="dash">
		<FutureTech header="{$_('journeys.imani.company_badges').toUpperCase()}">
			<div class="card-header">
				<Typography variant="card-header">{$_("journeys.imani.confirm_badge")}</Typography>
			</div>
			<div class="badge">
				<div class="badge">
					<Badge fill="{$imaniBadgeColor}" variant="{$imaniBadgeVariant}" />
				</div>
				<div class="data">
					<div class="text-block">
						<div class="header">
							<Typography variant="list">{$_("journeys.imani.badge_name")}</Typography>
						</div>
						<div class="content">
							<Typography>{$imaniBadgeName}</Typography>
						</div>
					</div>
					<div class="text-block">
						<div class="header">
							<Typography variant="list">{$_("journeys.imani.badge_issuer")}</Typography>
						</div>
						<div class="content">
							<Typography>{$_("components.future_tech_co")}</Typography>
						</div>
					</div>
					<div class="text-block">
						<div class="header">
							<Typography variant="list">{$_("journeys.imani.badge_description")}</Typography>
						</div>
						<div class="content">
							<Typography>{$imaniBadgeDesc}</Typography>
						</div>
					</div>
				</div>
			</div>

			<div class="button-container">
				<Button
					variant="future-tech"
					label="{$_('journeys.imani.save_badge')}"
					onClick="{() => {
						goto('/demo/journeys/imani/badges');
					}}" />
			</div>
		</FutureTech>
	</div>
</div>
