# Audit tunnel de paiement — Fraïk

**Date** : 2026-07-08
**Périmètre** : parcours d'achat complet sur `https://fraik.fr/products/fraik-ventilateur-3-en-1` — PDP → clic CTA → panier → checkout Shopify jusqu'à l'étape paiement.
**Aucune commande réelle n'a été passée. Aucune donnée bancaire n'a été saisie. Aucun fichier ni aucune donnée Shopify (produit, thème, réglages) n'a été modifié pendant cette session.**

## Contexte

Demande initiale : auditer le tunnel de paiement Fraïk comme un client mobile, pour détecter les frictions susceptibles de faire abandonner l'achat (bugs, lenteurs, frictions mobile, éléments peu clairs, coûts cachés, livraison, confiance, moyens de paiement, champs checkout, cohérence PDP/panier/checkout).

Contrainte de test : le redimensionnement de la fenêtre du navigateur en viewport mobile (390×844) n'a pas produit d'effet — la page est restée affichée en mise en page desktop malgré une confirmation technique du redimensionnement, et ce après deux tentatives. Décision prise avec l'utilisateur : poursuivre l'audit en résolution desktop plutôt que de continuer à insister, en signalant explicitement cette limite. Le test couvre donc la logique fonctionnelle du tunnel, mais pas les frictions strictement tactiles/visuelles mobiles (taille des zones cliquables, clavier virtuel, chevauchements d'éléments).

Parcours suivi :
1. Arrivée sur la PDP (résolution desktop, viewport mobile non simulable).
2. Clic sur le CTA principal ("Je veux sentir la fraîcheur → 44,90 €").
3. Observation du comportement panier.
4. Page panier (`/cart`).
5. Clic "Payer" → checkout Shopify natif.
6. Saisie de données de test manifestement fictives (email `test.audit@example.com`, nom "Test Audit", adresse "1 rue de Rivoli", 75001 Paris) pour atteindre l'étape mode d'expédition puis paiement.
7. Observation de la section paiement (moyens acceptés, champs affichés) **sans aucune saisie de numéro de carte, date d'expiration ou CVV, et sans clic sur le bouton de paiement final**.
8. En fin de session, à la demande de l'utilisateur : suppression de l'article du panier de test (`/cart`, icône corbeille) pour ne rien laisser en attente. Confirmation "Votre panier est vide" obtenue.

## Constats importants

- **Pas de mini-panier (drawer)** : le clic sur le CTA d'ajout au panier ne déclenche pas de panneau glissant, mais une redirection en pleine page vers `/cart`. Sur mobile, cela fait sortir le client du flux d'achat (rechargement complet, perte du contexte produit) au lieu d'un aperçu rapide type "produit ajouté, continuer ou payer".
- **Panier non vide au démarrage du test** : avant le premier clic de la session, l'icône panier affichait déjà "1" article. Après l'ajout, la quantité est passée à "2". Origine probable : persistance de cookie panier d'une session de navigation précédente dans le même navigateur — non confirmé comme un bug côté boutique, mais à vérifier si des liens publicitaires ou scripts ajoutent des articles au panier sans action explicite du client.
- **Autocomplétion code postal → ville non fonctionnelle au checkout** : la saisie de "75001" dans le champ Code postal n'a pas rempli automatiquement le champ Ville, qui a dû être renseigné manuellement. Sur mobile, chaque champ manuel supplémentaire augmente le risque d'abandon et d'erreur d'adresse de livraison.
- **Cohérence des moyens de paiement à vérifier** : la PDP affiche un badge Apple Pay parmi les moyens de paiement acceptés. Au checkout, le paiement express observé ne propose que Shop Pay et PayPal (Apple Pay ne s'affiche que sur Safari/iOS avec Apple Pay configuré côté appareil — comportement standard de Shopify, invisible depuis l'environnement de test utilisé). À reconfirmer depuis un véritable iPhone, une part probablement importante de l'avatar cible (femmes 25-45 ans, achats mobile) étant susceptible d'utiliser Safari/iOS.
- **Délai de livraison visible tardivement** : la PDP et le panier annoncent "Livraison offerte" / "livraison suivie" sans préciser de délai. Le délai précis ("Standard, 3 à 5 jours ouvrables") n'apparaît qu'à la dernière étape du checkout, une fois l'adresse renseignée.
- **Cohérence prix confirmée** : le prix réduit (44,90 € au lieu de 69,90 €, -35 %) et la livraison gratuite sont identiques et cohérents sur les trois étapes testées (PDP, panier, checkout) — aucune divergence de prix ni frais caché détecté sur ce parcours.
- **Aucune erreur technique visible** : le parcours PDP → panier → informations de livraison → mode d'expédition → formulaire de paiement s'est déroulé sans message d'erreur, sans blocage, avec des montants cohérents à chaque étape (89,80 € pour 2 unités = 2 × 44,90 €).
- **Rappel de conformité déjà documenté** : les mentions "Stock limité" / "Plus que quelques unités en stock", déjà signalées comme point de vigilance légale dans `docs/sessions/2026-07-08-audit-conformite-pdp.md`, réapparaissent au moment de l'ajout au panier, renforçant l'urgence perçue tout au long du tunnel et pas seulement sur la PDP.

## Problèmes identifiés

### Bloquants
Aucun identifié dans les limites du test effectué (résolution desktop, paiement non finalisé).

### Importants
1. Absence de mini-panier (drawer) — redirection pleine page vers `/cart`.
2. Autocomplétion code postal → ville non fonctionnelle au checkout.
3. Panier non vide au démarrage du test — origine à vérifier.
4. Incohérence potentielle du badge Apple Pay entre PDP et options réellement proposées au checkout (à reconfirmer sur iPhone réel).
5. Délai de livraison affiché seulement à la dernière étape du checkout, pas sur la PDP ni le panier.

### Améliorations bonus
- Ajouter un champ code promo visible et testé (accordéon "Réduction" présent sur `/cart` mais non testé, pour ne pas altérer le prix pendant l'audit).
- Vérifier que l'autocomplétion d'adresse (icône loupe sur le champ Adresse) fonctionne réellement — non confirmée pendant le test.
- Afficher le délai de livraison dès la fiche produit, pas seulement au paiement.

## Recommandations

- Activer un mini-panier (drawer) au lieu de la redirection pleine page vers `/cart`, pour garder le client dans le flux d'achat mobile.
- Réparer l'autocomplétion code postal → ville au checkout, pour réduire la friction de saisie et les erreurs de livraison.
- Refaire ce même audit sur un vrai smartphone (iPhone et Android), le test outillé n'ayant pas pu simuler un viewport mobile réel — c'est la limite la plus importante de cette session.
- Vérifier et, si besoin, corriger la cohérence des moyens de paiement affichés (Apple Pay) entre la PDP et ce qui s'affiche réellement au checkout mobile.
- Afficher le délai de livraison dès la PDP plutôt qu'au dernier moment du checkout.
- Traiter en parallèle les points de conformité déjà relevés le 8 juillet (avis clients, badge de stock) : ils réapparaissent dans ce tunnel d'achat et ne sont pas isolés à la PDP.

## Décisions prises

- Poursuite de l'audit en résolution desktop après échec du redimensionnement en viewport mobile, décision validée par l'utilisateur plutôt que d'insister sur un outil non fonctionnel dans cet environnement.
- Aucune commande réelle passée, aucune donnée bancaire saisie, conformément aux consignes de la demande initiale.
- Données de test (email, nom, adresse) volontairement fictives et explicites ("Test Audit", `test.audit@example.com`) pour ne pas introduire de fausses données personnelles réelles dans le checkout.
- À la demande de l'utilisateur, l'article de test a été retiré du panier en fin de session (`/cart` → suppression) pour ne rien laisser en attente.

## Actions à faire plus tard

- [ ] Remplacer la redirection panier par un mini-panier (drawer).
- [ ] Diagnostiquer et corriger l'autocomplétion code postal → ville au checkout.
- [ ] Investiguer l'origine de l'article résiduel trouvé dans le panier avant le début du test.
- [ ] Reconfirmer l'affichage réel d'Apple Pay au checkout depuis un iPhone/Safari.
- [ ] Afficher le délai de livraison ("3 à 5 jours ouvrables") dès la PDP et/ou le panier.
- [ ] Refaire l'audit complet du tunnel sur un vrai smartphone (iPhone + Android) pour couvrir les frictions tactiles/visuelles non testables depuis cet environnement.
- [ ] Tester le champ code promo au checkout.
- [ ] Vérifier le bon fonctionnement de l'autocomplétion d'adresse (Google Places ou équivalent).
