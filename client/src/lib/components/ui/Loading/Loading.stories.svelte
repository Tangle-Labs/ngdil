<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import Loading from "./Loading.svelte";
</script>

<Meta title="Loading" component="{Loading}" />

<Template>
	<Loading img="http://localhost:5173/imgs/loading.png" />
</Template>

<Story name="Loading" />
