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

				.card-header {
					display: flex;
					justify-content: space-between;
					align-items: center;
					align-content: center;
					padding-bottom: 40px;

					.button-container {
						width: 40%;
						text-align: center;
					}
				}

				.table {
					display: flex;

					.column {
						display: flex;
						flex-wrap: wrap;
						width: 20%;

						&:nth-of-type(1) {
							max-width: 60px;
						}

						&.type {
							width: 50%;
						}

						&:nth-of-type(3) {
							width: 30%;
						}

						&:nth-of-type(4) {
							width: 10%;
						}

						&:nth-of-type(5) {
							padding: 0px 10px;
							width: 30px;
						}

						.data,
						.circle-container,
						.button-container {
							width: 100%;
							height: 50px !important;
							display: flex;
							align-items: center;
							align-content: center;
							padding-bottom: 10px;
						}

						.header {
							height: 30px;
						}

						.action {
							text-align: center;
							width: 100%;
						}

						.circle-container {
							flex-basis: 100%;
						}

						.circle {
							height: 25px;
							width: 25px;
							border-radius: 30px;
							border: 1px solid var(--black-300);
							box-sizing: border-box;
							background: var(--white-700);
						}
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
	}

	.button {
		font-family: var(--kw1c-font);
		border: none;
		background: var(--kw1c-red-900);
		color: var(--white-300);
		font-size: 20px;
		font-weight: 500;
		width: calc(100% - 40px);
		box-sizing: border-box;
		border-radius: 40px;
		padding: 12px;
		margin-bottom: 0;
		transition: 0.5s all;

		&.loading {
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
	import { Typography, Kw1c, Modal, Loading, CredModal } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { credentials } from "$lib/stores/creds";
	import {
		currNode,
		dominiqueSelectedCourse,
		dominqueCourses,
		peterAssignecCompanyCountry,
		peterAssignedCompany,
		peterAssignedStudent,
		peterChosenStudent
	} from "$lib/stores/flows.store";
	import { onMount } from "svelte";
	let receivedCreds = false;
	let loading = false;
	let showModal = false;

	function handleWait() {
		showModal = false;
		loading = true;
		currNode.set(2);
		setTimeout(() => {
			receivedCreds = true;
			loading = false;
			currNode.set(3);
		}, 8000);
	}

	onMount(() => {
		currNode.set(1);
	});
</script>

<Modal bind:isOpen="{showModal}" borderRadius="{16}">
	<div class="modal-content">
		<img src="/imgs/kw1c-white.png" alt="" class="logo" />
		<span style:text-transform="uppercase">
			<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-red-900"
				>YOU ARE ABOUT TO REQUEST THE FOLLOWING CREDENTIALS:
			</Typography>
		</span>
		<div class="credentials">
			<Typography variant="kw1c-sub-text">
				KW1C College ID <br />
				Internationalisation Badge <br />
				Internship Completion Badge <br />
				Internship Reference <br />
			</Typography>
		</div>
		<div class="p">
			<Typography variant="sub-text"
				>Click the REQUEST CREDENTIALS button to confirm and issue the request.</Typography>
		</div>
		<button class="button" on:click="{handleWait}">REQUEST CREDENTIALS</button>
		<div class="subtext">
			<Typography variant="sub-text" />
		</div>
	</div>
</Modal>
<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{#if !receivedCreds}
				To <Highlight
					>confirm {$peterAssignedStudent.split(" ")[0]}’s internship completion,</Highlight> let’s request
				the credentials for verification.
			{:else}
				It looks like {$peterAssignedStudent?.split(" ")[0]} had a very <Highlight
					>successful international internship.</Highlight>
				Take a look at the verified credentials.
			{/if}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography
			>{!receivedCreds
				? "Click the request credentials button to verify the student credentials."
				: "Click the eye icons next to each credential to view the credentials. Click continue to proceed."}</Typography>
	</div>

	<div class="dash">
		<Kw1c variant="white" title="STUDENT INTERNSHIP PROGRESS">
			<div class="sidebar">
				{#each Array(5) as i}
					<div class="menu-item">
						<div class="square"></div>
						<div class="rect"></div>
					</div>
				{/each}
			</div>
			<div class="card">
				<div class="card-header">
					<div class="student">
						<div class="name">
							<Typography variant="kw1c-header" fontVariant="kw1c" color="--kw1c-blue-900"
								>{$peterAssignedStudent?.toUpperCase()}</Typography>
						</div>
						<div class="course">
							<Typography fontVariant="kw1c" variant="kw1c-sub-text" color="--kw1c-red-900">
								{$peterAssignedCompany}, {$peterAssignecCompanyCountry}
							</Typography>
						</div>
					</div>
					<div class="button-container">
						{#if receivedCreds}
							<button
								class="{`button ${loading && 'loading'}`}"
								on:click="{() => goto('/demo/journeys/peter/verified-internship')}">
								CONTINUE
							</button>
						{:else}
							<button
								class="{`button ${loading && 'loading'}`}"
								on:click="{() => {
									showModal = true;
								}}">
								{loading ? "VERIFYING" : "REQUEST CREDENTIALS"}
							</button>
						{/if}
					</div>
				</div>
				<div class="table">
					<div class="column">
						<div class="header">
							<Typography variant="sub-text" fontVariant="kw1c" color="--white-300">.</Typography>
						</div>
						{#each Array(4) as _, i}
							<div class="circle-container">
								{#if loading}
									<Loading img="/imgs/blue-loading.png" size="30px" />
								{:else if !receivedCreds}
									<div class="circle"></div>
								{:else}
									<img src="/imgs/verified.png" alt="" class="circle" />
								{/if}
							</div>
						{/each}
					</div>
					<div class="column type">
						<div class="header">
							<Typography variant="sub-text" fontVariant="kw1c">Credential Type</Typography>
						</div>
						<div class="data">
							<Typography variant="card-header" fontVariant="kw1c">KW1C COLLEGE ID</Typography>
						</div>
						<div class="data">
							<Typography variant="card-header" fontVariant="kw1c"
								>INTERNATIONALISATION BADGE</Typography>
						</div>
						<div class="data">
							<Typography variant="card-header" fontVariant="kw1c">INTERNSHIP BADGE</Typography>
						</div>
						<div class="data">
							<Typography variant="card-header" fontVariant="kw1c">INTERNSHIP REFERENCE</Typography>
						</div>
					</div>

					<div class="column">
						<div class="header">
							<Typography variant="sub-text" fontVariant="kw1c" color="--black-500"
								>Issuer</Typography>
						</div>
						<div class="data">
							<Typography variant="kw1c-sub-text" fontVariant="kw1c" color="--black-500"
								>Koning Willem I College</Typography>
						</div>
						<div class="data">
							<Typography variant="kw1c-sub-text" fontVariant="kw1c" color="--black-500"
								>Koning Willem I College</Typography>
						</div>
						<div class="data">
							<Typography variant="kw1c-sub-text" fontVariant="kw1c" color="--black-500"
								>{$peterAssignedCompany}</Typography>
						</div>
						<div class="data">
							<Typography variant="kw1c-sub-text" fontVariant="kw1c" color="--black-500"
								>{$peterAssignedCompany}</Typography>
						</div>
					</div>

					<div class="column">
						<div class="header">
							<Typography variant="sub-text" fontVariant="kw1c">Status</Typography>
						</div>
						{#each Array(4) as _, i}
							<div class="data">
								{#if receivedCreds}
									<Typography variant="status" color="--green-900">Verified</Typography>
								{:else}
									<Typography variant="status" color="--secondary-900">Pending</Typography>
								{/if}
							</div>
						{/each}
					</div>

					<div class="column">
						{#if receivedCreds}
							<div class="header">
								<Typography variant="sub-text" fontVariant="kw1c" color="--white-300">_</Typography>
							</div>
							<div class="data">
								<CredModal
									name="College ID"
									issuer="Koning Willem I College"
									credential="{{
										...credentials.collegeId,
										'Student Name': $peterChosenStudent
									}}"
									logo="/imgs/kw1c-white.png" />
							</div>
							<div class="data">
								<CredModal
									name="Internationalisation Badge"
									issuer="Koning Willem I College"
									logo="/imgs/kw1c-white.png"
									credential="{{ ...credentials.internationalisation }}" />
							</div>
							<div class="data">
								<CredModal
									name="Internship Badge"
									issuer="{$peterAssignedCompany}"
									logo="{dominqueCourses[2].internships.find(
										(i) => i.name === $peterAssignedCompany
									).img}"
									credential="{{
										...credentials.internshipBadge,
										'Intern Name': $peterChosenStudent,
										Issuer: $peterAssignedCompany,
										Country: $peterAssignecCompanyCountry
									}}" />
							</div>
							<div class="data">
								<CredModal
									name="Internship Reference"
									issuer="{$peterAssignedCompany}"
									logo="{dominqueCourses[2].internships.find(
										(i) => i.name === $peterAssignedCompany
									).img}"
									credential="{{
										...credentials.internshipReference,
										Country: $peterAssignecCompanyCountry
									}}" />
							</div>
						{/if}
					</div>
				</div>
			</div>
		</Kw1c>
	</div>
</div>
