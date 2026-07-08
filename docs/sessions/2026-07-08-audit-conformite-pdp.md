# Audit conversion & conformité — Page produit Fraïk

**Date** : 2026-07-08
**Périmètre** : fiche produit unique `https://fraik.fr/products/fraik-ventilateur-3-en-1`
**Aucun fichier de la boutique n'a été modifié pendant cette session.**

## Contexte

Demande initiale : audit conversion (CRO) de la PDP Fraïk, orienté mobile-first, avec analyse comparative de 10 boutiques concurrentes dans le monde. La session s'est ensuite étendue en plusieurs temps :
1. Audit heuristique de la PDP (mobile, via navigateur).
2. Benchmark concurrentiel (Evapolar, ChillWell, Shark ChillPill, Cool-Off, Opolar).
3. Auto-critique demandée par l'utilisateur (biais méthodologiques, angles morts).
4. Vérifications factuelles (vitesse de chargement réelle, historique de prix via Wayback Machine, recherche de concurrents francophones réels).
5. Récupération du code réel de la boutique via l'API Admin Shopify (connexion MCP déjà active sur FRAIK/fraik.fr), rapatrié dans `shopify/`.
6. Vérification de conformité dans le code source réel (avis, urgence stock, prix barré).

## Constats importants

- La PDP est un **fichier unique et massif** : `shopify/sections/fraik-product.liquid` (~90 Ko, thème Horizon), contenant tout le hero, les bénéfices, le mécanisme produit, la preuve avant/après, les avis, les bundles, le comparatif et la FAQ. Aucune séparation contenu/code : éditer le texte signifie éditer ce fichier Liquid directement.
- La page d'accueil (`/`) redirige automatiquement en JavaScript vers la fiche produit (`layout/theme.liquid`) — confirmation que Fraïk est une boutique mono-produit.
- Aucun système de traduction Shopify n'est utilisé (0 occurrence de `| t }}`) : tout le texte français est écrit en dur dans le Liquid.
- **Les 59 avis clients (notes, photos, noms, villes, textes) sont intégralement codés en dur dans le HTML**, sans app de reviews, metafield ni boucle Liquid. Le bouton "Voir plus d'avis (47)" ne fait qu'afficher/masquer un bloc HTML déjà présent (`fraikToggleReviews()`), aucun appel à une source de données.
- Le badge **"Plus que quelques unités en stock"** et le bandeau **"STOCK LIMITÉ"** sont du texte statique, sans lien avec `product.available` ni l'inventaire réel de la variante.
- Le **prix barré (−35 %, 69,90 €)** est en revanche calculé dynamiquement depuis `compare_at_price` de la variante Shopify — mécanisme technique propre, mais la donnée source (69,90 €) est saisie manuellement dans l'admin et sa légitimité (prix réellement pratiqué dans les 30 derniers jours) n'a pas pu être vérifiée en externe (aucun snapshot Wayback Machine disponible pour cette page).
- Mesure réelle (navigateur, cache partiellement chaud) : TTFB 92 ms, DOMContentLoaded 669 ms, load 978 ms — corrects dans l'absolu, mais **271 requêtes réseau dont 118 fichiers JavaScript** pour une seule PDP, signe probable d'un empilement d'apps Shopify. Aucune mesure fiable de LCP/CLS obtenue (quota API PageSpeed Insights épuisé).
- Le comparatif concurrentiel initial (Evapolar, ChillWell, Shark, Cool-Off, Opolar) a été fait via extraction de texte (WebFetch, sans exécution JS) — moins rigoureux que l'audit visuel fait sur Fraïk, donc les constats "aucun concurrent n'a de vidéo" sont à prendre comme indicatifs, pas certains.
- Les vrais concurrents pertinents pour l'acheteur français ne sont pas les marques US premium (Shark, Evapolar, 100-400 €) mais des produits à 6-15 € en grande surface (Action, Gifi, Lidl, Monoprix), très commentés sur TikTok France — objection prix bien plus probable que face à des marques premium.

## Risques identifiés

