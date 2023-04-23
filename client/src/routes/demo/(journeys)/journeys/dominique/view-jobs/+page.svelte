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
					padding: 10px 20px;
					text-align: center;
					padding-bottom: 0px;
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
		border: none;
		background: var(--bbc-blue);
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
			background: var(--blue-900);
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, BigBusinessCorp, Modal, Loading } from "$lib/components";
	import { dominiqueSelectedCourse } from "$lib/stores/flows.store";

	function handleClick() {
		goto("/demo/journeys/dominique/finalize-application");
	}
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>There are a few jobs available. Let’s select the job to apply for that is relevant to our new
			credential.</Typography
		>
	</div>
	<div class="sub-text">
		<Typography>Select the job you can now apply for with your new credential</Typography>
	</div>

	<div class="dash">
		<BigBusinessCorp>
			<div class="content">
				<div class="courses">
					<div class="course">
						<img src="/imgs/engineer.png" alt="" />
						<div class="title">
							<Typography variant="card-header" color="--bbc-blue">Future Engineer</Typography>
						</div>

						<button
							class="{`button ${$dominiqueSelectedCourse !== 'engineer' && 'disabled'}`}"
							on:click="{handleClick}">Apply Now</button
						>
					</div>
					<div class="course">
						<img src="/imgs/dentist.png" alt="" />

						<div class="title">
							<Typography variant="card-header" color="--bbc-blue">Dental Assistant</Typography>
						</div>

						<button
							class="{`button ${$dominiqueSelectedCourse !== 'dentist' && 'disabled'}`}"
							on:click="{handleClick}">Apply Now</button
						>
					</div>

					<div class="course">
						<img src="/imgs/designer.png" alt="" />
						<div class="title">
							<Typography variant="card-header" color="--bbc-blue">Media Designer</Typography>
						</div>
						<button
							class="{`button ${$dominiqueSelectedCourse !== 'designer' && 'disabled'}`}"
							on:click="{handleClick}">Apply Now</button
						>
					</div>
				</div>
			</div>
		</BigBusinessCorp>
	</div>
</div>
