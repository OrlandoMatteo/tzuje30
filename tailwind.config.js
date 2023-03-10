/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,jsx,tsx,svelte,vue,js,ts}",
		"./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			screens: {
				sm: "400px",
			},
			colors: {
				"tzuje": '#4ade80'
			}
		},
	},
	plugins: [
	],
	corePlugins: {
	}
};
