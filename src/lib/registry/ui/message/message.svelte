<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";
    import type { UIMessage } from "ai";

	type MessageProps = HTMLAttributes<HTMLDivElement> & {
		from: UIMessage["role"];
	};

	let {
		class: className = "",
		from = "assistant",
        children,
		...props
	}: MessageProps = $props();
</script>

<div
	class={cn(
		"group flex w-full items-end justify-end gap-2 py-4",
		from === "user" ? "is-user" : "is-assistant flex-row-reverse justify-end",
		className
	)}
	{...props}
>
    {@render children?.()}
</div>