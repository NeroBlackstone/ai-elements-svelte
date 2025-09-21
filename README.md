# AI Elements Svelte

[AI Elements Svelte](https://ai-elements-svelte.com) is an unofficial community-led [Svelte](https://svelte.dev/) port of [AI Elements](https://github.com/vercel/ai-elements).

> **Note** <br> **We are not affiliated with AI Elements, but the project has the author’s encouragement and support.** <br> This is a project born out of the need for a similar project for the Svelte ecosystem.

## Overview

[AI Elements Svelte](https://ai-elements-svelte.com) is a component library built on top of [shadcn-svelte](https://shadcn-svelte.com/) to help you build AI-native applications faster. It provides pre-built, customizable Svelte components specifically designed for AI applications, including conversations, messages, code blocks, reasoning displays, and more. The CLI makes it easy to add these components to your Svelte or SvelteKit project.

## Installation

You can use the AI Elements Svelte CLI directly with npx, or install it globally:

```bash
# Using shadcn-svelte cli
npx shadcn-svelte@latest add https://registry.ai-elements-svelte.com/all.json
```

## Prerequisites

Before using AI Elements Svelte, ensure your project meets these requirements:

- **Node.js** 18 or later
- **Svelte, SvelteKit** project with [AI SDK](https://ai-sdk.dev/) installed
- **shadcn-svelte** initialized in your project (`npx shadcn-svelte@latest init`)
- **Tailwind CSS** configured (AI Elements Svelte supports CSS Variables mode only)

## Usage

### Install All Components

Install all available AI Elements Svelte components at once:

```bash
npx ai-elements-svelte@latest
```

This command will:

- Set up shadcn-svelte if not already configured
- Install all AI Elements Svelte components to your configured components directory
- Add necessary dependencies to your project

### Install Specific Components

Install individual components using the `add` command:

```bash
npx ai-elements-svelte@latest add <component-name>
```

Examples:

```bash
# Install the message component
npx ai-elements-svelte@latest add message

# Install the conversation component
npx ai-elements-svelte@latest add conversation

# Install the code-block component
npx ai-elements-svelte@latest add code-block
```

### Alternative: Use with shadcn-svelte CLI

You can also install components using the standard shadcn-svelte CLI:

```bash
# Install all components
npx shadcn-svelte@latest add https://registry.ai-elements-svelte.com/all.json

# Install a specific component
npx shadcn-svelte@latest add https://registry.ai-elements-svelte.com/message.json
```

## Available Components

AI Elements Svelte includes the following components:

| Component         | Status | Description                                             |
| ----------------- | ------ | ------------------------------------------------------- |
| `message`         | ✅     | Individual chat messages with avatars                   |
| `conversation`    | ❌     | Container for chat conversations                        |
| `response`        | ❌     | Formatted AI response display                           |
| `prompt-input`    | ❌     | Advanced input component with model selection           |
| `actions`         | ❌     | Interactive action buttons for AI responses             |
| `branch`          | ❌     | Branch visualization for conversation flows             |
| `code-block`      | ❌     | Syntax-highlighted code display with copy functionality |
| `image`           | ❌     | AI-generated image display component                    |
| `inline-citation` | ❌     | Inline source citations                                 |
| `loader`          | ❌     | Loading states for AI operations                        |
| `reasoning`       | ❌     | Display AI reasoning and thought processes              |
| `source`          | ❌     | Source attribution component                            |
| `suggestion`      | ❌     | Quick action suggestions                                |
| `task`            | ❌     | Task completion tracking                                |
| `tool`            | ❌     | Tool usage visualization                                |

## Configuration

AI Elements Svelte uses your existing shadcn-svelte configuration. Components will be installed to the directory specified in your `components.json` file.

## Recommended Setup

For the best experience, we recommend:

1. **AI Gateway**: Set up [Vercel AI Gateway](https://vercel.com/docs/ai-gateway) and add `AI_GATEWAY_API_KEY` to your `.env.local`
2. **CSS Variables**: Use shadcn-svelte's CSS Variables mode for theming
3. **TypeScript**: Enable TypeScript for better development experience

## Contributing

If you'd like to contribute to AI Elements Svelte, please follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes to the components in `packages/elements`.
4. Open a PR to the `main` branch.

---

Made with ❤️ by [NeroBlackstone](https://github.com/NeroBlackstone)
