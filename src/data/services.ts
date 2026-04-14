import * as Lucide from 'lucide-react';

export const services = [
	{
		title: "Design UX/UI Premium",
		slug: "design-ux-ui-premium",
		description: "Des interfaces épurées et intuitives, conçues pour captiver et convertir dès le premier regard.",
        detailedDescription: "Le design ne se limite pas à l'esthétique ; c'est une question de fonctionnalité et d'émotion. Chez Web Nova, nous concevons des interfaces 'Haute Couture' qui allient minimalisme moderne et psychologie de conversion. Chaque interaction est pensée pour réduire la friction et maximiser l'engagement de vos visiteurs.",
		Icon: Lucide.Palette,
        benefits: [
            "Conception Mobile-First & Responsive",
            "Prototypes interactifs haute fidélité",
            "Architecture de l'information optimisée",
            "Design Systems cohérents et évolutifs"
        ],
        process: [
            "Audit & Immersion de marque",
            "Wireframing et parcours utilisateur",
            "Création de l'identité visuelle digitale",
            "Tests d'utilisabilité et itérations"
        ]
	},
	{
		title: "Développement Astro & Next.js",
		slug: "developpement-astro-nextjs",
		description: "Performance fulgurante et code propre pour un site moderne, évolutif et Lighthouse 100/100.",
        detailedDescription: "Nous utilisons les technologies les plus avancées du marché pour bâtir des sites d'une rapidité insolente. Grâce à Astro et son architecture 'd'îles' (Islands Architecture), nous supprimons le JavaScript inutile pour atteindre des scores de performance parfaits (Lighthouse 100/100). Un site plus rapide n'est pas seulement un confort, c'est un levier de conversion majeur.",
		Icon: Lucide.Code2,
        benefits: [
            "Temps de chargement inférieur à 1 seconde",
            "Zéro JavaScript inutile au chargement",
            "Indexation Google facilitée (SSG)",
            "Hébergement ultra-sécurisé et scalable"
        ],
        process: [
            "Développement modulaire (Composants)",
            "Optimisation agressive des Core Web Vitals",
            "Intégration d'APIs et CMS Headless",
            "Déploiement continu (CI/CD)"
        ]
	},
	{
		title: "SEO Sémantique & Technique",
		slug: "seo-semantique-technique",
		description: "Optimisation pointue pour dominer les résultats de recherche et capter du trafic qualifié.",
        detailedDescription: "Le SEO technique est notre spécialité. Nous ne nous contentons pas de mots-clés : nous optimisons la structure profonde de votre site (Schema.org, maillage interne, sémantique HTML5) pour que les algorithmes de Google vous identifient comme l'autorité de votre secteur. Une visibilité durable passe par une base technique irréprochable.",
		Icon: Lucide.Search,
        benefits: [
            "Optimisation des balises sémantiques",
            "Données structurées Schema.org avancées",
            "Nettoyage du code pour le budget de crawl",
            "Analyse de la concurrence et opportunités"
        ],
        process: [
            "Audit technique complet",
            "Stratégie de mots-clés longue traîne",
            "Optimisation On-Page (Vitesse, Balisage)",
            "Suivi des performances et rapports"
        ]
	},
	{
		title: "Stratégie Digitale",
		slug: "strategie-digitale",
		description: "Accompagnement sur-mesure pour aligner votre présence web avec vos objectifs de croissance.",
        detailedDescription: "Votre site web est votre plus puissant outil de vente. Nous vous accompagnons dans la définition de votre tunnel de conversion et de votre écosystème digital. De l'acquisition de trafic à la fidélisation, nous construisons une stratégie cohérente pour transformer chaque visiteur en client.",
		Icon: Lucide.Rocket,
        benefits: [
            "Analyse de marché et personas",
            "Optimisation du tunnel de conversion (CRO)",
            "Mise en place de tracking précis (GA4)",
            "Conseil en croissance et acquisition"
        ],
        process: [
            "Atelier de définition d'objectifs",
            "Cartographie du parcours client",
            "Plan d'action multicanal",
            "Analyse des KPIs et optimisation"
        ]
	},
	{
		title: "E-commerce Haute Performance",
		slug: "ecommerce-haute-performance",
		description: "Boutiques en ligne ultra-fast avec une UX d'exception et des conversions en hausse.",
        detailedDescription: "Dans l'e-commerce, chaque milliseconde de retard coûte de l'argent. Nous créons des boutiques 'Headless' utilisant la puissance du cloud. En séparant l'interface du moteur e-commerce, nous offrons une expérience d'achat fluide, sécurisée et incroyablement rapide, de la fiche produit au paiement.",
		Icon: Lucide.Layout,
        benefits: [
            "Synchronisation fluide des stocks",
            "Paiement sécurisé et optimisé",
            "Expérience d'achat ultra-rapide sur mobile",
            "Intégration d'outils marketing puissants"
        ],
        process: [
            "Choix de la plateforme (Shopify, Stripe, etc.)",
            "Design de parcours d'achat simplifié",
            "Développement de l'interface sur-mesure",
            "Test de charge et mise en production"
        ]
	},
	{
		title: "Maintenance & Évolution",
		slug: "maintenance-evolution",
		description: "Support continu pour que votre plateforme reste toujours à l'état de l'art.",
        detailedDescription: "Un site web est un organisme vivant. Pour rester performant et sécurisé face aux évolutions technologiques, il nécessite une attention constante. Notre service de maintenance proactive garantit que votre site reste rapide, à jour et protégé contre les menaces, tout en évoluant avec vos besoins.",
		Icon: Lucide.MessageSquare,
        benefits: [
            "Mises à jour de sécurité prioritaires",
            "Sauvegardes quotidiennes externalisées",
            "Monitoring de performance 24/7",
            "Support technique réactif"
        ],
        process: [
            "Audit de santé mensuel",
            "Optimisations continues du code",
            "Support et évolutions mineures",
            "Rapports d'activité et de sécurité"
        ]
	},
];
