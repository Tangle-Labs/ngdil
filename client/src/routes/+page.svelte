<script lang="ts">
	import { goto } from "$app/navigation";
	import { Button } from "$lib/components";
</script>

<Button
	variant="secondary"
	label="enter demo"
	onClick="{() => {
		goto('/demo');
	}}"
/>
