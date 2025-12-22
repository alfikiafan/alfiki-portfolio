<script setup lang="ts">
import { ref, computed } from "vue";

const isML = ref(false);

const currentRole = computed(() =>
	isML.value ? "Machine Learning Engineer" : "Software Engineer"
);

const currentHeadline = computed(() =>
	isML.value
		? "Applying Deep Learning Research to Real-World Systems"
		: "Building Privacy-First Web Products & Scalable Systems"
);

const currentDesc = computed(() =>
	isML.value
		? "Gemastik XVI Gold Medalist & IEEE Author. Specializing in Computer Vision efficiency."
		: "Founder of Dely Labs. Creator of Dely Sign. I build high-standard applications that prioritize privacy."
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
	<section class="relative flex items-center overflow-hidden min-h-[100vh]">
		<div class="absolute top-0 right-0 -z-10 opacity-20 pointer-events-none">
			<div
				class="w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-primary-600 rounded-full blur-[80px]"
			></div>
		</div>

		<div class="container mx-auto p-6">
			<div class="flex flex-col md:grid md:grid-cols-12 gap-4 items-center">
				<div
					class="w-full order-2 md:order-1 flex flex-col justify-center items-center md:items-start text-center md:text-left md:col-span-8"
				>
					<div
						class="mb-8 grid grid-cols-2 bg-dark-card border border-dark-border rounded-full p-1.5 relative w-[300px]"
					>
						<div
							class="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary-600 rounded-full transition-all duration-300 ease-out"
							:class="isML ? 'translate-x-[100%] left-1' : 'left-1'"
						></div>

						<button
							@click="isML = false"
							class="relative z-10 py-1.5 rounded-full text-xs font-bold transition-colors text-center"
							:class="!isML ? 'text-white' : 'text-slate-400'"
						>
							Software
						</button>
						<button
							@click="isML = true"
							class="relative z-10 py-1.5 rounded-full text-xs font-bold transition-colors text-center"
							:class="isML ? 'text-white' : 'text-slate-400'"
						>
							Machine Learning
						</button>
					</div>

					<div class="space-y-4">
						<h1
							class="text-4xl md:text-6xl font-extrabold text-white tracking-tight"
						>
							Alfiki Diastama
						</h1>

						<Transition name="fade-slide" mode="out-in">
							<div :key="isML.toString()" class="space-y-4">
								<div class="text-xl md:text-4xl font-bold">
									<span
										class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200"
									>
										{{ currentRole }}
									</span>
								</div>

								<p
									class="text-lg md:text-2xl font-medium text-slate-200 leading-snug max-w-3xl"
								>
									{{ currentHeadline }}
								</p>

								<p
									class="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed"
								>
									{{ currentDesc }}
								</p>
							</div>
						</Transition>
						<div class="flex flex-col md:flex-row items-center gap-6 pt-6">
							<div class="flex flex-wrap justify-center md:justify-start gap-3">
								<a
									href="#projects"
									class="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-lg transition-all shadow-lg text-sm"
								>
									View Work
								</a>
								<a
									href="https://drive.google.com/file/d/1XerM2A20jR5xc0BYbUzj5aWssdqQBhXH/view?usp=sharing"
									target="_blank"
									class="px-6 py-3 border border-dark-border hover:bg-dark-card text-slate-300 rounded-lg transition-all font-bold text-sm"
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
									class="text-slate-400 hover:text-white transition-transform hover:scale-110"
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
				</div>

				<div
					class="w-full order-1 md:order-2 flex justify-center mb-8 md:mb-0 md:col-span-4"
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
.fade-slide-enter-active,
.fade-slide-leave-active {
	transition: all 0.3s ease-in-out;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
	opacity: 0;
	transform: translateY(10px);
}
</style>