- **Risque légal élevé — avis clients** : la mention "Avis vérifiés" associée à des avis 100 % codés en dur, sans mécanisme de vérification ni lien à une commande réelle, est potentiellement non conforme au décret n°2022-1099 (transposition directive Omnibus) et constitutive d'une pratique commerciale trompeuse (Code de la consommation, art. L121-2/L132-2).
- **Risque légal élevé — fausse urgence** : le badge de stock et le bandeau "STOCK LIMITÉ" s'affichent inconditionnellement, indépendamment du stock réel — pratique commerciale trompeuse si le stock réel est confortable.
- **Risque légal moyen, à vérifier — prix de référence** : impossible de confirmer depuis l'extérieur que 69,90 € a été un prix réellement pratiqué dans les 30 derniers jours (directive Omnibus). Dépend d'une donnée que seul le marchand peut vérifier (historique de prix dans l'admin Shopify).
- **Risque de confiance — absence de fiche technique** (dimensions, poids, autonomie, niveau sonore en dB) alors qu'un avis visible sur la page contredit le bénéfice "silencieux".
- **Risque de performance** : nombre de requêtes JS anormalement élevé (118) pour une PDP, à investiguer (apps installées).
- **Angle mort méthodologique reconnu** : les estimations chiffrées d'impact CRO données en première partie de session (+3-8 %, +10-20 %, etc.) sont des ordres de grandeur génériques du secteur, non calculés à partir de données réelles de Fraïk (aucun accès Analytics/GA4 pendant cette session).

## Recommandations

- Avis : soit installer une vraie app d'avis vérifiés connectée aux commandes, soit retirer le mot "vérifiés" et/ou préciser la méthode de collecte si les avis sont authentiques mais saisis à la main.
- Badge de stock / bandeau urgence : les rendre dynamiques (liés à l'inventaire réel) ou les supprimer.
- Vérifier dans l'admin Shopify l'historique réel du prix à 69,90 € avant de conserver l'affichage "−35 %".
- Ajouter une fiche technique visible (dimensions, poids, autonomie, dB) pour combler l'écart entre le bénéfice "silencieux" et l'avis client qui le contredit.
- Auditer les apps Shopify installées pour réduire les 118 requêtes JS et mesurer le vrai LCP/CLS mobile (via pagespeed.web.dev).
- Avant toute nouvelle recommandation CRO chiffrée : brancher Shopify Analytics/GA4 pour prioriser sur des données réelles plutôt que des heuristiques.

## Décisions prises

- Aucune modification de code ou de contenu n'a été appliquée sur la boutique ni sur le thème pendant cette session — audit et lecture seule à chaque étape.
- Rapatriement sélectif (pas exhaustif) du thème dans `shopify/` : uniquement les fichiers propres à Fraïk (`sections/fraik-product.liquid`, `templates/product.fraik.json`, `config/settings_data.json`, `layout/theme.liquid`), en excluant volontairement les ~250 fichiers vendeur du thème Horizon (blocks, snippets, assets, locales non pertinentes) jugés non utiles au travail sur la PDP.
- Priorité de traitement fixée : corriger les points de conformité légale (avis, urgence, prix) avant toute optimisation cosmétique ou nouvelle fonctionnalité CRO.

## Actions à faire plus tard

- [ ] Décider du sort des avis clients (vraie app vs. retrait du mot "vérifiés" vs. mention de la méthode de collecte).
- [ ] Décider du sort du badge de stock et du bandeau "STOCK LIMITÉ" (dynamique ou suppression).
- [ ] Vérifier l'historique de prix réel dans l'admin Shopify (69,90 € légitime ou non).
- [ ] Lancer un test PageSpeed Insights manuel (pagespeed.web.dev) pour obtenir LCP/CLS/INP réels.
- [ ] Lister les apps Shopify installées et évaluer lesquelles sont dispensables (118 requêtes JS).
- [ ] Partager un export Shopify Analytics / GA4 pour prioriser objectivement les prochaines actions CRO.
- [ ] Rédiger la fiche technique produit (dimensions, poids, autonomie, niveau sonore).
- [ ] Si besoin d'auditer d'autres parties du site (panier, header, footer) : rapatrier les fichiers correspondants du thème à la demande.
