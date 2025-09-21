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
			base: process.env.PUBLIC_BASE_PATH??'',
		},
		prerender: {
			handleHttpError: ({ path, message }) => {
				// 忽略 /docs 路径的错误，这是预期的行为
				if (path === "/docs") {
					return;
				}
				
				// 对于其他路径，抛出错误
				throw new Error(message);
			}
		}
	},

	extensions: [".svelte", ".md"],
};

export default config;