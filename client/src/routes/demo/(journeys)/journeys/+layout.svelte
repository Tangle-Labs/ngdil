<style lang="scss">
	.nav {
		background: linear-gradient(180deg, rgba(235, 240, 242, 0) 0%, rgba(235, 240, 242, 0.57) 100%);
		box-sizing: border-box;
		padding: 20px 40px;
		display: flex;
		justify-content: space-between;

		& > .login {
			display: flex;
			align-items: center;
			align-content: center;

			& > .avatar {
				padding: 0 20px;
			}
		}
	}
	.slot {
		padding: 20px 17vw;
	}
</style>

<script lang="ts">
	import { Avatar, Button } from "$lib/components";
	import { currentJourney } from "$lib/stores/flows.store";
</script>

<div class="nav">
	<img src="/imgs/ngdil.svg" class="logo" />

	<div class="login">
		<div class="avatar">
			<Avatar variant="small" image="{`/imgs/${$currentJourney}.png`}" />
		</div>
		<Button
			onClick="{() => {
				null;
			}}"
			label="Contact Us"
			variant="white" />
	</div>
</div>

<div class="slot">
	<slot />
</div>
