<script setup lang="ts">
import { computed } from "vue";
import { useProjects } from "@/composables/useProjects";

const { projects } = useProjects();

const featuredProjects = computed(() => projects.filter((p) => p.tier === 1));
const otherProjects = computed(() => projects.filter((p) => p.tier === 2));
</script>

<template>
	<section
		id="projects"
		class="py-12 md:py-24 scroll-mt-16 bg-dark-bg relative"
	>
		<div class="container mx-auto px-6">
			<div class="mb-20">
				<h2 class="text-3xl md:text-4xl font-bold mb-4">
					<span class="text-primary-400">Selected Works</span> & Products
				</h2>
				<p class="text-slate-300 max-w-2xl text-lg">
					Bridging the gap between complex engineering and intuitive user
					experience.
				</p>
			</div>

			<div class="space-y-32">
				<div
					v-for="(project, index) in featuredProjects"
					:key="project.id"
					class="group relative grid md:grid-cols-12 gap-8 items-center"
				>
					<div
						class="md:col-span-7 relative"
						:class="index % 2 === 1 ? 'md:order-2' : ''"
					>
						<div
							class="absolute inset-0 bg-primary-600/20 blur-3xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700"
						></div>
						<NuxtLink
							:to="`/projects/${project.id}`"
							class="block relative rounded-2xl overflow-hidden border border-dark-border bg-dark-card shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 cursor-pointer"
						>
							<div
								class="aspect-video bg-slate-800 flex items-center justify-center text-slate-600 overflow-hidden"
							>
								<img
									v-if="project.image"
									:src="project.image"
									:alt="project.title"
									class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
								/>
							</div>
						</NuxtLink>
					</div>

					<div
						class="md:col-span-5"
						:class="index % 2 === 1 ? 'md:order-1' : ''"
					>
						<div
							class="flex items-center gap-3 mb-4 text-sm font-mono text-primary-400"
						>
							<span>{{ project.category }}</span>
							<span
								v-if="project.stats"
								class="px-2 py-0.5 rounded-full bg-primary-900/30 text-primary-300 border border-primary-700/50 text-xs"
							>
								{{ project.stats }}
							</span>
						</div>

						<NuxtLink
							:to="`/projects/${project.id}`"
							class="inline-block hover:text-primary-400 transition-colors"
						>
							<h3 class="text-3xl font-bold mb-6 text-slate-100">
								{{ project.title }}
							</h3>
						</NuxtLink>

						<div v-if="project.impactStory" class="space-y-4 mb-8">
							<div class="flex gap-3 items-start">
								<div
									class="mt-1 p-1.5 rounded bg-red-500/10 text-red-400 shrink-0"
								>
									<Icon name="heroicons:exclamation-triangle" size="16" />
								</div>
								<p class="text-sm text-slate-300 leading-snug">
									<strong
										class="text-slate-100 block text-xs uppercase tracking-wide opacity-70 mb-0.5"
										>The Challenge</strong
									>
									{{ project.impactStory.problem }}
								</p>
							</div>
							<div class="flex gap-3 items-start">
								<div
									class="mt-1 p-1.5 rounded bg-blue-500/10 text-blue-400 shrink-0"
								>
									<Icon name="heroicons:wrench-screwdriver" size="16" />
								</div>
								<p class="text-sm text-slate-300 leading-snug">
									<strong
										class="text-slate-100 block text-xs uppercase tracking-wide opacity-70 mb-0.5"
										>My Solution</strong
									>
									{{ project.impactStory.solution }}
								</p>
							</div>
							<div class="flex gap-3 items-start">
								<div
									class="mt-1 p-1.5 rounded bg-green-500/10 text-green-400 shrink-0"
								>
									<Icon name="heroicons:rocket-launch" size="16" />
								</div>
								<p class="text-sm text-slate-300 leading-snug">
									<strong
										class="text-slate-100 block text-xs uppercase tracking-wide opacity-70 mb-0.5"
										>The Impact</strong
									>
									{{ project.impactStory.result }}
								</p>
							</div>
						</div>

						<p v-else class="text-slate-300 mb-6 leading-relaxed">
							{{ project.desc }}
						</p>

						<div class="flex flex-wrap gap-2 mb-8">
							<span
								v-for="tech in project.tech"
								:key="tech"
								class="px-3 py-1 bg-dark-card border border-dark-border rounded-lg text-sm text-slate-300"
							>
								{{ tech }}
							</span>
						</div>

						<div class="flex items-center gap-4">
							<NuxtLink
								:to="`/projects/${project.id}`"
								class="flex items-center gap-2 text-white font-medium hover:text-primary-400 transition-colors"
							>
								<span>Read Case Study</span>
								<Icon name="heroicons:arrow-right" />
							</NuxtLink>
							<a
								:href="project.link"
								target="_blank"
								class="text-slate-400 hover:text-white text-sm"
							>
								Visit Site
								<Icon name="heroicons:arrow-up-right" class="w-3 h-3 inline" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-32">
				<h3
					class="text-xl font-bold text-slate-200 mb-8 flex items-center gap-2"
				>
					<Icon name="heroicons:beaker" class="text-primary-500" />
					Dely Labs Products
				</h3>

				<div class="grid md:grid-cols-3 gap-6">
					<a
						v-for="project in otherProjects"
						:key="project.id"
						:href="project.link"
						target="_blank"
						class="p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-primary-500/50 transition-all hover:-translate-y-1 group flex flex-col cursor-pointer"
					>
						<div class="flex justify-between items-start mb-4">
							<Icon name="heroicons:folder" class="text-primary-600 w-8 h-8" />
							<Icon
								name="heroicons:arrow-up-right"
								class="text-slate-500 group-hover:text-white transition-colors"
							/>
						</div>

						<h4
							class="text-lg font-bold text-slate-200 mb-2 group-hover:text-primary-400 transition-colors"
						>
							{{ project.title }}
						</h4>
						<p class="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
							{{ project.desc }}
						</p>

						<div class="flex flex-wrap gap-2 mt-auto">
							<span
								v-for="tech in project.tech"
								:key="tech"
								class="text-xs text-slate-500 font-mono"
							>
								#{{ tech }}
							</span>
						</div>
					</a>
				</div>
			</div>

			<div class="mt-12 text-center">
				<NuxtLink
					to="/projects"
					class="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-dark-border text-slate-300 hover:text-white hover:border-primary-500 hover:bg-dark-card transition-all"
				>
					View All Projects Archive <Icon name="heroicons:arrow-right" />
				</NuxtLink>
			</div>
		</div>
	</section>
</template>
