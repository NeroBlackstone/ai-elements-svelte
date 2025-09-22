import { defineNavigation } from "@svecodocs/kit";
import ChalkboardTeacher from "phosphor-svelte/lib/ChalkboardTeacher";
import RocketLaunch from "phosphor-svelte/lib/RocketLaunch";
import Tag from "phosphor-svelte/lib/Tag";
import { getAllDocs } from "./utils.js";
import { env } from '$env/dynamic/public';

const allDocs = getAllDocs();
const basePath = env.PUBLIC_BASE_PATH ?? '';

const components = allDocs
	.filter((doc) => doc.section === "Components")
	.map((doc) => ({
		title: doc.title,
		href: basePath +`/docs/${doc.slug}`,
	}));

const configuration = allDocs
	.filter((doc) => doc.section === "Configuration")
	.map((doc) => ({
		title: doc.title,
		href: basePath +`/docs/${doc.slug}`,
	}));

export const navigation = defineNavigation({
	anchors: [
		{
			title: "Introduction",
			href: basePath +"/docs",
			icon: ChalkboardTeacher,
		},
		{
			title: "Getting Started",
			href: basePath +"/docs/getting-started",
			icon: RocketLaunch,
		},
		{
			title: "Releases",
			href: "https://github.com/svecosystem/svecodocs/releases",
			icon: Tag,
		},
	],
	sections: [
		{
			title: "Configuration",
			items: configuration,
		},
		{
			title: "Components",
			items: components,
		},
	],
});
