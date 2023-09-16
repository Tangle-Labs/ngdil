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
	import { onMount } from "svelte";

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
		<Typography variant="heading"
			><Highlight>A new credential, a job invite,</Highlight> all that’s left to do now is to land that
			job.</Typography>
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
						<Typography variant="list">Passwordless sign on to a social network</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">Shared your credential with potential employers</Typography>
					</div>
					<div class="list">
						<img src="/imgs/check-circle.png" alt="" />
						<Typography variant="list">Received a job invitation</Typography>
					</div>
					<div class="p">
						<Typography>
							With a job invitation at hand, let’s get sharing your digital CV with the potential
							employer and get that job! Click continue to proceed
						</Typography>
					</div>
					<Button variant="secondary" label="continue" onClick="{handleFinishShare}" />
				</div>
				<div class="img">
					<img src="/imgs/dominique-2.svg" alt="" />
				</div>
			</div>
		</Card>
	</div>
</div>
