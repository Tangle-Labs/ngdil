<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import ProgressBar from "./ProgressBar.svelte";
</script>

<Meta title="Progress Bar" component="{ProgressBar}" />

<Template>
	<ProgressBar current="{4}" nodes="{5}" />
</Template>

<Story name="Progress Bar" />
