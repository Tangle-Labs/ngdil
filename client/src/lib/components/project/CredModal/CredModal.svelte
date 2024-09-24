<style lang="scss">
	.show {
		cursor: pointer;
	}

	.card-content {
		max-width: 400px;
		width: 90vw;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		padding: 30px;
		box-sizing: border-box;

		& > * {
			width: 100%;
			box-sizing: border-box;
		}

		.logo {
			display: flex;
			justify-content: center;

			img {
				height: 100px;
			}
		}

		.cred-name {
			width: 100%;
			padding: 10px;
			padding-bottom: 0;
			text-align: center;
		}

		.cred-issuer {
			width: 100%;
			padding: 10px;
			text-align: center;
			padding-bottom: 20px;
		}

		.text-block {
			padding: 15px 0;
			border-top: 1px solid var(--black-300);
		}
	}
</style>

<script lang="ts">
	import { Modal, Typography } from "$lib/components";
	import { _ } from "svelte-i18n";

	export let credential: Record<string, string>;
	export let name: string;
	export let issuer: string;
	export let logo: string;

	let isOpen = false;
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<img
	src="/imgs/show.svg"
	class="show"
	alt=""
	on:click="{() => {
		isOpen = true;
	}}"
/>

<Modal bind:isOpen="{isOpen}">
	<div class="card-content">
		<div class="logo">
			<img src="{logo}" alt="" />
		</div>
		<div class="cred-name">
			<Typography variant="card-header">{name}</Typography>
		</div>
		<div class="cred-issuer">
			<Typography color="--black-500">
				{$_("components.issued_by", { values: { IssuerName: issuer } })}
			</Typography>
		</div>
		{#each Object.keys(credential) as key}
			<div class="text-block">
				<div class="caption">
					<Typography variant="sub-text">{key}</Typography>
				</div>
				<div class="data"><Typography>{credential[key]}</Typography></div>
			</div>
		{/each}
	</div>
</Modal>
