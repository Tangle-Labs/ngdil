<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.card-header {
			width: 100%;
			display: flex;
			justify-content: space-between;
			padding: 20px 0;
		}

		.badge {
			display: flex;
			padding: 20px;

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
	import {
		imaniBadgeColor,
		imaniBadgeDesc,
		imaniBadgeName,
		imaniBadgeVariant,
		imaniChosenApplicant
	} from "$lib/stores/flows.store";
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>Future Tech Co. is big on employee development. Let’s create a new badge so we can train
			staff.</Typography
		>
	</div>
	<div class="sub-text">
		<Typography
			>Click the Create New Badge button to continue and create a new open badge template.</Typography
		>
	</div>
	<div class="dash">
		<FutureTech header="COMPANY BADGES">
			<div class="card-header">
				<Typography variant="card-header">Confirm Badge</Typography>
			</div>

			<div class="badge">
				<div class="badge">
					<Badge fill="{$imaniBadgeColor}" variant="{$imaniBadgeVariant}" />
				</div>

				<div class="data">
					<div class="text-block">
						<div class="header">
							<Typography variant="list">Badge Name</Typography>
						</div>
						<div class="content">
							<Typography>{$imaniBadgeName}</Typography>
						</div>
					</div>

					<div class="text-block">
						<div class="header">
							<Typography variant="list">Badge Issuer</Typography>
						</div>
						<div class="content">
							<Typography>Future Tech Co.</Typography>
						</div>
					</div>

					<div class="text-block">
						<div class="header">
							<Typography variant="list">Badge Description</Typography>
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
					label="Create Badge"
					onClick="{() => {
						goto('/demo/journeys/imani/badges');
					}}"
				/>
			</div>
		</FutureTech>
	</div>
</div>
