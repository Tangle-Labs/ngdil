<style lang="scss">
	.lang-btn {
		position: fixed;
		bottom: 10px;
		right: 10px;
		z-index: 10;
	}
</style>

<script lang="ts">
	import { LangSwitchBtn } from "$lib/components";
	import { sessionId } from "$lib/stores/flows.store";
	import { apiClient } from "$lib/utils/axios.utils";
	import { onMount } from "svelte";

	onMount(async () => {
		const { data } = await apiClient.get("/api/session");
		sessionId.set(data.id);
	});
</script>

<div class="lang-btn">
	<LangSwitchBtn />
</div>
<slot />
