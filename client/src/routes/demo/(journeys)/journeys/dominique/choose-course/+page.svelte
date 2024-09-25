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
			padding-bottom: 25px;

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

				.requirements {
					padding: 0 20px;
					padding-bottom: 20px;
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
		flex-direction: column;
		align-items: center;

		.p {
			color: var(--black-500);
			font-weight: 300;
		}
		.qr {
			width: 100%;
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
	import {
		currNode,
		dominiqueSelectedCourse,
		dominqueCourses,
		eventUri
	} from "$lib/stores/flows.store";
	import { apiClient } from "$lib/utils/axios.utils";
	import { onMount } from "svelte";
	import { PUBLIC_CLIENT_URI } from "$env/static/public";
	import "@tanglelabs/open-id-qr";
	import { _ } from "svelte-i18n";
	import { highlight } from "$lib/utils/highlight";

	let receivedCreds = false;
	let qr: string;
	let showModal = false;

	function watchQr(qr: string) {
		if (!qr) return;
		document.addEventListener("open-id-qr-success", (e) => {
			if (e.detail.type === "vp") receivedCreds = true;
		});
	}

	onMount(async () => {
		currNode.set(1);
		const {
			data: { uri }
		} = await apiClient.post("/api/oid4vp", {
			presentationStage: "dominiqueEnrolCourse",
			clientMetadata: {
				logoUri: new URL("/imgs/kw1c-white.png", PUBLIC_CLIENT_URI).toString(),
				clientName: "Koning Willem I College"
			}
		});
		qr = uri;
	});

	$: watchQr(qr);
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{@html highlight($_("journeys.dominique.select_course"))}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>{$_("journeys.dominique.click_to_enroll")}</Typography>
	</div>
	<Modal bind:isOpen="{showModal}" borderRadius="{16}">
		<div class="modal-content">
			<img src="/imgs/kw1c-white.png" alt="" class="logo" />
			<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-red-900"
				>{receivedCreds
					? $_("journeys.dominique.kw1c_recieved_cred").toUpperCase()
					: $_("journeys.dominique.kw1c_requesting_cred").toUpperCase()}</Typography>
			<div class="p">
				{receivedCreds
					? $_("journeys.dominique.continue_further_in_browser")
					: $_("journeys.dominique.scan_qr_and_accept_request")}
			</div>
			{#if !receivedCreds}
				<div class="qr">
					<open-id-qr request-uri="{qr}" size="{200}" event-stream-uri="{$eventUri}"></open-id-qr>
				</div>
			{/if}
			{#if receivedCreds}
				<img class="checked" src="/imgs/checked.png" alt="" />
				<Button
					label="{$_('components.continue').toUpperCase()}"
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
					>{receivedCreds
						? $_("journeys.dominique.click_to_proceed")
						: $_("journeys.dominique.waiting_for_creds")}</Typography>
			</div>
		</div>
	</Modal>
	<div class="dash">
		<Kw1c variant="white" title="{$_('journeys.dominique.available_courses').toUpperCase()}">
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

							<div class="requirements">
								<Typography>{$_("journeys.dominique.creds_required")}</Typography>
								<ul>
									<li><Typography>{$_("creds.national_id")}</Typography></li>
									<li><Typography>{$_("creds.school_course_certificate")}</Typography></li>
								</ul>
							</div>

							<div class="button">
								<Button
									onClick="{() => {
										showModal = true;
										dominiqueSelectedCourse.set(i);
									}}"
									variant="kw1c"
									label="{$_('components.enroll_now').toUpperCase()}" />
							</div>
						</div>
					{/each}
				</div>
			</div>
		</Kw1c>
	</div>
</div>
