<style lang="scss">
	.button {
		padding: 8px 16px;
		border: 0;
		transition: all 0.5s;
		border-radius: 5px;
		outline: none;
		text-transform: capitalize;
		box-shadow: var(--box-shadow);

		&:hover {
			cursor: pointer;
		}

		&.primary {
			background: var(--primary-900);

			&:hover {
				background: var(--primary-700);
			}
		}

		&.secondary {
			background: var(--secondary-900);

			&:hover {
				background: var(--secondary-700);
			}
		}
	}
</style>

<script lang="ts">
	export let variant: "primary" | "secondary" | "white" = "primary";
	import Typography from "../Typography/Typography.svelte";
	export let label: string;
	export let onClick: (...args: any[]) => void;
</script>

<button class="{`button ${variant}`}" on:click="{onClick}">
	<Typography variant="button" color="{variant === 'primary' ? '--white-300' : ''}"
		>{label}</Typography>
</button>
