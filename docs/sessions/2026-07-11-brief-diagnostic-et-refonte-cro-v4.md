# Brief diagnostic complet + refonte CRO V4 envisagée — Fraïk

**Date** : 2026-07-11
**Contexte** : brief de reprise rédigé pour Codex avant l'exécution de la refonte V4.1/V4.2 (voir `2026-07-11-refonte-v4-mobile-et-publication.md` pour ce qui a réellement été construit et publié). Ce document est le plan d'origine, en grande partie exécuté depuis — le garder comme référence de raisonnement, pas comme état courant.

## 1. Résumé exécutif (au moment du brief)

La seule campagne Meta Ads du test avait dépensé environ 40 € à ce stade, sans achat et sans ajout au panier. Les publicités généraient pourtant de vrais clics et les visiteurs arrivaient réellement sur Shopify : Clarity retrouvait environ 9 sessions Instagram pour 11 clics Meta sur la période analysée.

Le problème dominant identifié était la première impression de la PDP. Les visiteurs observés restaient environ 5 secondes actives, ne scrollaient qu'environ 9 %, consultaient une seule page et quittaient généralement sans interaction. Une ou deux sessions seulement avaient atteint les avis. Le prix était visible très tôt via le CTA flottant : il pouvait participer au rejet, mais une baisse isolée risquait de réduire la marge sans résoudre le déficit de valeur perçue, de preuve et de confiance.

En parallèle, Shopify n'était pas correctement connecté à Meta (voir `2026-07-11-diagnostic-tracking-meta-verification.md` pour le diagnostic approfondi de ce blocage, toujours d'actualité).

La direction validée était une V4 mobile-first augmentant fortement le désir et la confiance dans les cinq premières secondes : démonstration vidéo immédiate, promesse unique, preuve authentique, réassurance compacte et comparaison visuelle honnête.

## 2. Faits établis et hypothèses (au moment du brief)

### Faits établis ou fortement corroborés

- Une seule campagne Meta utilisée, dépense cumulée environ 40 €.
- Résultats : 0 achat, 0 ajout au panier.
- Les clics publicitaires et les arrivées sur la boutique étaient réels, URLs correctes.
- Shopify/Clarity pouvaient enregistrer des visites même sans Pixel Meta.
- La plupart des visiteurs quittaient avant d'explorer la page.
- Le tracking Meta des événements de conversion ne fonctionnait pas.

### Hypothèse centrale

Chemin probable : pub intrigante → arrivée sur la PDP → perception d'un petit appareil générique → prix visible → doute sur l'efficacité et la valeur → départ.

Chemin recherché : pub intrigante → preuve visuelle immédiate → bénéfice compris et désiré → produit perçu comme une vraie solution de confort → confiance → achat.

## 3. Meta Ads (métriques à la date du brief, désormais obsolètes)

| Publicité | Dépensé | CTR lien | CPC lien | CPM | Clics | Décision |
|---|---:|---:|---:|---:|---:|---|
| `AD02_STATIC_VENTILATEUR_CHAUD` | 7,95 € | 5,30 % | 0,18 € | 9,58 € | 44 | Conserver — meilleure créa |
| `AD01_VIDEO_V7_BRUME` | 16,51 € | 2,52 % | 0,52 € | 13,01 € | 32 | Conserver provisoirement |
| `AD03_STATIC_BRUME_FRAICHE` | 13,44 € | 2,45 % | 0,90 € | 22,00 € | 15 | Couper — plus faible |

Métriques à jour (lifetime, 47,69 € dépensés) dans `2026-07-11-analyse-meta-ads-et-pixel-personnalise.md`.

### Limite majeure

La campagne avait l'objectif Achats, mais Meta ne recevait vraisemblablement aucun `PageView`, `ViewContent`, `AddToCart`, `InitiateCheckout` ou `Purchase`. Toujours vrai à ce jour.

## 4. Clarity : comportement utilisateur (au moment du brief)

- environ 9 sessions Instagram rapprochées de 11 clics Meta ;
- environ 5 secondes d'engagement actif ;
- environ 9 % de scroll ;
- environ 1 page par session ;
- quasi-absence d'interaction ;
- seulement une ou deux sessions descendues jusqu'aux avis ;
- aucun ajout au panier.

Shopify semblait classer une partie du trafic Instagram comme Direct, probablement à cause du navigateur intégré ou de l'attribution.

## 5. Bug JavaScript du header — mission donnée à Claude

