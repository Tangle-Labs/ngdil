<script lang="ts">
	import { sessionId } from "$lib/stores/flows.store";
	import { apiClient } from "$lib/utils/axios.utils";
	import { onMount } from "svelte";

	onMount(async () => {
		const { data } = await apiClient.get("/api/session");
		sessionId.set(data.id);
	});
</script>

<slot />
