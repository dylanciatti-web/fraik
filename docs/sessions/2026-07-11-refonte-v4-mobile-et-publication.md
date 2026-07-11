# Refonte V4.1/V4.2 mobile + publication live — Fraïk

**Date** : 2026-07-11

## Mise à jour Codex (avant exécution)

- **Préférence de collaboration de Dylan :** au début de chaque tâche substantielle, indiquer si le modèle sélectionné et l'intensité de réflexion conviennent ; recommander explicitement le niveau à choisir avant les travaux importants.
- **Décision recommandée :** couper AD03 (moins efficiente sur l'export du moment), conserver AD01/AD02 sans modifier simultanément budget, ciblage ou créas.
- **Changement Meta confirmé :** `AD03_STATIC_BRUME_FRAICHE` désactivée le 11 juillet 2026 à 18:05 CEST (UTC+2).
- **Visualisation CRO créée :** maquette mobile `fraik-v4-premium.html` (hero vidéo, promesse unique, prix 44,90 €, bénéfices, réassurance, comparatif, emplacements d'avis).
- **Comparaison live vs maquette (mobile 390 × 844) :** le visuel principal live jugé plus émotionnel que le placeholder vidéo de la maquette, mais header/bandeau/badge/média carré/miniatures repoussaient prix et CTA hors du premier écran ; promesse répétée deux fois.
- **Décision de direction :** ne pas remplacer l'identité visuelle live par la maquette telle quelle. Conserver le meilleur média émotionnel, appliquer la hiérarchie V4 (header condensé, vidéo/démonstration en premier, promesse non répétée, bénéfice court, prix/CTA remontés, réassurance compacte).
- **Points de conformité identifiés à résoudre avant publication :** `4,8/5 · 59 avis vérifiés`, `Plus que quelques unités en stock`, `LE PLUS POPULAIRE`, `Toute la maison au frais`, retour gratuit, promesses France — à conserver uniquement si exactes et justifiables. Fausse rareté à retirer si non justifiée.

## V4.1 CRO sur thème de test

- **Thème de test créé :** `fraik V4 TEST CRO`, ID `187915075964`, rôle unpublished, dupliqué depuis le live `187779088764`.
- **Isolation confirmée :** thème live non ciblé ; fichier actif local non modifié (hash SHA-256 `06d2a7140e751926c45bbe6db07ea1e9b37300cdf742e8ce46a2dc6b5055e0bd` avant travaux).
- **Fichier poussé :** uniquement `sections/fraik-product.liquid`, vers le thème test.
- **Changements réalisés sur le test :** hero mobile compact, galerie en ratio 3:2 sur mobile (⚠️ régression corrigée plus tard, voir doc infra multi-agents), miniatures horizontales compactes, avis remontés avant le titre, nouvelle promesse orientée bénéfice, sous-titre axé visage/nuque, garantie 15 jours renforcée sous le CTA, six bénéfices hero condensés en trois, ordre mobile réorganisé, correction du sticky ATC (apparition si <50 % du CTA principal visible).
- **Avis et mentions conservés tels quels** (aucun nouveau témoignage inventé) : `4,8/5`, `59 avis vérifiés`, mentions françaises, stock, badges, bundles, textes d'avis existants.
- **Ordre mobile appliqué :** hero → pourquoi ça marche → bénéfices → avis → comparatif → avant/après → utilisation → garanties → bundles → FAQ → entretien → CTA final.
- **QA mobile 390 × 844 :** largeur document = viewport, média 354 × 236 px, prix visible avant bas du premier écran, sticky CTA visible 772–844 px, aucune erreur console.
- **QA fonctionnelle :** vidéo galerie muette après sélection, variante NOIR sélectionnée correctement, bloc avis déplié correctement.
- **QA desktop 1440 × 900 :** aucun débordement horizontal, hero deux colonnes, CTA visible, sticky mobile masqué, aucune erreur console.
- **Limites :** aucun ATC/panier/checkout réel déclenché pendant cette QA. `shopify theme check` : mêmes dettes historiques (dimensions images, structure partielle), rien de spécifique à la V4.
- **Régression live :** aucune, ads pointaient toujours vers le thème live inchangé.

## V4.2 premium et preuve sociale

- **Thème concerné :** uniquement `fraik V4 TEST CRO` (`187915075964`) à ce stade.
- **Objectif :** saut de valeur perçue plus marqué, centré confort/qualité perçue/preuve client/réduction du risque.
- **Hero :** nouvelle promesse `Retrouve ton confort, même quand la chaleur devient difficile à supporter.` Sous-titre précisant brume + flux d'air ciblés visage/nuque.
- **Garantie :** reformulée `Décide sans pression` + rappel 15 jours. Bénéfices détaillés en doublon retirés du hero.
- **Preuve sociale premium :** carrousel bleu nuit ajouté juste après le hero, trois avis existants avec photos existantes (Céline N., Léa S., Vincent L.), aucun avis/média inventé. Boutons précédent/suivant, 3 points, rotation auto 4,8s, pause au survol/focus, arrêt onglet masqué, `prefers-reduced-motion` respecté.
- **Trust haut de page :** grille `4,8 sur 5 / 59 avis vérifiés`, `15 jours / pour changer d'avis`, `3 à 5 jours / livraison suivie`.
- **Stock :** mentions passées à `Plus que quelques unités en stock suite à la vague de chaleur` sur demande de Dylan. **Causalité non vérifiée — ne pas publier tel quel si le stock limité ne vient pas réellement de la vague de chaleur.**
- **QA carrousel/mobile/desktop :** 3 slides/3 points fonctionnels, sélection directe confirmée, rotation auto confirmée, aucun débordement horizontal, sticky CTA visible, aucune erreur console (mobile 390×844 et desktop 1440×900).
- **Limite QA :** aucun ATC/panier/checkout/achat réel déclenché.

## Galerie vidéo en premier

- **Demande :** aucun changement de contenu/structure sauf mettre la vidéo produit en premier dans la galerie, sur le thème test uniquement.
- **Réalisé :** vidéo en média principal au chargement, lecture auto muette, première miniature active ; l'image produit principale devient la seconde miniature.
- **QA mobile 390 × 844 :** vidéo visible et non en pause, `autoplay=true`/`muted=true`, image principale masquée, une seule miniature active correspondant à la vidéo, aucun débordement horizontal, aucune erreur console.

## Publication live V4.2

- **Publication confirmée par Dylan** après validation manuelle de la prévisualisation.
- **Heure de publication :** 18:53 CEST (UTC+2), le 11 juillet 2026.
- **Commande exécutée :** `shopify theme push --only sections/fraik-product.liquid --theme 187779088764 --store 17wkw9-2a.myshopify.com --allow-live`.
- **Résultat :** push réussi vers `fraik V1` (#187779088764), seul `sections/fraik-product.liquid` envoyé.
- **Intégrité avant push :** fichier actif local rendu identique octet pour octet au fichier du thème test validé (hash SHA-256 commun `aeb82f19dc4dc6a5d2ea9bb1ef2b7fafe662c3c1891ae27a8ddeb9bb1bf3aa4a`).
- **Vérification réelle sur le live (390 × 844) :** vidéo en premier autoplay/muette/lecture, image principale masquée au chargement, première miniature `thumb-video active`, carrousel premium présent (3 slides/3 points), sticky CTA visible, largeur document = viewport, aucune erreur console.
- **Régression live constatée :** aucune dans cette vérification ciblée. Aucun ATC/panier/checkout/achat réel déclenché pendant le contrôle post-publication.

## Phase de mesure après publication

- **Décision :** attendre et analyser avant toute nouvelle modification de page, budget, ciblage ou créa.
- **Variables gelées à ce moment :** page V4.2 live, AD01 et AD02, budget et ciblage. AD03 désactivée depuis 18:05 CEST.
- **Signaux à suivre :** sessions/source, temps engagé, scroll, clics CTA, clics sticky, ATC, checkout initié, achats, erreurs console.
- **Priorité d'interprétation :** obtenir d'abord un signal d'intention (idéalement un premier ATC) avant de conclure sur prix/qualité du trafic.
- **Résultat constaté plus tard dans la nuit (voir `2026-07-11-analyse-meta-ads-et-pixel-personnalise.md`) :** toujours 0 commande Shopify après ~48 € dépensés au total.

## Tâches identifiées ce jour-là — statut

- ~~Ajouter un bouton/lien « Afficher tous les avis » dans la section d'avis premium, vers `#fraik-reviews`.~~ **Fait le 11 juillet 2026 (nuit) par Claude Code**, voir commit `ca3bbb1`.
- ~~Passer les étoiles de la ligne d'avis du hero en vert, cohérent avec la section avis.~~ **Fait le 11 juillet 2026 (nuit) par Claude Code**, même commit `ca3bbb1`.
- ~~Corriger le carrousel média : ratio laissant des espaces sur les côtés.~~ **Fait le 11 juillet 2026 (soir)**, voir doc infra multi-agents.
