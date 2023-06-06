<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.card {
			width: 50%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			width: 250px;
			.card-content {
				padding: 10px;
				display: flex;
				justify-content: flex-start;

				flex-wrap: wrap;
				text-align: left;

				.heading {
					.crowns {
						height: 15px;
						width: unset;
						padding: 0;
					}
				}

				img {
					padding: 20px 0;
					width: 200px;
				}
			}
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, Kw1c, Card, Hightlight, Phone } from "$lib/components";
	import { currNode, nodeCount } from "$lib/stores/flows.store";
	import { onMount } from "svelte";

	let animatePhone = false;

	const handleClick = () => {
		animatePhone = true;
		setTimeout(() => {
			currNode.set(1);
			goto("/demo/journeys/dominique/choose-course");
		}, 12_000);
	};

	onMount(() => {
		currNode.set(0);
		nodeCount.set(5);
	});
</script>

<div class="container">
	<Phone variant="kw1c" bind:animatePhone="{animatePhone}" />
	<div class="heading">
		<Typography variant="heading"
			>You've made it to the <Hightlight>KW1C website, let's log in</Hightlight> to enrol on your course
			of choice.</Typography>
	</div>
	<div class="sub-text">
		<Typography
			>In your identity wallet, scan the QR code and accept the connection request to the KW1C
			learners portal.</Typography>
	</div>
	<div class="dash">
		<Kw1c variant="blue">
			<div class="card">
				<Card borderRadius="{16}">
					<div class="card-content">
						<div class="heading">
							<img src="/imgs/kw1c-crowns.png" alt="" class="crowns" />
							<div class="heading-text">
								<Typography variant="card-header" fontVariant="kw1c" color="--kw1c-blue-900"
									>LOGIN TO KW1C</Typography>
							</div>
						</div>
						<img src="/imgs/qr.png" on:click="{handleClick}" alt="" />
						<div class="desc">
							<Typography variant="kw1c-sub-text"
								>Scan the QR to access the KW1C learners portal.</Typography>
						</div>
					</div>
				</Card>
			</div>
		</Kw1c>
	</div>
</div>
