<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.card {
			width: 50%;
			background: white;
			width: 300px;
			transform: translate(112.5%, 10%);

			.card-content {
				padding: 20px;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				text-align: center;

				img {
					padding: 20px 0;
				}
			}
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, Kw1c, Card } from "$lib/components";
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>You've made it to the KW1C website, let's log in to enrol on your course of choice.</Typography
		>
	</div>
	<div class="sub-text">
		<Typography
			>In your identity wallet, scan the QR code and accept the connection request to the KW1C
			learners portal.</Typography
		>
	</div>
	<div class="dash">
		<Kw1c variant="blue">
			<div class="card">
				<Card>
					<div class="card-content">
						<div class="heading">
							<Typography variant="heading" fontVariant="kw1c">LOGIN TO KW1C</Typography>
						</div>
						<img
							src="/imgs/qr.png"
							on:click="{() => {
								goto('/demo/journeys/peter/view-applications');
							}}"
							alt=""
						/>
						<div class="desc">
							<Typography variant="button"
								>Scan the QR to access the KW1C learners portal.</Typography
							>
						</div>
					</div>
				</Card>
			</div>
		</Kw1c>
	</div>
</div>
