<script setup lang="ts">
import { usePortfolio } from "@/composables/usePortfolio";

const { experience, awards } = usePortfolio();
</script>

<template>
	<section
		id="experience"
		class="py-24 bg-dark-bg relative border-t border-dark-border"
	>
		<div class="container mx-auto px-6">
			<div class="grid md:grid-cols-2 gap-16">
				<div>
					<h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
						<Icon name="heroicons:briefcase" class="text-primary-500" />
						Experience
					</h2>

					<div class="space-y-8 relative border-l border-dark-border ml-3 pl-8">
						<div
							v-for="(job, index) in experience"
							:key="index"
							class="relative"
						>
							<div
								class="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-dark-card border-2 border-primary-600"
							></div>

							<div class="mb-1">
								<h3 class="text-xl font-bold text-slate-200">{{ job.role }}</h3>
								<div class="text-primary-400 font-mono text-sm mb-2">
									{{ job.company }} • {{ job.type }}
								</div>
							</div>

							<p
								class="text-slate-300 text-sm mb-2 font-mono bg-dark-card/50 inline-block px-2 py-1 rounded"
							>
								{{ job.period }}
							</p>

							<p class="text-slate-300 text-sm leading-relaxed">
								{{ job.desc }}
							</p>
						</div>
					</div>
				</div>

				<div>
					<h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
						<Icon name="heroicons:star" class="text-yellow-500" />
						Honors & Awards
					</h2>

					<div class="grid gap-4">
						<div
							v-for="(award, index) in awards"
							:key="index"
							class="p-4 rounded-xl bg-dark-card border border-dark-border hover:border-yellow-500/30 transition-all flex items-start gap-4 group"
						>
							<div class="shrink-0 mt-1">
								<Icon
									name="heroicons:trophy"
									class="text-slate-600 group-hover:text-yellow-500 transition-colors w-6 h-6"
								/>
							</div>
							<span
								class="text-slate-300 group-hover:text-white transition-colors"
							>
								{{ award }}
							</span>
						</div>
					</div>

					<div
						class="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary-900/20 to-transparent border border-primary-500/20"
					>
						<h3 class="text-lg font-bold text-white mb-2">
							Want the full details?
						</h3>
						<p class="text-slate-400 text-sm mb-4">
							Download my complete CV to see detailed coursework and
							certifications.
						</p>
						<a
							href="#"
							target="_blank"
							class="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-white text-slate-900 font-bold rounded-lg transition-all"
						>
							<Icon name="heroicons:arrow-down-tray" /> Download Resume
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
