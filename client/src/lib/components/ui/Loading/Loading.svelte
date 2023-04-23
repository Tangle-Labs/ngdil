<style lang="scss">
	@keyframes loading {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	.loading {
		aspect-ratio: 1 / 1;
		animation: 3s infinite loading;
	}
</style>

<script lang="ts">
	export let img = "/imgs/loading.png";
	export let size = "50px";
</script>

<img src="{img}" alt="" style="{`height: ${size};`}" class="loading" />
