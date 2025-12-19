<script setup lang="ts">
// --- EXPLICIT IMPORTS ---
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { usePortfolio } from "@/composables/usePortfolio";

const route = useRoute();
const router = useRouter();
const { projects } = usePortfolio();

// Ambil ID dari URL (misal: /projects/dely-sign -> id = dely-sign)
const projectId = route.params.id as string;

// Cari project yang sesuai
const project = computed(() => projects.find((p) => p.id === projectId));

// Kalau project gak ketemu (misal user ngawur ngetik URL), redirect ke home
if (!project.value) {
	router.push("/");
}
</script>

<template>
	<div
		v-if="project"
		class="min-h-screen bg-dark-bg text-slate-200 font-sans pb-20"
	>
		<div class="relative h-[50vh] min-h-[400px]">
			<div class="absolute inset-0">
				<div
					v-if="!project.image || project.image.includes('placeholder')"
					class="w-full h-full bg-slate-800 flex items-center justify-center"
				>
					<span class="text-slate-600 font-mono text-2xl"
						>{{ project.title }} Cover</span
					>
				</div>
				<img
					v-else
					:src="project.image"
					class="w-full h-full object-cover opacity-30"
					:alt="project.title"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent"
				></div>
			</div>

			<div
				class="relative container mx-auto px-6 h-full flex flex-col justify-end pb-12"
			>
				<NuxtLink
					to="/"
					class="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors w-fit"
				>
					<Icon name="heroicons:arrow-left" /> Back to Home
				</NuxtLink>

				<div class="flex items-center gap-3 mb-4">
					<span
						class="px-3 py-1 rounded-full bg-primary-900/50 text-primary-300 border border-primary-700/50 text-sm font-medium"
					>
						{{ project.category }}
					</span>
					<span class="text-slate-400 text-sm border-l border-slate-600 pl-3">
						{{ project.role }}
					</span>
				</div>

				<h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
					{{ project.title }}
				</h1>

				<div class="flex gap-4">
					<a
						:href="project.link"
						target="_blank"
						class="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-lg transition-all flex items-center gap-2"
					>
						Visit Live Site <Icon name="heroicons:arrow-up-right" />
					</a>
				</div>
			</div>
		</div>

		<div class="container mx-auto px-6 mt-12">
			<div class="grid md:grid-cols-12 gap-12">
				<div class="md:col-span-8 space-y-12">
					<section>
						<h2 class="text-2xl font-bold text-white mb-4">Overview</h2>
						<p class="text-slate-400 leading-relaxed text-lg">
							{{ project.desc }}
						</p>
					</section>

					<section
						v-if="project.challenge"
						class="bg-dark-card border border-dark-border p-8 rounded-2xl"
					>
						<div class="flex items-start gap-4">
							<div class="p-3 bg-red-500/10 rounded-lg text-red-400 shrink-0">
								<Icon name="heroicons:exclamation-triangle" size="24" />
							</div>
							<div>
								<h3 class="text-xl font-bold text-white mb-2">The Challenge</h3>
								<p class="text-slate-400 leading-relaxed">
									{{ project.challenge }}
								</p>
							</div>
						</div>
					</section>

					<section
						v-if="project.solution"
						class="bg-dark-card border border-dark-border p-8 rounded-2xl"
					>
						<div class="flex items-start gap-4">
							<div
								class="p-3 bg-green-500/10 rounded-lg text-green-400 shrink-0"
							>
								<Icon name="heroicons:light-bulb" size="24" />
							</div>
							<div>
								<h3 class="text-xl font-bold text-white mb-2">The Solution</h3>
								<p class="text-slate-400 leading-relaxed">
									{{ project.solution }}
								</p>
							</div>
						</div>
					</section>
				</div>

				<div class="md:col-span-4 space-y-8">
					<div
						v-if="project.keyFeatures"
						class="bg-dark-card/50 border border-dark-border rounded-xl p-6"
					>
						<h3
							class="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4"
						>
							Key Features
						</h3>
						<ul class="space-y-3">
							<li
								v-for="feature in project.keyFeatures"
								:key="feature"
								class="flex items-start gap-2 text-slate-400 text-sm"
							>
								<Icon
									name="heroicons:check-circle"
									class="text-primary-500 mt-0.5 shrink-0"
								/>
								{{ feature }}
							</li>
						</ul>
					</div>

					<div>
						<h3
							class="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4"
						>
							Technologies
						</h3>
						<div class="flex flex-wrap gap-2">
							<span
								v-for="tech in project.tech"
								:key="tech"
								class="px-3 py-1.5 bg-dark-card border border-dark-border rounded-lg text-sm text-slate-300 font-mono"
							>
								{{ tech }}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
