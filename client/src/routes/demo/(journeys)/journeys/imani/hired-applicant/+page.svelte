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
	import { Typography, Card, Button, Hightlight } from "$lib/components";
	import { imaniHiredEmployee } from "$lib/stores/flows.store";
	import { highlight } from "$lib/utils/highlight";
	import { _ } from "svelte-i18n";

	function handleFinishCourse() {
		imaniHiredEmployee.set(true);
		goto("/demo/journeys/imani");
	}
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{@html highlight($_("journeys.imani.hired_emp_lets_train"))}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>
			{$_("journeys.imani.heres_what_you_achieved")}
		</Typography>
	</div>
	<div class="card">
		<Card withBorder="{true}">
			<div class="card-content">
				<div class="content">
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list"
							>{$_("journeys.imani.securely_logged_in_dashboard")}</Typography
						>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">{$_("journeys.imani.verified_cv_creds")}</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">{$_("journeys.imani.hired_emp")}</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list"
							>{$_("journeys.imani.privately_issued_emp_id_cred")}</Typography
						>
					</div>
					<div class="p">
						<Typography>
							{$_("journeys.imani.create_badge_and_issue_to_staff_desc")}
							<br /><br />
							{$_("journeys.imani.get_staff_trained_btn_desc")}
						</Typography>
					</div>
					<Button
						variant="secondary"
						label="{$_('components.continue')}"
						onClick="{handleFinishCourse}"
					/>
				</div>
				<div class="img">
					<img src="/imgs/imani-1.svg" alt="" />
				</div>
			</div>
		</Card>
	</div>
</div>
