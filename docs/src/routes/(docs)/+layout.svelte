<script lang="ts">
	import { DocsLayout } from "@svecodocs/kit";
	import { navigation } from "$lib/navigation";

	let { children } = $props();
</script>

<DocsLayout {navigation}>
	{#snippet logo()}
		{"AI Elements Svelte"}
		<span class="sr-only">Svecodocs</span>
	{/snippet}

	{@render children?.()}
</DocsLayout>
