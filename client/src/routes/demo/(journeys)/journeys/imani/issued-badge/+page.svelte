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
	import { imaniHiredEmployee, imaniIssuedBadge } from "$lib/stores/flows.store";

	function handleFinishCourse() {
		imaniIssuedBadge.set(true);
		goto("/demo/journeys/imani");
	}
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>Congratulations. <Highlight>You have successfully created</Highlight> a new open badge and issued
			them to your team.</Typography
		>
	</div>
	<div class="sub-text">
		<Typography>Here is what you have achieved so far with your self-sovereign identity:</Typography
		>
	</div>
	<div class="card">
		<Card>
			<div class="card-content">
				<div class="content">
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">Created an open badge template</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">Trained eligible staff</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">Issued open badges to successful employees</Typography>
					</div>

					<div class="p">
						<Typography>
							You have successfully completed Imani’s journey verifying applicant credentials,
							hiring new employees, issuing employee ID, creating new open badges, and training and
							issuing of open badges to the team.
							<br /><br />
							To explore other journeys for educators and learners click continue.
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
