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
				width: 100%;
				border-bottom: 1px solid var(--white-500);
				justify-content: space-between;
				align-items: center;
				&:last-of-type {
					border-bottom: none;
				}
			}

			.side {
				display: flex;
				padding: 10px 0;
				align-content: center;
				align-items: center;

				.circle-container {
					height: 100%;
					padding-right: 20px;
					display: flex;

					.circle {
						width: 30px;
						height: 30px;
						background: var(--white-500);
						border-radius: 25px;
						border: 1px solid var(--white-900);
					}
				}
			}
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, FutureTech, Button, Loading, CredModal } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { credentials } from "$lib/stores/creds";
	import { currNode, imaniChosenApplicant } from "$lib/stores/flows.store";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";

	let currStatus: "init" | "loading" | "loaded" = "init";

	function handleVerify() {
		currStatus = "loading";
		setTimeout(() => {
			currNode.set(3);
			currStatus = "loaded";
		}, 8000);
	}

	onMount(() => {
		currNode.set(2);
	});
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			{#if currStatus === "loaded"}
				Great! All of <Highlight
					>{$imaniChosenApplicant?.split(" ")[0]}’s credentials are verified.</Highlight> With such a
				good CV let’s hire {$imaniChosenApplicant?.split(" ")[0]}.
				<!-- {$_("journeys.imani.creds_verified_with_good_cv", {values: {ChosenApplicant: $imaniChosenApplicant?.split(" ")[0]}})} -->
			{:else}
				{$imaniChosenApplicant?.split(" ")[0]} has <Highlight
					>shared their digital CV with you.</Highlight> It’s time to verify their credentials.
				<!-- {$_("journeys.imani.cred_shared_time_to_verify", {values: {ChosenApplicant: $imaniChosenApplicant?.split(" ")[0]}})}	 -->
			{/if}
		</Typography>
	</div>
	<div class="sub-text">
		<Typography
			>{currStatus === "loaded"
				? $_("journeys.imani.hire_candidate_btn_desc")
				: $_("journeys.imani.verify_cv_btn_desc", {
						values: { ChosenApplicant: $imaniChosenApplicant?.split(" ")[0] }
				  })}</Typography>
	</div>
	<div class="dash">
		<FutureTech header="{$_('journeys.imani.3d_engineer_job_applicant').toUpperCase()}">
			<div class="header">
				<div class="name">
					<Typography variant="card-header" color="--future-tech-green" fontVariant="kw1c"
						>{$imaniChosenApplicant + " " + $_("journeys.imani.digital_cv")}</Typography>
				</div>

				{#if currStatus === "init"}
					<Button
						label="{$_('journeys.imani.verify_cv_btn')}"
						variant="future-tech"
						onClick="{handleVerify}" />
				{:else if currStatus === "loading"}
					<Button
						label="{$_('journeys.imani.verifying_btn')}"
						variant="future-tech-disabled"
						onClick="{() => {
							null;
						}}" />
				{:else}
					<Button
						label="{$_('journeys.imani.hire_applicant_btn')}"
						variant="future-tech"
						onClick="{() => {
							goto('/demo/journeys/imani/issue-id');
						}}" />
				{/if}
			</div>

			<div class="details">
				<div class="detail">
					<div class="side">
						<div class="circle-container">
							{#if currStatus === "init"}
								<div class="circle"></div>
							{:else if currStatus === "loading"}
								<Loading size="30px" />
							{:else}
								<img class="circle" src="/imgs/checked.png" alt="" />
							{/if}
						</div>
						<div class="meta">
							<div class="cred">
								<Typography variant="list">{$_("creds.national_id")}</Typography>
							</div>
							<div class="issuer">
								<Typography variant="sub-text"
									>{$_("components.issued_by") + " " + $_("issuer.the_govt")}</Typography>
							</div>
						</div>
					</div>
					{#if currStatus === "loaded"}
						<div class="verify">
							<CredModal
								issuer="{$_('issuer.the_govt')}"
								name="{$_('creds.national_id')}"
								credential="{{ ...credentials.nationalId, 'Full Name': $imaniChosenApplicant }}"
								logo="/imgs/gov.svg" />
						</div>
					{/if}
				</div>

				<div class="detail">
					<div class="side">
						<div class="circle-container">
							{#if currStatus === "init"}
								<div class="circle"></div>
							{:else if currStatus === "loading"}
								<Loading size="30px" />
							{:else}
								<img class="circle" src="/imgs/checked.png" alt="" />
							{/if}
						</div>
						<div class="meta">
							<div class="cred">
								<Typography variant="list">{$_("journeys.imani.personal_statement")}</Typography>
							</div>
							<div class="issuer">
								<Typography variant="sub-text"
									>{$_("components.issued_by") + " " + $imaniChosenApplicant}</Typography>
							</div>
						</div>
					</div>

					{#if currStatus === "loaded"}
						<div class="verify">
							<CredModal
								issuer="{$imaniChosenApplicant}"
								logo="/imgs/verified.png"
								name="{$_('journeys.imani.personal_statement')}"
								credential="{{
									...credentials.personalStatement,
									'Full Name': $imaniChosenApplicant
								}}" />
						</div>
					{/if}
				</div>

				<div class="detail">
					<div class="side">
						<div class="circle-container">
							{#if currStatus === "init"}
								<div class="circle"></div>
							{:else if currStatus === "loading"}
								<Loading size="30px" />
							{:else}
								<img class="circle" src="/imgs/checked.png" alt="" />
							{/if}
						</div>
						<div class="meta">
							<div class="cred">
								<Typography variant="list"
									>{$_("journeys.imani.future_engineer_diploma")}</Typography>
							</div>
							<div class="issuer">
								<Typography variant="sub-text"
									>{$_("components.issued_by") +
										" " +
										$_("issuer.koning_willem_i_college")}</Typography>
							</div>
						</div>
					</div>
					{#if currStatus === "loaded"}
						<div class="verify">
							<CredModal
								issuer="{$_('issuer.koning_willem_i_college')}"
								name="{$_('journeys.imani.future_engineer_diploma')}"
								logo="/imgs/kw1c-white.png"
								credential="{{
									...credentials.courseCred,
									'Student Name': $imaniChosenApplicant
								}}" />
						</div>
					{/if}
				</div>

				<div class="detail">
					<div class="side">
						<div class="circle-container">
							{#if currStatus === "init"}
								<div class="circle"></div>
							{:else if currStatus === "loading"}
								<Loading size="30px" />
							{:else}
								<img class="circle" src="/imgs/checked.png" alt="" />
							{/if}
						</div>
						<div class="meta">
							<div class="cred">
								<Typography variant="list"
									>{$_("journeys.imani.internship_certificate")}</Typography>
							</div>
							<div class="issuer">
								<Typography variant="sub-text"
									>{$_("components.issued_by") +
										" " +
										$_("issuer.irish_future_print_co")}</Typography>
							</div>
						</div>
					</div>
					{#if currStatus === "loaded"}
						<div class="verify">
							<CredModal
								issuer="{$_('issuer.irish_future_print_co')}"
								name="{$_('journeys.imani.internship_certificate')}"
								logo="{'/imgs/irish.svg'}"
								credential="{{
									...credentials.internshipBadge,
									'Intern Name': $imaniChosenApplicant,
									Issuer: $_('issuer.irish_future_print_co'),
									Country: $_('journeys.imani.ireland')
								}}" />
						</div>
					{/if}
				</div>

				<div class="detail">
					<div class="side">
						<div class="circle-container">
							{#if currStatus === "init"}
								<div class="circle"></div>
							{:else if currStatus === "loading"}
								<Loading size="30px" />
							{:else}
								<img class="circle" src="/imgs/checked.png" alt="" />
							{/if}
						</div>
						<div class="meta">
							<div class="cred">
								<Typography variant="list">{$_("journeys.imani.volunteering_badge")}</Typography>
							</div>
							<div class="issuer">
								<Typography variant="sub-text"
									>{$_("components.issued_by") + " " + $_("issuer.volunteer_corps")}</Typography>
							</div>
						</div>
					</div>
					{#if currStatus === "loaded"}
						<div class="verify">
							<CredModal
								issuer="{$_('issuer.volunteer_corps')}"
								name="{$_('journeys.imani.volunteering_badge')}"
								logo="{'/imgs/volunteer.svg'}"
								credential="{{
									...credentials.volunteerBadge,
									'Holder Name': $_('imani_applicant.Gilian_OLeary')
								}}" />
						</div>
					{/if}
				</div>
			</div>
		</FutureTech>
	</div>
</div>
