<script setup lang="ts">
import { usePortfolio } from "@/composables/usePortfolio";

const { research } = usePortfolio();
</script>

<template>
	<section
		id="research"
		class="py-24 bg-dark-card/30 border-t border-dark-border"
	>
		<div class="container mx-auto px-6 max-w-4xl">
			<div class="text-center mb-16">
				<h2 class="text-3xl md:text-4xl font-bold mb-4">
					Research & <span class="text-primary-400">Publications</span>
				</h2>
				<p class="text-slate-400">
					Where Machine Learning theory meets practical efficiency.
				</p>
			</div>

			<div class="space-y-6">
				<div
					v-for="(item, index) in research"
					:key="index"
					class="relative p-8 rounded-2xl bg-dark-bg border border-dark-border hover:border-primary-500/30 transition-all group"
				>
					<div
						v-if="item.venue.includes('Gold Medal')"
						class="absolute -top-3 -right-3"
					>
						<span
							class="flex items-center gap-1 px-3 py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 text-xs font-bold rounded-full shadow-lg backdrop-blur-md"
						>
							<Icon name="heroicons:trophy" /> Gold Medal
						</span>
					</div>

					<div
						class="flex flex-col md:flex-row md:items-start justify-between gap-4"
					>
						<div>
							<h3
								class="text-xl font-bold text-slate-200 group-hover:text-primary-400 transition-colors leading-snug mb-2"
							>
								{{ item.title }}
							</h3>
							<p
								class="text-sm font-mono text-primary-500 mb-3 border-l-2 border-primary-800 pl-3"
							>
								{{ item.venue }}
							</p>
							<p class="text-slate-300 text-sm leading-relaxed max-w-2xl">
								{{ item.desc }}
							</p>
						</div>

						<div class="shrink-0 mt-2 md:mt-0">
							<a
								:href="item.link"
								class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-dark-card border border-dark-border text-slate-300 hover:text-white hover:bg-primary-600 hover:border-primary-600 transition-all"
								title="View Paper"
							>
								<Icon name="heroicons:document-text" class="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-12 text-center">
				<a
					href="https://scholar.google.com/citations?user=16jPr5cAAAAJ"
					target="_blank"
					class="inline-flex items-center gap-2 text-slate-200 hover:text-primary-400 transition-colors"
				>
					<span>View on Google Scholar</span>
					<Icon name="heroicons:arrow-right" />
				</a>
			</div>
		</div>
	</section>
</template>
