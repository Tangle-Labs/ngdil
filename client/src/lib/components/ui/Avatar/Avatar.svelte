<style lang="scss">
	.avatar {
		display: flex;
		width: fit-content;
		justify-content: center;
		align-items: center;
		border: 1px solid black;
		border-radius: 100px;
	}

	.accompanying-text {
		font-family: var(--header-font);
		color: var(--header-text);
		font-weight: 500;
		padding-left: 10px;
		font-size: 1.2rem;
		font-weight: 600;
	}

	.avatar-img {
		height: 90px;
		width: 90px;
		border-radius: 45px;
		object-fit: cover;
	}

	.large {
		height: 150px;
		width: 150px;
		border-radius: 80px;
	}

	.small {
		height: 50px;
		width: 50px;
		border-radius: 25px;
	}
</style>

<script lang="ts">
	export let image: string;
	export let variant: "large" | "medium" | "small" = "medium";
	export let text: string | null = null;
	export let onClick: (...args: any[]) => any = () => null;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="avatar" on:click="{onClick}">
	<img
		src="{image}"
		alt="user avatar"
		class="avatar-img"
		class:large="{variant === 'large'}"
		class:small="{variant === 'small'}"
	/>
	{#if text}
		<div class="accompanying-text">{text}</div>
	{/if}
</div>
