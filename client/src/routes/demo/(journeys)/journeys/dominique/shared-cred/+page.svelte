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
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { currNode, dominiqueSharedCred } from "$lib/stores/flows.store";
	import { highlight } from "$lib/utils/highlight";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";

	function handleFinishShare() {
		dominiqueSharedCred.set(true);
		goto("/demo/journeys/dominique");
	}

	onMount(() => {
		currNode.set(4);
	});
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{@html highlight($_("journeys.dominique.new_cred_and_job_invite_done_land_on_job_left"))}
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
							>{$_("journeys.dominique.passwordless_sign_on_to_social_network")}</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list"
							>{$_("journeys.dominique.shared_cred_with_employers")}</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list"
							>{$_("journeys.dominique.received_job_invitation")}</Typography>
					</div>
					<div class="p">
						<Typography>
							{$_("journeys.dominique.share_digital_cv_and_get_job")}
						</Typography>
					</div>
					<Button
						variant="secondary"
						label="{$_('components.continue')}"
						onClick="{handleFinishShare}" />
				</div>
				<div class="img">
					<img src="/imgs/dominique-2.svg" alt="" />
				</div>
			</div>
		</Card>
	</div>
</div>
