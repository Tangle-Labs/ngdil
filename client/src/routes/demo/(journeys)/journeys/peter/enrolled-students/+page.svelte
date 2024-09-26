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
						height: 275px;
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
	import { peterEnrolledStudent } from "$lib/stores/flows.store";
	import { highlight } from "$lib/utils/highlight";
	import { _ } from "svelte-i18n";

	function handleFinishCourse() {
		peterEnrolledStudent.set(true);
		goto("/demo/journeys/peter");
	}
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{@html highlight($_("journeys.peter.successfully_enrolled_students_with_kw1c"))}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>{$_("journeys.peter.heres_what_you_achieved")}</Typography>
	</div>
	<div class="card">
		<Card withBorder="{true}">
			<div class="card-content">
				<div class="content">
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list"
							>{$_("journeys.peter.passwordless_login_to_kw1c_staff_portal")}</Typography
						>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list"
							>{$_("journeys.peter.verified_student_applicants_creds")}</Typography
						>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">{$_("journeys.peter.issued_course_invitations")}</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list"
							>{$_("journeys.peter.enrolled_students_onto_course")}</Typography
						>
					</div>
					<div class="p">
						<Typography>
							{$_(
								"journeys.peter.verifed_and_enrolled_students_onto_course_for_future_international_internships"
							)}
							<br /><br />
							{$_("journeys.peter.click_continue_to_get_their_course_badge_and_find_internships")}
						</Typography>
					</div>
					<Button
						variant="secondary"
						label="{$_('components.continue')}"
						onClick="{handleFinishCourse}"
					/>
				</div>
				<div class="img">
					<img src="/imgs/peter-1.svg" alt="" />
				</div>
			</div>
		</Card>
	</div>
</div>
