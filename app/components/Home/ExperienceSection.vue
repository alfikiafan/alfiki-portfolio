<script setup lang="ts">
import { usePortfolio } from "@/composables/usePortfolio";

const { experience, awards, education } = usePortfolio();

const isTrophy = (text: string) => {
	return (
		text.includes("1st Place") || text.includes("Gold") || text.includes("Best")
	);
};
</script>

<template>
	<section
		id="experience"
		class="py-12 md:py-24 scroll-mt-16 bg-dark-bg relative border-t border-dark-border"
	>
		<div class="container mx-auto px-6">
			<div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
				<div>
					<h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
						<Icon name="heroicons:briefcase" class="text-primary-500" />
						Work Experience
					</h2>

					<div
						class="space-y-12 relative border-l border-dark-border ml-3 pl-8"
					>
						<div
							v-for="(job, index) in experience"
							:key="index"
							class="relative"
						>
							<div
								class="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-dark-card border-2 border-primary-600 box-content"
							></div>

							<div class="mb-1">
								<h3 class="text-xl font-bold text-slate-200">{{ job.role }}</h3>
								<div class="text-primary-400 font-mono text-sm mb-2">
									{{ job.company }} • {{ job.type }}
								</div>
							</div>

							<p
								class="text-slate-400 text-sm mb-3 font-mono bg-dark-card/50 inline-block px-2 py-1 rounded border border-dark-border/50"
							>
								{{ job.period }}
							</p>

							<p class="text-slate-300 text-sm leading-relaxed">
								{{ job.desc }}
							</p>
						</div>
					</div>
				</div>

				<div class="space-y-12">
					<div>
						<h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
							<Icon name="heroicons:academic-cap" class="text-purple-500" />
							Education
						</h2>

						<div class="space-y-6">
							<div
								v-for="(edu, index) in education"
								:key="index"
								class="group p-6 rounded-2xl bg-dark-card/50 border border-dark-border hover:border-purple-500/30 transition-all relative overflow-hidden"
							>
								<div
									class="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl -mr-10 -mt-10 transition-opacity opacity-0 group-hover:opacity-100"
								></div>

								<div
									class="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2 relative z-10"
								>
									<h3
										class="text-lg font-bold text-slate-200 group-hover:text-white transition-colors"
									>
										{{ edu.school }}
									</h3>

									<span
										class="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded whitespace-nowrap w-fit md:ml-2"
									>
										{{ edu.year }}
									</span>
								</div>

								<div class="text-slate-300 font-medium mb-3 relative z-10">
									{{ edu.degree }}
								</div>
								<p class="text-slate-400 text-sm leading-relaxed relative z-10">
									{{ edu.desc }}
								</p>
							</div>
						</div>
					</div>

					<div>
						<h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
							<Icon name="heroicons:trophy" class="text-yellow-500" />
							Honors & Awards
						</h2>

						<div class="flex flex-col gap-3">
							<div
								v-for="(award, index) in awards"
								:key="index"
								class="relative px-4 py-3 rounded-xl border transition-all flex items-center gap-3 group"
								:class="
									isTrophy(award)
										? 'bg-yellow-500/10 border-yellow-500/50 shadow-[0_0_15px_-5px_rgba(234,179,8,0.2)]'
										: 'bg-dark-card border-dark-border hover:border-slate-600'
								"
							>
								<div class="shrink-0 mt-0.5">
									<Icon
										:name="
											isTrophy(award) ? 'heroicons:trophy' : 'heroicons:star'
										"
										class="transition-colors w-5 h-5"
										:class="
											isTrophy(award)
												? 'text-yellow-400'
												: 'text-slate-400 group-hover:text-yellow-400'
										"
									/>
								</div>

								<span
									class="text-sm transition-colors leading-snug flex-1"
									:class="
										isTrophy(award)
											? 'text-yellow-100 font-medium'
											: 'text-slate-300 group-hover:text-slate-200'
									"
								>
									{{ award }}
								</span>

								<div
									v-if="isTrophy(award)"
									class="absolute inset-0 bg-yellow-400/5 rounded-xl animate-pulse-slow pointer-events-none"
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
@keyframes pulse-slow {
	0%,
	100% {
		opacity: 0.5;
	}
	50% {
		opacity: 0.2;
	}
}
.animate-pulse-slow {
	animation: pulse-slow 4s infinite ease-in-out;
}
</style>
