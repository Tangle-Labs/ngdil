<style lang="scss">
	.card {
		box-shadow: 0px 8px 28px rgba(20, 20, 43, 0.1);

		padding: 15px;
		border-radius: 10px;

		& > * {
			border-radius: 10px;
		}
	}

	.with-border {
		border: 1px solid var(--black-900);
	}
</style>

<script lang="ts">
	export let withBorder = false;
</script>

<div class="{`card ${withBorder && 'with-border'}`}">
	<slot />
</div>
