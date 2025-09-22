import { redirect } from "@sveltejs/kit";
import { env } from '$env/dynamic/public';


export function load() {
	const basePath = env.PUBLIC_BASE_PATH ?? '';
	redirect(302, basePath + "/docs");
}