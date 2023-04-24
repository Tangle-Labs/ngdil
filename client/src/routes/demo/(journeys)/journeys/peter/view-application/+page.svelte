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

						.data,
						.circle-container,
						.button-container {
							width: 100%;
							height: 60px !important;
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
	import { Typography, Kw1c, Modal, Loading } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { dominiqueSelectedCourse, peterChosenStudent } from "$lib/stores/flows.store";
	let receivedCreds = false;
	let loading = false;

	function handleWait() {
		loading = true;
		setTimeout(() => {
			receivedCreds = true;
			loading = false;
		}, 8000);
	}
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{#if !receivedCreds}
				To evaluate {$peterChosenStudent?.split(" ")[0]}’s eligibility <Highlight>
					let’s request the credentials</Highlight>
				required to participate in the internship.
			{:else}
				It appears {$peterChosenStudent?.split(" ")[0]} is missing an internationalisation badge. Let’s
				enrol them onto the course.
			{/if}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography
			>{receivedCreds
				? "Click the enrol student button to enrol them onto the internationalisation course."
				: "Click the request credentials button to get the students credentials"}</Typography>
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
				<div class="card-header">
					<div class="student">
						<div class="name">
							<Typography variant="card-header" fontVariant="kw1c" color="--kw1c-blue-900"
								>{$peterChosenStudent}</Typography>
						</div>
						<div class="course">
							<Typography fontVariant="kw1c" color="--kw1c-red-900">3d Print Design</Typography>
						</div>
					</div>
					<div class="button-container">
						{#if receivedCreds}
							<button
								class="{`button ${loading && 'loading'}`}"
								on:click="{() => goto('/demo/journeys/peter/enrol-students')}">
								ENROL STUDENT
							</button>
						{:else}
							<button class="{`button ${loading && 'loading'}`}" on:click="{handleWait}">
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
									<img
										src="{`/imgs/${i !== 3 ? 'verified' : 'missing'}.png`}"
										alt=""
										class="circle" />
								{/if}
							</div>
						{/each}
					</div>
					<div class="column type">
						<div class="header">
							<Typography variant="sub-text" fontVariant="kw1c">Credential Type</Typography>
						</div>
						<div class="data">
							<Typography variant="card-header" fontVariant="kw1c">National ID</Typography>
						</div>
						<div class="data">
							<Typography variant="card-header" fontVariant="kw1c">College ID</Typography>
						</div>
						<div class="data">
							<Typography variant="card-header" fontVariant="kw1c">Course Badge</Typography>
						</div>
						<div class="data">
							<Typography variant="card-header" fontVariant="kw1c"
								>Internationalisation Badge</Typography>
						</div>
					</div>

					<div class="column">
						<div class="header">
							<Typography variant="sub-text" fontVariant="kw1c">Issuer</Typography>
						</div>
						<div class="data">
							<Typography variant="list" fontVariant="kw1c">The Government</Typography>
						</div>
						<div class="data">
							<Typography variant="list" fontVariant="kw1c">Konning Willem 1 College</Typography>
						</div>
						<div class="data">
							<Typography variant="list" fontVariant="kw1c">Konning Willem 1 College</Typography>
						</div>
						<div class="data">
							<Typography variant="list" fontVariant="kw1c">Konning Willem 1 College</Typography>
						</div>
					</div>

					<div class="column">
						<div class="header">
							<Typography variant="sub-text" fontVariant="kw1c">Status</Typography>
						</div>
						{#each Array(4) as _, i}
							<div class="data">
								{#if receivedCreds}
									{#if i !== 3}
										<Typography variant="status" color="--green-900">Verified</Typography>
									{:else}
										<Typography variant="status" color="--red-900">Missing</Typography>
									{/if}
								{:else}
									<Typography variant="status" color="--secondary-900">Pending</Typography>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			</div>
		</Kw1c>
	</div>
</div>
