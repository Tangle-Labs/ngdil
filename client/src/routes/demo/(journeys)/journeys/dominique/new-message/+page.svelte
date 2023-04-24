<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.dash {
			.content {
				width: 100%;
				padding: 40px;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-content: flex-start;
				align-items: flex-start;

				.avatar {
					width: 30%;
					display: flex;
					flex-wrap: wrap;
					align-items: flex-start;
					align-content: flex-start;
					justify-content: center;
					text-align: center;
					padding: 20px;
					box-sizing: border-box;
					border-radius: 10px;
					border: 1px solid var(--black-300);
					background: white;

					.welcome {
						padding-top: 20px;
					}
				}

				.cards {
					width: 50%;
					margin: 0px 20px;
					.card {
						height: 30%;
						width: 100%;
						padding: 15px;
						background: white;
						border-radius: 10px;
						box-sizing: border-box;
						margin-bottom: 20px;
						border: 1px solid var(--black-300);
						display: flex;
						align-items: center;
						align-content: center;

						&.card-1 {
							flex-wrap: wrap;
							.details {
								display: flex;
								padding: 10px 0;
								align-items: center;
								align-content: center;

								.logo {
									width: 80px;
								}
							}
						}

						.pic {
							height: 70px;
							width: 100px;
							background: var(--white-700);
							border-radius: 10px;
						}

						.bars {
							padding: 0 15px;
							width: calc(100% - 115px);

							.bar {
								width: 100%;
								height: 10px;
								border-radius: 10px;
								background: var(--white-900);
								margin: 10px;

								&:nth-of-type(1) {
									width: 70%;
								}

								&:nth-of-type(3) {
									width: 40%;
								}
							}
						}
					}
				}
				.share {
					width: 35%;
					padding: 20px;
					background: white;
					border: 1px solid var(--black-300);
					border-radius: 10px;
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					text-align: center;

					.credential {
						width: 100%;
					}

					img {
						height: 80px;
						padding: 15px 0;
					}
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

		.heading {
			text-align: left;
			width: 100%;
		}

		.message {
			text-align: left;
		}
	}

	.button {
		border: none;
		background: var(--open-jobs-blue-900);
		color: var(--white-300);
		font-size: var(--button-text-size);
		width: calc(100% - 40px);
		margin: 20px;
		box-sizing: border-box;
		border-radius: 40px;
		padding: 10px;
		margin-bottom: 0;
		transition: 0.5s all;

		&:hover {
			cursor: pointer;
			background: var(--blue-900);
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, OpenJobsNetwork, Avatar, Modal, Loading } from "$lib/components";
	import { dominiqueSelectedCourse, dominqueCourses } from "$lib/stores/flows.store";
	let showModal = false;
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>You shared your credential and an interested employer has messaged you after seeing your
			skills.</Typography
		>
	</div>
	<div class="sub-text">
		<Typography>Click view message to see what the employer has to say.</Typography>
	</div>
	<Modal bind:isOpen="{showModal}">
		<div class="modal-content">
			<div class="heading">
				<Typography variant="card-header" color="--open-jobs-blue-900"
					>from Big Business Corp.</Typography
				>
			</div>
			<div class="message">
				<Typography>
					Hi Dominique <br /><br />

					Congratulations on your new qualification. <br /><br />

					We saw your skills on your profile and would like to invite you to apply for a role at the
					Big Business Corp.
					<br /><br />
					Looking forward to your application. <br /><br />

					Regards <br /> Dasha Bloomberg
				</Typography>
			</div>
			<button class="button" on:click="{() => goto('/demo/journeys/dominique/shared-cred')}"
				>CONTINUE</button
			>
			<div class="subtext">
				<Typography variant="sub-text">Click continue to proceed</Typography>
			</div>
		</div>
	</Modal>
	<div class="dash">
		<OpenJobsNetwork>
			<div class="content">
				<div class="avatar">
					<Avatar variant="small" image="/imgs/dominique.png" />
					<div class="welcome">
						<Typography variant="button">Welcome, Dominique Veritas</Typography>
					</div>
				</div>

				<div class="cards">
					<div class="card card-1">
						<div class="sub-text">
							<Typography variant="sub-text"
								>Dominique Veritas just shared a new credential</Typography
							>
						</div>
						<div class="details">
							<img src="/imgs/kw1c-white.png" class="logo" alt="" />
							<div class="text">
								<div class="heading">
									<Typography variant="button"
										>{dominqueCourses[$dominiqueSelectedCourse].name}</Typography
									>
								</div>
								<div class="sub-text">
									<Typography variant="sub-text">Issued by Konning Willem 1 College</Typography>
								</div>
							</div>
						</div>
					</div>

					<div class="card">
						<div class="pic"></div>
						<div class="bars">
							<div class="bar"></div>
							<div class="bar"></div>
							<div class="bar"></div>
						</div>
					</div>

					<div class="card">
						<div class="pic"></div>
						<div class="bars">
							<div class="bar"></div>
							<div class="bar"></div>
							<div class="bar"></div>
						</div>
					</div>
				</div>

				<div class="share">
					<div class="credential">
						<Typography variant="card-header" color="--open-jobs-blue-900">Your Messages</Typography
						>
					</div>
					<img src="/imgs/inbox.png" alt="" class="logo" />
					<div class="credential">
						<Typography variant="button">You have a new message</Typography>
					</div>
					<div class="issued-by">
						<Typography variant="sub-text">from Big Business Corp.</Typography>
					</div>
					<button
						class="button"
						on:click="{() => {
							showModal = true;
						}}">View Message</button
					>
				</div>
			</div>
		</OpenJobsNetwork>
	</div>
</div>
