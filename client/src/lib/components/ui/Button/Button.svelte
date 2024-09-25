<style lang="scss">
	.button {
		padding: 8px 32px;
		border: 0;
		transition: all 0.5s;
		min-width: max-content;
		border-radius: 5px;
		outline: none;
		text-transform: capitalize;
		box-shadow: var(--box-shadow);
		border: solid 1px var(--black-900);

		&:hover {
			cursor: pointer;
		}

		&.future-tech {
			box-shadow: unset;
			border: unset;
			background: var(--future-tech-green-300);
			border-radius: 0;

			&:hover {
				background: --future-tech-green-300;
			}
		}

		&.future-tech-disabled {
			background: var(--white-900);
			box-shadow: unset;
			border: unset;
			border-radius: 0;

			&:hover {
				cursor: unset;
			}
		}

		&.primary {
			background: var(--primary-900);

			&:hover {
				background: var(--primary-700);
			}
		}

		&.kw1c {
			background: var(--kw1c-red-900);
			width: calc(100% - 40px);
			box-sizing: border-box;
			border-radius: 40px;
			padding: 12px;
			transition: 0.5s all;
			border: none;
			box-shadow: unset;

			&:hover {
				cursor: pointer;
				background: var(--red-700);
			}
		}

		&.completed {
			background: var(--green-900);

			&:hover {
				background: var(--green-700);
			}
		}

		&.disabled {
			background: var(--white-300);

			&:hover {
				cursor: unset;
			}
		}

		&.secondary {
			background: var(--secondary-900);

			&:hover {
				background: var(--secondary-700);
			}
		}

		&.white {
			background: var(--white-300);
		}
	}
</style>

<script lang="ts">
	import Typography from "../Typography/Typography.svelte";

	export let variant:
		| "primary"
		| "secondary"
		| "white"
		| "completed"
		| "disabled"
		| "kw1c"
		| "future-tech"
		| "future-tech-disabled" = "primary";
	export let label: string;
	export let onClick: (...args: unknown[]) => void;
</script>

<button class="{`button ${variant}`}" on:click="{onClick}">
	<Typography
		variant="{['kw1c'].includes(variant) ? 'kw1c-impact' : 'button'}"
		fontVariant="{['future-tech', 'future-tech-disabled'].includes(variant) ? 'kw1c' : 'main'}"
		color="{['primary', 'future-tech', 'future-tech-disabled', 'kw1c'].includes(variant)
			? '--white-300'
			: ''}">{label}</Typography>
</button>
