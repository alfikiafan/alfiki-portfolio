export const useSkills = () => {
	const skills = {
		// 1. ABSTRACT CAPABILITIES
		competencies: [
			{
				title: "Frontend Engineering",
				desc: "Building complex, interactive UIs with focus on performance & accessibility.",
				icon: "heroicons:computer-desktop",
			},
			{
				title: "Applied Machine Learning",
				desc: "Bridging the gap between research models and production-ready inference.",
				icon: "heroicons:cpu-chip",
			},
			{
				title: "Backend & System Design",
				desc: "Architecting scalable backend solutions and database schemas.",
				icon: "heroicons:square-3-stack-3d",
			},
		],

		// 2. HARD SKILLS (5-8 Items)
		techStack: [
			{ name: "Vue 3", icon: "logos:vue" },
			{ name: "Laravel", icon: "logos:laravel" },
			{ name: "TensorFlow", icon: "logos:tensorflow" },
			{ name: "React", icon: "logos:react" },
			{ name: "Python", icon: "logos:python" },
			{ name: "Java", icon: "logos:java" },
			{ name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
			{ name: "Nuxt", icon: "logos:nuxt-icon" },
			{ name: "SQL", icon: "logos:postgresql" },
		],

		// 3. TOOLS (5-6 Items)
		tools: [
			{ name: "Git", icon: "logos:git-icon" },
			{ name: "Docker", icon: "logos:docker-icon" },
			{ name: "Figma", icon: "logos:figma" },
			{ name: "Firebase", icon: "logos:firebase-icon" },
			{ name: "Cloudflare", icon: "logos:cloudflare-icon" },
			{ name: "Postman", icon: "logos:postman-icon" },
		],
	};

	return { skills };
};
