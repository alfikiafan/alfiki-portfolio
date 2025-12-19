<script setup lang="ts">
import { usePortfolio } from "@/composables/usePortfolio";
const { services } = usePortfolio();
</script>

<template>
	<section id="services" class="py-24 bg-dark-card relative overflow-hidden">
		<div
			class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10"
		>
			<div
				class="absolute -top-24 -right-24 w-96 h-96 bg-primary-600 rounded-full blur-[128px]"
			></div>
			<div
				class="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600 rounded-full blur-[128px]"
			></div>
		</div>

		<div class="container mx-auto px-6 relative z-10">
			<div
				class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
			>
				<div>
					<h2 class="text-3xl font-bold mb-4">
						Beyond Full-time <span class="text-primary-400">Engineering</span>
					</h2>
					<p class="text-slate-300 max-w-xl">
						I also help businesses and researchers automate workflows and build
						custom solutions. Open for freelance or consulting opportunities.
					</p>
				</div>
				<a
					href="mailto:contact@alfiki.com"
					class="px-6 py-3 bg-white text-dark-bg font-bold rounded-xl hover:bg-slate-200 transition-colors flex items-center gap-2"
				>
					<Icon name="heroicons:envelope" /> Hire Me for Projects
				</a>
			</div>

			<div class="grid md:grid-cols-3 gap-6">
				<div
					v-for="(service, index) in services"
					:key="index"
					class="p-8 rounded-2xl bg-dark-bg border border-dark-border hover:-translate-y-2 transition-transform duration-300 group"
				>
					<div
						class="w-12 h-12 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center text-primary-400 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors"
					>
						<Icon :name="service.icon" size="24" />
					</div>

					<h3 class="text-xl font-bold text-white mb-3">{{ service.title }}</h3>
					<p class="text-slate-300 text-sm leading-relaxed mb-6">
						{{ service.desc }}
					</p>

					<div class="flex flex-wrap gap-2 mt-auto">
						<span
							v-for="tag in service.tags"
							:key="tag"
							class="text-xs font-mono text-slate-400 bg-dark-card px-2 py-1 rounded"
						>
							#{{ tag }}
						</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
