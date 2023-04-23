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
					padding: 0 20px;
					padding-bottom: 20px;
				}

				img {
					padding: 0;
					width: 100%;
					border-top-right-radius: 20px;
					border-top-left-radius: 20px;
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

		&:hover {
			cursor: pointer;
			background: var(--red-700);
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, Kw1c, Modal, Loading } from "$lib/components";
	import { dominiqueSelectedCourse } from "$lib/stores/flows.store";
	let receivedCreds = false;

	function handleWait() {
		setTimeout(() => {
			receivedCreds = true;
		}, 8000);
	}

	let showModal = false;
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>You've made it to the KW1C website, let's log in to enrol on your course of choice.</Typography
		>
	</div>
	<div class="sub-text">
		<Typography
			>In your identity wallet, scan the QR code and accept the connection request to the KW1C
			learners portal.</Typography
		>
	</div>
	<Modal bind:isOpen="{showModal}">
		<div class="modal-content">
			<img src="/imgs/kw1c-white.png" alt="" class="logo" />
			<Typography variant="card-header" fontVariant="kw1c" color="--kw1c-red-900"
				>{receivedCreds
					? "KW1C HAS RECEIVED YOUR APPLICATION CREDENTIALS."
					: "KW1C IS REQUESTING YOU SHARE YOUR CREDENTIALS FOR COURSE APPLICATION"}</Typography
			>
			<div class="p">
				{receivedCreds
					? "You may continue further in the browser. "
					: "In your mobile wallet accept the request to share the credentials with KW1C to privately send the credentials required."}
			</div>
			{#if receivedCreds}
				<img class="checked" src="/imgs/checked.png" alt="" />
				<button class="button" on:click="{() => goto('/demo/journeys/dominique/study')}"
					>CONTINUE</button
				>
			{:else}
				<Loading img="/imgs/blue-loading.png" />
			{/if}
			<div class="subtext">
				<Typography variant="sub-text"
					>{receivedCreds ? "Click continue to proceed" : "Waiting for credentials"}</Typography
				>
			</div>
		</div>
	</Modal>
	<div class="dash">
		<Kw1c variant="white">
			<div class="content">
				<div class="courses">
					<div class="course">
						<img src="/imgs/engineer.png" alt="" />
						<div class="subtext">
							<Typography variant="sub-text" fontVariant="kw1c" color="--kw1c-red-900"
								>ENGINEERING AND LABORATORY</Typography
							>
						</div>
						<div class="title">
							<Typography variant="card-header" fontVariant="kw1c" color="--kw1c-blue-900"
								>FUTURE ENGINEER</Typography
							>
						</div>

						<button
							class="button"
							on:click="{() => {
								showModal = true;
								dominiqueSelectedCourse.set('engineer');
								handleWait();
							}}">ENROL NOW</button
						>
					</div>
					<div class="course">
						<img src="/imgs/dentist.png" alt="" />
						<div class="subtext">
							<Typography variant="sub-text" fontVariant="kw1c" color="--kw1c-red-900"
								>CARE AND WELFARE</Typography
							>
						</div>
						<div class="title">
							<Typography variant="card-header" fontVariant="kw1c" color="--kw1c-blue-900"
								>DENTAL ASSISTANT</Typography
							>
						</div>

						<button
							class="button"
							on:click="{() => {
								showModal = true;
								dominiqueSelectedCourse.set('dentist');
								handleWait();
							}}">ENROL NOW</button
						>
					</div>

					<div class="course">
						<img src="/imgs/designer.png" alt="" />
						<div class="subtext">
							<Typography variant="sub-text" fontVariant="kw1c" color="--kw1c-red-900"
								>CREATIVE / MEDIA, ICT AND DESIGN</Typography
							>
						</div>
						<div class="title">
							<Typography variant="card-header" fontVariant="kw1c" color="--kw1c-blue-900"
								>MEDIA DESIGNER</Typography
							>
						</div>

						<button
							on:click="{() => {
								showModal = true;
								dominiqueSelectedCourse.set('designer');
								handleWait();
							}}"
							class="button">ENROL NOW</button
						>
					</div>
				</div>
			</div>
		</Kw1c>
	</div>
</div>
