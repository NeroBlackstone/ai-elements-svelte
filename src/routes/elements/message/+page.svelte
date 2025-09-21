<script lang="ts">
	import Message from "$lib/registry/ui/message/message.svelte";
	import MessageContent from "$lib/registry/ui/message/message-content.svelte";
	import type { UIMessage } from "ai";

	// This page displays items from the custom registry.
	// You are free to implement this with your design as needed.
	export let messages = [
		{
			id: '1',
			role: 'assistant',
			parts: [
				{
					type: 'text',
					text: 'Hi there! How can I help you today?',
				},
			],
		},
		{
			id: '2',
			role: 'user',
			parts: [
				{
					type: 'text',
					text: 'Can you show me a form?',
				}
			]
		}
	] as UIMessage[];
</script>

<div class="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-8">
	<header class="flex flex-col gap-1">
		<h1 class="text-3xl font-bold tracking-tight">Custom Registry</h1>
		<p class="text-muted-foreground">
			A custom registry for distributing code using shadcn-svelte.
		</p>
	</header>
	<main class="flex flex-1 flex-col gap-8">
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">AI Message</h2>
			</div>
			<div class="max-w-4xl mx-auto p-6 relative size-full rounded-lg border h-[600px]">
			<div class="flex flex-col h-full">
				{#each messages as m}
					<Message from={m.role}>
						<MessageContent>
							{#each m.parts as p}
								<!-- we don't use any reasoning or tool calls in this example -->
								{#if p.type === 'text'} 
									<p>{p.text}</p>
								{/if}
							{/each}
						</MessageContent>
					</Message>
				{/each}
			</div>
			</div>
		</div>
	</main>
</div>
