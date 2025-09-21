import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsx } from "mdsx";
import mdsxConfig from "./mdsx.config.js";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [mdsx(mdsxConfig), vitePreprocess()],
	kit: {
		alias: {
			"$content/*": ".velite/*",
		},
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		},
	},
	prerender: {
			entries: [
				'/',
				'/docs',
				'/docs/*'
			].map(entry => {
				if (!process.argv.includes('dev') && process.env.BASE_PATH) {
					return process.env.BASE_PATH + entry;
				}
				return entry;
			})
		},
	extensions: [".svelte", ".md"],
};

export default config;