# Fraïk — Handoff Claude Code ↔ Codex

**Boutique :** <https://fraik.fr>
**PDP :** <https://fraik.fr/products/fraik-ventilateur-3-en-1>
**Thème live :** `fraik V1`, ID `187779088764`
**Dernière mise à jour :** 12 juillet 2026

Ce fichier est volontairement court : un état courant + les tâches ouvertes + les garde-fous permanents. L'historique détaillé (QA, diffs, décisions datées) vit dans `docs/sessions/` — n'y aller que pour une session précise dont on a besoin, pas à chaque lecture.

## État actuel

- **PDP :** version V4.2 live depuis le 11/07 18:53 CEST (vidéo en premier, hero condensé, preuve sociale premium, galerie tactile, ratio galerie mobile 1:1). Lien vers tous les avis + étoiles hero vertes ajoutés le 11/07 (nuit), commit `ca3bbb1`.
- **Meta Ads :** campagne `FRAIK_TEST_META_100€_V1` active, budget 15 €/j. **47,69 € dépensés, 0 commande Shopify confirmée à ce jour.** AD02 nettement la plus efficiente (CPC 0,19 €, CTR 5,27 %) ; AD01 a une modification non publiée en attente (à vérifier) ; AD03 désactivée depuis le 11/07 18:05 CEST.
- **Tracking Meta :** connexion Shopify↔Meta toujours bloquée par le refus de vérification d'entreprise (ticket support `1744227466772293` en attente d'un retour humain). **Contournement confirmé fonctionnel le 12 juillet 2026 (~00:15 CEST)** : le pixel personnalisé Shopify (`fetch()` vers `facebook.com/tr`) envoie bien des événements au dataset FRAÎK — `PageView` (13 reçus) et `Vue du contenu`/ViewContent (9 reçus) visibles et actifs dans Events Manager. `AddToCart`/`InitiateCheckout`/`Purchase` pas encore vérifiés individuellement mais le mécanisme est validé.
- **Bug JS header (`MissingRefError`) :** corrigé, commit `a95e4c7`.

## Tâches ouvertes

1. Vérifier dans Events Manager que `AddToCart`, `InitiateCheckout` et `Purchase` remontent aussi (seuls PageView/ViewContent sont confirmés à ce stade) — <https://business.facebook.com/events_manager2/list/dataset/1542660693927295/overview>.
2. Authentifier ou retirer les mentions `4,8/5` / `59 avis vérifiés` si non vérifiables.
3. Vérifier que garantie 30j/15j, livraison suivie et support France sont réellement assurés avant de les laisser en avant.
4. Recalculer marge/TVA/livraison/frais/seuil de rentabilité avant tout test de prix ou de bundle.
5. Confirmer que la causalité stock limité ↔ vague de chaleur (`fraik-stock-badge`) est réelle avant de la laisser en live.

## Décisions récentes

- **Prix :** conserver `44,90 €` pour l'instant. Attendre au moins 15–20 € de dépenses supplémentaires avec le tracking actuel, ou 100 visites qualifiées, avant de tester `39,99 €`. Décision selon le tunnel : 0 ajout panier → ne pas attribuer le problème au prix ; ajouts panier sans checkout → auditer panier/confiance ; checkouts sans achat → `39,99 €` devient un test pertinent. Coût DSers estimé au 12/07 pour la variante blanche vers la France : produit 11,30–12,03 € + livraison 1,99 $ ; retenir 15 € tout compris de façon prudente jusqu'à une première commande fournisseur réelle.

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
