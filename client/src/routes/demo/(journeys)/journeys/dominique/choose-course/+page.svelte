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
					height: 160px;
					object-fit: cover;
					width: 100%;
					border-top-right-radius: 20px;
					border-top-left-radius: 20px;
				}

				.button {
					width: 100%;
					display: flex;
					justify-content: center;
				}
			}
		}
	}

	.modal-content {
		width: 400px;
		display: flex;
		flex-wrap: wrap;
		padding: 30px;
		box-sizing: border-box;
		justify-content: center;
		text-align: center;

		.p {
			color: var(--black-500);
			font-weight: 300;
		}

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
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, Kw1c, Modal, Loading, Button } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { currNode, dominiqueSelectedCourse, dominqueCourses } from "$lib/stores/flows.store";
	import { apiClient } from "$lib/utils/axios.utils";
	import Qr from "$lib/components/project/Qr/Qr.svelte";
	import { onMount } from "svelte";
	import { websocketClient } from "$lib/utils/ws.util";
	let receivedCreds = false;
	let qr: string;

	// function handleWait() {
	// 	// setTimeout(() => {
	// 	// 	receivedCreds = true;
	// 	// }, 8000);
	// }

	websocketClient.onmessage = (event) => {
		const data = JSON.parse(event.data);
		console.log(data);
		if (data.received) {
			receivedCreds = true;
		}
	};

	let showModal = false;

	onMount(async () => {
		currNode.set(1);

		const {
			data: { request }
		} = await apiClient.post("/api/oid4vp", { presentationStage: "dominiqueEnrolCourse" });
		qr = request;
	});
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>You’re in! Now let’s <Highlight>take a look at the courses</Highlight>available and select
			the course you wish to study.</Typography>
	</div>
	<div class="sub-text">
		<Typography
			>Click the enrol now button to select the course you wish to study to begin the application
			process.</Typography>
	</div>
	<Modal bind:isOpen="{showModal}" borderRadius="{16}">
		<div class="modal-content">
			<img src="/imgs/kw1c-white.png" alt="" class="logo" />
			<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-red-900"
				>{receivedCreds
					? "KW1C HAS RECEIVED YOUR APPLICATION CREDENTIALS."
					: "KW1C IS REQUESTING YOU SHARE YOUR CREDENTIALS FOR COURSE APPLICATION"}</Typography>
			<div class="p">
				{receivedCreds
					? "You may continue further in the browser. "
					: "In your mobile wallet scan the QR Code and accept the request to share the credentials with KW1C to privately send the credentials required."}
			</div>
			{#if !receivedCreds}
				<Qr data="{qr}" size="{320}" />
			{/if}
			{#if receivedCreds}
				<img class="checked" src="/imgs/checked.png" alt="" />
				<Button
					label="CONTINUE"
					variant="kw1c"
					onClick="{() => {
						currNode.set(2);
						goto('/demo/journeys/dominique/study');
					}}" />
			{:else}
				<Loading img="/imgs/blue-loading.png" />
			{/if}
			<div class="subtext">
				<Typography variant="sub-text"
					>{receivedCreds ? "Click continue to proceed" : "Waiting for credentials"}</Typography>
			</div>
		</div>
	</Modal>
	<div class="dash">
		<Kw1c variant="white" title="{'AVAILABLE COURSES'}">
			<div class="content">
				<div class="courses">
					{#each dominqueCourses as course, i (course.name)}
						<div class="course">
							<img src="{course.img}" alt="" />
							<div class="subtext">
								<Typography variant="kw1c-sub-text" fontVariant="kw1c" color="--kw1c-red-900"
									>{course.category.toUpperCase()}</Typography>
							</div>
							<div class="title">
								<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-blue-900"
									>{course.name.toUpperCase()}</Typography>
							</div>

							<div class="button">
								<Button
									onClick="{() => {
										showModal = true;
										dominiqueSelectedCourse.set(i);
										handleWait();
									}}"
									variant="kw1c"
									label="ENROL NOW" />
							</div>
						</div>
					{/each}
				</div>
			</div>
		</Kw1c>
	</div>
</div>
