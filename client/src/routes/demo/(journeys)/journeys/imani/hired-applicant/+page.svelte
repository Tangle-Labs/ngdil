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
	import { Typography, Card, Button, Hightlight } from "$lib/components";
	import { imaniHiredEmployee } from "$lib/stores/flows.store";

	function handleFinishCourse() {
		imaniHiredEmployee.set(true);
		goto("/demo/journeys/imani");
	}
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>You’ve already <Hightlight>successfully verified and hired</Hightlight> a new employee. Let’s
			get them trained up next.</Typography
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
						<Typography variant="list">Securely logged in to the company dashboard</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">Verified applicants digital CV credentials</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">Hired an employee</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">Privately issued an Employee ID credential</Typography>
					</div>
					<div class="p">
						<Typography>
							You have privately and securely managed the hiring process using verifiable
							credentials. With new staff hired, let’s create an open badge for an internal course
							and issue them to successful staff.
							<br /><br />
							Click continue to proceed and get your staff trained.
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
