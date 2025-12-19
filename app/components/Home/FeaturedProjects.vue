<script setup lang="ts">
// --- EXPLICIT IMPORTS ---
import { computed } from "vue";
import { usePortfolio } from "@/composables/usePortfolio";

// Ambil data projects
const { projects } = usePortfolio();

// Filter hanya yang 'featured' (Narajiwa & Dely Sign)
const featuredProjects = computed(() => projects.filter((p) => p.featured));

// Filter sisanya (Dely Terbilang, dll)
const otherProjects = computed(() => projects.filter((p) => !p.featured));
</script>

<template>
	<section id="projects" class="py-24 bg-dark-bg relative">
		<div class="container mx-auto px-6">
			<div class="mb-20">
				<h2 class="text-3xl md:text-4xl font-bold mb-4">
					<span class="text-primary-400">Selected Works</span> & Products
				</h2>
				<p class="text-slate-300 max-w-2xl text-lg">
					Bridging the gap between complex engineering and intuitive user
					experience. Here are some of my proudest builds.
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

						<div
							class="relative rounded-2xl overflow-hidden border border-dark-border bg-dark-card shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
						>
							<div
								class="aspect-video bg-slate-800 flex items-center justify-center text-slate-600"
							>
								<img
									v-if="project.image"
									:src="project.image"
									:alt="project.title"
									class="w-full h-full object-cover"
								/>
								<span v-else class="font-mono text-sm"
									>Image Placeholder: {{ project.title }}</span
								>
							</div>
						</div>
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

						<h3
							class="text-3xl font-bold mb-4 text-slate-100 group-hover:text-primary-400 transition-colors"
						>
							{{ project.title }}
						</h3>

						<p class="text-slate-300 mb-6 leading-relaxed">
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
								class="text-slate-300 hover:text-slate-300 text-sm"
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
					The Dely Labs Experiments
				</h3>

				<div class="grid md:grid-cols-3 gap-6">
					<div
						v-for="project in otherProjects"
						:key="project.id"
						class="p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-primary-500/50 transition-all hover:-translate-y-1 group"
					>
						<div class="flex justify-between items-start mb-4">
							<Icon name="heroicons:folder" class="text-primary-600 w-8 h-8" />
							<a :href="project.link" class="text-slate-300 hover:text-white"
								><Icon name="heroicons:arrow-up-right"
							/></a>
						</div>

						<h4
							class="text-lg font-bold text-slate-200 mb-2 group-hover:text-primary-400 transition-colors"
						>
							{{ project.title }}
						</h4>
						<p class="text-slate-300 text-sm mb-4 line-clamp-3">
							{{ project.desc }}
						</p>

						<div class="flex flex-wrap gap-2 mt-auto">
							<span
								v-for="tech in project.tech"
								:key="tech"
								class="text-xs text-slate-400 font-mono"
							>
								#{{ tech }}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
