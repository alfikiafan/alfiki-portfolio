<script setup lang="ts">
import { ref, computed } from "vue";
import { useProjects } from "@/composables/useProjects";
import AppNavBar from "@/components/App/NavBar.vue";
import AppFooter from "@/components/App/Footer.vue";

const { projects } = useProjects();

// STATE FILTER
const activeFilter = ref("All");
const filters = [
	"All",
	"Web App",
	"Mobile App",
	"AI & Data",
	"Game",
	"Desktop App",
];

const tier1 = computed(() => projects.filter((p) => p.tier === 1));
const tier2 = computed(() => projects.filter((p) => p.tier === 2));
const tier3 = computed(() => projects.filter((p) => p.tier === 3));
const tier4 = computed(() => projects.filter((p) => p.tier === 4));

const filteredProjects = computed(() => {
	if (activeFilter.value === "All") return projects;
	return projects.filter((p) => p.tags && p.tags.includes(activeFilter.value));
});

const getCategoryIcon = (category: string) => {
	if (category.includes("AI") || category.includes("Data"))
		return "heroicons:sparkles";
	if (category.includes("Mobile")) return "heroicons:device-phone-mobile";
	if (category.includes("Game")) return "heroicons:puzzle-piece";
	if (category.includes("Desktop")) return "heroicons:computer-desktop";
	return "heroicons:globe-alt";
};
</script>

