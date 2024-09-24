<style lang="scss">
	.radio {
		width: 20px;
		aspect-ratio: 1 / 1;
		background: var(--white-300);
		border: 2px solid var(--black-300);
		border-radius: 30px;
		box-sizing: border-box;

		&:hover {
			cursor: pointer;
		}

		& > .checked {
			width: 13px;
			aspect-ratio: 1 / 1;
			box-sizing: border-box;
			border-radius: 10px;
			margin: 1.5px;
			transition: all 0.4s;

			&.active {
				background-color: var(--kw1c-blue-900);
			}
		}
	}
</style>

<script lang="ts">
	export let checked = false;
	export let onClick: (...props: unknown[]) => void = () => {
		null;
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="radio"
	on:click="{() => {
		checked = !checked;
		onClick();
	}}"
>
	<div class="{`checked ${checked && 'active'}`}"></div>
</div>
