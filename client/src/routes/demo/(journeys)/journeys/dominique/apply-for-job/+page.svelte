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
	import { Typography, BigBusinessCorp, Card } from "$lib/components";
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			You made it to the Big Business Corp website. Let’s login to view their jobs board.
		</Typography>
	</div>
	<div class="sub-text">
		<Typography
			>In your mobile wallet, scan the QR code & accept the connection request to login privately to
			the Big Business Corp website.</Typography
		>
	</div>
	<div class="dash">
		<BigBusinessCorp>
			<div class="card">
				<Card>
					<div class="card-content">
						<img
							src="/imgs/qr.png"
							on:click="{() => {
								goto('/demo/journeys/dominique/view-jobs');
							}}"
							alt=""
						/>
						<div class="heading">
							<Typography variant="card-header">Passwordless Login</Typography>
						</div>
						<div class="desc">
							<Typography variant="sub-text"
								>Scan the QR to access the KW1C learners portal.</Typography
							>
						</div>
					</div>
				</Card>
			</div>
		</BigBusinessCorp>
	</div>
</div>
