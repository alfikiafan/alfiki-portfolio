<script setup lang="ts">
import { usePortfolio } from "@/composables/usePortfolio";
const { skills } = usePortfolio();
</script>

<template>
	<section
		id="skills"
		class="py-24 bg-dark-bg border-t border-dark-border relative overflow-hidden"
	>
		<div
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-900/10 blur-[120px] rounded-full pointer-events-none"
		></div>

		<div class="container mx-auto px-6 relative z-10">
			<div class="text-center mb-16 max-w-2xl mx-auto">
				<h2 class="text-3xl md:text-4xl font-bold mb-4">
					Technical <span class="text-primary-400">Arsenal</span>
				</h2>
				<p class="text-slate-400 text-lg">
					A hybrid stack optimized for
					<span class="text-white font-medium">High Performance Web</span> and
					<span class="text-white font-medium">AI Scalability</span>.
				</p>
			</div>

			<div class="mb-16">
				<h3
					class="text-sm font-mono text-slate-400 uppercase tracking-widest mb-8 text-center"
				>
					— Web & App Development —
				</h3>

				<div class="flex flex-wrap justify-center gap-4">
					<div
						v-for="skill in skills.development"
						:key="skill.name"
						class="group relative p-[1px] rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-primary-500 hover:to-primary-400 transition-all duration-300"
					>
						<div
							class="relative px-5 py-3 bg-dark-bg rounded-[11px] flex items-center gap-3 transition-colors group-hover:bg-dark-card"
						>
							<div class="w-6 h-6 flex items-center justify-center shrink-0">
								<Icon
									:name="skill.icon"
									class="w-full h-full transition-transform group-hover:scale-110 duration-300"
									:class="{ 'invert brightness-200': skill.darkInfo }"
								/>
							</div>
							<span
								class="text-slate-300 font-medium text-sm group-hover:text-white transition-colors"
							>
								{{ skill.name }}
							</span>
						</div>
					</div>
				</div>
			</div>

			<div>
				<h3
					class="text-sm font-mono text-slate-400 uppercase tracking-widest mb-8 text-center"
				>
					— AI & Automation —
				</h3>

				<div class="flex flex-wrap justify-center gap-4">
					<div
						v-for="skill in skills.ai_data"
						:key="skill.name"
						class="group relative p-[1px] rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-purple-500 hover:to-purple-400 transition-all duration-300"
					>
						<div
							class="relative px-5 py-3 bg-dark-bg rounded-[11px] flex items-center gap-3 transition-colors group-hover:bg-dark-card"
						>
							<div class="w-6 h-6 flex items-center justify-center shrink-0">
								<Icon
									:name="skill.icon"
									class="w-full h-full transition-transform group-hover:scale-110 duration-300"
									:class="{ 'invert brightness-200': skill.darkInfo }"
								/>
							</div>
							<span
								class="text-slate-300 font-medium text-sm group-hover:text-white transition-colors"
							>
								{{ skill.name }}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
