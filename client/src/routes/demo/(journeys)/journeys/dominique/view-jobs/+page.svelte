<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.courses {
			width: 90%;
			display: flex;
			transform: translate(6%, 10%);
			justify-content: space-between;
			padding-bottom: 20px;

			.course {
				width: 32%;
				box-sizing: border-box;
				background: white;
				box-sizing: border-box;
				border-radius: 20px;
				padding-bottom: 20px;
				filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));

				.subtext {
					padding: 20px;
					padding-bottom: 5px;
				}

				.title {
					padding: 10px 20px;
					text-align: center;
					padding-bottom: 0px;
				}

				.bars {
					width: 100%;
					margin-top: 30px;

					.bar {
						height: 10px;
						margin: 10px 20%;
						box-sizing: border-box;
						border-radius: 10px;
						background-color: var(--white-900);

						&:last-of-type {
							margin: 10px 25%;
						}
					}
				}

				img {
					padding: 0;
					width: 100%;
					border-top-right-radius: 20px;
					border-top-left-radius: 20px;
					height: 175px;
					object-fit: cover;
				}
			}
		}
	}

	.modal-content {
		width: 400px;
		background: white;
		display: flex;
		flex-wrap: wrap;
		padding: 30px;
		box-sizing: border-box;
		justify-content: center;
		text-align: center;

		& > * {
			padding: 10px 0;
		}

		img {
			height: 120px;
		}

		.subtext {
			width: 100%;
		}

		.checked {
			height: 60px;
		}
	}

	.button {
		border: none;
		background: var(--bbc-blue);
		color: var(--white-300);
		font-size: var(--button-text-size);
		width: calc(100% - 40px);
		margin: 20px;
		box-sizing: border-box;
		border-radius: 40px;
		padding: 10px;
		margin-bottom: 0;
		transition: 0.5s all;

		&.disabled {
			background: var(--black-300);

			&:hover {
				cursor: unset;
				background: var(--black-300);
			}
		}

		&:hover {
			cursor: pointer;
			background: var(--blue-900);
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, BigBusinessCorp } from "$lib/components";
	import { currNode, dominiqueSelectedCourse, dominqueCourses } from "$lib/stores/flows.store";
	import { highlight } from "$lib/utils/highlight";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";

	function handleClick(i: number) {
		if ($dominiqueSelectedCourse !== i) return;
		goto("/demo/journeys/dominique/finalize-application");
	}

	onMount(() => {
		currNode.set(2);
	});
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{@html highlight($_("journeys.dominique.jobs_available_select_one_job"))}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>{$_("journeys.dominique.select_job_with_new_cred")}</Typography>
	</div>

	<div class="dash">
		<BigBusinessCorp heading="{$_('journeys.dominique.bbc_job_board')}">
			<div class="content">
				<div class="courses">
					{#each dominqueCourses as course, i (course.name)}
						<div class="course">
							<img src="{course.img}" alt="" />
							<div class="title">
								<Typography variant="card-header" color="--bbc-blue">{course.jobName}</Typography>
							</div>
							<div class="bars">
								<div class="bar"></div>
								<div class="bar"></div>
							</div>
							<button
								class="{`button ${$dominiqueSelectedCourse !== i && 'disabled'}`}"
								on:click="{() => {
									handleClick(i);
								}}">{$_("components.apply_now")}</button>
						</div>
					{/each}
				</div>
			</div>
		</BigBusinessCorp>
	</div>
</div>
