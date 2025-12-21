<script setup lang="ts">
import { ref, computed } from "vue";

const isResearcher = ref(false);

const currentRole = computed(() =>
	isResearcher.value ? "AI Researcher" : "Software Engineer"
);
const currentHeadline = computed(() =>
	isResearcher.value
		? "Applying Deep Learning Research to Real-World Systems"
		: "Building Privacy-First Web Products & Scalable Systems."
);
const currentDesc = computed(() =>
	isResearcher.value
		? "Gemastik XVI Gold Medalist & IEEE Author. Specializing in Computer Vision efficiency."
		: "Founder of Dely Labs. Creator of Dely Sign. I build high-standard applications that prioritize privacy."
);

const techStack = computed(() =>
	isResearcher.value
		? [
				{ name: "Python", icon: "logos:python" },
				{ name: "TensorFlow", icon: "logos:tensorflow" },
				{ name: "OpenCV", icon: "logos:opencv" },
		  ]
		: [
				{ name: "Vue.js", icon: "logos:vue" },
				{ name: "Nuxt", icon: "logos:nuxt-icon" },
				{ name: "Laravel", icon: "logos:laravel" },
		  ]
);

const socialLinks = [
	{
		name: "Email",
		icon: "heroicons:envelope-solid",
		url: "mailto:alfiki.diastama@gmail.com",
	},
	{
		name: "GitHub",
		icon: "logos:github-icon",
		url: "https://github.com/alfikiafan",
	},
	{
		name: "LinkedIn",
		icon: "logos:linkedin-icon",
		url: "https://linkedin.com/in/alfiki",
	},
];
</script>

<template>
	<section
		class="relative py-12 lg:py-0 lg:min-h-screen flex items-center overflow-hidden"
	>
		<div class="absolute top-0 right-0 -z-10 opacity-20 pointer-events-none">
			<div
				class="w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-primary-600 rounded-full blur-[80px]"
			></div>
		</div>

		<div class="container mx-auto p-6 pt-24 md:pt-16">
			<div class="flex flex-col md:grid md:grid-cols-12 gap-8 items-center">
				<div
					class="w-full md:col-span-7 order-2 md:order-1 flex flex-col justify-center items-center md:items-start text-center md:text-left"
				>
					<div
						class="mb-6 grid grid-cols-2 bg-dark-card border border-dark-border rounded-full p-1.5 relative w-[220px]"
					>
						<div
							class="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary-600 rounded-full transition-all duration-300 ease-out"
							:class="isResearcher ? 'translate-x-[100%] left-1' : 'left-1'"
						></div>

						<button
							@click="isResearcher = false"
							class="relative z-10 py-1.5 rounded-full text-xs font-medium transition-colors text-center"
							:class="!isResearcher ? 'text-white' : 'text-slate-400'"
						>
							Engineer
						</button>
						<button
							@click="isResearcher = true"
							class="relative z-10 py-1.5 rounded-full text-xs font-medium transition-colors text-center"
							:class="isResearcher ? 'text-white' : 'text-slate-400'"
						>
							Researcher
						</button>
					</div>

					<div class="space-y-3 md:space-y-5">
						<h1
							class="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
						>
							<span
								class="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200 mb-1 leading-snug"
							>
								{{ currentRole }}
							</span>
							<span
								class="text-slate-100 text-xl md:text-3xl lg:text-4xl block mt-2"
							>
								{{ currentHeadline }}
							</span>
						</h1>

						<p
							class="text-sm md:text-base text-slate-300 max-w-xl leading-relaxed hidden md:block"
						>
							{{ currentDesc }}
						</p>
						<p
							class="text-sm text-slate-300 max-w-xl leading-relaxed md:hidden"
						>
							{{
								isResearcher
									? "Gemastik XVI Gold Medalist & IEEE Author."
									: "Founder of Dely Labs. Building privacy-first web apps."
							}}
						</p>

						<div class="flex flex-col md:flex-row items-center gap-6 pt-2">
							<div class="flex flex-wrap justify-center md:justify-start gap-3">
								<a
									href="#projects"
									class="px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-lg transition-all shadow-lg text-sm md:px-6 md:py-3"
								>
									View Work
								</a>
								<a
									href="https://drive.google.com/file/d/1XerM2A20jR5xc0BYbUzj5aWssdqQBhXH/view?usp=sharing"
									target="_blank"
									class="px-5 py-2.5 border border-dark-border hover:bg-dark-card text-slate-300 rounded-lg transition-all font-bold text-sm md:px-6 md:py-3"
								>
									Download CV
								</a>
							</div>

							<div class="hidden md:block w-px h-10 bg-dark-border mx-2"></div>

							<div class="flex items-center gap-4">
								<a
									v-for="social in socialLinks"
									:key="social.name"
									:href="social.url"
									target="_blank"
									class="text-slate-300 hover:text-white transition-transform hover:scale-110 opacity-70 hover:opacity-100"
									:title="social.name"
								>
									<Icon
										:name="social.icon"
										:size="social.name === 'Email' ? '24' : '20'"
										class="brightness-0 invert"
									/>
								</a>
							</div>
						</div>
					</div>

					<div
						class="mt-4 md:mt-8 pt-4 md:pt-6 border-t border-dark-border/50 w-full md:w-auto flex justify-center md:justify-start"
					>
						<div
							class="flex flex-wrap justify-center md:justify-start gap-3 md:gap-6 items-center"
						>
							<span
								class="text-[10px] md:text-xs text-slate-300 font-mono uppercase tracking-wider"
								>Stack:</span
							>
							<TransitionGroup name="list">
								<div
									v-for="tech in techStack"
									:key="tech.name"
									class="flex items-center gap-1.5 md:gap-2 text-slate-400 hover:text-primary-400 transition-colors"
								>
									<Icon :name="tech.icon" class="w-4 h-4 md:w-5 md:h-5" />
									<span class="text-sm font-medium">{{ tech.name }}</span>
								</div>
							</TransitionGroup>
						</div>
					</div>
				</div>

				<div
					class="w-full md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end mb-2 md:mb-0"
				>
					<div class="relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 group">
						<div
							class="absolute inset-0 bg-primary-600 blur-[40px] md:blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"
						></div>
						<div
							class="absolute inset-0 border-2 border-slate-700/50 rounded-[1.5rem] md:rounded-[2rem] rotate-6 transition-transform duration-500 group-hover:rotate-12 bg-dark-card/30 backdrop-blur-sm z-0"
						></div>

						<div
							class="absolute inset-0 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-slate-700/50 bg-slate-800 z-10 transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-105 shadow-2xl"
						>
							<img
								src="/images/alfiki-photo.webp"
								alt="Alfiki"
								class="w-full h-full object-cover transition-all duration-500"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
	transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateY(20px);
}
.list-leave-active {
	position: absolute;
}
</style>
