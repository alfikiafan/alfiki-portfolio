<script setup lang="ts">
const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
};

const socials = [
	{
		name: "Email",
		icon: "heroicons:envelope-solid",
		url: "mailto:alfiki.diastama@gmail.com",
	},
	{
		name: "LinkedIn",
		icon: "logos:linkedin-icon",
		url: "https://linkedin.com/in/alfiki",
	},
	{
		name: "GitHub",
		icon: "logos:github-icon",
		url: "https://github.com/alfikiafan",
	},
	{
		name: "Instagram",
		icon: "logos:instagram-icon",
		url: "https://instagram.com/alfikiafan",
	},
	{
		name: "Twitter",
		icon: "logos:twitter",
		url: "https://twitter.com/alfikiafan",
	},
];
</script>

<template>
	<footer
		class="bg-dark-card border-t border-dark-border pt-16 pb-8 relative overflow-hidden"
	>
		<div class="container mx-auto px-6 relative z-10">
			<div
				class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12"
			>
				<div>
					<div class="flex items-center gap-2 mb-4">
						<span
							class="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white font-mono text-sm"
							>A</span
						>
						<span class="text-xl font-bold text-slate-200 tracking-tight"
							>Alfiki Diastama</span
						>
					</div>
					<p class="text-slate-300 text-sm max-w-sm leading-relaxed">
						Building software that matters. Combining engineering precision with
						research-driven innovation.
					</p>
				</div>

				<div class="flex flex-wrap gap-4">
					<a
						v-for="social in socials"
						:key="social.name"
						:href="social.url"
						target="_blank"
						class="w-10 h-10 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-white hover:text-white hover:border-primary-500 hover:bg-primary-600/20 transition-all group"
						:title="social.name"
					>
						<Icon
							:name="social.icon"
							:size="social.name === 'Email' ? '24' : '20'"
							:class="{
								'brightness-0 invert': social.icon.startsWith('logos:'),
							}"
						/>
					</a>
				</div>
			</div>

			<div
				class="pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4"
			>
				<p class="text-slate-300 text-xs text-center md:text-left">
					&copy; {{ new Date().getFullYear() }} Alfiki Diastama. All rights
					reserved.
					<span class="hidden md:inline mx-2">•</span>
					Built with <span class="text-primary-400">Nuxt 3</span> &
					<span class="text-primary-400">Tailwind</span>.
				</p>

				<button
					@click="scrollToTop"
					class="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-primary-400 transition-colors uppercase tracking-wider"
				>
					Back to Top <Icon name="heroicons:arrow-up" />
				</button>
			</div>
		</div>
	</footer>
</template>
