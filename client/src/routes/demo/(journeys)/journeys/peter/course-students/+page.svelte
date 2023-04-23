<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}
	}

	.dash {
		.content {
			.sidebar {
				position: absolute;
				top: 0;
				left: 0;
				width: 18%;
				background: rgb(255, 255, 255);
				height: 100%;
				filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));
				display: flex;
				flex-wrap: wrap;
				box-sizing: border-box;
				padding: 20px;
				align-content: flex-start;

				.menu-item {
					display: flex;
					width: 100%;
					align-items: center;
					align-content: center;
					margin: 12px 0;

					.square {
						height: 30px;
						width: 30px;
						border-radius: 4px;
						background: var(--kw1c-blue-900);
						margin-right: 10px;
					}

					.rect {
						width: calc(100% - 40px);
						height: 10px;
						background: var(--white-900);
						border-radius: 10px;
					}
				}
			}

			.card {
				width: 72.5%;
				height: calc(100% - 50px);
				background: white;
				position: absolute;
				bottom: 0;
				right: 5%;
				border-top-right-radius: 20px;
				border-top-left-radius: 20px;
				padding: 20px;
				box-sizing: border-box;

				.table {
					display: flex;

					.column {
						display: flex;
						flex-wrap: wrap;
						width: 33%;

						&.col-1 {
							width: 50px;
						}

						.action {
							text-align: center;
							width: 100%;
							display: flex;
							justify-content: center;
						}

						.data,
						.button-container {
							width: 100%;
							height: 60px !important;
							display: flex;
							align-items: center;
							align-content: center;
							padding-bottom: 10px;
						}

						.button-container {
							transform: translateY(-10px);
						}

						.header {
							padding-bottom: 20px;
						}
					}
				}
			}
		}
	}

	.button-continue {
		margin-left: 60%;
		width: 40% !important;
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
		font-family: var(--kw1c-font);
		border: none;
		background: var(--kw1c-red-900);
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
			background: var(--red-700);
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, Kw1c, Modal, Loading, Radio } from "$lib/components";
	import {
		peterAssignedBadges,
		peterAssignedStudent,
		peterChosenStudents
	} from "$lib/stores/flows.store";

	let students = {
		"Sarah Jones": false,
		"Ivar Leifsson": false,
		"Lagertha Bonde": false
	};

	let showModal = false;
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			Exciting times. You have successfully enrolled your students onto the internationalisation
			course.
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>
			Click the continue button to proceed and see what you have achieved so far with self-sovereign
			identity.
		</Typography>
	</div>

	<div class="dash">
		<Kw1c variant="white">
			<div class="sidebar">
				{#each Array(5) as i}
					<div class="menu-item">
						<div class="square"></div>
						<div class="rect"></div>
					</div>
				{/each}
			</div>
			<div class="card">
				<div class="table">
					<div class="column">
						<div class="header">
							<Typography variant="sub-text" fontVariant="kw1c">Student Applicant</Typography>
						</div>
						{#each $peterChosenStudents as student (student)}
							<div class="data">
								<Typography variant="card-header" fontVariant="kw1c" color="--kw1c-blue-900"
									>{student}</Typography
								>
							</div>
						{/each}
					</div>

					<div class="column">
						<div class="header">
							<Typography variant="sub-text" fontVariant="kw1c">Internship Category</Typography>
						</div>

						{#each $peterChosenStudents as student (student)}
							<div class="data">
								<Typography variant="list" fontVariant="kw1c" color="--kw1c-red-900"
									>3D Print Design</Typography
								>
							</div>
						{/each}
					</div>

					<div class="column action">
						<div class="header action">
							<Typography variant="sub-text" fontVariant="kw1c">Course Status</Typography>
						</div>

						{#each $peterChosenStudents as student (student)}
							<div class="data action">
								<Typography variant="status" color="--secondary-900">Pending</Typography>
							</div>
						{/each}
					</div>
				</div>
				<div class="button-continue">
					<button
						class="button"
						on:click="{() => {
							goto('/demo/journeys/peter/enrolled-students');
						}}">Continue</button
					>
				</div>
			</div>
		</Kw1c>
	</div>
</div>
