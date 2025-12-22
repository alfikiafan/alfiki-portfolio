<script setup lang="ts">
import AppNavBar from "@/components/App/NavBar.vue";
import AppFooter from "@/components/App/Footer.vue";
import HomeHeroSection from "@/components/Home/HeroSection.vue";
import HomeAboutSection from "~/components/Home/AboutSection.vue";
import HomeSkillsSection from "@/components/Home/SkillsSection.vue";
import HomeFeaturedProjects from "@/components/Home/FeaturedProjects.vue";
import HomeResearchSection from "@/components/Home/ResearchSection.vue";
import HomeExperienceSection from "@/components/Home/ExperienceSection.vue";
import HomeCertifications from "~/components/Home/Certifications.vue";
import HomeServicesSection from "@/components/Home/ServicesSection.vue";

useHead({
	title: "Alfiki Diastama | Software Engineer, AI Engineer",
	meta: [
		{
			name: "description",
			content:
				"Portfolio of Alfiki Diastama. Bridging deep learning research with privacy-first software engineering.",
		},
	],
});
</script>

<template>
	<div
		class="min-h-screen bg-dark-bg text-slate-200 font-sans selection:bg-primary-500/30"
	>
		<AppNavBar />

		<HomeHeroSection />
		<HomeAboutSection />
		<HomeSkillsSection />
		<HomeFeaturedProjects />
		<HomeExperienceSection />
		<HomeResearchSection />
		<HomeCertifications />
		<HomeServicesSection />

		<AppFooter />
	</div>
</template>
