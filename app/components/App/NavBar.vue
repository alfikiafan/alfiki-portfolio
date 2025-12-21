<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
	isScrolled.value = window.scrollY > 20;
};

watch(route, () => {
	isMobileMenuOpen.value = false;
	document.body.style.overflow = "";
});

watch(isMobileMenuOpen, (isOpen) => {
	if (isOpen) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "";
	}
});

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
			isScrolled || isMobileMenuOpen
				? 'bg-dark-bg/90 backdrop-blur-md border-dark-border py-6'
				: 'bg-transparent border-transparent py-6'
		"
	>
		<div
			class="container mx-auto px-6 flex justify-between items-center relative z-50"
		>
			<NuxtLink
				to="/"
				class="text-xl font-bold font-sans tracking-tight flex items-center gap-2 group relative z-50"
				@click="isMobileMenuOpen = false"
			>
				<img class="w-7 h-7" src="/images/logo.webp" alt="Logo" />
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

			<button
				class="md:hidden text-slate-200 hover:text-white focus:outline-none relative z-50 p-2"
				@click="isMobileMenuOpen = !isMobileMenuOpen"
			>
				<Icon
					:name="
						isMobileMenuOpen
							? 'heroicons:x-mark'
							: 'heroicons:bars-3-bottom-right'
					"
					size="28"
				/>
			</button>
		</div>

		<Transition
			enter-active-class="transition duration-300 ease-out"
			enter-from-class="opacity-0 -translate-y-4"
			enter-to-class="opacity-100 translate-y-0"
			leave-active-class="transition duration-200 ease-in"
			leave-from-class="opacity-100 translate-y-0"
			leave-to-class="opacity-0 -translate-y-4"
		>
			<div
				v-if="isMobileMenuOpen"
				class="fixed inset-0 bg-dark-bg z-40 flex flex-col justify-start px-6 pt-28 gap-6 md:hidden h-screen"
			>
				<div class="flex flex-col gap-2 border-t border-dark-border pt-6">
					<NuxtLink
						v-for="link in links"
						:key="link.name"
						:to="link.to"
						external
						class="text-xl font-bold text-slate-300 hover:text-primary-400 transition-colors py-3 border-b border-dark-border/50"
						@click="isMobileMenuOpen = false"
					>
						{{ link.name }}
					</NuxtLink>
				</div>

				<a
					href="mailto:alfiki.diastama@gmail.com"
					target="_blank"
					class="mt-2 w-full text-center py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-medium hover:bg-slate-700 transition-all flex justify-center items-center gap-2"
				>
					<Icon name="heroicons:envelope" /> Contact Me
				</a>
			</div>
		</Transition>
	</nav>
</template>
