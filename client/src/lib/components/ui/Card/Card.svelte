<style lang="scss">
	.card {
		box-shadow: 0px 8px 28px rgba(20, 20, 43, 0.1);
		background: white;
		padding: 15px;
		overflow: hidden;

		& > * {
			border-radius: 10px;
		}
	}

	.with-border {
		border: 1px solid var(--black-900);
	}

	.without-padding {
		padding: 0;
	}
</style>

<script lang="ts">
	export let withBorder = false;
	export let withoutPadding = false;
	export let borderRadius = 0;
</script>

<div
	style:border-radius="{`${borderRadius}px`}"
	class="{`card ${withBorder && 'with-border'} ${withoutPadding && 'without-padding'}`}"
>
	<slot />
</div>
