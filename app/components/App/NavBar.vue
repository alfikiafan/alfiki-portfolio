<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
	isScrolled.value = window.scrollY > 20;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));

const links = [
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
	{ name: "Research", href: "#research" },
	{ name: "Services", href: "#services" },
	{ name: "Experience", href: "#experience" },
];
</script>

<template>
	<nav
		class="fixed top-0 w-full z-50 transition-all duration-300 border-b"
		:class="
			isScrolled
				? 'bg-dark-bg/80 backdrop-blur-md border-dark-border py-4'
				: 'bg-transparent border-transparent py-6'
		"
	>
		<div class="container mx-auto px-6 flex justify-between items-center">
			<a
				href="#"
				class="text-xl font-bold font-sans tracking-tight flex items-center gap-2"
			>
				<span
					class="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white font-mono text-sm"
					>A</span
				>
				<span class="text-slate-200">Alfiki D.</span>
			</a>

			<div class="hidden md:flex items-center gap-6 lg:gap-8">
				<a
					v-for="link in links"
					:key="link.name"
					:href="link.href"
					class="text-sm font-medium text-slate-300 hover:text-primary-400 transition-colors"
				>
					{{ link.name }}
				</a>
				<a
					href="https://linkedin.com/in/alfiki"
					target="_blank"
					class="px-5 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-primary-500/50 text-slate-100 font-bold text-sm transition-all"
				>
					Contact
				</a>
			</div>

			<button class="md:hidden text-slate-200">
				<Icon name="heroicons:bars-3-bottom-right" size="24" />
			</button>
		</div>
	</nav>
</template>
