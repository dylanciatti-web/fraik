# Analyse CRO — Enregistrements Microsoft Clarity
Fiche produit analysée : `fraik.fr/products/fraik-ventilateur-3-en-1`
Source vidéo : `Enregistrement de l'écran 2026-07-10 à 21.21.37.mov` (durée 5 min 19 s, 2430×1524, ~52 fps)

Ce rapport décrit uniquement les faits observables dans la vidéo (captures d'écran de sessions Clarity rejouées dans le dashboard). Aucune interprétation marketing n'est faite ; les constats d'ambiguïté ou de limite de mesure sont signalés explicitement.

---

## Méthodologie et limites (faits techniques)

- La vidéo montre l'utilisateur du dashboard (Dylan) en train de parcourir la liste **"Derniers 3 jours"** de Microsoft Clarity, qui contient **28 résultats** au total (visible en bas de la liste des enregistrements, capture `sessions_courtes/00_catalogue_metadonnees_toutes_sessions.png`).
- Le lecteur de rejeu Clarity est réglé sur une **vitesse de lecture 1.5x**. Le chrono affiché à l'écran ("MM:SS / MM:SS") correspond au temps réel de la session du visiteur, pas au temps de la vidéo d'écran — c'est cette valeur qui est utilisée pour les timestamps ci-dessous.
- Toutes les valeurs monétaires affichées dans le rejeu sont **masquées par Clarity** (affichées `␣␣,␣␣ €`) : le prix exact n'est jamais lisible dans l'enregistrement, seul l'*emplacement* du bloc prix est observable.
- Deux catégories de sessions sont distinguées :
  - **Sessions effectivement rejouées à l'écran** (contenu de page visible dans le lecteur) → analyse détaillée possible.
  - **Sessions seulement visibles dans la liste latérale** (carte récapitulative Durée/Clics/Referrer/Device, sans lecture du contenu) → seules les métadonnées sont disponibles, signalé explicitement.
- Pour au moins une session longue (voir `r7s2wn`, 02:44, 22 clics), le contenu affiché dans le lecteur passe directement d'une image à une autre sans transition continue, ce qui indique que le dashboard a été **avancé/reculé via la barre de défilement** plutôt que visionné en continu. Aucune reconstitution chronologique complète n'est donc possible pour cette session ; seules les métadonnées et les rares instants capturés sont rapportés.
- Les timestamps sont estimés à ±2-3 secondes près (limite de résolution de l'échantillonnage vidéo).
- **Correction méthodologique** : une première lecture des chronos de la session B via une planche-contact de vignettes compressées s'est révélée partiellement erronée (décalage de lecture). Tous les timestamps ci-dessous ont été revérifiés individuellement en pleine résolution ; les valeurs affichées sont directement lues sur le chrono du lecteur pour chaque capture citée.

---

## Session A — Instagram, 12:34, durée 01:21

**Capture métadonnées** : `session_A_instagram_1s21/00_metadonnees_session.png`

| Champ | Valeur |
|---|---|
| Entrée / Sortie | `/products/fraik-ventilateur-3-en-1` (page unique) |
| Referrer | instagram.com |
| Heure | 12:34, 10 juil. |
| Durée | 01:21 (81 s) |
| Clics | 8 |
| Pages vues | 1 |
| Device | Mobile — InstagramApp (in-app browser) |
| Pays | France |
| ID utilisateur (Clarity) | 1h30ldp |

### Profondeur de scroll estimée
Le visiteur atteint la section **"Choisissez votre offre"** (bundle Solo/Duo/Trio), soit environ les **deux tiers de la page**. Aucune capture disponible ne montre la section avis clients ("avis vérifiés") pour cette session — son passage éventuel n'est pas observable dans les échantillons capturés.

### Parcours chronologique factuel

| Temps session | Événement observé | Capture |
|---|---|---|
| 00:00 | Écran de chargement (indicateur de rotation), page pas encore rendue | `01_arrivee_t0000.png` |
| 00:03 | Image hero visible ("Enfin une sensation de fraîcheur...") | — |
| 00:07 | Premier défilement : titre, étoiles/avis (texte), bloc prix et bouton CTA visibles, miniatures carrousel avec indicateur de clic | `02_premier_scroll_prix_t0007.png` |
| 00:07–00:16 | Défilement progressif à travers le début des bénéfices produit | — |
| 00:16–00:21 | Retour en arrière : l'affichage revient à l'image hero du haut de page | `03_arret_prolonge_hero_t0021.png` |
| 00:21–00:34 | Immobilité relative sur l'image hero (~13 s sans changement de contenu observable) | — |
| 00:34–00:43 | Le carrousel affiche une image technique (infographie "5 buses / 3 vitesses / réservoir 600 ml / éclairage LED / USB"), inchangée pendant ~9 s — traînée d'indicateurs de clic visible sur plusieurs miniatures | `04_carrousel_image2_t0034.png`, `05_carrousel_image3_t0043.png` |
| 00:52 | Nouvelle image carrousel : photo produit sur fond sombre (6ᵉ miniature sélectionnée) | — |
| ~00:57 | Retour en haut de page (bloc titre/prix/CTA) ; **indicateur de clic directement sur le bouton principal "Je veux sentir la fraîcheur →"** | `06_retour_scroll_haut_t0057.png` |
| 00:57–01:06 | Nouveau défilement descendant à travers les bénéfices jusqu'à la section bundle | `07_scroll_vers_bundle_t0106.png` |
| 01:06 | Section "Choisissez votre offre" : deux indicateurs de clic visibles (un près du texte "Branchez-le et profitez", un second sur le prix de l'offre Solo) | `07_scroll_vers_bundle_t0106.png` |
| 01:11 | Offres Solo/Duo affichées, aucun indicateur de clic visible sur cette capture, aucune ouverture de panier | `08_clic_commander_t0111.png` |
| 01:19 | Dernier instant visible : la page affiche toujours la section bundle (Solo/Duo/Trio) | `09_abandon_bundle_t0119.png` |
| 01:21 | Fin de la session (dialogue "L'enregistrement est terminé") | — |

**Événements demandés non observés pour cette session** : lecture des avis, affichage du panier. Des indicateurs de clic sont visibles à deux reprises à proximité de boutons d'action (CTA principal à 00:57, prix de l'offre Solo à 01:06), sans qu'aucune capture ne montre une confirmation visuelle d'ajout au panier après ces clics.

---

## Session B — Instagram, 12:40, durée 01:25

**Capture métadonnées** : `session_B_instagram_1s25/00_metadonnees_session.png`

| Champ | Valeur |
|---|---|
| Entrée / Sortie | `/products/fraik-ventilateur-3-en-1` (page unique) |
| Referrer | instagram.com |
| Heure | 12:40, 10 juil. |
| Durée | 01:25 (85 s) |
| Clics | 8 |
| Pages vues | 1 |
| Device | Mobile — InstagramApp |
| Pays | France |
| ID utilisateur (Clarity) | pzg9pr |

### Profondeur de scroll estimée
Le visiteur atteint la section **"Entretien / Facile à nettoyer"**, soit la **dernière section de contenu de la page** avant le pied de page — profondeur de scroll quasi complète (~95-100 %). Deux retours en arrière sont observés : un retour partiel vers le schéma explicatif/"Comment l'utiliser" (~00:28) et un retour complet jusqu'en haut de page juste avant la fin de session (~01:22).

### Parcours chronologique factuel

| Temps session | Événement observé | Capture |
|---|---|---|
| 00:00–00:01 | Écran de chargement bref | `01_arrivee_chargement_t0000.png` |
| 00:01 | **Bannière de consentement cookies affichée, avec un indicateur de clic directement sur le bouton "Accepter"** | `02_premier_contenu_carrousel_t0019.png` |
| 00:05 | Bannière disparue, image hero visible, indicateur de clic sur une miniature du carrousel | — |
| 00:10 | Changement d'image carrousel (photo comparative "AVANT / APRÈS", 2ᵉ miniature sélectionnée) : interaction carrousel | — |
| 00:14 | Nouveau changement d'image carrousel (infographie technique du produit) ; traînée de plusieurs indicateurs de clic reliant 3 miniatures successives | `03_scroll_comment_utiliser_t0028.png`* |
| 00:19 | Nouvelle image carrousel (photo d'une main manipulant l'appareil) | — |
| 00:23 | Défilement rapide : la page affiche déjà le haut de la section bundle ("Choisissez votre offre" / offre Solo), avec deux indicateurs de clic sur le texte des bénéfices | — |
| 00:28–00:32 | **Retour en arrière** : l'affichage remonte au schéma explicatif ("Air chaud aspiré → Passe par l'eau → Brume fraîche sur toi") puis à la section "Comment l'utiliser" (étapes numérotées) — la section bundle n'est donc pas lue à ce stade, seulement traversée en défilement rapide | `04_scroll_avant_apres_t0046.png`* |
| 00:37 | Section "Ce que tu ressens dès la première utilisation" | — |
| 00:41–00:46 | Photos comparatives avant/après (bureau, puis chambre) | — |
| 00:46–00:55 | Section avis clients : note globale, étoiles, 3 cartes de témoignages lues (Céline N., Léa S., Quentin C.), indicateurs de clic sur/près des cartes | `05_lecture_avis_t0055.png` |
| 00:59–01:04 | Bandeau de réassurance (livraison, retour, paiement, support) et début FAQ ; indicateur de clic sur la carte "Support en français" | `06_voir_plus_avis_badges_t0104.png`, `07_clics_faq_badges_t0105_fullres.png` |
| 01:08–01:13 | Tableau comparatif "Fraîk vs les alternatives" (la section bundle et le bandeau CTA final, situés juste avant dans la page, ne sont pas captés à l'arrêt — probablement traversés entre deux échantillons) | `08_comparatif_alternatives_t0108.png` |
| 01:17 | Section "Entretien — Facile à nettoyer" | `09_entretien_nettoyage_t0117.png` |
| **01:22** | **Retour en arrière complet** : l'affichage revient tout en haut de la page (bandeau promo, en-tête) sur la dernière image du carrousel (nettoyage), avec une traînée d'indicateurs de clic reliant les 8 miniatures du carrousel — parcours rapide de l'ensemble des images produit juste avant la fin | — |
| 01:25 | Fin de la session (dialogue "L'enregistrement est terminé") | `10_abandon_fin_session_t0125.png` |

*Les fichiers `03_scroll_comment_utiliser_t0028.png` et `04_scroll_avant_apres_t0046.png` sont nommés d'après une estimation initiale de timestamp qui s'est révélée décalée ; leur contenu réel correspond aux événements de 00:14 et 00:28–00:32 décrits ci-dessus (infographie carrousel et schéma explicatif/Comment l'utiliser).

**Événements demandés non observés pour cette session** : aucun arrêt net constaté sur la section bundle "Choisissez votre offre" (traversée en défilement rapide à deux reprises, jamais avec un arrêt capté), aucun clic confirmé sur "Ajouter au panier", aucun affichage du panier. Les 8 clics comptabilisés par Clarity se répartissent, d'après les indicateurs visuels, entre la bannière cookies (Accepter, 00:01), les miniatures du carrousel (00:05–00:19 et à nouveau 01:22), le texte des bénéfices (00:23), les cartes avis (~00:50) et la carte "Support en français" (~01:00).

---

## Session courte remarquable — bannière cookies (ID e46j3e)

**Dossier** : `session_courte_cookie_e46j3e/`

| Champ | Valeur |
|---|---|
| Heure | 13:58, 10 juil. |
| Durée | 00:06 (6 s) |
| Clics | 0 |
| Referrer | instagram.com |
| Device | Mobile — InstagramApp |

### Parcours chronologique factuel
| Temps session | Événement observé | Capture |
|---|---|---|
| 00:00 | Écran de chargement bref (aucun contenu encore rendu) | — |
| 00:00 (page rendue) | Arrivée sur la PDP : image hero visible, **bannière de consentement aux cookies** affichée en superposition ("Accepter" / "Refuser" / "Gérer vos préférences") | `01_arrivee_banniere_cookies_t0000.png` |
| 00:01–00:05 | La bannière reste affichée à l'identique, aucune interaction visible avec ses boutons ; un assombrissement/overlay de l'arrière-plan apparaît progressivement (cause non déterminée — possiblement un effet du lecteur Clarity plutôt qu'un élément réel du site) | `02_dernier_instant_avant_fin_t0003.png`, `03_dernier_instant_t0005.png` |
| 00:06 | Fin de session | — |

Profondeur de scroll : nulle (page non défilée). Aucun des événements suivants n'est observé : scroll, prix, carrousel, avis, panier — la session se termine pendant que la bannière cookies est encore à l'écran.

**Note de fiabilité** : un fragment supplémentaire (capture `sessions_courtes/05_fragment_cookies_session_00h04.png`, vérifiée à 00:01/00:04) montre un deuxième cas de bannière cookies affichée sans interaction, sur une session distincte de 4 secondes. L'ID Clarity exact de cette session n'a pas pu être confirmé avec certitude (plusieurs sessions de la liste partagent une durée de 00:04) ; elle est donc rapportée comme illustration corroborante plutôt que comme session identifiée.

---

## Autres sessions courtes (métadonnées uniquement ou fragments)

Pour ces sessions, seule une capture ponctuelle et/ou la fiche métadonnées Clarity est disponible (conformément au périmètre validé). Catalogue brut : `sessions_courtes/00_catalogue_metadonnees_toutes_sessions.png`.

| ID Clarity | Heure | Durée | Clics | Device / Referrer | Observation factuelle |
|---|---|---|---|---|---|
| r7s2wn | 13:23 | **02:44** | **22** | MobileSafari / **fraik.fr** (referrer direct, pas Instagram) | Contenu affiché de façon non continue dans la vidéo (probable navigation via la barre de défilement) — aucune chronologie fiable reconstituable. Capture métadonnées vérifiée : `sessions_courtes/03_metadonnees_r7s2wn_2min44_22clics.png` |
| **1hjdwit** | **13:26** | **15:37** | **12** | **Chrome / PC** / **fraik.fr** (referrer direct) | **Session la plus longue et le seul appareil desktop confirmé de tout l'échantillon** ; 2 pages vues. Capture métadonnées vérifiée en pleine résolution : `sessions_courtes/04_metadonnees_1hjdwit_15min37_chrome_pc.png`. Aucun contenu de rejeu capturé dans la vidéo (visible uniquement dans la liste latérale). |
| e46j3e | 13:58 | 00:06 | 0 | InstagramApp | Voir section dédiée ci-dessus (bannière cookies) |
| 1d574vm | 14:56 | 00:04 | 1 | InstagramApp | Aucun contenu détaillé capturé |
| 1uwkaq8 | 15:14 | 00:11 | 1 | InstagramApp | Aucun contenu détaillé capturé |
| 2n2ivs | 15:22 | 00:08 | 1 | InstagramApp | Aucun contenu détaillé capturé |
| 18hut3u | 15:36 | 00:04 | 0 | InstagramApp | Aucun contenu détaillé capturé. **Un tooltip visible sur la capture révèle une URL d'entrée avec paramètres UTM de campagne publicitaire payante** (`utm_medium=paid`, `utm_campaign=...`, `utm_term=...`) — au moins une partie du trafic Instagram provient donc d'une pub Meta Ads active, pas uniquement de trafic organique. |
| x2pzxg | 15:51 | 00:05 | 1 | InstagramApp | Aucun contenu détaillé capturé |
| zrzbjp | 15:57 | 00:18 | 1 | InstagramApp | Aucun contenu détaillé capturé |
| vq4wwp | 16:22 | 00:01 | 0 | InstagramApp | Rebond quasi instantané |
| ez8phw | 17:07 | 00:17 | 0 | InstagramApp | 17 s d'affichage sans aucun clic enregistré |
| lt4qe4 | 18:38 | 00:23 | 1 | InstagramApp | Session vérifiée intégralement image par image : hero (00:00–00:10, nouvelle version tutoyée du hero déjà déployée) → liste des bénéfices (00:15) → début de l'éyebrow "Économise plus" (00:19) → **fin de session à 00:23, avant l'affichage du titre "Choisis ton offre" ou des cartes bundle**. La section bundle n'est donc jamais réellement atteinte, seulement son en-tête amorcé. Capture : `sessions_courtes/01_session_lt4qe4_scroll_bundle_t18h38.png` |

*Un deuxième fragment (`sessions_courtes/05_fragment_cookies_session_00h04.png`) montre une bannière cookies sur une session de 4 secondes distincte, cf. note de fiabilité ci-dessus.*

---

## Tableau comparatif — comportements communs entre les sessions

| Critère | Session A (01:21) | Session B (01:25) | Cookie e46j3e (00:06) | Sessions courtes (≤00:23, n≈10) | r7s2wn (02:44) | 1hjdwit (15:37) |
|---|---|---|---|---|---|---|
| Device | Mobile (InstagramApp) | Mobile (InstagramApp) | Mobile (InstagramApp) | Mobile (InstagramApp, 100%) | MobileSafari | **Chrome / PC (desktop)** |
| Referrer | instagram.com | instagram.com | instagram.com | instagram.com (quasi totalité) | fraik.fr (direct) | fraik.fr (direct) |
| Pages vues | 1 | 1 | 1 | 1 | 1 | **2** |
| Scroll observé | Jusqu'au bundle (~65%), bundle jamais lu avec arrêt | Jusqu'à l'entretien (~95-100%) | Aucun (0%) | Variable, souvent nul à partiel (lt4qe4 : bundle amorcé mais jamais atteint) | Non déterminable (navigation non continue) | Non déterminable |
| Carrousel produit | Oui (changement d'image, dwell ~9s sur une image) | Oui (changements fréquents, 8 miniatures parcourues) | Non | Non observé | Non déterminable | Non déterminable |
| Avis clients consultés | Non observé | Oui (3 témoignages lus) | Non | Non observé | Non déterminable | Non déterminable |
| Bannière cookies visible | Non observée à l'écran | **Oui, à l'arrivée (00:01), acceptée immédiatement** | **Oui, toujours visible à la fin** | **Oui sur au moins 1 fragment** (00:01/00:04), non observée sur les autres | Non déterminable | Non déterminable |
| Clic près d'un bouton d'achat | Oui (CTA principal à 00:57, offre Solo à 01:06), sans confirmation panier | Non (clics situés sur cookies, carrousel, avis, FAQ) | Non | Non observé | Non déterminable | Non déterminable |
| Panier affiché | Non | Non | Non | Non | Non déterminable | Non déterminable |
| Retour en arrière (scroll remontant) | Oui, à deux reprises | Oui, à deux reprises (dont un retour complet en haut de page juste avant la fin) | Non applicable | Non observé | Non déterminable | Non déterminable |
| Abandon | Sur section bundle | Sur section entretien (bas de page) | Sur bannière cookies | Majoritairement en haut/milieu de page (lt4qe4 : juste avant le bundle) | Non déterminable | Non déterminable |

### Constats factuels transverses
- Sur les 15 sessions pour lesquelles une donnée de referrer est lisible et vérifiée, **13 proviennent d'instagram.com** (in-app browser) et 2 ont un referrer direct (fraik.fr) : r7s2wn (mobile) et 1hjdwit (desktop).
- **Aucune des sessions analysées en détail (A, B, courtes) ne montre d'affichage du panier ni de confirmation visuelle d'ajout au panier**, malgré des indicateurs de clic situés parfois à proximité de boutons d'action.
- Les durées observées vont de 00:01 (rebond instantané) à **15:37** (session la plus longue de l'échantillon, `1hjdwit`, seule session confirmée sur desktop Chrome/PC, 2 pages vues).
- Le dashboard Clarity recense **28 sessions** sur la fenêtre "Derniers 3 jours" ; ce rapport en détaille 3 en profondeur et documente les métadonnées vérifiées d'au moins 12 autres.
- Sur les 3 sessions où l'arrivée sur la page est visible dès le début (B, e46j3e, et un 3ᵉ fragment non identifié), **3 sur 3 montrent la bannière de consentement cookies** ; elle n'a pas été observée sur la session A car l'enregistrement disponible commence après son affichage.
- **Au moins une session (18hut3u) montre une URL d'entrée taguée avec des paramètres UTM de campagne payante** (`utm_medium=paid`), confirmant qu'une partie du trafic Instagram provient de publicités actives (Meta Ads) et non uniquement de trafic organique.
- La session `lt4qe4` (18:38), vérifiée intégralement, montre le **nouveau hero tutoyé** ("Ton ventilateur ne te rafraîchit pas...") déjà en ligne au moment de l'enregistrement — confirmation que ce contenu était bien déployé sur au moins une partie du trafic capté.

### Corrections apportées suite à la relecture demandée
Une deuxième passe de vérification en pleine résolution (à la demande explicite de fiabilité maximale) a permis de corriger plusieurs erreurs de transcription initiales :
- La session cataloguée « litktu / 10:57 / 18 clics / MobileSafari » n'existait pas : il s'agissait d'une mauvaise lecture de la session **1hjdwit** (13:26, **15:37**, 12 clics, **Chrome/PC**, 2 pages, referrer fraik.fr).
- La capture « 01_arrivee_banniere_cookies_t0000.png » de la session e46j3e montrait initialement un écran de chargement et non la bannière ; corrigée.
- La description de la session `lt4qe4` affirmait à tort un défilement jusqu'à la section bundle ; la vérification image par image montre que la session se termine juste avant l'apparition du titre "Choisis ton offre".
- La description du carrousel de la Session A ("photo bureau / produit fond blanc") a été remplacée par la description exacte (infographie technique, puis photo produit fond sombre).
- La chronologie de la Session B a été intégralement reconstruite après détection d'un décalage de lecture sur la planche-contact initiale (voir note de méthodologie en tête de document).
