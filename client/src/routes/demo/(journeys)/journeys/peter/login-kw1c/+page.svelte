<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.card {
			background: white;
			width: 300px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			.card-content {
				padding: 10px;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				text-align: center;

				img {
					padding: 10px 0;
					width: 250px;
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
							<Typography variant="card-header" fontVariant="kw1c" color="--kw1c-blue-900"
								>LOGIN TO KW1C</Typography
							>
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
