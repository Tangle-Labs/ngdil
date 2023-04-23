<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.card {
			width: 50%;
			background: white;
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
	import { Typography, Kw1c, Card } from "$lib/components";
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>You've made it to the KW1C website, let's log in to enrol on your course of choice.</Typography>
	</div>
	<div class="sub-text">
		<Typography
			>In your identity wallet, scan the QR code and accept the connection request to the KW1C
			learners portal.</Typography>
	</div>
	<div class="dash">
		<Kw1c variant="blue">
			<div class="card">
				<Card>
					<div class="card-content">
						<div class="heading">
							<Typography variant="card-header" fontVariant="kw1c" color="--kw1c-blue-900"
								>LOGIN TO KW1C</Typography>
						</div>
						<img
							src="/imgs/qr.png"
							on:click="{() => {
								goto('/demo/journeys/dominique/choose-course');
							}}"
							alt="" />
						<div class="desc">
							<Typography variant="button"
								>Scan the QR to access the KW1C learners portal.</Typography>
						</div>
					</div>
				</Card>
			</div>
		</Kw1c>
	</div>
</div>
