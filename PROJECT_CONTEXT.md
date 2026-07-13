# Fraïk — Handoff Claude Code ↔ Codex

**Boutique :** <https://fraik.fr>
**PDP :** <https://fraik.fr/products/fraik-ventilateur-3-en-1>
**Thème live :** `fraik V1`, ID `187779088764`
**Dernière mise à jour :** 13 juillet 2026 (soir)

Ce fichier est volontairement court : un état courant + les tâches ouvertes + les garde-fous permanents. L'historique détaillé (QA, diffs, décisions datées) vit dans `docs/sessions/` — n'y aller que pour une session précise dont on a besoin, pas à chaque lecture.

## État actuel

- **Prix des bundles Duo/Trio mis à jour (13/07 soir) :** étaient codés en dur sur l'ancien prix `44,90 €` (barré `89,80 €`/`134,70 €`), stale depuis le passage à `39,99 €` — repéré par Dylan juste après la suppression du prix barré hero, même reproche "dropshipping". Le prix barré est désormais dynamique (`product.price × quantité`, ne se désynchronisera plus au prochain changement de prix). Prix de vente choisis par Dylan : **Duo 69,99 € (−12%)**, **Trio 99,99 € (−17%)**. Poussé en live, republié, vérifié en HTTP sans cookie, commité (`3168f78`).
- **Galerie synchronisée sur la couleur (13/07 soir) :** clic sur NOIR/BLANC dans le sélecteur ne changeait ni l'image ni la miniature (plusieurs clients avaient cliqué sans effet visible). `applyVariant()` dans `fraik-product.liquid` bascule maintenant l'image principale sur la photo assignée à la variante côté Shopify (les deux variantes en ont bien une, vérifié en GraphQL avant le fix) et resynchronise la miniature active si elle existe dans la galerie. Dupliqué le thème `fraik V4 TEST CRO` à partir d'un `theme pull` frais du live (les 2 modifs de copy hero du jour n'y étaient pas), validé par Dylan sur mobile, poussé en live + republié pour purger le cache, commité (`8fe690e`).
- **Prix barré `69,90 €` supprimé (13/07 soir) :** Dylan jugeait le prix barré "dropshipping". `compareAtPrice` retiré des deux variantes (BLANC/NOIR) via l'API Shopify — pas de changement de fichier, le Liquid masque déjà `.price-then`/`.price-save` quand `compare_at_price` est vide. Vérifié en live : le hero affiche `39,99 €` seul. **Point signalé, pas encore traité :** les bundles Duo/Trio plus bas sur la page ont encore un prix barré (`89,80 €` / `134,70 €`) codé en dur sur l'ancien prix `44,90 €` (×2 / ×3), donc stale depuis le passage à `39,99 €` — même repère "dropshipping" que Dylan pourrait vouloir corriger.
- **H1 hero renforcé (13/07 soir) :** Dylan jugeait le hero trop mou pour les départs rapides observés en Clarity. Nouveau H1 : « 15h, 34°C, pas de clim ? Fraïk te rafraîchit en moins de 10 secondes. » (remplace « Retrouve ton confort, même quand la chaleur devient difficile à supporter. »), sous-texte raccourci en conséquence. Poussé en live puis republié (`theme publish -f`) pour purger le cache de page, vérifié en HTTP sans cookie, commité (`b5509e4`). **Nuance signalée à Dylan :** les bounces Clarity du 12/07 étaient à 0-2 sec, plus rapides que le temps de lire un H1 — pointe plutôt vers un mismatch pub/landing ou un temps de chargement qu'un problème de force de copy ; à confirmer par le comportement futur, pas de certitude causale.
- **Tableau comparatif PDP retravaillé (13/07) :** dans `fraik-product.liquid`, section "Fraîk vs les alternatives" — libellé "Refroidissement réel de l'air" harmonisé desktop/mobile (différait avant), nouvelle ligne "Consommation électrique" (Fraîk ~5 W vs ventilateur ~40 W vs climatiseur 900–1500 W), prix indicatif du ventilateur classique corrigé `15 €` → `30 €` (jugé plus réaliste par Dylan), ligne Mobilité du ventilateur neutralisée (`✓ Léger` coloré → `Léger` neutre, seul avantage visuellement "vert" du ventilateur dans le tableau), `✓`/`✗` texte remplacés par des icônes SVG (`.ic-yes`/`.ic-no`) cohérentes avec le bandeau de confiance. Validé sur `fraik V4 TEST CRO` puis en live. **Piège rencontré au push live : le CLI `theme push --only` a bien mis à jour le fichier côté Shopify mais le cache de page du storefront (`page_cache:...` sur `/products/...`) a servi l'ancienne version plusieurs minutes après le push — un `shopify theme publish` (republier le thème déjà live) a été nécessaire pour purger le cache.** À refaire systématiquement après un push `--only` vers le thème live si une vérification HTTP sans cookie montre encore l'ancien contenu.
- **ATC → checkout direct (13/07) :** les 6 formulaires ATC de `fraik-product.liquid` (hero, sticky mobile, bundles solo/duo/trio, CTA bas de page) ont `return_to=/checkout` — l'ajout au panier saute désormais la page `/cart` et va droit au paiement. Motivé par une session Clarity du 12/07 montrant un panier abandonné (arrivée sur `/cart`, 0 clic, départ en 8 sec) ; le comportement précédent faisait un rechargement complet de page vers `/cart` (formulaires natifs sans interception JS, malgré `cart_type: drawer` dans les réglages). Testé sur le thème de test `fraik V4 TEST CRO` (187915075964, resynchronisé avec le live avant modif), validé par Dylan sur mobile, puis poussé en live et vérifié en HTTP sans cookie. Changement minimal (6 lignes ajoutées, rien d'autre touché). Un seul point de données Clarity — pas de certitude causale, à confirmer par le comportement futur du tunnel.
- **PDP :** version V4.2 live depuis le 11/07 18:53 CEST (vidéo en premier, hero condensé, preuve sociale premium, galerie tactile, ratio galerie mobile 1:1). Lien vers tous les avis + étoiles hero vertes ajoutés le 11/07 (nuit), commit `ca3bbb1`.
- **Meta Ads :** campagne `FRAIK_TEST_META_100€_V1`, budget 15 €/j, environ **60 € dépensés et 0 commande Shopify confirmée** (13/07). AD02 nettement la plus efficiente sur le relevé du 12/07 (CPM 9,77 €, CTR 5,27 %, CPC 0,17 €) — AD01 et AD03 sont désactivées ; **seule AD02 tourne**. Les ~60 € ont tous été dépensés avant le passage du prix Shopify à `39,99 €` et avant l'ATC → checkout direct : ils ne permettent donc pas de juger la version actuelle.
- **Sessions Clarity (12/07)** : trafic Instagram du jour majoritairement des bounces (0–2 sec, 0 clic), cohérent avec le 0 achat. Un **panier abandonné identifié** (produit ajouté, arrivée sur `/cart`, 0 clic, départ en 8 sec) et **deux erreurs JavaScript identiques** ("undefined is not an object") en fin des deux sessions les plus engagées de l'après-midi — source non encore diagnostiquée sur le site live. Détail complet : `docs/sessions/2026-07-12-ads-clarity-ad01-coupee.md`.
- **Tracking Meta :** connexion Shopify↔Meta officielle (canal Facebook & Instagram dans Shopify) toujours bloquée par le refus de vérification d'entreprise (ticket support `1744227466772293` en attente d'un retour humain) — **le contournement ne corrige pas ce statut dans Shopify, il reste affiché comme non connecté.** **Contournement pixel personnalisé confirmé fonctionnel le 12 juillet 2026** : `PageView` (21), `Vue du contenu`/ViewContent (10), `Ajout au panier`/AddToCart (1) et `Paiement initié`/InitiateCheckout (1) tous reçus et actifs dans Events Manager (dataset FRAÎK). Seul `Purchase` reste à vérifier — pas de commande réelle passée à ce jour. Le pixel n'affecte que les données envoyées à Meta ; rien ne change côté Shopify (analytics, commandes, canal Facebook & Instagram).
- **Bug JS header (`MissingRefError`) :** corrigé, commit `a95e4c7`.

