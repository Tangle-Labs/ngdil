<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.card {
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
	import { peterVerifiedInternship } from "$lib/stores/flows.store";

	function handleFinishCourse() {
		peterVerifiedInternship.set(true);
		goto("/demo/journeys/peter");
	}
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>You’ve successfully <Highlight>evaluate, enrolled, trained, & verified</Highlight> your students
			international internships.</Typography>
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
						<Typography variant="list">Privately requested credentials for verification</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list"
							>Securely verified and confirmed student internships</Typography>
					</div>
					<div class="p">
						<Typography>
							You have successfully navigated the privacy and simplicity of self-sovereign identity
							to prepare and verify students for international internships, and also verify their
							international credentials upon their return.
							<br /><br />
							To learn more about SSI in education and

							<br /><br />
							learning, get in touch with NGDIL. To return to explore another user journey, click continue
							to proceed.
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
