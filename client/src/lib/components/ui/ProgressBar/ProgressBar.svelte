<style lang="scss">
	.bar {
		width: 100%;
		height: 5px;
		background: var(--white-500);
		border-radius: 15px;
		margin: 15px 0;
		position: relative;

		& > .curr {
			height: 5px;
			background: var(--green-900);
			border-radius: 15px;
			transition: ease-in-out 0.5s;
		}

		& > .nodes {
			position: absolute;
			top: -12.5px;
			left: 0;
			width: 100%;
			display: flex;
			justify-content: space-between;

			& > .node {
				height: 30px;
				width: 30px;
				border-radius: 20px;
				background: var(--white-500);
				transition: ease-in-out 0.5s;

				&.active {
					background: var(--secondary-900);
				}

				&.completed {
					background: var(--green-900);
				}
			}
		}
	}
</style>

<script lang="ts">
	export let nodes = 2;
	export let current = 1;

	$: progress = (current / (nodes - 1)) * 100 < 100 ? (current / (nodes - 1)) * 100 : 100;
</script>

<div class="bar">
	<div class="curr" style="{`width: ${progress}%;`}"></div>
	<div class="nodes">
		{#each [...Array(nodes).keys()] as node, i}
			<div class="{`node ${current > i ? 'completed' : current === i ? 'active' : ''}`}"></div>
		{/each}
	</div>
</div>
