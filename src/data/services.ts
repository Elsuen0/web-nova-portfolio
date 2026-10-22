import * as Lucide from 'lucide-react';

// Each service has its own page under /services/<slug>/.
// `featured` is the large card on the homepage; `home: false` keeps a page out of the homepage grid.
export const services = [
	{
		title: "Site vitrine sur-mesure",
		slug: "site-vitrine",
		featured: true,
		h1: "Création de site vitrine à Amiens",
		eyebrow: "Site vitrine · Amiens",
		seoTitle: "Création de site vitrine à Amiens, dès 1 500 €",
		seoDescription: "Création de site vitrine sur-mesure à Amiens pour coachs, praticiens, artisans et créateurs : design à votre image, rapide et bien référencé. Dès 1 500 €.",
		description: "Un site sur-mesure qui présente votre activité, rassure vos futurs clients et leur donne envie de vous contacter.",
		Icon: Lucide.Monitor,
		lead: "Un site vitrine, c'est votre adresse sur internet : l'endroit où quelqu'un qui a entendu parler de vous, ou qui vous a trouvé sur Google, vient vérifier que vous êtes la bonne personne. Je crée des sites vitrines sur-mesure pour les indépendants et créateurs d'Amiens et de la Somme : coachs, praticiennes, artisans, thérapeutes, photographes.",
		sections: [
			{
				title: "À qui s'adresse un site vitrine ?",
				body: [
					"Le site vitrine est la formule la plus adaptée si vous vendez un service plutôt que des produits en ligne. Vos clients n'achètent pas directement sur le site : ils le parcourent pour comprendre ce que vous proposez, découvrir votre façon de travailler, puis vous appellent, vous écrivent ou réservent un rendez-vous.",
					"C'est le cas de la plupart des indépendants avec qui je travaille : une coach qui veut présenter ses accompagnements, une praticienne bien-être qui doit rassurer avant une première séance, un artisan qui veut montrer ses réalisations, une créatrice qui a besoin d'un lieu plus durable qu'un compte Instagram.",
				],
			},
			{
				title: "Ce que contient votre site",
				body: [
					"Chaque projet est différent, mais un site vitrine efficace repose presque toujours sur les mêmes fondations :",
				],
				bullets: [
					"Une page d'accueil qui dit en quelques secondes qui vous êtes, pour qui vous travaillez et où : Amiens, la Somme ou à distance.",
					"Une page par prestation, pour que chaque service puisse être trouvé sur Google par les personnes qui le cherchent.",
					"Une page à propos, parce qu'on choisit une personne autant qu'un service.",
					"Vos avis clients et vos réalisations, pour rassurer avant le premier contact.",
					"Un moyen de contact simple : formulaire, prise de rendez-vous en ligne, e-mail ou téléphone.",
					"Les mentions légales et la politique de confidentialité, obligatoires pour tout site professionnel.",
				],
			},
			{
				title: "Un design à votre image, pas un modèle",
				body: [
					"Je ne pars pas d'un thème acheté en ligne. Le design est créé pour vous, à partir de votre univers : vos couleurs, votre ton, votre façon de parler à vos clients. L'objectif n'est pas d'avoir un site joli, mais un site dans lequel vos clients vous reconnaissent avant même de vous avoir rencontré.",
					"C'est ce que j'ai fait par exemple pour De Ambre à Zen, un espace dédié au soin et au ressourcement, ou pour Un Jour Une Promesse, une marque personnelle à l'univers poétique : deux sites très différents, parce que les deux activités le sont.",
				],
			},
			{
				title: "Pensé pour être trouvé sur Google à Amiens",
				body: [
					"Un beau site que personne ne trouve ne sert pas à grand-chose. Chaque site vitrine que je livre intègre les bases du référencement local : titres et descriptions rédigés pour les recherches de votre métier à Amiens, une page par service, des données structurées qui indiquent à Google votre activité et votre zone d'intervention, et un sitemap envoyé à Google Search Console.",
					"Les sites sont développés avec Astro, une technologie qui produit des pages très légères. Résultat : un affichage quasi instantané sur mobile, ce qui compte à la fois pour vos visiteurs et pour Google.",
				],
			},
		],
		benefits: [
			"Design sur-mesure, adapté au mobile",
			"Titres et descriptions rédigés pour Google",
			"Référencement local de base (Amiens et alentours)",
			"Formulaire de contact ou prise de rendez-vous",
			"Mise en ligne, nom de domaine et HTTPS",
			"Prise en main expliquée, sans jargon",
		],
		process: [
			"Appel découverte de 30 minutes, gratuit",
			"Proposition claire : périmètre et prix fixés",
			"Création du design et des pages, validés avec vous",
			"Mise en ligne et envoi à Google",
		],
		price: {
			from: "1 500 €",
			note: "Le prix exact dépend du nombre de pages et des fonctionnalités. Vous le connaissez avant le démarrage, et il ne change pas en cours de route.",
		},
		faq: [
			{
				question: "Combien coûte un site vitrine à Amiens ?",
				answer: "Mes sites vitrines sur-mesure démarrent à 1 500 €. Le tarif final dépend du nombre de pages, des fonctionnalités (prise de rendez-vous, galerie, blog) et du contenu à créer. Vous le connaissez dès la proposition, avant tout démarrage.",
			},
			{
				question: "Combien de temps faut-il pour créer mon site ?",
				answer: "En général 3 à 4 semaines entre le premier échange et la mise en ligne. Le délai dépend surtout de la disponibilité de vos textes et de vos photos.",
			},
			{
				question: "Je n'ai pas encore mes textes et mes photos, est-ce un problème ?",
				answer: "Non. On construit la structure du site ensemble, et je vous guide sur ce qu'il faut écrire page par page. Je vous conseille aussi sur les photos qui servent le mieux votre image.",
			},
			{
				question: "Comment modifier mon site après la mise en ligne ?",
				answer: "Les modifications de contenu (textes, photos, offres) sont incluses dans les formules d'accompagnement mensuel, dès 79 € par mois et sans engagement. Vous m'envoyez ce que vous voulez changer, je m'en occupe.",
			},
			{
				question: "Travaillez-vous uniquement à Amiens ?",
				answer: "Je suis basé à Amiens et j'accompagne volontiers les indépendants de la Somme en direct. Je travaille aussi à distance avec des clients partout en France : tout peut se faire en visio.",
			},
		],
		related: ["refonte-site-internet", "seo-semantique-technique", "maintenance-evolution"],
	},
	{
		title: "Refonte de site internet",
		slug: "refonte-site-internet",
		home: false,
		h1: "Refonte de site internet à Amiens",
		eyebrow: "Refonte · Amiens",
		seoTitle: "Refonte de site internet à Amiens",
		seoDescription: "Refonte de site internet à Amiens : un site plus moderne, plus rapide et mieux référencé, sans perdre votre visibilité sur Google. Pour indépendants et TPE.",
		description: "Votre site a vieilli, il est lent ou ne vous ressemble plus ? On le refait, sans perdre ce qui fonctionne déjà.",
		Icon: Lucide.RefreshCw,
		lead: "Un site créé il y a cinq ans, un modèle Wix qui ne vous correspond plus, un WordPress que plus personne n'ose mettre à jour : la plupart des sites ont besoin d'une refonte un jour. Je refais les sites des indépendants et petites structures d'Amiens et d'ailleurs, en gardant ce qui fonctionne déjà, à commencer par votre visibilité sur Google.",
		sections: [
			{
				title: "Les signes qu'il est temps de refaire votre site",
				body: [],
				bullets: [
					"Vous hésitez à envoyer le lien à un prospect.",
					"Le site est lent ou s'affiche mal sur téléphone.",
					"Votre offre, vos tarifs ou votre positionnement ont changé, mais pas le site.",
					"Vous ne savez plus comment le modifier, ou la personne qui l'a créé n'est plus disponible.",
					"Le site reçoit des visites, mais très peu de demandes de contact.",
					"Vous payez un abonnement ou un hébergement sans savoir à quoi il sert.",
				],
				after: [
					"Un seul de ces points ne justifie pas forcément une refonte complète. Parfois, quelques corrections suffisent, et je vous le dis franchement dès le premier échange.",
				],
			},
			{
				title: "Refaire votre site sans perdre votre référencement",
				body: [
					"C'est le risque principal d'une refonte : un site tout neuf qui disparaît de Google parce que les anciennes adresses ne mènent plus nulle part. Avant de toucher à quoi que ce soit, je fais l'inventaire des pages existantes et de celles qui vous amènent des visiteurs.",
					"À la mise en ligne, chaque ancienne adresse est redirigée vers la bonne nouvelle page (redirections 301), le nouveau sitemap est envoyé à Google Search Console, et si vous changez de nom de domaine, le changement d'adresse est déclaré à Google. Votre historique n'est pas perdu : il est transféré.",
				],
			},
			{
				title: "Ce qui change avec la refonte",
				body: [
					"Le design est repensé à partir de votre activité d'aujourd'hui, pas de celle d'il y a cinq ans. Les textes sont retravaillés pour parler à vos clients et pour les recherches qu'ils font sur Google. Le site est reconstruit avec des technologies modernes, beaucoup plus rapides et plus sûres qu'un WordPress chargé d'extensions.",
					"C'est ce que j'ai fait pour Activ' Transport, une entreprise de transport dont la présence en ligne a été refaite avec une structure plus claire, pour mettre en avant sa réactivité.",
				],
			},
			{
				title: "Garder la main après la refonte",
				body: [
					"Une refonte est aussi l'occasion de simplifier. Vous récupérez un site dont vous êtes propriétaire, hébergé proprement, avec un nom de domaine à votre nom. Si vous le souhaitez, je continue à m'en occuper avec un accompagnement mensuel, pour que le site ne vieillisse plus de la même façon.",
				],
			},
		],
		benefits: [
			"Inventaire du site existant et des pages qui comptent",
			"Nouveau design sur-mesure, adapté au mobile",
			"Textes retravaillés pour vos clients et pour Google",
			"Redirections 301 de toutes les anciennes adresses",
			"Migration de votre nom de domaine si besoin",
			"Déclaration du nouveau site à Google Search Console",
		],
		process: [
			"Appel découverte et regard sur votre site actuel",
			"Inventaire des pages et proposition chiffrée",
			"Création du nouveau site, validé avec vous",
			"Bascule, redirections et suivi dans Google",
		],
		price: {
			from: null,
			note: "Le prix dépend de la taille du site existant et de ce qui doit être repris. Mes sites sur-mesure démarrent à 1 500 €, et vous recevez une proposition chiffrée après le premier échange, avant tout démarrage.",
		},
		faq: [
			{
				question: "Vais-je perdre mon référencement Google avec une refonte ?",
				answer: "Pas si la refonte est bien préparée. Les anciennes adresses sont redirigées vers les nouvelles pages, et Google transfère leur historique. Il peut y avoir quelques semaines de fluctuation, mais un site plus rapide et mieux structuré finit généralement mieux classé.",
			},
			{
				question: "Mon site est sur Wix ou WordPress, pouvez-vous le refaire ?",
				answer: "Oui. Je récupère vos contenus, vos images et la liste de vos pages, puis je reconstruis le site. Votre nom de domaine peut être conservé et simplement pointé vers le nouveau site.",
			},
			{
				question: "Combien de temps dure une refonte ?",
				answer: "En général 3 à 4 semaines pour un site de taille classique, un peu plus si le site existant contient beaucoup de pages. L'ancien site reste en ligne pendant tout le travail : la bascule se fait en une fois, quand le nouveau est prêt.",
			},
			{
				question: "Dois-je changer de nom de domaine ?",
				answer: "Non, dans la plupart des cas on garde le même. Si vous en changez, par exemple pour passer à votre nom, l'ancien domaine est redirigé vers le nouveau et le changement est déclaré à Google.",
			},
		],
		related: ["site-vitrine", "seo-semantique-technique", "design-ux-ui-premium"],
	},
	{
		title: "Design UX/UI Premium",
		slug: "design-ux-ui-premium",
		h1: "Webdesign sur-mesure à Amiens",
		eyebrow: "Webdesign · Amiens",
		seoTitle: "Webdesigner à Amiens : design de site sur-mesure",
		seoDescription: "Webdesigner à Amiens, je crée le design de votre site pour coachs, praticiens et artisans : une identité qui vous ressemble, dès 1 500 €. Premier appel offert.",
		description: "Une identité visuelle qui capte qui vous êtes vraiment, pour que vos client·e·s vous reconnaissent au premier regard.",
		Icon: Lucide.Palette,
		lead: "Le design d'un site, ce n'est pas une question de goût : c'est ce qui fait qu'un visiteur se dit en trois secondes « c'est exactement ce que je cherche », ou qu'il repart. Webdesigner à Amiens, je crée des sites dont l'apparence est pensée pour votre activité et pour vos clients, pas tirée d'un catalogue de modèles.",
		sections: [
			{
				title: "Un design qui part de votre univers",
				body: [
					"Tout commence par un échange sur votre activité : ce que vous faites, pour qui, ce qui vous distingue, le ton que vous employez avec vos clients. Une praticienne en soins énergétiques et un artisan menuisier n'ont pas besoin du même site, même s'ils ont tous deux besoin d'être contactés.",
					"À partir de là, je construis une identité visuelle pour le web : palette de couleurs, typographies, style des images, place des éléments sur la page. Si vous avez déjà un logo ou une charte, je pars de là. Sinon, on définit ensemble les couleurs et les typographies du site.",
				],
			},
			{
				title: "UX : aider vos visiteurs à trouver ce qu'ils cherchent",
				body: [
					"L'UX, c'est l'expérience du visiteur : est-ce qu'il comprend ce que vous proposez, est-ce qu'il trouve vos tarifs, est-ce qu'il sait comment vous contacter ? Chaque page est organisée autour d'une question simple : que doit faire la personne qui arrive ici ?",
					"Concrètement, cela veut dire des menus courts, des titres clairs, un bouton de contact toujours visible, et des pages qui se lisent aussi bien sur un téléphone, dans le bus, que sur un ordinateur.",
				],
			},
			{
				title: "Pensé d'abord pour le mobile",
				body: [
					"Une grande partie des recherches locales se fait aujourd'hui sur téléphone, souvent en déplacement. Je conçois donc chaque page d'abord pour un petit écran, puis je l'adapte aux écrans plus grands. Pas l'inverse.",
					"Vous validez des maquettes des pages principales avant le développement : c'est le moment d'ajuster les couleurs, les textes ou l'organisation, sans attendre la mise en ligne.",
				],
			},
			{
				title: "Deux univers, deux designs",
				body: [
					"Pour De Ambre à Zen, un espace dédié au soin, le design devait transmettre le calme dès la première seconde : beaucoup d'espace, des couleurs douces, une navigation sans surprise.",
					"Pour Mama California, une marque café et surf entre Nice et la Californie, il fallait au contraire une identité forte et colorée, au service d'une boutique en ligne. Vous retrouvez ces réalisations sur la page d'accueil.",
				],
			},
		],
		benefits: [
			"Identité visuelle web sur-mesure",
			"Maquettes à valider avant le développement",
			"Design pensé d'abord pour le mobile",
			"Parcours clair jusqu'à la prise de contact",
			"Couleurs et typographies cohérentes sur tout le site",
			"Conseils sur vos photos et vos visuels",
		],
		process: [
			"Échange sur votre univers et vos clients",
			"Pistes graphiques et structure des pages",
			"Maquettes détaillées, ajustées avec vous",
			"Intégration et vérification sur mobile",
		],
		price: {
			from: "1 500 €",
			note: "Le design est inclus dans chaque création de site sur-mesure. Le prix final dépend du nombre de pages et des fonctionnalités, et vous le connaissez avant le démarrage.",
		},
		faq: [
			{
				question: "Faut-il déjà avoir un logo ?",
				answer: "Non. Si vous avez un logo ou une charte graphique, je m'appuie dessus. Sinon, on définit ensemble les couleurs et les typographies du site, qui pourront ensuite servir sur vos autres supports.",
			},
			{
				question: "Pourrai-je voir le design avant que le site soit développé ?",
				answer: "Oui. Vous validez des maquettes des pages principales avant le développement. C'est le moment de demander des changements, plutôt qu'après la mise en ligne.",
			},
			{
				question: "Quelle différence avec un modèle Wix ou Squarespace ?",
				answer: "Un modèle est conçu pour convenir à tout le monde, donc à personne en particulier. Un design sur-mesure part de votre activité et de vos clients, et vous distingue des autres professionnels qui utilisent les mêmes modèles.",
			},
			{
				question: "Travaillez-vous avec des clients hors d'Amiens ?",
				answer: "Oui, tout peut se faire en visio. Je suis basé à Amiens et j'aime rencontrer les clients de la région, mais je travaille avec des indépendants partout en France.",
			},
		],
		related: ["site-vitrine", "refonte-site-internet", "strategie-digitale"],
	},
	{
		title: "Développement Astro & Next.js",
		slug: "developpement-astro-nextjs",
		h1: "Développeur web freelance à Amiens",
		eyebrow: "Développement web · Amiens",
		seoTitle: "Développeur web freelance à Amiens",
		seoDescription: "Développeur web freelance à Amiens : des sites ultra-rapides en Astro et Next.js, bien référencés et faciles à vivre. Devis gratuit, réponse sous 24 h.",
		description: "Un site qui se charge instantanément et fonctionne parfaitement, sans que vous ayez à vous en soucier.",
		Icon: Lucide.Code2,
		lead: "Derrière un site agréable à utiliser, il y a du code. Je développe moi-même chaque site que je livre, avec des technologies modernes choisies pour une raison simple : vos pages doivent s'afficher immédiatement, fonctionner sans bug et ne jamais devenir une source de soucis.",
		sections: [
			{
				title: "Pourquoi Astro et Next.js plutôt que WordPress ?",
				body: [
					"WordPress fait tourner une grande partie du web, mais un site WordPress s'alourdit vite : un thème, une dizaine d'extensions, des mises à jour à faire régulièrement, et des failles de sécurité quand ces mises à jour sont oubliées.",
					"Astro génère des pages statiques : le site est préparé à l'avance et servi tel quel, sans base de données à pirater ni extension à mettre à jour. Next.js prend le relais quand un projet a besoin de fonctionnalités plus avancées : espace client, contenu dynamique, connexion à d'autres outils. Je choisis l'un ou l'autre selon votre projet, pas par habitude.",
				],
			},
			{
				title: "Ce que ça change pour vous",
				body: [],
				bullets: [
					"Des pages qui s'affichent en moins d'une seconde, y compris sur mobile.",
					"Moins de risques de piratage, puisqu'il n'y a pas de back-office exposé.",
					"Un hébergement fiable, avec HTTPS, sans serveur à entretenir.",
					"Un site que Google lit facilement, ce qui aide votre référencement.",
				],
			},
			{
				title: "Un développeur, pas une agence",
				body: [
					"Vous travaillez directement avec la personne qui écrit le code. Pas d'intermédiaire, pas de demande perdue entre un commercial et un développeur. Si quelque chose ne va pas, vous m'écrivez et c'est moi qui corrige.",
					"Je suis basé à Amiens. Je travaille avec des indépendants et des structures locales de la Somme, comme le club de handball HBC Salouël, et à distance avec des clients partout en France.",
				],
			},
			{
				title: "Et les fonctionnalités particulières ?",
				body: [
					"Prise de rendez-vous, formulaire avancé, blog, boutique, espace réservé : la plupart des besoins se branchent sur un site Astro ou Next.js grâce à des outils éprouvés, comme Calendly pour l'agenda, Stripe ou Shopify pour le paiement, ou un outil d'édition pour gérer vos textes. On en parle au premier échange pour définir ce qui vous sera vraiment utile.",
				],
			},
		],
		benefits: [
			"Pages statiques ultra-rapides avec Astro",
			"Fonctionnalités avancées si besoin avec Next.js",
			"Code propre, qui vous appartient",
			"Hébergement sécurisé avec HTTPS",
			"Optimisation des Core Web Vitals",
			"Intégration de vos outils (agenda, paiement, édition)",
		],
		process: [
			"Choix de la technologie selon votre projet",
			"Développement des pages et des composants",
			"Tests sur mobile, tablette et ordinateur",
			"Mise en ligne et suivi des performances",
		],
		price: {
			from: "1 500 €",
			note: "Le développement est inclus dans chaque création de site. Les fonctionnalités sur-mesure sont chiffrées dans la proposition, avant le démarrage.",
		},
		faq: [
			{
				question: "Mon site sera-t-il vraiment à moi ?",
				answer: "Oui. Le code, le nom de domaine et les contenus vous appartiennent. Vous restez libre de partir avec à tout moment.",
			},
			{
				question: "Pourrai-je modifier mes textes sans vous ?",
				answer: "C'est possible en ajoutant au site un outil d'édition de contenu. Si vous préférez déléguer, les modifications sont incluses dans les formules d'accompagnement mensuel. On choisit la solution la plus simple pour vous.",
			},
			{
				question: "Pourquoi mon site WordPress est-il si lent ?",
				answer: "Le plus souvent à cause du thème et des extensions : chacune ajoute du code chargé sur chaque page. Une refonte avec Astro règle généralement le problème à la racine.",
			},
			{
				question: "Où mon site est-il hébergé ?",
				answer: "Sur une plateforme d'hébergement moderne comme Vercel, avec certificat HTTPS et diffusion rapide en France. Vous n'avez aucun serveur à gérer.",
			},
		],
		related: ["site-vitrine", "refonte-site-internet", "maintenance-evolution"],
	},
	{
		title: "SEO Sémantique & Technique",
		slug: "seo-semantique-technique",
		h1: "Référencement local et SEO à Amiens",
		eyebrow: "Référencement · Amiens",
		seoTitle: "Référencement local et SEO à Amiens",
		seoDescription: "Référencement local à Amiens : fiche Google, SEO technique et contenus pour que vos clients vous trouvent. Pour indépendants, coachs et artisans.",
		description: "Une visibilité qui dure, pour que les bonnes personnes vous trouvent sans effort de votre part.",
		Icon: Lucide.Search,
		lead: "Être trouvé quand quelqu'un cherche votre métier à Amiens : c'est l'objectif du référencement local. J'aide les indépendants et les petites entreprises à apparaître sur Google, dans les résultats classiques comme sur la carte, avec un travail technique propre et des contenus qui répondent aux vraies questions de leurs clients.",
		sections: [
			{
				title: "Les trois piliers du référencement local",
				body: [
					"Le référencement local repose sur trois éléments qui se renforcent l'un l'autre :",
				],
				bullets: [
					"Votre fiche d'établissement Google : catégorie, zone desservie, photos, avis. C'est elle qui vous fait apparaître sur la carte.",
					"Votre site : une page par service, des titres qui mentionnent votre métier et votre ville, des informations identiques à celles de votre fiche.",
					"Votre réputation : les avis clients et les sites qui parlent de vous, comme les annuaires, les partenaires ou la presse locale.",
				],
			},
			{
				title: "Le SEO technique : la base invisible",
				body: [
					"Avant même les mots-clés, Google doit pouvoir lire votre site correctement. Je vérifie et corrige ce que vos visiteurs ne voient pas : vitesse de chargement, version mobile, sitemap, balises canoniques, redirections, et données structurées qui décrivent votre activité, votre adresse et vos horaires.",
					"Ce sont souvent des réglages de quelques minutes, mais ils bloquent tout le reste : un site qui envoie à Google des adresses contradictoires, ou qui n'a jamais été déclaré dans Google Search Console, peut stagner pendant des mois sans raison apparente.",
				],
			},
			{
				title: "Le SEO sémantique : parler comme vos clients",
				body: [
					"Vos clients ne cherchent pas « accompagnement holistique personnalisé ». Ils cherchent « sophrologue Amiens » ou « combien coûte un site internet ». Le SEO sémantique consiste à identifier ces recherches et à construire des pages qui y répondent clairement : une page par service, une page par question importante, des articles qui lèvent les doutes avant l'achat.",
					"C'est ce que je fais avec le journal de ce site, par exemple avec l'article sur le référencement local à Amiens.",
				],
			},
			{
				title: "Des résultats, pas des promesses magiques",
				body: [
					"Personne ne peut garantir la première place sur Google, et il faut se méfier de ceux qui le font. Une fiche Google bien optimisée peut produire des effets en quelques semaines ; un site qui monte sur des recherches concurrentielles demande plusieurs mois.",
					"Je vous montre l'évolution concrète dans Google Search Console : sur quelles recherches vous apparaissez, à quelle position, et combien de personnes cliquent.",
				],
			},
		],
		benefits: [
			"Audit technique de votre site",
			"Optimisation de votre fiche Google",
			"Titres et descriptions rédigés pour vos recherches cibles",
			"Données structurées pour votre activité locale",
			"Configuration de Google Search Console",
			"Suivi des positions et des clics",
		],
		process: [
			"Audit du site et de la fiche Google",
			"Choix des recherches à viser",
			"Corrections techniques et contenus",
			"Suivi régulier dans Search Console",
		],
		price: {
			from: null,
			note: "Les bases du référencement local sont incluses dans chaque site que je crée. Pour un site existant, le travail est chiffré après un premier regard. Les optimisations continues font partie de la formule Sérénité (279 € par mois, ou 237 € par mois à l'année).",
		},
		faq: [
			{
				question: "En combien de temps vais-je apparaître sur Google ?",
				answer: "Cela dépend de la concurrence sur votre métier et du point de départ. Une fiche Google bien remplie peut produire des effets en quelques semaines, un site sur des recherches concurrentielles en plusieurs mois.",
			},
			{
				question: "Pouvez-vous garantir la première place ?",
				answer: "Non, et personne ne le peut honnêtement. Je peux en revanche corriger ce qui vous freine, construire les bonnes pages et vous montrer l'évolution réelle dans Google Search Console.",
			},
			{
				question: "Faut-il un blog pour être bien référencé ?",
				answer: "Ce n'est pas obligatoire, mais quelques articles qui répondent aux questions de vos clients aident beaucoup, surtout sur les recherches du type « combien coûte » ou « comment choisir ».",
			},
			{
				question: "Travaillez-vous sur des sites que vous n'avez pas créés ?",
				answer: "Oui, je peux auditer et optimiser un site existant. Si la base technique est trop limitante, je vous le dis, et on regarde ensemble si une refonte est plus raisonnable.",
			},
		],
		related: ["site-vitrine", "strategie-digitale", "refonte-site-internet"],
	},
	{
		title: "Stratégie Digitale",
		slug: "strategie-digitale",
		h1: "Stratégie web pour indépendants à Amiens",
		eyebrow: "Stratégie web · Amiens",
		seoTitle: "Stratégie web pour indépendants à Amiens",
		seoDescription: "Un site pensé pour convertir : parcours client, messages clairs, suivi des demandes et acquisition. Accompagnement stratégique pour indépendants à Amiens.",
		description: "Un site pensé pour transformer vos visiteurs en client·e·s, aligné avec vos vrais objectifs.",
		Icon: Lucide.Rocket,
		lead: "Un site ne sert pas à être joli, il sert à vous apporter des clients. La stratégie web, c'est le travail qui vient avant et après la création : savoir à qui on parle, ce qu'on veut que le visiteur fasse, et mesurer si ça fonctionne.",
		sections: [
			{
				title: "Partir de vos objectifs, pas de la technique",
				body: [
					"Remplir un agenda de rendez-vous, vendre une formation, recevoir des demandes de devis, être identifié comme la référence de votre métier à Amiens : chaque objectif demande un site différent. On commence donc par définir ce qui compte pour vous, et à qui le site s'adresse en priorité.",
					"Cette étape évite le piège le plus fréquent : un site qui parle de tout, à tout le monde, et qui ne convainc personne.",
				],
			},
			{
				title: "Le parcours de vos visiteurs",
				body: [
					"Quelqu'un vous découvre sur Google, sur Instagram ou par le bouche-à-oreille. Que doit-il voir en premier ? Quelles questions se pose-t-il avant de vous contacter ? Qu'est-ce qui pourrait le faire hésiter ? Je dessine ce parcours avec vous, puis je construis les pages et les messages qui y répondent.",
					"Concrètement : une promesse claire en haut de page, des preuves comme vos avis et vos réalisations, des réponses aux objections sur le prix, les délais ou le déroulé, et un appel à l'action évident.",
				],
			},
			{
				title: "Mesurer pour améliorer",
				body: [
					"Sans mesure, on décide à l'aveugle. Je mets en place un suivi simple : nombre de visites, provenance, demandes de contact, réservations. Vous savez ce qui marche, et on ajuste ce qui ne marche pas.",
					"Si vous investissez dans Google Ads, c'est encore plus important : une page qui convertit mal fait payer chaque client plus cher. Je mets alors en place le suivi des conversions, pour savoir quelles annonces rapportent vraiment.",
				],
			},
			{
				title: "Faire venir les bonnes personnes",
				body: [
					"Référencement local, fiche Google, publicité, réseaux sociaux, partenariats locaux : je vous aide à choisir les canaux qui ont du sens pour votre activité et votre budget, plutôt que d'être partout à moitié. Pour un indépendant à Amiens, les leviers les plus efficaces sont souvent gratuits : une fiche Google soignée, des avis clients réguliers et un site qui répond clairement aux questions.",
				],
			},
		],
		benefits: [
			"Définition de vos objectifs et de votre cible",
			"Parcours visiteur jusqu'à la prise de contact",
			"Messages clés et structure des pages",
			"Suivi des visites et des demandes de contact",
			"Suivi des conversions Google Ads",
			"Recommandations d'acquisition adaptées à votre budget",
		],
		process: [
			"Atelier sur vos objectifs et vos clients",
			"Cartographie du parcours visiteur",
			"Plan d'action et priorités",
			"Mesure et ajustements réguliers",
		],
		price: {
			from: null,
			note: "La réflexion stratégique fait partie de chaque création de site. Pour un suivi dans la durée, la formule Sérénité inclut un point stratégique mensuel avec moi (279 € par mois, ou 237 € par mois à l'année).",
		},
		faq: [
			{
				question: "J'ai déjà un site, pouvez-vous m'aider quand même ?",
				answer: "Oui. On part de votre site actuel, on regarde ce qui freine les demandes de contact et on donne la priorité aux changements qui auront le plus d'effet.",
			},
			{
				question: "Je n'ai pas de budget publicitaire, est-ce utile ?",
				answer: "Oui. La plupart des leviers pour un indépendant sont gratuits ou presque : fiche Google, avis clients, contenus utiles, partenariats locaux. La publicité vient éventuellement ensuite.",
			},
			{
				question: "Comment saurai-je si mon site fonctionne ?",
				answer: "On définit ensemble deux ou trois indicateurs simples, comme les demandes de contact, les réservations ou les appels, et on les suit dans le temps.",
			},
			{
				question: "Combien de temps avant de voir des résultats ?",
				answer: "Les changements de messages et de parcours sur un site existant peuvent avoir un effet rapide sur les demandes de contact. Les leviers comme le référencement demandent plusieurs mois.",
			},
		],
		related: ["seo-semantique-technique", "site-vitrine", "design-ux-ui-premium"],
	},
	{
		title: "E-commerce Haute Performance",
		slug: "ecommerce-haute-performance",
		h1: "Création de site e-commerce à Amiens",
		eyebrow: "E-commerce · Amiens",
		seoTitle: "Création de site e-commerce à Amiens",
		seoDescription: "Création de boutique en ligne à Amiens pour créateurs et artisans : simple à gérer, rapide sur mobile, paiement sécurisé avec Shopify ou Stripe. Devis gratuit.",
		description: "Une boutique simple à gérer, agréable à parcourir, qui vend pendant que vous travaillez.",
		Icon: Lucide.Layout,
		lead: "Vendre en ligne quand on est créateur, artisan ou petite marque, c'est trouver l'équilibre entre une boutique qui donne envie et une gestion assez simple pour ne pas y passer ses soirées. Je crée des boutiques en ligne sur-mesure pour les indépendants d'Amiens et d'ailleurs.",
		sections: [
			{
				title: "Une boutique à l'image de votre marque",
				body: [
					"Sur les grandes plateformes, toutes les boutiques finissent par se ressembler. Une boutique sur-mesure met en valeur ce qui rend vos produits uniques : vos photos, votre histoire, votre façon de fabriquer. C'est ce qui fait qu'un visiteur achète chez vous plutôt que sur une marketplace.",
					"Pour Mama California, une marque café et surf entre Nice et la Californie portée par deux fondatrices, l'enjeu était justement de construire une identité forte autour de la boutique en ligne.",
				],
			},
			{
				title: "Simple à gérer au quotidien",
				body: [
					"Ajouter un produit, modifier un prix, suivre une commande : ces actions doivent être faciles. Selon votre projet, je m'appuie sur Shopify, qui offre une interface de gestion complète, ou sur Stripe pour une boutique plus légère avec quelques produits. Dans les deux cas, je vous montre comment tout gérer vous-même.",
				],
			},
			{
				title: "Rapide et rassurante, surtout sur mobile",
				body: [
					"Un acheteur qui attend que la page charge abandonne son panier. Les boutiques que je crée sont optimisées pour s'afficher vite, avec un parcours d'achat court : fiche produit, panier, paiement. Le paiement est sécurisé par des prestataires reconnus, et les informations de livraison, de retour et les conditions de vente sont faciles à trouver.",
					"Cela compte aussi pour Google : des fiches produits rapides et bien structurées, avec prix et disponibilité, ont plus de chances d'apparaître dans les résultats de recherche.",
				],
			},
			{
				title: "Vendre localement aussi",
				body: [
					"Vous êtes à Amiens ou dans la Somme ? Le retrait sur place, la livraison locale ou la commande pour un atelier peuvent être proposés au moment du paiement. Une boutique en ligne n'est pas réservée à la vente à distance : elle peut aussi simplifier la vie de vos clients d'ici.",
				],
			},
		],
		benefits: [
			"Design de boutique sur-mesure",
			"Gestion des produits, stocks et commandes",
			"Paiement sécurisé avec Shopify ou Stripe",
			"Parcours d'achat court, pensé pour le mobile",
			"Fiches produits optimisées pour Google",
			"Prise en main de la gestion de votre boutique",
		],
		process: [
			"Choix de la plateforme (Shopify, Stripe…)",
			"Design du catalogue et du parcours d'achat",
			"Développement et configuration des paiements",
			"Tests de commande et mise en ligne",
		],
		price: {
			from: null,
			note: "Le prix dépend du nombre de produits, de la plateforme choisie et des fonctionnalités (livraison, variantes, abonnements). Vous recevez une proposition chiffrée avant tout démarrage.",
		},
		faq: [
			{
				question: "Shopify ou site sur-mesure, que choisir ?",
				answer: "Les deux ne s'opposent pas : un design sur-mesure peut s'appuyer sur Shopify pour la gestion des produits et des paiements. Pour une boutique avec peu de produits, une solution plus légère avec Stripe peut suffire.",
			},
			{
				question: "Pourrai-je ajouter mes produits moi-même ?",
				answer: "Oui. La gestion du catalogue se fait depuis l'interface de la plateforme choisie, et je vous montre comment l'utiliser.",
			},
			{
				question: "Y a-t-il des frais en plus du site ?",
				answer: "Oui : les prestataires de paiement prennent une commission sur chaque vente, et Shopify a un abonnement mensuel. Je vous détaille ces coûts dans la proposition, pour qu'il n'y ait pas de surprise.",
			},
			{
				question: "Puis-je proposer le retrait sur place à Amiens ?",
				answer: "Oui, le retrait en boutique ou en atelier et la livraison locale peuvent être proposés au moment du paiement.",
			},
		],
		related: ["site-vitrine", "design-ux-ui-premium", "maintenance-evolution"],
	},
	{
		title: "Maintenance & Évolution",
		slug: "maintenance-evolution",
		h1: "Maintenance de site internet à Amiens",
		eyebrow: "Maintenance · Amiens",
		seoTitle: "Maintenance de site internet à Amiens",
		seoDescription: "Maintenance de site web à Amiens : mises à jour, sauvegardes, sécurité et petites évolutions, dès 79 €/mois. Votre site reste rapide et à jour, sans effort.",
		description: "Votre site continue d'évoluer avec vous, sans jamais devenir un poids à gérer seule.",
		Icon: Lucide.MessageSquare,
		lead: "Un site n'est jamais vraiment terminé. Vos offres changent, vos tarifs évoluent, la technique vieillit. Avec mes formules d'accompagnement, vous n'avez plus à vous en occuper : vous m'envoyez ce que vous voulez changer, je m'occupe du reste.",
		sections: [
			{
				title: "Pourquoi un site a besoin d'entretien",
				body: [
					"Un site qui n'est jamais mis à jour finit par poser problème : informations périmées qui font fuir les clients, failles de sécurité, pages qui s'affichent mal sur les nouveaux téléphones, référencement qui décline parce que rien ne bouge.",
					"La maintenance, c'est l'assurance que votre site reste fiable, à jour et à votre image, sans que vous ayez à y penser.",
				],
			},
			{
				title: "Trois formules, sans engagement",
				body: [],
				bullets: [
					"Essentiel, 79 € par mois (67 € à l'année) : mises à jour de contenu, maintenance technique et sécurité, sauvegardes régulières, support par e-mail.",
					"Évolutif, 149 € par mois (127 € à l'année) : tout Essentiel, plus de petites évolutions de design ou de structure, l'ajout ponctuel de pages ou de sections et un support prioritaire.",
					"Sérénité, 279 € par mois (237 € à l'année) : tout Évolutif, plus un point stratégique mensuel avec moi, des optimisations SEO continues et un délai de réponse garanti.",
				],
				after: [
					"La formule mensuelle est sans engagement : vous pouvez suspendre ou arrêter à tout moment.",
				],
			},
			{
				title: "Comment ça se passe au quotidien",
				body: [
					"Vous m'écrivez par e-mail ce que vous voulez changer : une nouvelle photo, un tarif, une page pour une nouvelle prestation. Je fais la modification, je vérifie qu'elle s'affiche correctement sur mobile et sur ordinateur, et je vous préviens quand c'est en ligne.",
					"Vous travaillez toujours avec la même personne, qui connaît votre site et votre activité. Pas de ticket, pas d'interlocuteur différent à chaque fois.",
				],
			},
			{
				title: "Et si mon site n'a pas été créé par vous ?",
				body: [
					"Je peux reprendre la maintenance d'un site existant après un premier regard sur sa technique. Si le site est trop fragile ou trop ancien pour être entretenu sereinement, je vous le dis, et on regarde si une refonte serait plus raisonnable.",
				],
			},
		],
		benefits: [
			"Mises à jour de textes, photos et offres",
			"Maintenance technique et sécurité",
			"Sauvegardes régulières",
			"Petites évolutions et nouvelles pages (Évolutif)",
			"Optimisations SEO continues (Sérénité)",
			"Un interlocuteur unique qui connaît votre site",
		],
		process: [
			"Choix de la formule adaptée",
			"Prise en main de votre site",
			"Demandes par e-mail, traitées par moi",
			"Point régulier sur l'évolution du site",
		],
		price: {
			from: "67 € par mois",
			note: "Trois formules de 79 à 279 € par mois, ou de 67 à 237 € par mois en paiement annuel. Sans engagement en formule mensuelle.",
		},
		faq: [
			{
				question: "Puis-je arrêter l'abonnement quand je veux ?",
				answer: "Oui, la formule mensuelle est sans engagement. Vous pouvez suspendre ou arrêter à tout moment.",
			},
			{
				question: "Qu'est-ce qu'une petite évolution ?",
				answer: "Un changement de mise en page, une nouvelle section sur une page existante, l'ajout d'une page simple. Une refonte complète ou une nouvelle fonctionnalité importante fait l'objet d'une proposition à part.",
			},
			{
				question: "En combien de temps mes modifications sont-elles faites ?",
				answer: "Cela dépend de la formule : le support est prioritaire en Évolutif et le délai de réponse est garanti en Sérénité. Dans tous les cas, je vous indique quand la modification sera en ligne.",
			},
			{
				question: "Vous occupez-vous de sites que vous n'avez pas créés ?",
				answer: "Oui, après un premier regard sur la technique du site. Si une reprise n'est pas raisonnable, je vous le dis et on regarde les alternatives.",
			},
		],
		related: ["refonte-site-internet", "seo-semantique-technique", "site-vitrine"],
	},
];
