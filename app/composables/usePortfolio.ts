export const usePortfolio = () => {
	const profile = {
		name: "Alfiki Diastama",
		role: "Software Engineer & AI Researcher",
		summary:
			"Bridging the gap between rigorous Machine Learning research and user-centric, privacy-first software engineering.",
		location: "Surakarta, Indonesia",
		email: "contact@alfiki.com",
		github: "https://github.com/alfikiafan",
		linkedin: "https://linkedin.com/in/alfiki",
		resume: "", //
	};

	const projects = [
		{
			id: "dely-sign",
			title: "Dely Sign",
			category: "Privacy-First Tool",
			role: "Creator & Lead Developer",
			image: "", // Optional
			desc: "A pure client-side web application for signing, editing, and manipulating PDF documents securely without any server uploads.",
			challenge:
				'The biggest hurdle was the Browser History behavior. Users expect the "Back" button to undo their last drawing/action, but standard browser behavior exits the app. Additionally, ensuring "Transparent Signatures" from raw camera input required complex pixel manipulation logic.',

			solution:
				'I implemented a custom "Fake State" strategy using the History API to intercept back-navigation for Undo/Redo actions. For image processing, I built a custom rasterization pipeline to detect background luminance and convert signatures to transparent PNGs instantly on the client side.',

			keyFeatures: [
				"100% Client-Side Processing (Zero Server Upload)",
				"Smart History API Handling (Back button = Undo)",
				"Auto-Transparent Signature Algorithm",
				"PWA Share Target API (Open PDF directly from File Manager)",
				"IndexedDB Persistence (Drafts saved locally)",
			],

			tech: ["Vue 3", "Vite", "Konva", "pdf-lib", "IndexedDB"],
			link: "https://sign.delylabs.com",
			featured: true,
			stats: "v1.4 Stable",
		},
		{
			id: "narajiwa",
			title: "Narajiwa",
			category: "Mental Health Superapp",
			role: "Software Engineer",
			image: "",
			desc: "A comprehensive mental health platform connecting users with psychologists through real-time booking, chat, and assessment tools.",
			challenge:
				"Creating a seamless bridge between patients and psychologists while ensuring strict data privacy for medical records. The system needed to handle real-time scheduling conflicts and secure payment verification simultaneously.",

			solution:
				"Designed a scalable fullstack architecture with robust Role-Based Access Control (RBAC) for data privacy. Integrated Midtrans for secure payments and real-time WebSocket communication for the counseling chat interface.",

			keyFeatures: [
				"Real-time Counseling Chat",
				"Automated Psychologist Booking System",
				"Secure Medical Record Storage",
				"Hult Prize On Campus Winner 2024",
			],

			tech: ["Laravel", "MySQL", "Bootstrap", "Real-time WebSocket"],
			link: "https://narajiwa.com",
			featured: true,
			stats: "1st Place Hult Prize",
		},
		{
			id: "dely-terbilang",
			title: "Dely Terbilang",
			category: "Productivity Algorithm",
			role: "Creator",
			image: "", // Optional
			desc: "An advanced number-to-text converter capable of handling extreme precision (up to 64 digits) for financial and legal document formatting.",
			tech: ["JavaScript", "BigInt Handling", "SheetJS", "Recursive Algorithm"],
			link: "https://terbilang.delylabs.com",
			featured: false,
			descShort:
				"Converts numbers to text up to 64 digits. Supports Excel bulk processing.",
		},
		{
			id: "dely-compare",
			title: "Dely Compare",
			category: "Developer Tool",
			role: "Creator",
			image: "",
			desc: "Text and code comparison tool utilizing Diff algorithms to highlight changes, detect plagiarism, and visualize code modifications.",
			tech: ["Vue 3", "Diff Algorithm", "String Matching"],
			link: "https://compare.delylabs.com",
			featured: false,
			descShort: "High-performance text & code comparison tool for developers.",
		},
		{
			id: "dely-kit",
			title: "Dely Kit",
			category: "Utility Suite",
			role: "Creator",
			image: "",
			desc: "A suite of text manipulation tools (Case Converter, Cleaner, Sorter) designed for quick developer tasks without leaving the browser.",
			tech: ["Vue 3", "Regex Engine"],
			link: "https://kit.delylabs.com",
			featured: false,
			descShort: "All-in-one text manipulation toolkit for developers.",
		},
	];

	const research = [
		{
			title:
				"AGU-NET: Attention Ghost U-Net untuk Segmentasi Penyakit Polip Berbasis Citra Biomedis",
			venue: "Gemastik XVI 2023 - Gold Medal & Best Paper",
			year: "2023",
			desc: "Proposed a novel deep learning architecture combining Attention mechanisms with GhostNet modules. Achieved superior segmentation accuracy while reducing model parameters by significant margins, making it viable for deployment on resource-constrained medical devices.",
			link: "#",
		},
		{
			title:
				"ACMU-Net: An Efficient Architecture Based on ConvMixer and Attention Mechanism",
			venue: "IEEE Publication (International)",
			year: "2024",
			desc: "Introduced a hybrid architecture using ConvMixer for feature extraction in colorectal polyp segmentation. Published and presented at IEEE conference.",
			link: "https://ieeexplore.ieee.org",
		},
		{
			title:
				"Improved Factorized Residual U-Net for Biomedical Polyp Segmentation",
			venue: "IEEE Publication",
			year: "2024",
			desc: "Optimized U-Net backbone with Factorized Residual blocks to handle variable polyp shapes and sizes effectively.",
			link: "https://ieeexplore.ieee.org",
		},
		{
			title: "Sentiment Analysis Classification In Women's E-commerce Reviews",
			venue: "Jurnal Teknik Informatika (JUTIF)",
			year: "2024",
			desc: "Comparative analysis of Naive Bayes, SVM, and KNN with ROS/SMOTE handling for imbalanced datasets. Achieved 94% Accuracy using SVM+ROS.",
			link: "#",
		},
	];

	const experience = [
		{
			role: "Software Engineer",
			company: "Narajiwa",
			period: "Jun 2025 - Present",
			type: "Part-time",
			desc: "Leading the technical development of the mental health platform, focusing on scalability and user security.",
		},
		{
			role: "Machine Learning Mentor",
			company: "Coding Camp (DBS Foundation)",
			period: "Jan 2025 - Apr 2025",
			type: "Contract",
			desc: "Mentored students in Machine Learning concepts, specifically Computer Vision and Model Deployment.",
		},
		{
			role: "Lecturer Assistant",
			company: "Universitas Sebelas Maret",
			period: "Aug 2022 - Jan 2025",
			type: "University",
			desc: "Assisted in courses: Data Structures & Algorithms (C++), Object-Oriented Programming (Java), and Python for Mathematics.",
		},
		{
			role: "Founder",
			company: "Documently",
			period: "Jan 2022 - Oct 2025",
			type: "Business",
			desc: "Managed business operations, product development, and financial planning for a document services startup.",
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

	const skills = {
		development: [
			{ name: "JavaScript", icon: "logos:javascript" },
			{ name: "TypeScript", icon: "logos:typescript-icon" },
			{ name: "Vue.js", icon: "logos:vue" },
			{ name: "Nuxt", icon: "logos:nuxt-icon" },
			{ name: "React", icon: "logos:react" },
			{ name: "Next.js", icon: "logos:nextjs-icon", darkInfo: true },
			{ name: "Laravel", icon: "logos:laravel" },
			{ name: "PHP", icon: "logos:php" },
			{ name: "Supabase", icon: "logos:supabase-icon" },
			{ name: "Tailwind", icon: "logos:tailwindcss-icon" },
			{ name: "Bootstrap", icon: "logos:bootstrap" },
			{ name: "Docker", icon: "logos:docker-icon" },
			{ name: "Git", icon: "logos:git-icon" },
			{ name: "Vite", icon: "logos:vitejs" },
			{ name: "Node.js", icon: "logos:nodejs-icon" },
			{ name: "MySQL", icon: "logos:mysql-icon", darkInfo: true },
			{ name: "PostgreSQL", icon: "logos:postgresql" },
			{ name: "Firebase", icon: "devicon:firebase" },
			{ name: "Figma", icon: "logos:figma" },
		],
		ai_data: [
			{ name: "Python", icon: "logos:python" },
			{ name: "TensorFlow", icon: "logos:tensorflow" },
			{ name: "Scikit-learn", icon: "devicon:scikitlearn" },
			{ name: "Pandas", icon: "devicon:pandas", darkInfo: true },
			{ name: "Streamlit", icon: "logos:streamlit" },
			{ name: "Flask", icon: "devicon:flask", darkInfo: true },
			{ name: "Jupyter", icon: "logos:jupyter" },
			{ name: "OpenCV", icon: "logos:opencv" },
			{ name: "Keras", icon: "devicon:keras" },
			{ name: "NumPy", icon: "logos:numpy" },
			{ name: "Matplotlib", icon: "devicon:matplotlib" },
			{ name: "PyTorch", icon: "devicon:pytorch" },
		],
	};

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
		projects,
		research,
		experience,
		awards,
		skills,
		services,
	};
};
