# Analyse Meta Ads + sessions Clarity du jour, AD01 coupée — Fraïk

**Date** : 2026-07-12
**Périmètre** : (1) analyse des stats individuelles par publicité de la campagne `FRAIK_TEST_META_100€_V1`, (2) désactivation d'AD01 après nettoyage d'un brouillon de modification non publiée, (3) revue de sessions Microsoft Clarity du jour (trafic Instagram), (4) découverte d'un panier abandonné et d'un pattern d'erreur JavaScript récurrent.
**Aucune modification de code effectuée.** Seule action réalisée sur un actif externe : désactivation d'AD01 dans Meta Ads Manager, avec accord explicite de Dylan.

## Partie 1 — Stats individuelles par publicité

Sur 30 jours (12 juin – 11 juil), 47,79 € dépensés au total sur la campagne (budget 15 €/j) :

| | AD02_STATIC_VENTILATEUR_CHAUD | AD01_VIDEO_V7_BRUME | AD03_STATIC_BRUME_FRAICHE - Copie |
|---|---|---|---|
| Statut avant | Active | Active | Désactivée (déjà) |
| Dépensé | 8,16 € | 24,90 € | 14,73 € |
| CPM | 9,77 € | 12,52 € | 22,56 € |
| CTR (lien) | 5,27 % | 2,61 % | 2,45 % |
| CPC | 0,17 € | 0,38 € | 0,82 € |
| Résultats (achat) | 0 | 0 | 0 |

AD02 nettement la plus efficiente ; AD01 absorbait plus de la moitié du budget pour une performance deux fois pire.

## Partie 2 — AD01 : brouillon suspect puis désactivation

En ouvrant AD01 pour vérifier une "modification non publiée" déjà repérée le 11/07, un badge **"Modifications non publiées"** était bien présent. En tentant de désactiver l'annonce, Meta a averti qu'un changement en attente sur le champ **Message** (texte principal) serait publié en même temps que le changement de statut — contenu et origine inconnus (potentiellement Codex ou Dylan).

Séquence suivie, avec accord explicite de Dylan à chaque étape :
1. Lecture du contenu du brouillon (texte cohérent avec le positionnement produit, rien d'alarmant), sans rien publier.
2. **Abandon du brouillon** ("Abandonner les brouillons") pour revenir à la version live sans l'embarquer dans un changement de statut.
3. **Désactivation propre d'AD01**, confirmée par le toast "Publicité mise à jour".

**État final** : AD02 seule active, AD01 et AD03 désactivées. Budget quotidien concentré sur la publicité la plus efficiente.

## Partie 3 — Sessions Clarity du jour (source Instagram, trafic payant)

~13 sessions Instagram aujourd'hui. Majorité de bounces (0-2 sec, 0 clic, ~5 % de scroll), cohérent avec le 0 achat Shopify confirmé.

Sessions notables passées en revue en detail :

- **18dfb5** (09:23, 5:47) : reste bloqué sur le hero/vidéo du haut de page, quasi inactif après quelques secondes (écart durée totale / temps actif marqué).
- **1f9wp1o** (12:50, 10 sec, 2 clics) : défilement rapide jusqu'au bloc prix/couleur/CTA, sélection du swatch BLANC, repart sans achat.
- **p1lobx** (12:49, 2 sec) : trop courte pour que Clarity génère un replay ou des insights ("cette session est trop courte pour générer des insights").
- **gvais0** (12:50, page `/cart`, 8 sec, 0 clic) : **panier abandonné** — produit (Ventilateur 3-en-1, BLANC, 44,90 €) déjà ajouté avant le début de l'enregistrement (ajout probable via un bouton d'achat rapide côté fiche produit). Arrivée sur `/cart`, chargement des boutons de paiement express (Payer / Shop Pay / Apple Pay), et départ sans aucun clic.
- **172uuvj** (15:09, 1:17, 1 clic) : clic sur les avis/étoiles à 00:07, page mise en arrière-plan à 01:12, puis **erreur JavaScript "undefined is not an object" à 01:17**.
- **1gcrs4b** (15:06, 2:36, 6 clics) : session la plus engagée du jour — change la couleur NOIR→BLANC, consulte avis et photos, **erreur JavaScript identique en fin de session (02:36)**.
- **14p6pbu** (15:09, 34 sec, 0 clic) : page mise en arrière-plan après 4 sec (changement d'onglet/appli probable), pas d'interaction.

## Constat principal

Le trafic payant Instagram engage peu dans l'ensemble, mais deux comportements positifs isolés existent (scroll rapide vers la conversion, vrai ajout panier) sans aboutir à un paiement. **Deux erreurs JavaScript identiques** ("undefined is not an object") sont apparues en fin des deux sessions les plus engagées de l'après-midi — pattern à vérifier côté code sur le site live, pas encore diagnostiqué (source exacte de l'erreur non identifiée à ce stade).

## Actions à faire plus tard

- [ ] Identifier la source de l'erreur JavaScript "undefined is not an object" sur fraik.fr (console navigateur sur le site live).
- [ ] Vérifier l'event `Purchase` dans Events Manager dès qu'une vraie commande passe.
- [ ] Surveiller CPM/fréquence d'AD02 maintenant seule à absorber le budget quotidien.
- [ ] Continuer à attendre le seuil de dépense/visites déjà fixé avant de rouvrir le sujet du prix à 39,99 €.
