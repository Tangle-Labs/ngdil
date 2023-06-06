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

		.badges {
			display: flex;
			width: 100%;
			justify-content: space-between;

			.badge {
				text-align: center;
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				align-content: center;
				align-items: flex-end;

				& > * {
					flex-basis: 100%;
					padding-bottom: 5px;
					padding-top: 20px;
				}
			}
		}

		.colors {
			display: flex;
			width: 100%;
			justify-content: space-between;
			box-sizing: border-box;

			padding: 20px 12px;

			.color {
				display: flex;
				width: 80px;

				justify-content: center;
				flex-wrap: wrap;

				.palette {
					width: 80px;
					height: 50px;
					width: 100%;
					margin: 10px 0;

					&.red {
						background: var(--red-900);
					}

					&.blue {
						background: var(--blue-900);
					}

					&.green {
						background: var(--green-900);
					}

					&.yellow {
						background: var(--secondary-900);
					}
				}
			}
		}

		.input {
			padding: 10px 0;

			input,
			textarea {
				padding: 10px;
				font-family: var(--body-font);
				font-size: 1rem;
				width: 70%;
				margin: 5px 0;
				resize: none;
				border: 1px solid var(--black-500);
				user-select: none;
				border-radius: 5px;
				box-sizing: border-box;
				outline: none;
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
	import { Typography, FutureTech, Button, Loading, Modal, Badge, Radio } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import {
		currNode,
		imaniBadgeColor,
		imaniBadgeDesc,
		imaniBadgeName,
		imaniBadgeVariant
	} from "$lib/stores/flows.store";
	import { onMount } from "svelte";

	let color: "red" | "blue" | "green" | "yellow" | null = null;
	let variant: "hexagon" | "crest" | "rounded-hexagon" | "circle" | null = null;
	let creatingBadgeImage = true;

	let badgeName: string;
	let badgeDesc: string;

	const colors = {
		red: "var(--red-900)",
		green: "var(--green-900)",
		yellow: "var(--secondary-900)",
		blue: "var(--blue-900)"
	};

	function handleCreateBadge() {
		if (creatingBadgeImage) {
			if (color && variant) {
				imaniBadgeVariant.set(variant);
				imaniBadgeColor.set(colors[color]);
				creatingBadgeImage = false;
				currNode.set(2);
			}
		} else {
			imaniBadgeName.set(badgeName);
			imaniBadgeDesc.set(badgeDesc);
			goto("/demo/journeys/imani/confirm-badge");
		}
	}

	onMount(() => {
		currNode.set(1);
	});
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>Future Tech Co. <Highlight>is big on employee development.</Highlight> Let’s create a new badge
			so we can train staff.</Typography
		>
	</div>
	<div class="sub-text">
		<Typography
			>Click the Create New Badge button to continue and create a new open badge template.</Typography
		>
	</div>
	<div class="dash">
		<FutureTech header="COMPANY BADGES">
			<div class="heading">
				<Typography variant="card-header"
					>{creatingBadgeImage
						? "Select your badge shape & color"
						: "Add Badge Information"}</Typography
				>
			</div>

			{#if creatingBadgeImage}
				<div class="badges">
					<div class="badge">
						<div class="badge-container">
							<Badge variant="hexagon" />
						</div>
						<Radio checked="{variant === 'hexagon'}" onClick="{() => (variant = 'hexagon')}" />
					</div>

					<div class="badge">
						<div class="badge-container">
							<Badge variant="crest" />
						</div>
						<Radio checked="{variant === 'crest'}" onClick="{() => (variant = 'crest')}" />
					</div>

					<div class="badge">
						<div class="badge-container">
							<Badge variant="rounded-hexagon" />
						</div>
						<Radio
							checked="{variant === 'rounded-hexagon'}"
							onClick="{() => (variant = 'rounded-hexagon')}"
						/>
					</div>

					<div class="badge">
						<div class="badge-container">
							<Badge variant="circle" />
						</div>
						<Radio checked="{variant === 'circle'}" onClick="{() => (variant = 'circle')}" />
					</div>
				</div>

				<div class="colors">
					<div class="color">
						<div class="red palette"></div>
						<Radio checked="{color === 'red'}" onClick="{() => (color = 'red')}" />
					</div>

					<div class="color">
						<div class="blue palette"></div>
						<Radio checked="{color === 'blue'}" onClick="{() => (color = 'blue')}" />
					</div>

					<div class="color">
						<div class="green palette"></div>
						<Radio checked="{color === 'green'}" onClick="{() => (color = 'green')}" />
					</div>

					<div class="color">
						<div class="yellow palette"></div>
						<Radio checked="{color === 'yellow'}" onClick="{() => (color = 'yellow')}" />
					</div>
				</div>
			{:else}
				<div class="input">
					<div class="label"><Typography variant="list">Badge Name</Typography></div>
					<input type="text" placeholder="3d Print Engineer" bind:value="{badgeName}" />
					<div class="sub-text">
						<Typography variant="sub-text">Enter Badge name here</Typography>
					</div>
				</div>

				<div class="input">
					<div class="label"><Typography variant="list">Badge Description</Typography></div>
					<textarea bind:value="{badgeDesc}" placeholder="3d Print Engineer Badge Description"
					></textarea>
					<div class="sub-text">
						<Typography variant="sub-text">Enter Badge description here</Typography>
					</div>
				</div>
			{/if}
			<div class="button-container">
				<Button
					onClick="{handleCreateBadge}"
					label="Continue"
					variant="{(creatingBadgeImage && !(variant && color)) ||
					(!creatingBadgeImage && !(badgeDesc && badgeName))
						? 'future-tech-disabled'
						: 'future-tech'}"
				/>
			</div>
		</FutureTech>
	</div>
</div>
