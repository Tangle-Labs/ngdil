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
			width: 300px;

			.card-content {
				padding: 10px;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				text-align: left;

				img {
					padding: 20px 0;
					padding-top: 0;
					width: 250px;
				}
			}
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, OpenJobsNetwork, Card } from "$lib/components";
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading"
			>It’s time to spread the word. Let’s connect to the Open Jobs Network to share your
			credential.</Typography>
	</div>
	<div class="sub-text">
		<Typography
			>In your mobile wallet, scan the QR code & accept the connection request to login privately to
			the Open Jobs Network.</Typography>
	</div>
	<div class="dash">
		<OpenJobsNetwork>
			<div class="card">
				<Card>
					<div class="card-content">
						<img
							src="/imgs/qr.png"
							on:click="{() => {
								goto('/demo/journeys/dominique/open-jobs');
							}}"
							alt="" />
						<div class="heading">
							<Typography variant="card-header" color="--bbc-blue"
								>Login to Open Jobs Network</Typography>
						</div>
						<div class="desc">
							<Typography variant="sub-text"
								>Scan the QR to access the Open Jobs Network</Typography>
						</div>
					</div>
				</Card>
			</div>
		</OpenJobsNetwork>
	</div>
</div>