Erreur observée : `MissingRefError: Required ref "headerDrawerContainer" not found in component header-component`. Effets : erreur au chargement desktop/mobile, icône panier non fonctionnelle, l'ajout au panier fonctionnait mais rechargeait `/cart` au lieu d'ouvrir le tiroir.

**Statut : corrigé.** Voir commit `a95e4c7` ("Fix: MissingRefError header.js — retire les refs menu/drawer inexistants").

## 6. Diagnostic PDP et principe directeur

La page était propre et cohérente, mais donnait davantage l'impression d'un « bon petit produit » que d'une solution premium et désirable. Principe approuvé : chaque élément doit augmenter le désir ou la confiance ; sinon il est supprimé, condensé ou retravaillé.

## 7. Refonte CRO V4 envisagée (plan d'origine)

### Vidéo en premier

Storyboard : brume visible dès la première seconde → personne ressentant le soulagement → eau/glaçons → produit en situation réelle → plan final propre et premium. **Exécuté** (voir refonte V4.1/V4.2).

### Promesse unique

Direction retenue : « Retrouve ton confort, même quand la chaleur devient difficile à supporter. » **Exécutée en V4.2.**

### Réassurance sous le CTA

Ligne compacte type « Garantie 30 jours · Livraison suivie · Paiement sécurisé », uniquement si chaque promesse est vraie. Retenu : « Décide sans pression » + rappel 15 jours.

### Preuve sociale immédiate

Remonter trois avis courts et authentiques avec photo/contexte réel, sans jamais inventer avis, note ou volume. **Exécuté en V4.2** (carrousel Céline N., Léa S., Vincent L.).

### Comparaison visuelle

| Ventilateur classique | Fraïk |
|---|---|
| Brasse l'air ambiant | Diffuse une fine brume ciblée |
| Flux d'air seul | Eau + brume + ventilation |
| Soulagement parfois limité | Sensation directement sur la peau |

Non vérifié si exécuté sur le live actuel — à recontrôler si besoin.

### Bundles

Trois choix maximum, économies exactes, une option recommandée, design aéré. Prix pistes (39,90 €/69,90 €/94,90 €) à recalculer avec la marge réelle avant tout test — **statut non vérifié, ne pas supposer que c'est fait.**

### Urgence

Uniquement si vraie (« Forte demande pendant les épisodes de chaleur »), jamais de faux compteur/stock/date limite. **Point d'attention** : le live affiche actuellement « Plus que quelques unités en stock suite à la vague de chaleur » — cette causalité reste une hypothèse marketing non vérifiée (voir garde-fous dans `PROJECT_CONTEXT.md`).

## 8. Prix et protocole de test

Ne pas faire de baisse sèche non mesurée ; améliorer d'abord preuve/confiance/valeur perçue ; calculer la marge réelle ; tester ensuite un prix ou une offre distincte si nécessaire. Ne pas changer simultanément hero, prix, bundles, créas et ciblage.

## 9. Questions ouvertes à la date du brief (à revérifier, plusieurs sont probablement résolues depuis)

1. Correctif header appliqué ? → Oui, commit `a95e4c7`.
2. AD03 coupée ? → Oui, 11/07 18:05 CEST.
3. IDs exacts compte pub/Page/dataset ? → Voir `2026-07-11-diagnostic-tracking-meta-verification.md`.
4. Dataset sélectionné dans l'ensemble de publicités ? → Non, aucun événement de conversion configuré (même doc).
5. Coût rendu/TVA/livraison/marge/seuil de rentabilité ? → Non recalculé à ce jour.
6. `4,8/5` et `59 avis` authentiques ? → Non vérifié, toujours une question ouverte.
7. Garantie 30j/livraison suivie/support France assurés ? → Non revérifié.
8. Vidéo conforme au storyboard ? → Oui, en place en V4.2.
9. Budget restant et seuil de jugement V4 ? → Non défini formellement.
10. Maquettes HTML V2/V3 ? → Non retrouvées à ce jour.

## 10. Définition de réussite (toujours valable)

La V4 doit améliorer plusieurs signaux mesurables : moins de départs immédiats, plus de temps engagé, plus de scroll et d'interactions vidéo/galerie, clics CTA, premiers ajouts au panier, initiations de checkout, idéalement premiers achats avec une économie viable. Le premier jalon indispensable reste d'obtenir un signal d'intention réel — au minimum des ajouts au panier — sans dégrader confiance, marge ou conformité. **Non atteint à ce jour : 0 commande Shopify malgré ~48 € dépensés** (voir `2026-07-11-analyse-meta-ads-et-pixel-personnalise.md`).
