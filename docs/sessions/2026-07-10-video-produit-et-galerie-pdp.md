# Vidéo produit PDP + intégration vidéo dans la galerie — Fraïk

**Date** : 2026-07-10
**Périmètre** : (1) création d'une vidéo de démonstration produit en Remotion, (2) affichage de la vidéo native Shopify dans la galerie de la fiche produit `fraik-ventilateur-3-en-1`.
**Le thème live a été modifié à la fin de la session (push CLI validé par l'utilisateur après test sur duplicata).**

## Contexte

Deux demandes enchaînées :
1. Monter une vidéo de démonstration produit « premium » pour la PDP (pas une pub Meta agressive), à partir d'un rush unique, avec des extraits et des textes imposés.
2. Comprendre pourquoi la vidéo ajoutée côté Shopify n'apparaissait pas sur la fiche produit alors que les images oui, puis la faire apparaître dans la galerie.

## Partie 1 — Vidéo Remotion (`fraik_pdp_demo_v1.mp4`)

### Décisions
- Source : `~/Downloads/RUSH PROPRE.mp4` (720×1280, 30 fps, 20,3 s). Vérifiée frame par frame avant montage (12 frames extraites, début + fin de chaque extrait).
- Format final : **1:1, 1080×1080, 30 fps, H264, sans audio** (ni voix off ni musique).
- Durée : les 6 extraits imposés totalisent ~8,5 s. L'utilisateur a choisi une **version courte ~10 s à vitesse réelle** plutôt que d'étirer artificiellement (pas de ralenti). Résultat : 8,9 s.
- Storyboard corrigé pendant la vérification des rushes :
  - L'extrait 2 (3.60–5.20) montre visuellement des **glaçons**, pas de l'eau → texte changé de « Puis de l'eau » à « Pour une fraîcheur plus intense ».
  - L'extrait 5 (14.40–16.10) ne montre pas un plan « 5 buses » explicite → texte changé de « 5 buses de brume » à « Brume visible en quelques secondes ».
- Contraintes respectées : recadrage carré sans couper le produit (produit centré, cadrage vertical réglé par plan), zoom lent 3 % max, fond navy `#0A1628`, texte blanc + mots-clés cyan `#00C2D9` (glaçons / fraîcheur / brume fraîche), fondus simples de 5 frames, aucun flash/bounce/effet TikTok, carte finale de marque. Les deux vidéos Snaptik n'ont pas été utilisées.

### Constats techniques
- `objectFit: cover` n'est pas honoré par le composant `<Video>` de `@remotion/media` → recadrage carré fait à la main (vidéo pleine largeur, hauteur 1920, décalage vertical `top` par plan).
- Projet Remotion créé dans `video/` (composition `FraikPdpDemo`). Rush copié dans `video/public/rush.mp4`. Rendu dans `video/out/fraik_pdp_demo_v1.mp4`.
- Piste audio silencieuse ajoutée par défaut au rendu → retirée avec ffmpeg (`-an`) pour un fichier vraiment sans son.

### Fichiers
- `video/src/fraik/storyboard.ts` — extraits, textes, couleurs, timings (source de vérité éditable).
- `video/src/fraik/Clip.tsx` — recadrage carré + zoom lent + texte lower-third.
- `video/src/fraik/EndCard.tsx` — carte de marque finale.
- `video/src/fraik/FraikPdpDemo.tsx` — assemblage + fondus.
- `video/src/Root.tsx` — composition 1080×1080.

## Partie 2 — Vidéo dans la galerie de la PDP

### Constat (cause racine)
La galerie de `shopify/sections/fraik-product.liquid` ne bouclait que sur `product.featured_image` et `product.images`, qui ne renvoient **que les médias de type image**. La vidéo (native Shopify, `cdn.shopify.com/videos`, carrée 1080×1080, rendus MP4 480p/720p/1080p + m3u8) vit dans `product.media` et était donc totalement ignorée. Ce n'était ni un bug Shopify ni un problème d'upload : la PDP sur-mesure n'affichait que les images.

### Comportement choisi (option validée par l'utilisateur)
- Image hero conservée en 1re position.
- Vidéo en 2e position, miniature avec pastille de lecture ▶.
- Lecture dans la zone principale au clic, **boucle, muette, playsinline**.
- Images et zoom lightbox existants inchangés.

### Modifications apportées à `shopify/sections/fraik-product.liquid`
1. CSS : styles de la miniature vidéo (`.thumb-video`, pastille `.thumb-play`).
2. Zone principale : élément `<video>` masqué (`loop muted playsinline preload="none"`, poster = preview), sources filtrées sur `video/mp4` (le m3u8 est ignoré car non lu nativement partout).
3. Miniatures : image hero (active) → vidéo (pastille ▶) → autres images (l'image hero n'est plus dupliquée dans la boucle).
4. JS : fonctions `fraikShowImage()` / `fraikShowVideo()` pour basculer image/vidéo dans la zone principale ; le clic sur l'image principale ouvre toujours le zoom lightbox.

### Vérifications avant push
- Diff `horizon-backup/sections/fraik-product.liquid` (89 901 o) vs fichier de travail (93 125 o) : **seuls 5 blocs modifiés, tous liés à la galerie vidéo**, aucune régression ailleurs.
- Présence confirmée de toutes les fonctionnalités des sessions précédentes : bundles Duo/Trio, avis clients (4,8/5, « 59 avis »), badges de paiement SVG, sélecteur de variante/couleur, prix barrés, comparatif, FAQ, sticky ATC.

### Procédure de déploiement suivie
1. Duplication du thème live `fraik V1` (#187779088764) → thème de test `fraik V1 — TEST vidéo galerie` (#187895906684, non publié).
2. Envoi du fichier sur le duplicata via staged upload (`stagedUploadsCreate` + `curl` + `themeFilesUpsert` type URL) — aucune recopie manuelle du fichier de 93 Ko.
3. Test sur mobile via URL de preview `?preview_theme_id=187895906684` : miniature vidéo, lightbox, sélecteur couleur, sticky ATC → validés.
4. Push en live par l'utilisateur via Shopify CLI :
   `shopify theme push --only sections/fraik-product.liquid --theme 187779088764 --store 17wkw9-2a.myshopify.com --allow-live` → succès.

### Décisions / garde-fous
- Aucune mutation API directe sur le thème publié (contrainte utilisateur) : le passage en live est passé exclusivement par la CLI.
- La suppression du thème de test via l'API est **bloquée par la politique de sécurité Shopify** (risque pour la boutique live) → à faire manuellement dans l'admin.

## Actions à faire plus tard

- [ ] Supprimer manuellement le thème de test `fraik V1 — TEST vidéo galerie` (#187895906684) dans l'admin Shopify.
- [ ] Décider du versionnage du projet `video/` (avec ou sans le rendu `.mp4` dans `out/`).
- [ ] Ajouter `.claude/settings.local.json` au `.gitignore` (config locale, non suivie).
- [ ] Éventuelle v2 vidéo si besoin d'une version longue (~20 s) : nécessiterait du ralenti (rushes insuffisants à vitesse réelle).
- [ ] Confirmer l'affichage de la vidéo sur `fraik.fr` en navigation privée (thème live).
