<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.dashboard {
			padding: 50px 15%;

			.details {
				padding-top: 20px;
				display: flex;
				align-items: center;
				align-content: center;
				width: 100%;
				justify-content: space-between;
			}

			.cards {
				width: 100%;
				display: flex;
				justify-content: space-between;
				padding-top: 30px;

				.card {
					padding: 20px;
					box-sizing: border-box;
					width: 23%;
					border-radius: 15px;
					background: white;
					height: fit-content;
					filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));

					.dash {
						height: 20px;
						background: var(--white-900);
						border-radius: 5px;
						margin-bottom: 10px;
					}

					.red-dash {
						height: 15px;
						background: var(--red-700);
						width: 60%;
					}

					.blue-dash {
						background: var(--blue-700);
					}

					.gray-dash {
						height: 14px;
						width: 85%;

						&:nth-last-of-type(2) {
							width: 70%;
						}
					}
				}
			}
		}
	}

	.button {
		font-family: var(--kw1c-font);
		border: none;
		background: var(--kw1c-red-900);
		color: var(--white-300);
		font-size: var(--button-text-size);
		box-sizing: border-box;
		border-radius: 40px;
		padding: 10px 40px;
		transition: 0.5s all;

		&:hover {
			cursor: pointer;
			background: var(--red-700);
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

		.button {
			width: 100%;
			margin-top: 20px;
		}

		.subtext {
			width: 100%;
		}

		.checked {
			height: 60px;
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, Kw1c, Modal, Loading, Hightlight } from "$lib/components";
	import { dominqueCourses, dominiqueSelectedCourse } from "$lib/stores/flows.store";

	let progress = 0;
	let studied = false;
	let showModal = false;
	let receivedCreds = false;
</script>

<div class="container">
	<Modal bind:isOpen="{showModal}">
		<div class="modal-content">
			<img src="/imgs/kw1c-white.png" alt="" class="logo" />
			<Typography variant="card-header" fontVariant="kw1c" color="--kw1c-red-900"
				>{receivedCreds
					? "YOU HAVE RECEIVED & ACCEPTED YOUR NEW COURSE CREDENTIAL."
					: "KW1C HAS SENT YOU A NEW COURSE CREDENTIAL"}</Typography
			>
			<div class="p">
				{receivedCreds
					? "This is now visible in your wallet and free for you to share with anyone, at any time. "
					: "In your mobile wallet accept the credential from KW1C to receive your new qualification."}
			</div>
			{#if receivedCreds}
				<img class="checked" src="/imgs/checked.png" alt="" />
				<button class="button" on:click="{() => goto('/demo/journeys/dominique/finished-course')}"
					>CONTINUE</button
				>
			{:else}
				<Loading img="/imgs/blue-loading.png" />
			{/if}
			<div class="subtext">
				<Typography variant="sub-text"
					>{receivedCreds
						? "Click Continue to proceed"
						: "Awaiting credential acceptance..."}</Typography
				>
			</div>
		</div>
	</Modal>
	<div class="heading">
		{#if studied}
			<Typography variant="heading">
				<Hightlight>Exciting times. You have completed your course</Hightlight>with top marks. Let’s
				get your credential.
			</Typography>
		{:else}
			<Typography variant="heading">
				Congratulations. <Hightlight>You have been accepted</Hightlight> on the course. Now you need
				to complete your studies.</Typography
			>
		{/if}
	</div>
	<div class="sub-text">
		<Typography>
			{#if studied}
				Click the get credential button to receive your credential from KW1C.
			{:else}
				Click the start studying button to continue and complete the course.
			{/if}</Typography
		>
	</div>
	<div class="dash-outer">
		<Kw1c variant="blue">
			<div class="dashboard">
				<div class="title">
					<Typography variant="card-header" fontVariant="kw1c"
						>{studied
							? "CONGRATULATIONS DOMINIQUE, YOU HAVE COMPLETED YOUR COURSE!"
							: "HELLO DOMINIQUE, WELCOME TO YOUR NEW COURSE"}</Typography
					>
				</div>
				<div class="details">
					<div class="text">
						<div class="category">
							<Typography variant="status" fontVariant="kw1c" color="--kw1c-red-900"
								>{dominqueCourses[$dominiqueSelectedCourse].category.toUpperCase()}</Typography
							>
						</div>
						<div class="course">
							<Typography variant="card-header" fontVariant="kw1c" color="--kw1c-blue-900"
								>{dominqueCourses[$dominiqueSelectedCourse].name.toUpperCase()}</Typography
							>
						</div>
					</div>
					{#if studied}
						<button
							class="button"
							on:click="{() => {
								showModal = true;
								setTimeout(() => {
									receivedCreds = true;
								}, 9000);
							}}">GET CREDENTIAL</button
						>
					{:else}
						<button
							class="button"
							on:click="{() => {
								studied = true;
								progress = 100;
							}}">START STUDYING</button
						>
					{/if}
				</div>
				<div class="cards">
					{#each Array(4) as i}
						<div class="card">
							<div class="dash red-dash"></div>
							<div class="dash blue-dash"></div>
							<div class="dash gray-dash"></div>
							<div class="dash gray-dash"></div>
							<div class="progress">
								<Typography variant="status" fontVariant="kw1c" color="--kw1c-blue-900"
									>{progress}%</Typography
								>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</Kw1c>
	</div>
</div>
