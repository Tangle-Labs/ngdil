<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.card {
			background: white;
			width: 100%;

			.card-content {
				padding: 20px;
				display: flex;

				.content {
					width: 50%;

					.list {
						display: flex;
						justify-content: flex-start;
						align-items: center;
						align-content: center;
						padding: 15px 0;

						img {
							height: 25px;
							padding-right: 5px;
						}
					}

					.p {
						padding: 30px 0;
					}
				}

				.img {
					width: 50%;
					position: relative;
					box-sizing: border-box;
					margin-left: 30px;
					background: var(--white-500);
					border: 1px solid black;
					border-radius: 10px;

					img {
						display: block;
						position: absolute;
						top: 50%;
						left: 50%;
						height: 100px;
						transform: translate(-50%, -50%);
					}
				}
			}
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, Card, Button } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { dominiqueEarnedCourseCred } from "$lib/stores/flows.store";

	function handleFinishCourse() {
		dominiqueEarnedCourseCred.set(true);
		goto("/demo/journeys/dominique");
	}
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>Amazing, <Highlight>you’ve successfully enrolled with KW1C</Highlight> and earned your course
			credential.</Typography>
	</div>
	<div class="sub-text">
		<Typography
			>Here is what you have achieved so far with your self-sovereign identity:</Typography>
	</div>
	<div class="card">
		<Card>
			<div class="card-content">
				<div class="content">
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">Passwordless login to the KW1C portal</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">Privately shared your enrolment credentials</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">Completed your course at KW1C</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">Privately received a new course credential</Typography>
					</div>
					<div class="p">
						<Typography>
							Now you have your new credential, let’s get sharing it with potential employers. Click
							continue to move on with your journey.
						</Typography>
					</div>
					<Button variant="secondary" label="continue" onClick="{handleFinishCourse}" />
				</div>
				<div class="img">
					<img src="/imgs/pic-placeholder.png" alt="" />
				</div>
			</div>
		</Card>
	</div>
</div>
