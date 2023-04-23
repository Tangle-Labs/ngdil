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
			.text-block {
				padding-bottom: 20px;
			}

			.dash-card {
				width: 72.5%;
				position: absolute;
				top: 50px;
				right: 5%;
				border-top-right-radius: 20px;
				border-top-left-radius: 20px;

				.dash-content {
					display: flex;
					width: 100%;
					justify-content: space-between;
					padding-bottom: 20px;

					.meta {
						width: 25%;
					}

					.internship {
						width: 35%;
						padding: 0;

						img {
							width: 100%;
						}

						.intern-content {
							padding: 20px;

							.button {
								width: 100%;
								margin: 0;
								margin-top: 20px;
							}
						}
					}
				}
			}

			.card {
				background: white;
				border-radius: 20px;
				padding: 20px;
				box-sizing: border-box;
				filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));
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

	.button-container {
		margin-left: 60%;
		width: 40%;
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
		peterAssignedCompany,
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
	<Modal bind:isOpen="{showModal}">
		<div class="modal-content">
			<img src="/imgs/kw1c-white.png" alt="" class="logo" />
			<Typography variant="card-header" fontVariant="kw1c" color="--kw1c-red-900"
				>You are about to assign {$peterAssignedStudent?.split(" ")[0]}'s an internship placement
				with:<br />
			</Typography>
			<Typography variant="card-header" fontVariant="kw1c" color="--kw1c-blue-900"
				>{$peterAssignedCompany}</Typography
			>
			<div class="p">
				Click the ASSIGN INTERNSHIP button to assign your student internship placement.
			</div>
			<button class="button" on:click="{() => goto('/demo/journeys/peter/student-placed')}"
				>ISSUE BADGES</button
			>
			<div class="subtext">
				<Typography variant="sub-text" />
			</div>
		</div>
	</Modal>

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
			<div class="card dash-card">
				<div class="dash-content">
					<div class="meta">
						<div class="text-block">
							<div class="header">
								<Typography fontVariant="kw1c" variant="sub-text">Student Applicant</Typography>
							</div>
							<div class="content">
								<Typography fontVariant="kw1c" variant="heading" color="--kw1c-blue-900"
									>{$peterAssignedStudent}</Typography
								>
							</div>
						</div>

						<div class="text-block">
							<div class="header">
								<Typography fontVariant="kw1c" variant="sub-text">Internship Category</Typography>
							</div>
							<div class="content">
								<Typography fontVariant="kw1c" variant="list" color="--kw1c-red-900"
									>3D Print Design</Typography
								>
							</div>
						</div>
					</div>

					<div class="card internship">
						<img src="/imgs/engineer.png" alt="" />
						<div class="intern-content">
							<div class="location">
								<Typography variant="status" fontVariant="kw1c" color="--kw1c-red-900"
									>Cork, Ireland</Typography
								>
							</div>
							<div class="org">
								<Typography variant="card-header" fontVariant="kw1c" color="--kw1c-blue-900"
									>Irish Future Print Co.</Typography
								>
							</div>
							<button
								class="button"
								on:click="{() => {
									peterAssignedCompany.set('Irish Future Print Co.');
									showModal = true;
								}}">ASSIGN PLACEMENT</button
							>
						</div>
					</div>

					<div class="card internship">
						<img src="/imgs/engineer.png" alt="" />
						<div class="intern-content">
							<div class="location">
								<Typography variant="status" fontVariant="kw1c" color="--kw1c-red-900"
									>Oslo, Norway</Typography
								>
							</div>
							<div class="org">
								<Typography variant="card-header" fontVariant="kw1c" color="--kw1c-blue-900"
									>3D Printers Norge</Typography
								>
							</div>
							<button
								class="button"
								on:click="{() => {
									peterAssignedCompany.set('3D Printers Norge');
									showModal = true;
								}}">ASSIGN PLACEMENT</button
							>
						</div>
					</div>
				</div>
			</div>
		</Kw1c>
	</div>
</div>
