<style lang="scss">
	.bar {
		width: 100%;
		height: 5px;
		background: var(--white-700);
		border-radius: 15px;
		margin: 15px 0;
		position: relative;

		& > .progress {
			display: flex;
			width: 100%;

			.curr {
				height: 5px;
				background: var(--green-900);
				border-radius: 15px;
				transition: ease-in-out 0.5s;
			}

			.active {
				height: 5px;
				background: var(--secondary-900);
			}
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
				background: var(--white-700);
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

	$: progress =
		((current - 1) / (nodes - 1)) * 100 < 100 ? ((current - 1) / (nodes - 1)) * 100 : 100;
</script>

<div class="bar">
	<div class="progress">
		<div class="curr" style="{`width: ${progress}%;`}"></div>
		<div class="active" style="{`width: ${current !== nodes && (1 / (nodes - 1)) * 100}%;`}"></div>
	</div>
	<div class="nodes">
		{#each [...Array(nodes).keys()] as node, i}
			<div class="{`node ${current > i ? 'completed' : current === i ? 'active' : ''}`}"></div>
		{/each}
	</div>
</div>
