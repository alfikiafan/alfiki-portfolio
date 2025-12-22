export const usePortfolio = () => {
	const profile = {
		name: "Alfiki Diastama",
		role: "Software Engineer, AI Engineer",
		summary:
			"Bridging the gap between rigorous Machine Learning research and user-centric, privacy-first software engineering.",
		location: "Surakarta, Indonesia",
		email: "alfiki.diastama@gmail.com",
		github: "https://github.com/alfikiafan",
		linkedin: "https://linkedin.com/in/alfiki",
		resume: "", //
	};

	const research = [
		{
			title: "AGU-NET: Attention Ghost U-Net",
			venue: "Gemastik XVI 2023 - Gold Medal & Best Paper",
			link: "https://buletingemastik.id/index.php/bg/article/view/12",
			desc: "Developed a lightweight segmentation model (1.17M parameters) prioritizing memory efficiency, proving high-performance AI is viable in resource-constrained environments.",
		},
		{
			title: "ACMU-Net: Efficient Architecture for Polyp Segmentation",
			venue: "IEEE (Nov 2024)",
			link: "https://ieeexplore.ieee.org/abstract/document/10812309",
			desc: "Designed a real-time efficient deep learning architecture combining ConvMixer and Attention mechanisms, achieving superior accuracy for automated medical diagnosis.",
		},
		{
			title: "Improved Factorized Residual U-Net",
			venue: "IEEE (Nov 2024)",
			link: "https://ieeexplore.ieee.org/abstract/document/10845587",
			desc: "Engineered an enhanced ResNet backbone with residual factorization, significantly improving feature extraction capabilities for complex biomedical imagery.",
		},
		{
			title: "Sentiment Analysis in E-commerce Reviews",
			venue: "Jurnal Teknik Informatika (JUTIF 2024)",
			link: "http://jutif.if.unsoed.ac.id/index.php/jurnal/article/view/2392",
			desc: "Optimized classification performance on highly imbalanced datasets using ROS & SMOTE techniques, achieving 94% accuracy with SVM.",
		},
	];

	const experience = [
		{
			role: "Software Engineer",
			company: "Narajiwa",
			period: "Jun 2025 - Present",
			type: "Part-time",
			desc: "Engineered the end-to-end telemedicine infrastructure, orchestrating complex availability algorithms, secure payment gateways, and atomic booking transactions to ensure a seamless, conflict-free user experience.",
		},
		{
			role: "Machine Learning Mentor",
			company: "Coding Camp (DBS Foundation)",
			period: "Jan 2025 - Apr 2025",
			type: "Contract",
			desc: "Guided a cohort of students through the full ML lifecycle, from data preprocessing to cloud deployment. Facilitated code reviews and technical workshops, resulting in the successful completion of machine learning capstone projects.",
		},
		{
			role: "Lecturer Assistant",
			company: "Universitas Sebelas Maret",
			period: "Aug 2022 - Jan 2025",
			type: "University",
			desc: "Facilitated lab sessions for 3 core Computer Science courses (DSA, OOP, Python), mentoring over 100+ students. Evaluated complex algorithms and provided actionable code feedback to improve student problem-solving skills.",
		},
		{
			role: "Founder",
			company: "Documently",
			period: "Jan 2022 - Oct 2025",
			type: "Business",
			desc: "Bootstrapped a digital document service business from zero. Developed a high-performance landing page optimized for SEO and speed, successfully channeling high-intent traffic directly to WhatsApp for rapid order fulfillment.",
		},
	];

	const education = [
		{
			school: "Universitas Sebelas Maret",
			degree: "Bachelor of Computer Science (Informatics)",
			year: "2021 - 2025",
			desc: "Focus on Artificial Intelligence and Software Engineering. Active in Gemastik and Practicum Assistant.",
		},
		{
			school: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
			degree: "Machine Learning Cohort (Distinction Graduate)",
			year: "Aug 2023 - Jan 2024",
			desc: "Capstone Project: EUY App (Top 50 Product). Mastered TensorFlow, Python, and Model Deployment.",
		},
	];

	const awards = [
		"1st Place Gemastik XVI 2023 (ICT Scientific Paper)",
		"Best Paper Award Gemastik XVI 2023",
		"1st Place Hult Prize On Campus UNS 2024 (Narajiwa)",
		"1st Place Airlangga Ideas Competition 2023",
		"2nd Place Medical Science Festival UNNES 2024",
		"Innovation Excellence Awardee FATISDA UNS 2024",
		"Distinction Graduate - Bangkit Academy 2023",
	];

	const services = [
		{
			title: "Web App Development",
			desc: "Building robust, scalable web applications using modern stacks like Nuxt.js or Laravel. Focus on performance and SEO.",
			icon: "heroicons:code-bracket-square",
			tags: ["SaaS", "Internal Tools", "Landing Pages"],
		},
		{
			title: "Automation & Scraping",
			desc: "Automating repetitive tasks and extracting data from complex websites using Python. Save 100+ hours of manual work.",
			icon: "heroicons:cpu-chip",
			tags: ["Data Mining", "Bots", "Workflow Auto"],
		},
		{
			title: "AI Integration",
			desc: "Integrating Machine Learning models into web apps. From sentiment analysis to computer vision solutions.",
			icon: "heroicons:sparkles",
			tags: ["Prediction", "Analysis", "Chatbots"],
		},
	];

	return {
		profile,
		research,
		experience,
		education,
		awards,
		services,
	};
};
