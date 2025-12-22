export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],

	css: ["~/assets/css/main.css"],

	app: {
		head: {
			title: "Alfiki Diastama | Software Engineer, AI Engineer",
			meta: [
				{
					name: "description",
					content:
						"Portfolio of Alfiki Diastama, Creator of Dely Labs & Narajiwa.",
				},
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		},
	},
	icon: {
		serverBundle: "remote",
	},
	compatibilityDate: "2025-07-15",
	devtools: {
		enabled: false,
	},
});
