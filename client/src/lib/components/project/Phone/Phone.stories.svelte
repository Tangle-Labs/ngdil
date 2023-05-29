<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import Phone from "./Phone.svelte";

	let animatePhone = false;

	setTimeout(() => {
		animatePhone = true;
	}, 1000);
</script>

<Meta title="Phone" component="{Phone}" />

<Template let:args>
	<Phone {...args} bind:animatePhone="{animatePhone}" />
</Template>

<Story name="kw1c" args="{{ variant: 'kw1c' }}" />
<Story name="open jobs" args="{{ variant: 'openJobs' }}" />
<Story name="future tech" args="{{ variant: 'futureTech' }}" />
<Story name="bbc" args="{{ variant: 'bbc' }}" />
