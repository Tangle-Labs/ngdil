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
	import { currNode, nodeCount, peterEnrolledStudent } from "$lib/stores/flows.store";
	import { onMount } from "svelte";

	function handleFinishCourse() {
		peterEnrolledStudent.set(true);
		goto("/demo/journeys/peter");
	}
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>Amazing, you’ve <Highlight>successfully enrolled students</Highlight> with KW1C!</Typography>
	</div>
	<div class="sub-text">
		<Typography
			>Here is what you have achieved so far with your self-sovereign identity:</Typography>
	</div>
	<div class="card">
		<Card withBorder="{true}">
			<div class="card-content">
				<div class="content">
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">Passwordless login to the KW1C staff portal</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">Verified student applicants credentials</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">Issued course invitations</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">Enrolled students onto a course</Typography>
					</div>
					<div class="p">
						<Typography>
							You have privately and securely managed the verification and enrolment of students
							onto the internationalisation course, to prepare them for their future international
							internships.
							<br /><br />
							Click continue to get them their course badges and find some suitable internship placements.
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
