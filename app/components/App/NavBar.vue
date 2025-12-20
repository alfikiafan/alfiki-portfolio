<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
	isScrolled.value = window.scrollY > 20;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));

const links = [
	{ name: "Skills", to: "/#skills" },
	{ name: "Projects", to: "/#projects" },
	{ name: "Research", to: "/#research" },
	{ name: "Experience", to: "/#experience" },
	{ name: "Services", to: "/#services" },
];
</script>

<template>
	<nav
		class="fixed top-0 w-full z-50 transition-all duration-300 border-b"
		:class="
			isScrolled
				? 'bg-dark-bg/90 backdrop-blur-md border-dark-border py-4'
				: 'bg-transparent border-transparent py-6'
		"
	>
		<div class="container mx-auto px-6 flex justify-between items-center">
			<NuxtLink
				to="/"
				class="text-xl font-bold font-sans tracking-tight flex items-center gap-2 group"
			>
				<span
					class="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white font-mono text-sm group-hover:bg-primary-500 transition-colors"
					>A</span
				>
				<span class="text-slate-200 group-hover:text-white transition-colors"
					>Alfiki</span
				>
			</NuxtLink>

			<div class="hidden md:flex items-center gap-6 lg:gap-8">
				<NuxtLink
					v-for="link in links"
					:key="link.name"
					:to="link.to"
					external
					class="text-sm font-medium text-slate-300 hover:text-primary-400 transition-colors"
				>
					{{ link.name }}
				</NuxtLink>

				<a
					href="mailto:alfiki.diastama@gmail.com"
					target="_blank"
					class="px-5 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-primary-500/50 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-sm transition-all"
				>
					Contact
				</a>
			</div>

			<button class="md:hidden text-slate-200 hover:text-white">
				<Icon name="heroicons:bars-3-bottom-right" size="24" />
			</button>
		</div>
	</nav>
</template>
