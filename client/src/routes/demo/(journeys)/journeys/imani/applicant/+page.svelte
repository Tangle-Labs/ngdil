<style lang="scss">
	.container {
		& > * {
			padding: 15px 0;
		}

		.header {
			width: 100%;
			display: flex;
			justify-content: space-between;
		}

		.details {
			.detail {
				display: flex;
				padding: 10px 0;
				border-bottom: 1px solid var(--white-500);
				align-content: center;

				.circle-container {
					height: 100%;
					padding-right: 20px;

					.circle {
						width: 50px;
						height: 50px;
						background: var(--white-500);
						border-radius: 25px;
						border: 1px solid var(--white-900);
					}
				}

				&:last-of-type {
					border-bottom: none;
				}
			}
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, FutureTech, Button, Loading, Hightlight } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { imaniChosenApplicant } from "$lib/stores/flows.store";

	let currStatus: "init" | "loading" | "loaded" = "init";

	function handleVerify() {
		currStatus = "loading";
		setTimeout(() => {
			currStatus = "loaded";
		}, 8000);
	}
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{#if currStatus === "loaded"}
				Great! All of <Highlight
					>{$imaniChosenApplicant?.split(" ")[0]}’s credentials are verified.</Highlight> With such a
				good CV let’s hire Gillian.
			{:else}
				{$imaniChosenApplicant?.split(" ")[0]} has <Highlight
					>shared their digital CV with you.</Highlight> It’s time to verify their credentials.
			{/if}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography
			>{currStatus === "loaded"
				? "Click the hire applicant button to hire the candidate. You can view the candidate’s individual credentials by clicking the eye icon in each row."
				: `Click the verify CV button to verify ${
						$imaniChosenApplicant?.split(" ")[0]
				  }’s credentials.`}</Typography>
	</div>
	<div class="dash">
		<FutureTech header="3D ENGINEER JOB APPLICATIONS">
			<div class="header">
				<div class="name">
					<Typography variant="card-header" color="--future-tech-green" fontVariant="kw1c"
						>{$imaniChosenApplicant} Digital CV</Typography>
				</div>

				{#if currStatus === "init"}
					<Button label="Verify CV" variant="future-tech" onClick="{handleVerify}" />
				{:else if currStatus === "loading"}
					<Button
						label="Verifying"
						variant="future-tech-disabled"
						onClick="{() => {
							null;
						}}" />
				{:else}
					<Button
						label="Hire Applicant"
						variant="future-tech"
						onClick="{() => {
							goto('/demo/journeys/imani/issue-id');
						}}" />
				{/if}
			</div>

			<div class="details">
				<div class="detail">
					<div class="circle-container">
						{#if currStatus === "init"}
							<div class="circle"></div>
						{:else if currStatus === "loading"}
							<Loading />
						{:else}
							<img class="circle" src="/imgs/checked.png" alt="" />
						{/if}
					</div>
					<div class="meta">
						<div class="cred">
							<Typography variant="list">National ID</Typography>
						</div>
						<div class="issuer">
							<Typography variant="sub-text">Issued by The Government</Typography>
						</div>
					</div>
				</div>

				<div class="detail">
					<div class="circle-container">
						{#if currStatus === "init"}
							<div class="circle"></div>
						{:else if currStatus === "loading"}
							<Loading />
						{:else}
							<img class="circle" src="/imgs/checked.png" alt="" />
						{/if}
					</div>
					<div class="meta">
						<div class="cred">
							<Typography variant="list">Personal Statement</Typography>
						</div>
						<div class="issuer">
							<Typography variant="sub-text">Issued by {$imaniChosenApplicant}</Typography>
						</div>
					</div>
				</div>

				<div class="detail">
					<div class="circle-container">
						{#if currStatus === "init"}
							<div class="circle"></div>
						{:else if currStatus === "loading"}
							<Loading />
						{:else}
							<img class="circle" src="/imgs/checked.png" alt="" />
						{/if}
					</div>
					<div class="meta">
						<div class="cred">
							<Typography variant="list">Future Engineer Dimploma</Typography>
						</div>
						<div class="issuer">
							<Typography variant="sub-text">Issued by Konning Willem 1 College</Typography>
						</div>
					</div>
				</div>

				<div class="detail">
					<div class="circle-container">
						{#if currStatus === "init"}
							<div class="circle"></div>
						{:else if currStatus === "loading"}
							<Loading />
						{:else}
							<img class="circle" src="/imgs/checked.png" alt="" />
						{/if}
					</div>
					<div class="meta">
						<div class="cred">
							<Typography variant="list">Interhsip Certificate</Typography>
						</div>
						<div class="issuer">
							<Typography variant="sub-text">Issued by The Irish 3D Print Company</Typography>
						</div>
					</div>
				</div>
			</div>
		</FutureTech>
	</div>
</div>
