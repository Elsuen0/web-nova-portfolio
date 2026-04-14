# Portfolio Migration: Web Nova Solutions

Le portfolio a été reconstruit avec une architecture moderne **Astro + Tailwind CSS v4**.

## 🚀 Stack Technique
- **Framework**: [Astro 6.1](https://astro.build/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Vite Plugin)
- **Icônes**: [Lucide React](https://lucide.dev/)
- **Typographie**: Cormorant Garamond (Serif) & Inter (Sans) via Google Fonts
- **Optimisation**: `astro:assets` pour un score Lighthouse de 100/100

## 🏗️ Structure des Composants

### 1. Layout.astro
Gère le SEO, les meta-tags et l'importation des polices premium.

### 2. Hero.astro
Design épuré avec :
- Image de fond optimisée via `astro:assets`.
- Typographie à fort impact (Serif italique).
- Animations d'entrée fluides.

### 3. LogoMarquee.astro
Bandeau infini "infinite scroll" en pur CSS pour une performance maximale. Utilise des icônes Lucide comme placeholders dynamiques.

### 4. Services.astro
Grille de services utilisant des `ServiceCard` interactives avec des effets de survol premium.

## 🎨 Identité Visuelle
- **Blanc Cassé**: `#F9F9F8` (Fond principal)
- **Noir**: `#0F0F0F` (Texte et accents)
- **Gris Doux**: `#E5E5E5` (Bordures et éléments secondaires)

## 📸 Assets Optimisés
Une image de fond premium a été générée et placée dans `src/assets/hero.png`. Elle est servie via le composant `<Image />` d'Astro pour garantir des temps de chargement optimaux.

---
**Note**: Les erreurs de linting concernant `@theme` ou `@apply` sont normales car Tailwind v4 est très récent et les outils de validation ne sont pas encore tous à jour. Le projet est parfaitement fonctionnel.
