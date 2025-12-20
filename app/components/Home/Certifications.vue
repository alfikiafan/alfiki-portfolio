<script setup lang="ts">
import { useCertifications } from "@/composables/useCertifications";

const { certifications } = useCertifications();
</script>

<template>
	<section
		id="certifications"
		class="py-24 bg-dark-bg border-t border-dark-border"
	>
		<div class="container mx-auto px-6">
			<div class="mb-16 md:text-center max-w-3xl mx-auto">
				<h2 class="text-3xl md:text-4xl font-bold mb-6">
					Licenses & <span class="text-primary-400">Certifications</span>
				</h2>
				<p class="text-slate-400 text-lg">
					Validated expertise in Machine Learning, Data Science, and Software
					Engineering from globally recognized institutions.
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div
					v-for="(cert, index) in certifications"
					:key="index"
					class="p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-slate-500 transition-all group flex gap-4 items-start"
				>
					<div
						class="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700 text-slate-100 overflow-hidden"
					>
						<img
							v-if="cert.logo && cert.logo.startsWith('/')"
							:src="cert.logo"
							alt="issuer logo"
							class="w-10 h-10 object-contain"
						/>
						<Icon v-else-if="cert.logo" :name="cert.logo" class="w-7 h-7" />
						<Icon v-else name="heroicons:academic-cap" class="w-7 h-7" />
					</div>

					<div class="flex-grow">
						<h3
							class="text-slate-100 font-bold text-sm mb-1 leading-snug group-hover:text-primary-400 transition-colors"
						>
							{{ cert.name }}
						</h3>
						<p class="text-slate-400 text-xs mb-3">
							{{ cert.issuer }}
						</p>

						<div
							class="flex items-center gap-3 text-[10px] text-slate-500 font-mono uppercase tracking-wider"
						>
							<span>Issued {{ cert.date }}</span>
							<span v-if="cert.expiry">• Exp {{ cert.expiry }}</span>
						</div>

						<div
							class="mt-3 pt-3 border-t border-slate-700/50 flex justify-between items-center"
						>
							<span class="text-[10px] text-slate-500"
								>ID: {{ cert.credentialId }}</span
							>
							<a
								:href="cert.link"
								target="_blank"
								class="text-slate-400 hover:text-white transition-colors"
							>
								<Icon name="heroicons:arrow-up-right" class="w-4 h-4" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
