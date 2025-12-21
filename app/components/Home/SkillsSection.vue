<script setup lang="ts">
import { useSkills } from "@/composables/useSkills";

const { skills } = useSkills();
</script>

<template>
	<section
		id="skills"
		class="py-12 md:py-24 scroll-mt-16 bg-dark-bg border-t border-dark-border"
	>
		<div class="container mx-auto px-6">
			<div class="mb-16">
				<h2 class="text-3xl md:text-4xl font-bold mb-4">
					Technical <span class="text-primary-400">Arsenal</span>
				</h2>
				<p class="text-slate-400 text-lg max-w-2xl">
					A curated list of technologies I use to build robust applications.
				</p>
			</div>

			<div class="grid lg:grid-cols-12 gap-12">
				<div class="lg:col-span-5 space-y-6">
					<h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
						<Icon name="heroicons:sparkles" class="text-yellow-500" />
						Core Competencies
					</h3>

					<div
						v-for="(item, index) in skills.competencies"
						:key="index"
						class="p-5 rounded-xl bg-dark-card border border-dark-border hover:border-primary-500/30 transition-colors group"
					>
						<div class="flex items-start gap-4">
							<div
								class="p-3 rounded-lg bg-primary-500/10 text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors shrink-0"
							>
								<Icon :name="item.icon" size="24" />
							</div>
							<div>
								<h4
									class="text-lg font-bold text-slate-200 mb-1 group-hover:text-white transition-colors"
								>
									{{ item.title }}
								</h4>
								<p class="text-sm text-slate-400 leading-relaxed">
									{{ item.desc }}
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="lg:col-span-7 space-y-12">
					<div>
						<h3
							class="text-xl font-bold text-white mb-6 flex items-center gap-2"
						>
							<Icon name="heroicons:code-bracket" class="text-primary-500" />
							Primary Tech Stack
						</h3>
						<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
							<div
								v-for="tech in skills.techStack"
								:key="tech.name"
								class="flex items-center gap-3 p-4 rounded-xl bg-dark-card/50 border border-dark-border hover:border-primary-500/50 transition-all hover:-translate-y-1 group"
							>
								<Icon
									:name="tech.icon"
									class="w-8 h-8 shrink-0 group-hover:scale-110 transition-transform"
								/>
								<span
									class="text-base font-medium text-slate-300 group-hover:text-white"
									>{{ tech.name }}</span
								>
							</div>
						</div>
					</div>

					<div>
						<h3
							class="text-xl font-bold text-white mb-6 flex items-center gap-2"
						>
							<Icon
								name="heroicons:wrench-screwdriver"
								class="text-purple-500"
							/>
							Supporting Tools
						</h3>
						<div class="flex flex-wrap gap-4">
							<div
								v-for="tool in skills.tools"
								:key="tool.name"
								class="flex items-center gap-3 px-5 py-3 rounded-lg bg-dark-card border border-dark-border text-base text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-dark-card/80 transition-all cursor-default"
							>
								<Icon :name="tool.icon" class="w-6 h-6 shrink-0" />
								<span class="font-medium">{{ tool.name }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
