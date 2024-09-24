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
	import { currNode, dominiqueEarnedCourseCred, nodeCount } from "$lib/stores/flows.store";
	import { highlight } from "$lib/utils/highlight";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";

	function handleFinishCourse() {
		currNode.set(0);
		nodeCount.set(0);
		dominiqueEarnedCourseCred.set(true);
		goto("/demo/journeys/dominique");
	}

	onMount(() => currNode.set(5));
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{@html highlight($_("journeys.dominique.successfully_enrolled_and_earned_course_cred"))}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography>{$_("journeys.dominique.heres_what_you_achieved")}</Typography>
	</div>
	<div class="card">
		<Card withBorder="{true}">
			<div class="card-content">
				<div class="content">
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list"
							>{$_("journeys.dominique.passwordless_login_to_kw1c")}</Typography
						>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">{$_("journeys.dominique.privately_shared_creds")}</Typography
						>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list"
							>{$_("journeys.dominique.completed_course_at_kw1c")}</Typography
						>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list"
							>{$_("journeys.dominique.privately_received_creds")}l</Typography
						>
					</div>
					<div class="p">
						<Typography>
							{$_("journeys.dominique.have_new_cred_click_continue")}
						</Typography>
					</div>
					<Button
						variant="secondary"
						label="{$_('components.continue')}"
						onClick="{handleFinishCourse}"
					/>
				</div>
				<div class="img">
					<img src="/imgs/dominique-1.svg" alt="" />
				</div>
			</div>
		</Card>
	</div>
</div>
