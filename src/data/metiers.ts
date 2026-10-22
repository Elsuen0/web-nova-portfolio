import * as Lucide from 'lucide-react';

// One page per profession under /site-internet/<slug>/, rendered with the same layout as the service pages.
// `label` is the short name used in the footer links.
const process = [
	"Appel découverte de 30 minutes, gratuit",
	"Proposition claire : périmètre et prix fixés",
	"Création du design et des pages, validés avec vous",
	"Mise en ligne et envoi à Google",
];

export const metiers = [
	{
		label: "Coachs",
		title: "Site internet pour coach",
		slug: "coach",
		h1: "Site internet pour coach à Amiens",
		eyebrow: "Coachs · Amiens",
		seoTitle: "Création de site internet pour coach à Amiens",
		seoDescription: "Un site internet pour coach à Amiens : présenter vos accompagnements, rassurer et remplir votre agenda. Design à votre image, prise de rendez-vous, dès 1 500 €.",
		description: "Présenter vos accompagnements, inspirer confiance et remplir votre agenda.",
		Icon: Lucide.MessageCircleHeart,
		lead: "Coach de vie, coach professionnel, coach sportif ou en parentalité : vos clients vous choisissent parce qu'ils ont confiance en vous, avant même la première séance. Votre site est souvent le premier endroit où cette confiance se construit. Je crée des sites pour les coachs d'Amiens et d'ailleurs qui veulent présenter clairement leurs accompagnements et recevoir des demandes de personnes qui leur correspondent.",
		sections: [
			{
				title: "Ce qu'un client cherche sur le site d'un coach",
				body: [
					"Une personne qui cherche un coach se pose trois questions : est-ce que cette personne peut m'aider, est-ce que je me sens à l'aise avec elle, et comment ça se passe concrètement ? Un bon site de coach répond à ces trois questions sans détour :",
				],
				bullets: [
					"Pour qui vous travaillez et sur quelles problématiques, avec les mots de vos clients.",
					"Votre parcours, vos certifications et votre approche, sans jargon.",
					"Le déroulé d'un accompagnement : durée, rythme, séances en cabinet ou en visio.",
					"Vos tarifs ou une fourchette, pour éviter les demandes qui n'aboutissent pas.",
					"Des témoignages de personnes accompagnées, avec leur accord.",
					"Un moyen simple de réserver un premier échange.",
				],
			},
			{
				title: "Réserver en ligne, sans aller-retour",
				body: [
					"Beaucoup de coachs proposent un premier appel découverte. Avec un outil de prise de rendez-vous intégré au site, comme Calendly, vos futurs clients choisissent eux-mêmes un créneau, reçoivent une confirmation et un rappel. Vous évitez les échanges de messages pour trouver une date, et vous ne perdez pas les personnes qui hésitent.",
					"C'est d'ailleurs le fonctionnement que j'utilise sur mon propre site.",
				],
			},
			{
				title: "Être trouvé par les personnes qui cherchent un coach à Amiens",
				body: [
					"Une partie de vos clients viendra du bouche-à-oreille et des réseaux sociaux. Mais quelqu'un qui tape « coach de vie Amiens » ou « coach reconversion professionnelle » sur Google cherche déjà activement de l'aide. Votre site doit apparaître sur ces recherches : une page par type d'accompagnement, des titres qui mentionnent votre spécialité et votre ville, et une fiche Google à jour.",
					"Si vous accompagnez aussi à distance, le site peut viser à la fois Amiens et la France entière, avec des pages adaptées.",
				],
			},
			{
				title: "Un site qui vous ressemble",
				body: [
					"Votre approche est unique, votre site doit le refléter : couleurs, photos, ton des textes. Un coach sportif énergique et une coach en gestion du stress n'ont pas besoin du même univers. Je pars de votre personnalité et de celle de vos clients pour créer un design qui donne envie de vous contacter.",
				],
			},
		],
		benefits: [
			"Pages par accompagnement ou par public",
			"Prise de rendez-vous en ligne intégrée",
			"Mise en avant de vos témoignages",
			"Référencement local sur votre spécialité",
			"Design à l'image de votre approche",
			"Blog pour partager vos conseils",
		],
		process,
		price: {
			from: "1 500 €",
			note: "Le prix dépend du nombre de pages et des fonctionnalités, comme la prise de rendez-vous ou un blog. Vous le connaissez avant le démarrage.",
		},
		faq: [
			{
				question: "Dois-je afficher mes tarifs sur mon site ?",
				answer: "Ce n'est pas obligatoire, mais une indication de prix ou une fourchette évite beaucoup d'échanges inutiles et rassure les personnes qui hésitent. On choisit ensemble la présentation la plus adaptée à votre activité.",
			},
			{
				question: "Puis-je proposer la réservation et le paiement en ligne ?",
				answer: "Oui. La prise de rendez-vous se fait avec un outil comme Calendly, qui peut aussi demander un paiement à la réservation si vous le souhaitez.",
			},
			{
				question: "J'accompagne en visio partout en France, un site local a-t-il du sens ?",
				answer: "Oui. Le site peut viser à la fois les recherches locales à Amiens et des recherches nationales liées à votre spécialité. Les deux se complètent.",
			},
			{
				question: "Combien de temps faut-il pour avoir mon site ?",
				answer: "En général 3 à 4 semaines entre le premier échange et la mise en ligne, selon la disponibilité de vos textes et de vos photos.",
			},
		],
		related: ["site-vitrine", "seo-semantique-technique", "strategie-digitale"],
	},
	{
		label: "Praticiens bien-être",
		title: "Site internet pour praticien bien-être",
		slug: "praticien-bien-etre",
		h1: "Site internet pour praticien bien-être à Amiens",
		eyebrow: "Praticiens · Amiens",
		seoTitle: "Site internet pour praticien bien-être à Amiens",
		seoDescription: "Site internet pour sophrologue, naturopathe, masseur ou thérapeute à Amiens : rassurer avant la première séance, prise de rendez-vous en ligne. Dès 1 500 €.",
		description: "Rassurer avant la première séance et faciliter la prise de rendez-vous.",
		Icon: Lucide.Flower2,
		lead: "Sophrologue, naturopathe, réflexologue, praticienne en massage ou en soins énergétiques : avant de prendre rendez-vous, vos futurs clients ont besoin d'être rassurés. Qui êtes-vous, comment se passe une séance, est-ce que c'est fait pour eux ? Je crée des sites pour les praticiens d'Amiens et de la Somme qui répondent à ces questions avec douceur et clarté.",
		sections: [
			{
				title: "Rassurer avant la première séance",
				body: [
					"Pour beaucoup de personnes, pousser la porte d'un cabinet pour la première fois demande un effort. Votre site peut faciliter ce pas : expliquer simplement votre pratique, décrire le déroulé d'une séance, montrer votre lieu d'accueil, présenter votre parcours et vos formations.",
					"Plus une personne sait à quoi s'attendre, plus elle ose réserver.",
				],
			},
			{
				title: "Ce que contient le site d'un praticien",
				body: [
					"Les sites qui fonctionnent le mieux pour les praticiens ont en commun quelques pages essentielles :",
				],
				bullets: [
					"Une page par pratique ou par soin, avec sa durée et son tarif.",
					"Le déroulé d'une première séance, étape par étape.",
					"Votre parcours, vos formations et votre approche.",
					"Des photos de votre cabinet, pour que vos clients sachent où ils arrivent.",
					"L'adresse, l'accès et le stationnement, souvent oubliés.",
					"La prise de rendez-vous en ligne, ou un lien vers votre agenda existant.",
				],
			},
			{
				title: "Une ambiance qui reflète votre pratique",
				body: [
					"Le design compte particulièrement dans le bien-être : un site trop chargé ou trop commercial crée une tension, l'inverse de ce que vous proposez.",
					"Pour De Ambre à Zen, un espace dédié au soin et au ressourcement, j'ai créé un site épuré, avec beaucoup d'espace et des couleurs douces, pour que l'apaisement commence dès la page d'accueil.",
				],
			},
			{
				title: "Être trouvé près de chez vos clients",
				body: [
					"Vos clients cherchent presque toujours près de chez eux : « sophrologue Amiens », « massage bien-être Amiens », « naturopathe Somme ». Le référencement local est donc essentiel : une page par pratique avec la ville mentionnée, une fiche Google complète avec photos et avis, et des informations identiques partout.",
					"Je veille aussi à une formulation prudente : pas de promesses de guérison, mais des textes qui présentent votre pratique comme un accompagnement.",
				],
			},
		],
		benefits: [
			"Pages par pratique, avec durée et tarif",
			"Présentation du déroulé d'une séance",
			"Prise de rendez-vous en ligne",
			"Plan d'accès et informations pratiques",
			"Design apaisant, à votre image",
			"Référencement local sur vos pratiques",
		],
		process,
		price: {
			from: "1 500 €",
			note: "Le prix dépend du nombre de pratiques à présenter et des fonctionnalités, comme la prise de rendez-vous. Vous le connaissez avant le démarrage.",
		},
		faq: [
			{
				question: "J'utilise déjà un agenda en ligne, peut-on le garder ?",
				answer: "Oui. Le site peut intégrer votre outil de réservation existant ou y renvoyer directement, pour que vous n'ayez pas à changer vos habitudes.",
			},
			{
				question: "Puis-je présenter plusieurs pratiques sur le même site ?",
				answer: "Oui, et c'est même recommandé : une page par pratique aide vos clients à trouver ce qu'ils cherchent et vous aide à apparaître sur chaque recherche Google.",
			},
			{
				question: "Comment parler de ma pratique sans faire de promesses médicales ?",
				answer: "En décrivant ce que vous proposez et comment se déroule une séance, plutôt que des résultats sur la santé. Je vous aide à formuler vos textes dans ce sens.",
			},
			{
				question: "Combien coûte un site pour un praticien ?",
				answer: "Mes sites sur-mesure démarrent à 1 500 €. Le prix exact dépend du nombre de pages et des fonctionnalités, et vous le connaissez avant le démarrage.",
			},
		],
		related: ["site-vitrine", "design-ux-ui-premium", "seo-semantique-technique"],
	},
	{
		label: "Artisans",
		title: "Site internet pour artisan",
		slug: "artisan",
		h1: "Site internet pour artisan à Amiens",
		eyebrow: "Artisans · Amiens",
		seoTitle: "Création de site internet pour artisan à Amiens",
		seoDescription: "Site internet pour artisan à Amiens et dans la Somme : montrer vos réalisations, recevoir des demandes de devis et être trouvé sur Google. Dès 1 500 €.",
		description: "Montrer vos réalisations et recevoir des demandes de devis qualifiées.",
		Icon: Lucide.Hammer,
		lead: "Menuisier, électricien, peintre, paysagiste, ébéniste, couvreur : vos clients veulent voir votre travail avant de vous confier leur projet. Votre site est la vitrine de votre savoir-faire, consultable à toute heure. Je crée des sites pour les artisans d'Amiens et de la Somme qui veulent être trouvés localement et recevoir des demandes de devis sérieuses.",
		sections: [
			{
				title: "Vos réalisations parlent pour vous",
				body: [
					"Dans l'artisanat, une photo vaut mieux qu'un long discours. Une galerie de chantiers bien présentée, avec quelques mots sur chaque projet (le besoin du client, la solution, la commune), rassure davantage que n'importe quel slogan. Elle montre aussi le type de travaux que vous faites, et donc ceux que vous ne faites pas.",
					"Pas besoin d'un photographe professionnel : des photos prises au téléphone, avant et après, suffisent souvent. Je vous conseille sur ce qu'il faut photographier.",
				],
			},
			{
				title: "Des demandes de devis plus qualifiées",
				body: [
					"Un formulaire de devis bien pensé vous fait gagner du temps : type de travaux, commune, délai souhaité, photos du chantier. Vous recevez des demandes complètes, et vous pouvez rappeler les bons clients en priorité.",
					"Le site peut aussi afficher votre zone d'intervention, pour éviter les demandes trop éloignées.",
				],
			},
			{
				title: "Être trouvé quand on cherche un artisan près de chez soi",
				body: [
					"« Menuisier Amiens », « électricien Longueau », « paysagiste Somme » : vos clients cherchent un professionnel proche. Le référencement local repose sur votre fiche Google, avec photos et avis, et sur un site qui mentionne clairement vos métiers et les communes où vous intervenez.",
					"Chaque type de prestation peut avoir sa propre page, pour apparaître sur des recherches précises comme « pose de parquet » ou « rénovation de salle de bain ».",
				],
			},
			{
				title: "Inspirer confiance",
				body: [
					"Vos clients vous ouvrent leur maison. Mentionner vos assurances et garanties, vos éventuels labels et certifications, vos années d'expérience et les avis de vos clients fait souvent la différence entre deux devis.",
					"Ces éléments trouvent leur place sur la page d'accueil et sur chaque page de prestation, là où le client hésite.",
				],
			},
		],
		benefits: [
			"Galerie de réalisations, avant et après",
			"Formulaire de demande de devis détaillé",
			"Zone d'intervention claire",
			"Pages par type de prestation",
			"Fiche Google et référencement local",
			"Mise en avant de vos avis et garanties",
		],
		process,
		price: {
			from: "1 500 €",
			note: "Le prix dépend du nombre de pages et des fonctionnalités, comme la galerie ou le formulaire de devis. Vous le connaissez avant le démarrage.",
		},
		faq: [
			{
				question: "Je n'ai pas beaucoup de photos de mes chantiers, est-ce un problème ?",
				answer: "Non. On démarre avec ce que vous avez, et la galerie s'enrichit au fil des chantiers. Je vous indique quoi photographier pour les prochains.",
			},
			{
				question: "Le site peut-il afficher mes assurances et certifications ?",
				answer: "Oui, et c'est conseillé : votre assurance professionnelle, votre garantie décennale si votre métier en a une, vos labels ou certifications rassurent les clients.",
			},
			{
				question: "Puis-je mettre à jour ma galerie moi-même ?",
				answer: "C'est possible avec un outil d'édition simple intégré au site. Vous pouvez aussi m'envoyer vos photos dans le cadre de l'accompagnement mensuel, et je m'en occupe.",
			},
			{
				question: "Combien coûte un site pour un artisan ?",
				answer: "Mes sites sur-mesure démarrent à 1 500 €. Le prix exact dépend du nombre de pages et des fonctionnalités, et vous le connaissez avant le démarrage.",
			},
		],
		related: ["site-vitrine", "seo-semantique-technique", "maintenance-evolution"],
	},
	{
		label: "Créateurs",
		title: "Site internet pour créateur",
		slug: "createur",
		h1: "Site internet pour créateurs et créatrices à Amiens",
		eyebrow: "Créateurs · Amiens",
		seoTitle: "Site internet pour créateur et créatrice à Amiens",
		seoDescription: "Site internet pour créateurs, photographes, illustrateurs et petites marques à Amiens : un portfolio ou une boutique à votre image, au-delà d'Instagram.",
		description: "Un portfolio ou une boutique qui fait vivre votre univers, au-delà d'Instagram.",
		Icon: Lucide.Sparkles,
		lead: "Photographe, illustratrice, céramiste, créatrice de bijoux, petite marque : votre univers est votre principal atout. Instagram vous aide à le montrer, mais vous ne le possédez pas. Je crée des sites pour les créateurs d'Amiens et d'ailleurs qui veulent un lieu à eux pour présenter leur travail, vendre et être trouvés.",
		sections: [
			{
				title: "Un lieu qui vous appartient",
				body: [
					"Un compte Instagram peut être suspendu, perdre sa visibilité du jour au lendemain ou changer de règles. Votre site, lui, reste à vous : votre nom de domaine, votre contenu, votre façon de présenter votre travail. Les réseaux sociaux deviennent alors un moyen d'y amener du monde, pas l'unique endroit où vous existez.",
					"J'en parle plus en détail dans l'article du journal sur Instagram et les sites internet.",
				],
			},
			{
				title: "Portfolio, boutique ou les deux",
				body: [
					"Selon votre activité, le site peut être un portfolio qui met vos créations en valeur et donne envie de vous contacter pour une commande, une boutique en ligne pour vendre directement, ou un mélange des deux.",
					"Pour Mama California, une marque café et surf portée par deux fondatrices, l'enjeu était de créer une identité forte autour d'une boutique en ligne. Pour Un Jour Une Promesse, une marque personnelle, il s'agissait d'un univers poétique qui donne envie de s'y attarder.",
				],
			},
			{
				title: "Un design au service de votre univers",
				body: [
					"Quand on est créateur, le site ne doit pas voler la vedette à vos créations. Je conçois des mises en page qui laissent de la place aux images, qui respectent vos couleurs et votre ton, et qui s'adaptent parfaitement au mobile, où se fait une grande partie de la découverte.",
					"Les images sont optimisées pour s'afficher vite sans perdre en qualité : un portfolio lent fait fuir les visiteurs.",
				],
			},
			{
				title: "Être trouvé au-delà de votre communauté",
				body: [
					"Vos abonnés vous connaissent déjà. Le site vous permet d'être découvert par d'autres personnes : celles qui cherchent « photographe mariage Amiens », « céramiste Somme » ou « bijoux faits main ». Des pages bien titrées, des images décrites correctement et quelques textes sur votre démarche suffisent souvent à faire la différence.",
				],
			},
		],
		benefits: [
			"Portfolio ou galerie mise en valeur",
			"Boutique en ligne si besoin",
			"Design au service de vos créations",
			"Images optimisées, affichage rapide",
			"Nom de domaine à votre nom",
			"Référencement sur votre métier et votre ville",
		],
		process,
		price: {
			from: "1 500 €",
			note: "Le prix dépend du nombre de pages et de la présence d'une boutique en ligne. Vous recevez une proposition claire avant le démarrage.",
		},
		faq: [
			{
				question: "J'ai déjà Instagram, ai-je vraiment besoin d'un site ?",
				answer: "Instagram est un excellent outil pour montrer votre travail au quotidien, mais vous ne le contrôlez pas. Le site est votre base stable, celle qui vous fait aussi apparaître sur Google.",
			},
			{
				question: "Puis-je vendre mes créations directement sur le site ?",
				answer: "Oui, avec une boutique intégrée, basée sur Shopify ou Stripe selon le nombre de produits.",
			},
			{
				question: "Mes images vont-elles ralentir le site ?",
				answer: "Non, si elles sont bien optimisées. Elles sont redimensionnées et compressées pour garder une belle qualité tout en s'affichant rapidement.",
			},
			{
				question: "Combien de temps faut-il pour créer mon site ?",
				answer: "En général 3 à 4 semaines pour un portfolio, un peu plus avec une boutique en ligne.",
			},
		],
		related: ["site-vitrine", "ecommerce-haute-performance", "design-ux-ui-premium"],
	},
];
