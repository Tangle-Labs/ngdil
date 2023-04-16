<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import Typography from "./Typography.svelte";
</script>

<Meta title="Typography" component="{Typography}" />

<Template let:args>
	<Typography variant="heading">You can't have a rainbow without the rain</Typography>
	<br />
	<Typography variant="heading" fontVariant="kw1c" color="--red-900"
		>You can't have a rainbow without the rain</Typography
	>
	<br />
	<Typography variant="card-header">You can't have a rainbow without the rain</Typography>
	<br />
	<Typography variant="button">You can't have a rainbow without the rain</Typography>
	<br />
	<Typography variant="list">You can't have a rainbow without the rain</Typography>
	<br />
	<Typography variant="body">You can't have a rainbow without the rain</Typography>
	<br />
	<Typography variant="sub-text">You can't have a rainbow without the rain</Typography>
	<br />
	<Typography variant="status">You can't have a rainbow without the rain</Typography>
</Template>

<Story name="Typography" />
