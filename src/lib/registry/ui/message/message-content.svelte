<script lang="ts" module>
	import { cn,type WithElementRef } from "$lib/utils";
    import type { HTMLAttributes } from "svelte/elements";
    import { type VariantProps, tv } from "tailwind-variants";

    export const messageContentVariants = tv({
		base: "is-user:dark flex flex-col gap-2 overflow-hidden rounded-lg text-sm",
		variants: {
			variant: {
				contained: [
					"max-w-[80%] px-4 py-3",
					"group-[.is-user]:bg-primary group-[.is-user]:text-primary-foreground",
					"group-[.is-assistant]:bg-secondary group-[.is-assistant]:text-foreground",
				],
				flat: [
					"group-[.is-user]:max-w-[80%] group-[.is-user]:bg-secondary group-[.is-user]:px-4 group-[.is-user]:py-3 group-[.is-user]:text-foreground",
					"group-[.is-assistant]:text-foreground",
				],
			},
		},
		defaultVariants: {
			variant: "contained",
		},
	});

	export type MessageContentVariant = VariantProps<
		typeof messageContentVariants
	>["variant"];

	export type MessageContentProps = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		variant?: MessageContentVariant;
	};
</script>


<script lang="ts">
	let {
		class: className,
		variant = "contained",
		ref = $bindable(null),
		children,
		...restProps
	}: MessageContentProps = $props();
</script>

<div
	bind:this={ref}
	class={cn(messageContentVariants({ variant }), className)}
	{...restProps}
>
	{@render children?.()}
</div>