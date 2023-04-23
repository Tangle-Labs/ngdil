<style lang="scss">
	.container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		text-align: center;

		& > * {
			padding: 20px 0;
		}

		.desc {
			padding-bottom: 5px;
		}
		.sub-title {
			padding-top: 0;
		}

		.cards {
			width: 100%;

			& > .card {
				width: 100%;
				padding: 10px 0;

				.card-content {
					display: flex;
					justify-content: space-between;
					align-items: center;
					text-align: left;
				}
			}
		}
	}

	.modal-content {
		display: flex;
		transition: all 0.5s;
		padding-bottom: 30px;

		& > * {
			& > * {
				padding: 20px;
			}
			& > .p {
				padding: 10px 20px;
			}
		}

		.left {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			max-width: 500px;
		}

		.right {
			display: flex;
			justify-content: center;
			width: 500px;
			flex-wrap: wrap;
			align-items: center;
			align-content: center;
			text-align: center;
			padding: 10px 20px;

			.qr {
				height: 150px;
				width: 150px;
			}

			.sub-text {
				padding: 0px 20px;
				width: 100%;
				padding-bottom: 30px;
			}
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, Loading, Card, Avatar, Button, Modal } from "$lib/components";
	import { currentJourney } from "$lib/stores/flows.store";
	import { currStep } from "$lib/stores/onboarding.store";

	const journeys = {
		dominique: {
			heading: "Meet Dominique! A student enrolling at KW1 College, NL.",
			p1: "Dominique has just left school and is looking to enrol at Koning Willem I College to study and obtain a Diploma.",
			p2: "Using their self-sovereign identity, help Dominique enrol at college, earn a course credential, share that credential with potential employers, and apply for a new job.",
			img: "/imgs/dominique.png"
		},
		peter: {
			heading: "Meet Peter! A college enrolment officer at KW1 College, NL.",
			p1: "Peter is an enrolment officer at Koning Willem I College looking to support students with their training and enrolment on international internship experiences.",
			p2: "Using self-sovereign identity, help Peter evaluate student internship eligibility, enrol students on internationalisation course, issue course badges, assign internship placements, and verify student completion of internships on their return from their international placements.",
			img: "/imgs/peter.png"
		},
		imani: {
			heading: "Meet Imani! A corporate HR manager at Future Tech Co.",
			p1: "Imani is in charge of the hiring and training of staff at the Future Tech Co. where she employs and developers the company workforce.",
			p2: "Using self-sovereign identity, help Imani in the hiring of new employees, issuing of company ID, creation of internal open badges, and the training and issuing of open badges to employees who successfully completed the company course training.",
			img: "/imgs/imani.png"
		}
	};

	let isOpen = false;
	let selectedJourney: "dominique" | "peter" | "imani" | null = null;
	let qrVisible = false;
	let buttonVisible = false;

	$: journey = selectedJourney && journeys[selectedJourney];
</script>

<div class="modal">
	<Modal bind:isOpen="{isOpen}">
		{#if journey}
			<div class="modal-content">
				<div class="left">
					<div class="avatar">
						<Avatar variant="large" image="{journey.img}" />
					</div>
					<div class="heading">
						<Typography variant="card-header">{journey.heading}</Typography>
					</div>
					<div class="p">
						<Typography>{journey.p1}</Typography>
					</div>
					<div class="p"><Typography>{journey.p2}</Typography></div>
					{#if !qrVisible}
						<div class="button">
							<Button
								variant="white"
								label="Continue"
								onClick="{() => {
									currStep.set(4);
									if (selectedJourney) currentJourney.set(selectedJourney);

									setTimeout(() => {
										buttonVisible = true;
										currStep.set(5);
									}, 8000);
									qrVisible = true;
								}}"
							/>
						</div>
					{/if}
				</div>
				{#if qrVisible}
					<div class="right">
						<img src="/imgs/qr.png" class="qr" />
						<div class="scan-header">
							<Typography variant="card-header"
								>{buttonVisible
									? "Your credentials are confirmed!"
									: "Scan QR code to connect to NGDIL & receive your credentials."}</Typography
							>
						</div>
						<div class="sub-text">
							<Typography variant="sub-text">
								{buttonVisible
									? `Click to begin ${selectedJourney}'s journey.`
									: "In your mobile wallet, scan the QR code to connect to NGDIL, then accept receipt of Peter’s verifiable credentials."}
							</Typography>
						</div>
						{#if buttonVisible}
							<Button
								label="{`Start ${selectedJourney}'s Journey`}"
								onClick="{() => {
									goto(`/demo/journeys/${selectedJourney}`);
								}}"
								variant="secondary"
							/>
						{:else}
							<Loading />
						{/if}
					</div>
				{/if}
			</div>
		{/if}
	</Modal>
</div>
<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>You’re all set! Let’s choose the user journey you would like to explore first.</Typography
		>
	</div>
	<div class="desc">
		<Typography variant="button"
			>Click the get started button to select the journey you would like to experience.
		</Typography>
	</div>
	<div class="sub-title">
		<Typography variant="sub-text">
			(It is recommended to experience the student journey first.)
		</Typography>
	</div>
	<div class="cards">
		<div class="card">
			<Card>
				<div class="card-content">
					<Avatar image="/imgs/dominique.png" />
					<div class="text">
						<div class="heading">
							<Typography variant="card-header">Dominique Veritas</Typography>
						</div>
						<div class="desc">
							<Typography
								>Dominique is a school graduate, excited to enrol as a student at Koning Willem I
								College.</Typography
							>
						</div>
					</div>
					<Button
						variant="secondary"
						onClick="{() => {
							selectedJourney = 'dominique';
							currStep.set(3);
							isOpen = true;
						}}"
						label="Get Started"
					/>
				</div>
			</Card>
		</div>
		<div class="card">
			<Card>
				<div class="card-content">
					<Avatar image="/imgs/peter.png" />
					<div class="text">
						<div class="heading">
							<Typography variant="card-header">Peter van de Meijden</Typography>
						</div>
						<div class="desc">
							<Typography>
								Peter is a college enrolment officer who supports students with international
								internships.
							</Typography>
						</div>
					</div>
					<Button
						variant="secondary"
						onClick="{() => {
							selectedJourney = 'peter';
							currStep.set(3);
							isOpen = true;
						}}"
						label="Get Started"
					/>
				</div>
			</Card>
		</div>
		<div class="card">
			<Card>
				<div class="card-content">
					<Avatar image="/imgs/imani.png" />
					<div class="text">
						<div class="heading">
							<Typography variant="card-header">Imani Jameson</Typography>
						</div>
						<div class="desc">
							<Typography>
								Imani is a corporate HR manager responsible for the hiring and onboarding of new
								staff.
							</Typography>
						</div>
					</div>
					<Button
						variant="secondary"
						onClick="{() => {
							selectedJourney = 'imani';
							currStep.set(3);
							isOpen = true;
						}}"
						label="Get Started"
					/>
				</div>
			</Card>
		</div>
	</div>
</div>
