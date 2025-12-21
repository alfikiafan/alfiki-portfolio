<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
	error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
	<div
		class="min-h-screen bg-dark-bg flex flex-col items-center justify-center p-6 text-center"
	>
		<div class="mb-8 relative">
			<div
				class="absolute inset-0 bg-primary-500/20 blur-3xl rounded-full"
			></div>
			<Icon
				name="heroicons:exclamation-triangle"
				class="w-32 h-32 text-primary-500 relative z-10"
			/>
		</div>

		<h1 class="text-6xl font-bold text-white mb-4 font-mono">
			{{ error?.statusCode }}
		</h1>

		<p class="text-2xl text-slate-300 font-bold mb-4">
			{{
				error?.statusCode === 404 ? "Page Not Found" : "Something went wrong"
			}}
		</p>

		<p class="text-slate-400 max-w-md mx-auto mb-10 leading-relaxed">
			{{
				error?.statusCode === 404
					? "Oops! The page you are looking for might have been removed or temporarily unavailable."
					: "It seems like a glitch in the matrix. We are looking into it."
			}}
		</p>

		<button
			@click="handleError"
			class="px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-bold transition-all shadow-lg shadow-primary-900/50 flex items-center gap-2"
		>
			<Icon name="heroicons:arrow-left" /> Back to Home
		</button>
	</div>
</template>