<template>
	<div
		class="flex flex-col min-h-screen bg-dark-bg text-slate-200 font-sans selection:bg-primary-500/30"
	>
		<AppNavBar />

		<main class="flex-grow pt-32 pb-20">
			<div class="container mx-auto px-6">
				<div class="text-center max-w-2xl mx-auto mb-12">
					<h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">
						Project <span class="text-primary-400">Library</span>
					</h1>
					<p class="text-slate-300 text-lg leading-relaxed">
						An archive of {{ projects.length }} projects. From production apps
						to academic research and weekend experiments.
					</p>
				</div>

				<div class="flex flex-wrap justify-center gap-3 mb-16">
					<button
						v-for="filter in filters"
						:key="filter"
						@click="activeFilter = filter"
						class="px-5 py-2 rounded-full text-sm font-medium transition-all border"
						:class="
							activeFilter === filter
								? 'bg-primary-600 border-primary-500 text-white shadow-lg shadow-primary-900/50'
								: 'bg-dark-card border-dark-border text-slate-400 hover:text-white hover:border-slate-400'
						"
					>
						{{ filter }}
					</button>
				</div>

				<div v-if="activeFilter === 'All'" class="space-y-20">
					<div>
						<h2
							class="text-2xl font-bold mb-8 text-white flex items-center gap-3"
						>
							<Icon name="heroicons:star" class="text-yellow-500" /> Featured
							Products
						</h2>
						<div class="grid md:grid-cols-2 gap-8">
							<NuxtLink
								v-for="project in tier1"
								:key="project.id"
								:to="`/projects/${project.id}`"
								class="group relative rounded-2xl border border-dark-border bg-dark-card overflow-hidden hover:border-primary-500/50 transition-all hover:-translate-y-1"
							>
								<div class="h-64 overflow-hidden relative">
									<img
										v-if="project.image"
										:src="project.image"
										class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<div
										v-else
										class="w-full h-full bg-slate-800 flex items-center justify-center"
									>
										<Icon
											name="heroicons:photo"
											class="text-slate-400 w-12 h-12"
										/>
									</div>

									<div class="absolute top-4 left-4 flex gap-2">
										<span
											class="bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs font-bold border border-white/10 text-white"
										>
											{{ project.category }}
										</span>
										<span
											class="bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs font-mono text-slate-300 border border-white/10"
										>
											{{ project.year }}
										</span>
									</div>
								</div>
								<div class="p-6">
									<h3
										class="text-2xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors"
									>
										{{ project.title }}
									</h3>
									<p class="text-slate-300 text-sm line-clamp-2">
										{{ project.desc }}
									</p>
								</div>
							</NuxtLink>
						</div>
					</div>

					<div>
						<h2
							class="text-2xl font-bold mb-8 text-white flex items-center gap-3"
						>
							<Icon name="heroicons:beaker" class="text-primary-500" /> Dely
							Labs Products
						</h2>
						<div class="grid md:grid-cols-3 gap-6">
							<NuxtLink
								v-for="project in tier2"
								:key="project.id"
								:to="`/projects/${project.id}`"
								class="p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-primary-500/30 transition-all hover:-translate-y-1 group flex flex-col"
							>
								<div class="flex justify-between items-start mb-4">
									<div class="flex flex-col gap-1">
										<span class="text-xs font-bold text-slate-300">{{
											project.category
										}}</span>
										<span class="text-xs font-mono text-slate-400">{{
											project.year
										}}</span>
									</div>
									<Icon
										name="heroicons:arrow-right"
										class="text-slate-400 group-hover:text-white"
									/>
								</div>
								<h3
									class="text-lg font-bold mb-2 text-white group-hover:text-primary-400 transition-colors"
								>
									{{ project.title }}
								</h3>
								<p class="text-slate-300 text-sm mb-4 flex-grow">
									{{ project.desc }}
								</p>
								<div class="flex gap-2 flex-wrap">
									<span
										v-for="t in project.tech"
										:key="t"
										class="text-xs font-mono text-slate-400"
										>#{{ t }}</span
									>
								</div>
							</NuxtLink>
						</div>
					</div>

					<div>
						<h2
							class="text-2xl font-bold mb-8 text-white flex items-center gap-3"
						>
							<Icon name="heroicons:cpu-chip" class="text-purple-500" /> AI
							Research & Major Apps
						</h2>
						<div class="grid md:grid-cols-3 gap-6">
							<a
								v-for="project in tier3"
								:key="project.id"
								:href="project.link"
								target="_blank"
								class="p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-purple-500/30 transition-all hover:-translate-y-1 group flex flex-col"
							>
								<div class="flex justify-between items-start mb-4">
									<div class="flex gap-3 items-center">
										<Icon
											:name="getCategoryIcon(project.category)"
											class="w-8 h-8 text-purple-500"
										/>
										<div class="flex flex-col gap-1">
											<span class="text-xs font-bold text-slate-300">{{
												project.category
											}}</span>
											<span class="text-xs font-mono text-slate-400">{{
												project.year
											}}</span>
										</div>
									</div>
									<Icon
										name="heroicons:arrow-up-right"
										class="text-slate-400 group-hover:text-white"
									/>
								</div>
								<h3
									class="text-lg font-bold mb-2 text-white group-hover:text-purple-400 transition-colors"
								>
									{{ project.title }}
								</h3>
								<p class="text-slate-300 text-sm mb-4 flex-grow line-clamp-3">
									{{ project.desc }}
								</p>
								<div class="flex gap-2 flex-wrap">
									<span
										v-for="t in project.tech.slice(0, 3)"
										:key="t"
										class="text-xs border border-dark-border px-1.5 py-0.5 rounded text-slate-400 bg-dark-bg"
										>{{ t }}</span
									>
								</div>
							</a>
						</div>
					</div>

					<div>
						<h2
							class="text-2xl font-bold mb-8 text-white flex items-center gap-3"
						>
							<Icon name="heroicons:academic-cap" class="text-slate-400" />
							Academic & Miscellaneous
						</h2>
						<div class="grid md:grid-cols-4 gap-4">
							<a
								v-for="project in tier4"
								:key="project.id"
								:href="project.link"
								target="_blank"
								class="p-6 rounded-xl bg-dark-card/50 border border-dark-border hover:bg-dark-card hover:border-slate-400 transition-all group flex flex-col h-full"
							>
								<div class="flex justify-between items-start mb-4">
									<h4
										class="font-bold text-slate-200 group-hover:text-white text-sm leading-tight pr-2 pt-1"
									>
										{{ project.title }}
									</h4>
									<span
										class="text-[10px] font-mono text-slate-400 whitespace-nowrap bg-dark-bg px-1.5 py-0.5 rounded border border-dark-border"
									>
										{{ project.year }}
									</span>
								</div>
								<p class="text-xs text-slate-300 line-clamp-3 mb-4 flex-grow">
									{{ project.desc }}
								</p>
								<div class="text-[10px] font-mono text-slate-400">
									{{ project.tech.join(", ") }}
								</div>
							</a>
						</div>
					</div>
				</div>

				<div v-else>
					<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div v-for="project in filteredProjects" :key="project.id">
							<NuxtLink
								v-if="project.tier <= 2"
								:to="`/projects/${project.id}`"
								class="p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-primary-500/30 transition-all hover:-translate-y-1 group flex flex-col h-full"
							>
								<div class="flex justify-between items-start mb-4">
									<div class="flex flex-col gap-1">
										<span
											class="w-fit px-2 py-1 rounded bg-slate-800 border border-slate-700 text-xs font-bold text-slate-300"
											>{{ project.category }}</span
										>
										<span class="text-xs font-mono text-slate-400">{{
											project.year
										}}</span>
									</div>
									<Icon
										name="heroicons:arrow-right"
										class="text-slate-400 group-hover:text-white"
									/>
								</div>
								<h3
									class="text-lg font-bold mb-2 text-white group-hover:text-primary-400 transition-colors"
								>
									{{ project.title }}
								</h3>
								<p class="text-slate-300 text-sm mb-4 flex-grow line-clamp-3">
									{{ project.desc }}
								</p>
								<div class="flex gap-2 flex-wrap">
									<span
										v-for="t in project.tech.slice(0, 4)"
										:key="t"
										class="text-xs font-mono text-slate-400"
										>#{{ t }}</span
									>
								</div>
							</NuxtLink>

							<a
								v-else
								:href="project.link"
								target="_blank"
								class="p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-purple-500/30 transition-all hover:-translate-y-1 group flex flex-col h-full"
							>
								<div class="flex justify-between items-start mb-4">
									<div class="flex flex-col gap-1">
										<span
											class="w-fit px-2 py-1 rounded bg-slate-800 border border-slate-700 text-xs font-bold text-slate-300"
											>{{ project.category }}</span
										>
										<span class="text-xs font-mono text-slate-400">{{
											project.year
										}}</span>
									</div>
									<Icon
										name="heroicons:arrow-up-right"
										class="text-slate-400 group-hover:text-white"
									/>
								</div>
								<h3
									class="text-lg font-bold mb-2 text-white group-hover:text-purple-400 transition-colors"
								>
									{{ project.title }}
								</h3>
								<p class="text-slate-300 text-sm mb-4 flex-grow line-clamp-3">
									{{ project.desc }}
								</p>
								<div class="flex gap-2 flex-wrap">
									<span
										v-for="t in project.tech.slice(0, 4)"
										:key="t"
										class="text-xs font-mono text-slate-400"
										>#{{ t }}</span
									>
								</div>
							</a>
						</div>
					</div>

					<div
						v-if="filteredProjects.length === 0"
						class="text-center py-20 text-slate-400"
					>
						<Icon
							name="heroicons:face-frown"
							size="48"
							class="mb-4 opacity-50 mx-auto"
						/>
						<p>No projects found for category "{{ activeFilter }}"</p>
					</div>
				</div>

				<div class="text-center py-8 border-t border-dark-border mt-16">
					<p class="text-slate-400 mb-4">Still want more?</p>
					<a
						href="https://github.com/alfikiafan?tab=repositories"
						target="_blank"
						class="inline-flex items-center gap-2 text-primary-400 hover:text-white font-medium"
					>
						Visit GitHub for 70+ Repositories
						<Icon name="heroicons:arrow-right" />
					</a>
				</div>
			</div>
		</main>

		<AppFooter />
	</div>
</template>
