export const useCertifications = () => {
	const certifications = [
		// --- TIER 1: PROFESSIONAL CERTIFICATES (GOLD) ---
		{
			name: "TensorFlow Developer Certificate",
			issuer: "TensorFlow Certificate Program",
			date: "Mar 2024",
			expiry: "Mar 2027",
			credentialId: "97237433",
			link: "https://www.credential.net/df4def78-d98b-42cf-ae45-a3711d483fa3",
			logo: "logos:tensorflow",
			category: "AI & ML",
		},
		{
			name: "Google Data Analytics Specialization",
			issuer: "Google",
			date: "Sep 2023",
			expiry: null,
			credentialId: "GD4QWAZY29BR",
			link: "https://www.coursera.org/account/accomplishments/specialization/GD4QWAZY29BR",
			logo: "logos:google-icon",
			category: "Data",
		},
		{
			name: "Machine Learning Terapan",
			issuer: "Dicoding Indonesia",
			date: "Nov 2024",
			expiry: "Nov 2027",
			credentialId: "53XEQ12OYXRN",
			link: "https://www.dicoding.com/certificates/53XEQ12OYXRN",
			logo: "/images/dicoding.webp",
			category: "AI & ML",
		},

		// --- TIER 2: SPECIALIZATIONS (SILVER) ---
		{
			name: "Natural Language Processing Specialization",
			issuer: "DeepLearning.AI",
			date: "Dec 2023",
			expiry: null,
			credentialId: "4PJ4ZVNNCGU9",
			link: "https://www.coursera.org/account/accomplishments/specialization/4PJ4ZVNNCGU9",
			logo: "logos:python",
			category: "AI & ML",
		},
		{
			name: "TensorFlow: Advanced Techniques Specialization",
			issuer: "DeepLearning.AI",
			date: "Dec 2023",
			expiry: null,
			credentialId: "APK8NGTQ7FM5",
			link: "https://www.coursera.org/account/accomplishments/specialization/APK8NGTQ7FM5",
			logo: "logos:tensorflow",
			category: "AI & ML",
		},
		{
			name: "Google IT Automation with Python",
			issuer: "Google",
			date: "Sep 2023",
			expiry: null,
			credentialId: "GMZXNUKABGLD",
			link: "https://www.coursera.org/account/accomplishments/specialization/GMZXNUKABGLD",
			logo: "logos:google-icon",
			category: "DevOps",
		},

		// --- TIER 3: SKILLSETS (BRONZE - Selected) ---
		{
			name: "Architecting on AWS",
			issuer: "Dicoding Indonesia",
			date: "Feb 2022",
			expiry: "Feb 2025",
			credentialId: "EYX473ENOXDL",
			link: "https://www.dicoding.com/certificates/EYX473ENOXDL",
			logo: "simple-icons:amazonaws",
			category: "Cloud",
		},
		{
			name: "Belajar Fundamental Front-End Web Development",
			issuer: "Dicoding Indonesia",
			date: "Apr 2023",
			expiry: "Apr 2026",
			credentialId: "N9ZO6E9WYXG5",
			link: "https://www.dicoding.com/certificates/N9ZO6E9WYXG5",
			logo: "logos:javascript",
			category: "Web",
		},
		{
			name: "Belajar Membuat Aplikasi Back-End",
			issuer: "Dicoding Indonesia",
			date: "Jan 2023",
			expiry: "Jan 2026",
			credentialId: "0LZ0GRGYNX65",
			link: "https://www.dicoding.com/certificates/0LZ0GRGYNX65",
			logo: "logos:nodejs-icon",
			category: "Web",
		},
	];

	return { certifications };
};
