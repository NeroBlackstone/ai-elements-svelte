<script lang="ts">
	import { cn } from "$lib/utils";
	import { Avatar, AvatarFallback, AvatarImage } from "../avatar";

	let {
		class: className = "",
		src = "",
		name = "",
		...props
	}: { class?: string; src?: string; name?: string } = $props();
</script>

<Avatar class={cn("ring-border size-8 ring-1", className)} {...props}>
	<AvatarImage alt="" class="mt-0 mb-0" {src} />
	<AvatarFallback>{name?.slice(0, 2) || "ME"}</AvatarFallback>
</Avatar>
