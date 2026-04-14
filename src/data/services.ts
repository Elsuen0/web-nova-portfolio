import * as Lucide from 'lucide-react';

export const services = [
	{
		title: "Design UX/UI Premium",
		slug: "design-ux-ui-premium",
		description: "Des interfaces épurées et intuitives, conçues pour captiver et convertir dès le premier regard.",
        detailedDescription: "Nous créons des expériences numériques qui ne se contentent pas d'être belles. Chaque pixel est pensé pour guider l'utilisateur vers l'action tout en reflétant l'excellence de votre marque. Notre approche mêle psychologie cognitive et esthétique contemporaine.",
		Icon: Lucide.Palette,
        benefits: [
            "Maquettes haute fidélité sous Figma",
            "Prototypes interactifs",
            "Système de design (Design System) évolutif",
            "Accessibilité (A11y) native"
        ]
	},
	{
		title: "Développement Astro & Next.js",
		slug: "developpement-astro-nextjs",
		description: "Performance fulgurante et code propre pour un site moderne, évolutif et Lighthouse 100/100.",
        detailedDescription: "L'ère des sites lents est terminée. En utilisant Astro, nous livrons des sites qui chargent instantanément en supprimant le JavaScript inutile. C'est l'atout ultime pour votre SEO et l'expérience de vos utilisateurs.",
		Icon: Lucide.Code2,
        benefits: [
            "Architecture 'Islands' pour un JS minimal",
            "Score Lighthouse 100/100 garanti",
            "Hébergement optimisé sur Vercel/Netlify",
            "Temps de chargement < 1s"
        ]
	},
	{
		title: "SEO Sémantique & Technique",
		slug: "seo-semantique-technique",
		description: "Optimisation pointue pour dominer les résultats de recherche et capter du trafic qualifié.",
        detailedDescription: "Le SEO ne se limite pas à quelques mots-clés. Nous optimisons la structure sémantique de votre code, les Core Web Vitals et le maillage interne pour que Google considère votre site comme l'autorité absolue dans votre domaine.",
		Icon: Lucide.Search,
        benefits: [
            "Audit technique approfondi",
            "Structure de données Schema.org",
            "Optimisation du budget de crawl",
            "Stratégie de rédaction sémantique"
        ]
	},
	{
		title: "Stratégie Digitale",
		slug: "strategie-digitale",
		description: "Accompagnement sur-mesure pour aligner votre présence web avec vos objectifs de croissance.",
        detailedDescription: "Votre site web est votre meilleur commercial. Nous définissons ensemble les KPIs, les funnels de conversion et l'écosystème digital nécessaire pour transformer vos visiteurs en clients fidèles.",
		Icon: Lucide.Rocket,
        benefits: [
            "Analyse de la concurrence",
            "Définition du parcours client",
            "Plan de taggage tracking (GA4/GTM)",
            "Conseil en acquisition (Ads/Content)"
        ]
	},
	{
		title: "E-commerce Haute Performance",
		slug: "ecommerce-haute-performance",
		description: "Boutiques en ligne ultra-fast avec une UX d'exception et des conversions en hausse.",
        detailedDescription: "La vitesse tue ou sauve les ventes. Nos solutions e-commerce headless combinent la puissance de Shopify ou Stripe avec la rapidité d'Astro pour une expérience d'achat fluide même sur mobile.",
		Icon: Lucide.Layout,
        benefits: [
            "Checkout optimisé en un clic",
            "Gestion de catalogue ultra-rapide",
            "Sécurité maximale des transactions",
            "Intégration CRM & ERP"
        ]
	},
	{
		title: "Maintenance & Évolution",
		slug: "maintenance-evolution",
		description: "Support continu pour que votre plateforme reste toujours à l'état de l'art.",
        detailedDescription: "Le web évolue chaque jour. Nous assurons la pérennité de votre investissement technique par des mises à jour régulières, des optimisations de sécurité et des évolutions fonctionnelles continues.",
		Icon: Lucide.MessageSquare,
        benefits: [
            "Mises à jour de sécurité",
            "Monitoring 24/7 de la performance",
            "Sauvegardes quotidiennes",
            "Évolution Agile des fonctionnalités"
        ]
	},
];
