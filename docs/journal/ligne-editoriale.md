# Ligne éditoriale du Journal

Ce document guide la rédaction des articles du Journal de lucascapart.fr, y compris les brouillons préparés automatiquement. Chaque brouillon est relu par Lucas avant publication.

## Pour qui on écrit

Des indépendants et créateurs d'Amiens, de la Somme et d'ailleurs : coachs, praticiens bien-être, artisans, créateurs, petites structures. Ils ne sont pas techniciens. Ils veulent comprendre, décider et passer à l'action, sans jargon.

## Le ton

- On vouvoie le lecteur. Lucas parle à la première personne (« je »).
- Honnête et concret, même quand ça ne joue pas en faveur de Lucas. Pas de promesses magiques (« première place sur Google en 15 jours »), pas de superlatifs creux.
- Phrases courtes, exemples tirés du quotidien d'un indépendant à Amiens (communes : Amiens, Longueau, Salouël, Camon, Rivery, Abbeville, Albert…).
- Écriture inclusive légère, comme dans les articles existants (client·e·s, indépendant·e), sans en abuser.
- Guillemets français « ».

## Ce qu'on n'invente jamais

N'utiliser que des faits vérifiables. Ne jamais inventer de client, de témoignage, de chiffre, de statistique ou de résultat. Les faits disponibles sur l'activité de Lucas :

- Basé à Amiens, travaille aussi à distance partout en France.
- Sites sur-mesure à partir de 1 500 €. Prix fixé avant le démarrage.
- Délai habituel : 3 à 4 semaines entre le premier échange et la mise en ligne.
- Déroulé : appel découverte de 30 minutes gratuit, proposition claire, création validée étape par étape, mise en ligne.
- Accompagnement mensuel sans engagement : Essentiel 79 €/mois (67 € à l'année), Évolutif 149 € (127 €), Sérénité 279 € (237 €).
- Technologies : Astro et Next.js, hébergement Vercel.
- Réalisations publiques : De Ambre à Zen (espace dédié au soin), Un Jour Une Promesse (marque personnelle), Mama California (marque café et surf, boutique en ligne), Activ' Transport (refonte, transport), HBC Salouël (club de handball).

Si un article a besoin d'un exemple, utiliser un cas générique (« une praticienne qui… ») plutôt qu'un faux client. Pour une donnée chiffrée externe, ne la citer que si elle est largement établie, sinon la formuler sans chiffre.

## Format d'un article

Fichier : `src/content/blog/<slug>.md`. Le slug est en minuscules, sans accents, avec des tirets, et contient si possible « amiens ».

Frontmatter :

```yaml
---
title: "Titre complet de l'article (affiché en H1)"
description: "Résumé de 140 à 160 caractères, avec la requête principale et Amiens si pertinent."
publishDate: AAAA-MM-JJ
seoTitle: "Titre pour Google, 60 caractères maximum"   # facultatif si le titre fait déjà moins de 60 caractères
services: ["site-vitrine", "seo-semantique-technique"]  # 2 slugs existants de src/data/services.ts
---
```

Corps :

- 900 à 1 300 mots.
- Pas de H1 dans le corps : le titre est affiché automatiquement. Utiliser des intertitres `##`, et `###` si besoin.
- Une introduction qui pose le problème du lecteur en 3 à 5 phrases.
- Des sections concrètes, avec des listes quand c'est utile.
- 2 à 4 liens internes dans le texte, vers des pages qui existent : `/services/<slug>/`, `/site-internet/<slug>/` (pages métier de `src/data/metiers.ts`) ou `/blog/<slug>/` (articles existants).
- Une conclusion avec un appel à l'action vers `[…](/#contact)` (premier échange de 30 minutes, gratuit et sans engagement).

## Référencement

- Une requête principale par article, présente dans le titre, la description, le premier paragraphe et au moins un intertitre, sans bourrage.
- Des intertitres qui répondent à de vraies questions (« Combien… », « Comment… », « Faut-il… »).
- Ne pas reprendre un sujet déjà traité par un article existant. Le compléter et le lier si besoin.
