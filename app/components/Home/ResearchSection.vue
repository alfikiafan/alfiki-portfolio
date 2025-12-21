<script setup lang="ts">
import { usePortfolio } from "@/composables/usePortfolio";

const { research } = usePortfolio();
</script>

<template>
	<section
		id="research"
		class="py-12 md:py-24 scroll-mt-16 bg-dark-bg border-t border-dark-border"
	>
		<div class="container mx-auto px-6 max-w-4xl">
			<div class="text-center mb-12 md:mb-16">
				<h2 class="text-3xl md:text-4xl font-bold mb-4">
					Research & <span class="text-primary-400">Publications</span>
				</h2>
				<p class="text-slate-400 text-base md:text-lg">
					Where Machine Learning theory meets practical efficiency.
				</p>
			</div>

			<div class="space-y-4 md:space-y-6">
				<a
					v-for="(item, index) in research"
					:key="index"
					:href="item.link"
					target="_blank"
					class="block relative p-5 md:p-8 rounded-2xl bg-dark-card border border-dark-border hover:border-primary-500/50 transition-all group cursor-pointer"
				>
					<div
						v-if="item.venue.includes('Gold Medal')"
						class="absolute -top-2 -right-2 md:-top-3 md:-right-3 z-10"
					>
						<span
							class="flex items-center gap-1 px-2 py-0.5 md:px-3 md:py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 text-[10px] md:text-xs font-bold rounded-full shadow-lg backdrop-blur-md"
						>
							<Icon name="heroicons:trophy" /> Gold Medal
						</span>
					</div>

					<div
						class="flex flex-col md:flex-row md:items-start justify-between gap-3 md:gap-6"
					>
						<div>
							<h3
								class="text-lg md:text-2xl font-bold text-slate-100 group-hover:text-primary-400 transition-colors leading-snug mb-2 md:mb-3 pr-4"
							>
								{{ item.title }}
							</h3>

							<p
								class="text-xs md:text-sm font-mono text-primary-400 mb-3 border-l-2 border-primary-800 pl-3"
							>
								{{ item.venue }}
							</p>

							<p class="text-slate-400 text-sm leading-relaxed max-w-2xl">
								{{ item.desc }}
							</p>
						</div>

						<div
							class="shrink-0 flex items-center justify-end gap-2 text-slate-400 group-hover:text-white transition-colors border-t border-slate-800/50 md:border-0"
						>
							<span class="text-xs md:text-sm font-medium">View Paper</span>
							<div
								class="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-dark-bg border border-slate-700 group-hover:bg-slate-700 group-hover:border-slate-600 transition-all"
							>
								<Icon
									name="heroicons:document-text"
									class="w-4 h-4 md:w-5 md:h-5"
								/>
							</div>
						</div>
					</div>
				</a>
			</div>

			<div class="mt-12 text-center">
				<a
					href="https://scholar.google.com/citations?user=16jPr5cAAAAJ"
					target="_blank"
					class="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-base md:text-lg font-medium"
				>
					<span>View on Google Scholar</span>
					<Icon name="heroicons:arrow-right" />
				</a>
			</div>
		</div>
	</section>
</template>