## Tâches ouvertes

1. Vérifier que l'ensemble de pubs optimise bien sur le dataset FRAÎK et l'événement `Purchase` ; s'il affiche encore qu'aucun événement de conversion n'est configuré, couper avant toute dépense supplémentaire.
2. Laisser uniquement AD02 tester la version actuelle (prix `39,99 €` + ATC → checkout direct) pendant **15 € supplémentaires maximum**, sans autre modification de page ou de créa. À ce seuil : 0 ATC réel → couper ; ATC/checkout sans achat → auditer confiance et paiement ; achat → stabiliser AD02.
3. Vérifier `Purchase` dans Events Manager dès qu'une vraie commande passe (seul événement encore non testé) — <https://business.facebook.com/events_manager2/list/dataset/1542660693927295/overview>.
4. Identifier la source de l'erreur JavaScript "undefined is not an object" vue deux fois le 12/07 en fin de session (console navigateur sur fraik.fr).

## Décisions récentes

- **Prix / test en cours (13/07) :** le prix Shopify est désormais à `39,99 €` (et le comparatif PDP l'affiche dynamiquement). Le checkout direct est également live. Ne pas interpréter les ~60 € déjà dépensés comme le résultat de ce test : **0 € n'a encore été dépensé après ces deux changements**. Limiter l'évaluation initiale à 15 € supplémentaires sur AD02, sans changer d'autre variable. Coût DSers estimé au 12/07 pour la variante blanche vers la France : produit 11,30–12,03 € + livraison 1,99 $ ; retenir 15 € tout compris de façon prudente jusqu'à une première commande fournisseur réelle.
- **Avis (`4,8/5` / `59 avis vérifiés`), garanties 30j/15j/livraison suivie/support France, stock-badge (`fraik-stock-badge`) :** tranché par Dylan le 12/07 comme réglés — ne pas rouvrir sans qu'il le redemande. Le stock-badge en particulier : ne pas y toucher.

## Historique détaillé (`docs/sessions/`)

Ne lire que la session pertinente à la tâche en cours.

- `docs/fraik-lancement-meta-ads-8-juillet-2026.md`
- `docs/2026-07-11-fix-header-missingref.md`
- `docs/sessions/2026-07-08-audit-conformite-pdp.md`
- `docs/sessions/2026-07-08-audit-tunnel-paiement.md`
- `docs/sessions/2026-07-10-analyse-clarity-et-banniere-cookies.md`
- `docs/sessions/2026-07-10-video-produit-et-galerie-pdp.md`
- `docs/sessions/2026-07-11-diagnostic-tracking-meta-verification.md` — diagnostic complet du blocage Shopify↔Meta et de la vérification d'entreprise
- `docs/sessions/2026-07-11-brief-diagnostic-et-refonte-cro-v4.md` — brief d'origine (diagnostic PDP + plan de refonte V4), en grande partie exécuté depuis
- `docs/sessions/2026-07-11-refonte-v4-mobile-et-publication.md` — construction et publication live de la V4.1/V4.2
- `docs/sessions/2026-07-11-infra-multiagents-swipe-galerie-fix-ratio.md` — infra git/gh multi-agents, swipe tactile galerie, fix ratio mobile
- `docs/sessions/2026-07-11-analyse-meta-ads-et-pixel-personnalise.md` — analyse Meta Ads (0 vente) + mise en place du pixel personnalisé
- `docs/sessions/2026-07-12-ads-clarity-ad01-coupee.md` — stats par publicité, AD01 désactivée, sessions Clarity du jour (panier abandonné, erreurs JS)

## Garde-fous permanents

### Meta / Shopify

- Ne supprimer ni Fraïk France, ni dataset, ni compte publicitaire.
- Ne créer aucun nouveau Pixel/dataset sans audit des IDs.
- Ne reconnecter aucun actif au hasard.
- Ne pas tenir le délai de 7 jours pour certain.
- IDs de référence : Page Fraïk France `1249220974937350` · Portefeuille `2155905972473589` · Dataset/Pixel FRAÎK `1542660693927295` · Compte pub FRAIK `1321307250160947`. Ne jamais supposer un autre ID correct sans vérification directe dans Meta.

### Code

- Travailler sur copie/prévisualisation pour tout changement structurel ou à risque.
- Montrer les diffs risqués avant de les appliquer.
- Changements minimaux et réversibles.
- Toute décision validée ou modification doit être consignée dans ce handoff et commitée localement. **Demander l'accord explicite de Dylan avant chaque push GitHub**, y compris pour une mise à jour documentaire.
- Ne pas écraser le travail de Claude ou d'un autre terminal — vérifier `git status` avant toute tâche à risque.
- Ne pas publier sans QA et test d'achat complet.
- Ne pas remodifier `aspect-ratio` de `.gallery-main` sans revérifier les dimensions réelles des médias (vidéo 1080×1080, images 1254×1254 — carré).

### Marketing et conformité

- Aucun faux avis, faux client, faux résultat ou fausse photo.
- Aucune fausse urgence ou promotion permanente trompeuse.
- Aucune promesse de climatisation ou médicale.
- Ne pas revendiquer support/expédition française sans preuve.
- Garantie et retours réellement honorables.
- Représentation honnête de la taille et des capacités.

### Analyse

- Distinguer clic lien, clic sortant, session et landing-page view.
- Vérifier plage de dates et fuseau.
- Signaler les petits échantillons.
- Ne pas attribuer causalement un résultat si plusieurs variables changent.
- Tant que le tracking Meta n'est pas fiable, juger la rentabilité sur les commandes Shopify réelles (`list-orders`), pas sur les métriques Ads Manager.

## Définition de réussite (V4)

- Moins de départs immédiats, plus de temps engagé, plus de scroll et d'interactions vidéo/galerie, clics CTA, premiers ajouts au panier, initiations de checkout, idéalement premiers achats avec une économie viable.
- Premier jalon indispensable : un signal d'intention réel (au minimum un ajout au panier) sans dégrader confiance, marge ou conformité. **Non atteint à ce jour** (0 commande Shopify).
