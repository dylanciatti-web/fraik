# Fraïk — Handoff complet vers Codex

**Date :** 11 juillet 2026  
**Boutique :** <https://fraik.fr>  
**PDP :** <https://fraik.fr/products/fraik-ventilateur-3-en-1>

### Mise à jour Codex — 11 juillet 2026

- **Préférence de collaboration de Dylan :** au début de chaque tâche substantielle, indiquer si le modèle sélectionné (Sol/Terra/Luna, selon l'interface) et l'intensité de réflexion conviennent. Si le réglage ne peut pas être changé automatiquement, recommander explicitement le niveau à choisir avant les travaux importants.
- **Fait confirmé :** sur le dernier export disponible, `AD03_STATIC_BRUME_FRAICHE` est la publicité la moins efficiente (13,44 € dépensés, CTR lien 2,45 %, CPC lien 0,90 €, CPM 22 €, 15 clics).
- **Décision recommandée :** couper AD03 maintenant si elle est toujours active, puis conserver AD01 et AD02 sans modifier simultanément budget, ciblage ou créas. Noter l'heure exacte de coupure.
- **Changement Meta confirmé par Dylan :** `AD03_STATIC_BRUME_FRAICHE` désactivée le **11 juillet 2026 à 18:05 CEST (UTC+2)**. AD01 et AD02 doivent rester inchangées pour isoler l'effet de cette coupure.
- **Limite :** cette recommandation repose sur le dernier export documenté ; les métriques actuelles dans Meta n'ont pas été revérifiées lors de cette mise à jour.
- **Priorité CRO maintenue :** augmenter d'abord la valeur perçue et la preuve dans le hero mobile, sur une copie du thème, avant de tester une baisse de prix.
- **Fichier modifié :** `PROJECT_CONTEXT.md` uniquement. Aucun code boutique, actif Meta ou réglage Shopify modifié. Aucun test technique effectué.
- **Visualisation CRO créée :** maquette mobile `fraik-v4-premium.html` dans le dossier de visualisations Codex, accompagnée de deux médias déjà présents sur la boutique. Elle matérialise le hero vidéo, la promesse unique, le prix à 44,90 €, les bénéfices, la réassurance, le comparatif honnête et des emplacements d'avis réels à valider.
- **Portée :** aucun fichier Shopify et aucun actif live modifié. La maquette a été rendue en HTML autonome pour vérifier la génération du document ; l'inspection visuelle automatisée locale n'a pas pu être effectuée à cause de la politique de navigation sur les fichiers locaux.
- **Hypothèse de design :** la démonstration produit doit être visible avant le texte long ; les avis restent des emplacements explicites tant que les témoignages exacts et leur authenticité ne sont pas vérifiés.
- **Comparaison live vs maquette (mobile 390 × 844, 11 juillet 2026) :** le visuel principal live est plus émotionnel et désirable que le placeholder vidéo de la maquette V4. En revanche, le header, le bandeau, le badge, le grand média carré et les miniatures repoussent le prix et le CTA hors du premier écran. Le hero live répète aussi la promesse dans l'image puis dans le titre.
- **Décision de direction :** ne pas remplacer l'identité visuelle live par la maquette telle quelle. Conserver le meilleur média émotionnel, mais appliquer la hiérarchie V4 : header condensé, vidéo/démonstration en premier avec brume immédiate, promesse non répétée, bénéfice court, prix et CTA remontés, réassurance compacte. La maquette reste un schéma CRO, pas un design final prêt à pousser.
- **Test effectué :** inspection visuelle de la PDP live à 390 × 844 dans le navigateur intégré. Aucun clic d'achat, aucune modification live et aucun paramètre Shopify modifiés.
- **Direction V4.1 proposée :** adaptation du design existant, sans changement de branding ni de palette. Conserver bleu nuit, cyan/turquoise, typographies, visuel chaleur/fraîcheur et ton direct. Les gains doivent venir d'un header plus compact, d'un hero moins haut, d'une démonstration plus probante, d'une promesse non répétée, d'un CTA remonté et d'un nouvel ordre des sections.
- **Ordre mobile recommandé :** hero compact + offre → démonstration/explication courte → comparaison factuelle → avis authentiques → usages lifestyle → bundles → garanties → FAQ → CTA final. Le bundle ne doit plus être forcé immédiatement après le hero avant la preuve de valeur.
- **Points de conformité à résoudre avant publication :** les mentions `4,8/5 · 59 avis vérifiés`, `Plus que quelques unités en stock`, `LE PLUS POPULAIRE`, `Toute la maison au frais`, retour gratuit et certaines promesses France doivent être conservées uniquement si elles sont exactes et justifiables. La fausse rareté doit être retirée.
- **État :** proposition uniquement. Aucun fichier Shopify modifié et aucun push effectué.

### V4.1 CRO sur thème de test — 11 juillet 2026

- **Thème de test créé :** `fraik V4 TEST CRO`, ID `187915075964`, rôle `unpublished`, dupliqué depuis le live `187779088764`.
- **Prévisualisation :** <https://17wkw9-2a.myshopify.com/products/fraik-ventilateur-3-en-1?preview_theme_id=187915075964>
- **Isolation confirmée :** le thème live n'a pas été ciblé. Le fichier actif `/Users/Dylan/fraik/shopify/sections/fraik-product.liquid` n'a pas été modifié et conserve le hash SHA-256 `06d2a7140e751926c45bbe6db07ea1e9b37300cdf742e8ce46a2dc6b5055e0bd`.
- **Base de travail :** fichier live tiré dans `/private/tmp/fraik-v4-test-cro/sections/fraik-product.liquid`, puis comparé au fichier actif local ; les deux baselines étaient identiques avant modification.
- **Fichier poussé :** uniquement `sections/fraik-product.liquid`, vers le thème test `187915075964`.
- **Changements réalisés sur le test :** hero mobile compact, galerie en ratio 3:2 sur mobile, miniatures horizontales compactes, avis remontés avant le titre, nouvelle promesse orientée bénéfice, sous-titre axé visage et nuque, garantie 15 jours renforcée sous le CTA, six bénéfices hero condensés en trois, ordre mobile réorganisé, correction du sticky ATC pour qu'il apparaisse lorsque moins de 50 % du CTA principal est visible.
- **Avis et mentions conservés :** `4,8/5`, `59 avis vérifiés`, mentions françaises, stock, badges, bundles et textes d'avis existants sont restés présents conformément à la demande de Dylan. Aucun nouveau témoignage n'a été inventé.
- **Ordre mobile appliqué :** hero → pourquoi ça marche → bénéfices → avis → comparatif → avant/après → utilisation → garanties → bundles → FAQ → entretien → CTA final.
- **QA mobile confirmée à 390 × 844 :** largeur document 390 px pour viewport 390 px, média 354 × 236 px, prix visible avant le bas du premier écran, sticky CTA visible de 772 à 844 px, aucune erreur console.
- **QA fonctionnelle confirmée :** vidéo de galerie affichée et muette après sélection, variante `NOIR` sélectionnée correctement, bloc d'avis déplié correctement.
- **QA desktop confirmée à 1440 × 900 :** aucun débordement horizontal, hero en deux colonnes, CTA principal visible, sticky mobile masqué, aucune erreur console.
- **Limites :** aucun ajout au panier, panier ou checkout n'a été déclenché pendant cette QA afin de ne pas créer d'effet externe. `shopify theme check` signale les mêmes dettes historiques de dimensions d'images et de structure partielle du thème ; aucune erreur console ou erreur de déploiement propre à la V4 n'a été observée.
- **Régression live :** aucune. Les ads continuent de pointer vers le thème live inchangé.

### V4.2 premium et preuve sociale — 11 juillet 2026

- **Thème concerné :** uniquement le thème non publié `fraik V4 TEST CRO`, ID `187915075964`. Le live `187779088764` et le fichier actif local restent inchangés.
- **Objectif :** créer un saut de valeur perçue plus marqué, avec une présentation davantage centrée sur le confort, la qualité perçue, la preuve client et la réduction du risque.
- **Hero :** nouvelle promesse `Retrouve ton confort, même quand la chaleur devient difficile à supporter.` Le sous-titre précise la brume et le flux d'air ciblés sur le visage et la nuque.
- **Garantie :** reformulation en `Décide sans pression`, avec rappel du délai de retour de 15 jours. Les bénéfices détaillés en doublon ont été retirés du hero pour accélérer l'accès à la preuve sociale.
- **Preuve sociale premium :** ajout juste après le hero d'un carrousel bleu nuit avec trois avis existants et leurs photos existantes : Céline N., Léa S. et Vincent L. Aucun avis ni média n'a été inventé.
- **Interaction :** boutons précédent/suivant, trois points de navigation, rotation automatique toutes les 4,8 secondes, pause au survol et au focus, arrêt lorsque l'onglet est masqué, désactivation de l'animation avec `prefers-reduced-motion`.
- **Trust haut de page :** grille `4,8 sur 5 / 59 avis vérifiés`, `15 jours / pour changer d'avis`, `3 à 5 jours / livraison suivie`.
- **Stock :** les trois mentions sont devenues `Plus que quelques unités en stock suite à la vague de chaleur`, conformément à la demande de Dylan. **Cette causalité reste une hypothèse marketing non vérifiée et ne doit passer en live que si le stock limité résulte réellement de la vague de chaleur.**
- **Position mobile :** hero de 87 à 1 159 px ; carrousel de 1 272 à 1 566 px ; trust de 1 588 à 1 764 px. Le carrousel a été remonté de 1 403 px à 1 272 px.
- **QA carrousel :** 3 slides et 3 points détectés ; sélection directe du troisième avis confirmée avec translation `-200 %` ; rotation automatique confirmée.
- **QA mobile 390 × 844 :** document 390 px pour viewport 390 px, aucun débordement horizontal, sticky CTA confirmé visible après initialisation, aucune erreur console.
- **QA desktop 1440 × 900 :** aucun débordement horizontal, carrousel 1 152 px de large, sticky mobile masqué, aucune erreur console.
- **Limite de QA :** aucun ajout au panier, panier, checkout ou achat déclenché. La validation actuelle porte sur la prévisualisation, la hiérarchie, le responsive et les interactions sans effet externe.

### Galerie vidéo en premier — 11 juillet 2026

- **Changement demandé par Dylan :** aucun changement de contenu ou de structure, sauf placer la vidéo produit en premier dans la galerie du thème test.
- **Changement réalisé sur le thème test uniquement :** vidéo affichée en média principal au chargement, lecture automatique muette, première miniature active ; l'image produit principale devient la seconde miniature.
- **Fichier poussé :** uniquement `/private/tmp/fraik-v4-test-cro/sections/fraik-product.liquid` vers le thème non publié `187915075964`.
- **QA mobile 390 × 844 :** vidéo visible et non en pause, `autoplay=true`, `muted=true`, image principale masquée, une seule miniature active et elle correspond à la vidéo, aucun débordement horizontal, aucune erreur console.
- **Live :** inchangé.

### Publication live V4.2 — 11 juillet 2026

- **Publication confirmée par Dylan :** validation manuelle de la prévisualisation, puis demande de mise en ligne.
- **Heure de publication :** **18:53 CEST (UTC+2)**.
- **Commande exécutée depuis le repo actif :** `shopify theme push --only sections/fraik-product.liquid --theme 187779088764 --store 17wkw9-2a.myshopify.com --allow-live`.
- **Résultat Shopify :** push réussi vers le thème live `fraik V1` (#`187779088764`). Seul `sections/fraik-product.liquid` a été envoyé.
- **Intégrité avant push :** le fichier actif local a été rendu octet pour octet identique au fichier du thème test validé ; hash SHA-256 commun : `aeb82f19dc4dc6a5d2ea9bb1ef2b7fafe662c3c1891ae27a8ddeb9bb1bf3aa4a`.
- **Vérification réelle sur le live à 390 × 844 :** vidéo en premier, `autoplay=true`, muette et en lecture ; image principale masquée au chargement ; première miniature `thumb-video active` ; carrousel premium présent avec 3 slides et 3 points ; sticky CTA visible ; largeur document 390 px pour viewport 390 px ; aucune erreur console.
- **Régression live constatée :** aucune dans cette vérification ciblée. Aucun ajout au panier, panier, checkout ou achat n'a été déclenché pendant le contrôle post-publication.

### Phase de mesure après publication — 11 juillet 2026

- **Décision :** attendre et analyser avant toute nouvelle modification de page, budget, ciblage ou créa.
- **Variables gelées :** page V4.2 live, AD01 et AD02, budget et ciblage. AD03 reste désactivée depuis 18:05 CEST.
- **Signaux à suivre :** sessions et source, temps engagé, scroll, clics CTA, clics sticky, ajout au panier, checkout initié, achats et erreurs console.
- **Priorité d'interprétation :** obtenir d'abord un signal d'intention, idéalement un premier ajout au panier, avant de conclure sur le prix ou la qualité du trafic.
- **Mesure :** comparer des fenêtres temporelles et fuseaux cohérents via Shopify et Clarity tant que le tracking Meta n'est pas connecté.

### Tâches à prévoir — avis et galerie

- Ajouter un bouton ou lien **« Afficher tous les avis »** dans la nouvelle section d'avis premium, renvoyant directement vers la section complète `#fraik-reviews`.
- Passer les étoiles de la ligne d'avis du hero en vert, de façon cohérente avec les étoiles de la section avis.
- ~~Corriger le carrousel média : le changement de ratio laisse actuellement des espaces sur les côtés et les médias n'occupent plus correctement toute la zone.~~ **Fait le 11 juillet 2026 par Claude Code, voir bloc ci-dessous.**
- Ces tâches sont à réaliser d'abord sur une copie ou un thème de test. Aucun changement live à appliquer sans validation préalable.

### Session Claude Code — 11 juillet 2026 (soir)

- **Infra multi-agents mise en place :** baseline git complet commité (le thème et les
  fichiers de handoff avaient été poussés en live/créés sans être commités), `gh` CLI
  installé et connecté (remplace la gestion manuelle de token), règle de coordination
  ajoutée dans `AGENTS.md`/`CLAUDE.md` : commit immédiat après tout push live (Claude
  Code ou Codex), vérifier `git status`/`PROJECT_CONTEXT.md` avant toute tâche à risque.
- **Fonctionnalité livrée :** swipe tactile sur la galerie photo/vidéo produit
  (`.gallery-main`) — swipe gauche/droite avance/recule dans les miniatures en
  réutilisant `fraikShowImage`/`fraikShowVideo` existants, verrouillage d'axe pour ne
  pas bloquer le scroll vertical, tap simple toujours inchangé (zoom lightbox). Validé
  sur thème de test (`fraik V4 TEST CRO`, `#187915075964`) avant publication live.
  Commit `e77cd24`.
- **Bug corrigé :** barres noires sur les côtés de la galerie mobile (tâche notée
  ci-dessus). Cause : `.gallery-main{aspect-ratio:3/2}` en mobile ne correspondait plus
  au format réel des médias (vidéo 1080×1080, 14/15 images 1254×1254 — carré). Remis à
  `1/1`. Validé sur thème de test puis publié live. Commit `17507e0`.
- **Point d'attention pour Codex :** ne pas remodifier ce ratio sans revérifier les
  dimensions réelles des médias — règle ajoutée explicitement dans `AGENTS.md`.

## 1. Résumé exécutif

La seule campagne Meta Ads du test a dépensé environ **40 €**, sans achat et surtout sans ajout au panier. Les publicités génèrent pourtant de vrais clics et les visiteurs arrivent réellement sur Shopify : Clarity retrouve notamment environ **9 sessions Instagram pour 11 clics Meta** sur la période analysée.

Le problème dominant est actuellement la première impression de la PDP. Les visiteurs observés restent environ **5 secondes actives**, ne scrollent qu’environ **9 %**, consultent une seule page et quittent généralement sans interaction. Une ou deux sessions seulement ont atteint les avis. Le prix est visible très tôt via le CTA flottant : il peut participer au rejet, mais une baisse isolée risquerait de réduire la marge sans résoudre le déficit de valeur perçue, de preuve et de confiance.

En parallèle, Shopify n’est pas correctement connecté à Meta. Le Pixel Meta semble absent du site, le dataset ne reçoit aucun événement et la campagne optimisée pour l’achat fonctionne donc sans signal de conversion. Ce problème explique les colonnes Meta vides, mais pas les visites courtes enregistrées par Shopify et Clarity.

Claude travaille aussi sur un bug JavaScript du header du thème Horizon 4.1.1. Il faut terminer et vérifier ce correctif avant la refonte CRO.

La direction validée est une V4 mobile-first qui augmente fortement le désir et la confiance dans les cinq premières secondes : démonstration vidéo immédiate, promesse unique, preuve authentique, réassurance compacte et comparaison visuelle honnête. L’objectif est que le bénéfice perçu de Fraïk semble nettement supérieur au sacrifice demandé, sans centrer le discours sur le prix.

## 2. Faits établis et hypothèses

### Faits établis ou fortement corroborés

- Une seule campagne Meta a été utilisée.
- Dépense cumulée au dernier point : environ 40 €.
- Résultats : 0 achat, 0 ajout au panier.
- Les clics publicitaires et les arrivées sur la boutique sont réels.
- Les URL des annonces ont été diagnostiquées comme correctes et pointant vers la PDP ci-dessus, sans 404 ni redirection anormale.
- Shopify/Clarity peuvent enregistrer des visites même sans Pixel Meta.
- La plupart des visiteurs quittent avant d’explorer la page.
- Le CTA flottant affiche déjà le prix.
- Le tracking Meta des événements de conversion ne fonctionne pas actuellement.

### Hypothèse centrale

Le chemin probable est :

> Pub intrigante → arrivée sur la PDP → perception d’un petit appareil générique → prix visible → doute sur l’efficacité et la valeur → départ.

Le chemin recherché est :

> Pub intrigante → preuve visuelle immédiate → bénéfice compris et désiré → produit perçu comme une vraie solution de confort → confiance → achat.

La page doit très vite supprimer la question : « Est-ce vraiment efficace ou est-ce un gadget ? »

## 3. Meta Ads

Dernières métriques détaillées disponibles :

| Publicité | Dépensé | CTR lien | CPC lien | CPM | Clics | Décision |
|---|---:|---:|---:|---:|---:|---|
| `AD02_STATIC_VENTILATEUR_CHAUD` | 7,95 € | 5,30 % | 0,18 € | 9,58 € | 44 | Conserver — meilleure créa |
| `AD01_VIDEO_V7_BRUME` | 16,51 € | 2,52 % | 0,52 € | 13,01 € | 32 | Conserver provisoirement |
| `AD03_STATIC_BRUME_FRAICHE` | 13,44 € | 2,45 % | 0,90 € | 22,00 € | 15 | Couper — plus faible |

Ces valeurs totalisent environ 37,90 € ; la campagne a ensuite atteint environ 40 €.

### Décisions

- Couper `AD03_STATIC_BRUME_FRAICHE` si ce n’est pas déjà fait.
- Garder AD01 et AD02 inchangées.
- Ne pas changer simultanément budget, ciblage et créas restantes.
- Noter l’heure exacte de toute modification.
- Ne pas attribuer le problème à un manque de clics : les visiteurs arrivent.

### Limite majeure

La campagne a l’objectif **Achats**, mais Meta ne reçoit vraisemblablement aucun `PageView`, `ViewContent`, `AddToCart`, `InitiateCheckout` ou `Purchase`. Les clics restent interprétables, mais l’algorithme optimise sans événements de conversion.

## 4. Shopify ↔ Meta : blocage de connexion et tracking

### État connu

- L’intégration complète Shopify ↔ Meta n’a jamais été finalisée.
- Shopify ne détecte pas correctement la Page **Fraïk France**.
- Le profil personnel **Dylan Ciatti** dispose selon Business Suite d’un accès total, mais la Page n’apparaît pas dans Facebook → **Voir tous les profils**.
- Le flux de connexion fonctionne seulement partiellement en navigation privée ; en navigation normale, il boucle ou échoue.
- Même en navigation privée, Shopify ne détecte pas le portefeuille **Dylan ciatti**.
- Le Pixel Meta semble absent de `fraik.fr`.
- Le dataset **FRAÎK** ne reçoit aucun événement.

### Actions déjà tentées sans succès

- Retrait puis réattribution de l’accès total.
- Déconnexion/reconnexion Facebook.
- Cache et cookies vidés.
- Tests desktop, mobile et différents navigateurs.
- Suppression de l’ancienne Page **Fraïk**, soupçonnée de créer un conflit.
- Nouvelle tentative de connexion Shopify.

### Identifiants cités — à vérifier avant toute action

- Page Fraïk France : `1249220974937350`.
- Une URL avec l’identifiant `61591827539272` a aussi été citée.
- Portefeuille : `2155905972473589`.
- Dataset/Pixel : `1542660693927295`.
- Deux IDs contradictoires de compte publicitaire ont été mentionnés : `1321307250160947` et `120255797629830151`.

**Ne supposer aucun ID correct sans vérification directe dans Meta.**

### Diagnostic à ne pas tenir pour acquis

Un ancien assistant Meta a affirmé qu’un « délai incompressible de 7 jours » expliquait le problème. Ce point n’est pas vérifié. Le fait certain est une désynchronisation entre droits Business Suite, profil Facebook et actifs proposés à Shopify.

### Suite administrative

- Ouvrir ou poursuivre un ticket Meta avec les symptômes et toutes les actions déjà tentées.
- Vérifier les IDs exacts directement dans les interfaces.
- Ne recréer ni Page, ni Pixel, ni dataset.
- Une fois l’accès corrigé, connecter Shopify au bon portefeuille et au dataset existant si approprié.
- Tester ensuite tous les événements, puis la déduplication Pixel/CAPI.

## 5. Clarity : comportement utilisateur

Constats disponibles :

- environ 9 sessions Instagram rapprochées de 11 clics Meta ;
- environ 5 secondes d’engagement actif ;
- environ 9 % de scroll ;
- environ 1 page par session ;
- quasi-absence d’interaction ;
- seulement une ou deux sessions descendues jusqu’aux avis ;
- aucun ajout au panier.

Shopify semble classer une partie du trafic Instagram comme **Direct**, probablement à cause du navigateur intégré ou de l’attribution. Un « 0 session Facebook » ne signifie donc pas nécessairement zéro visite.

### Lecture CRO

Le problème se produit avant les sections profondes. Les causes plausibles sont combinées :

- valeur perçue insuffisante par rapport au prix visible ;
- efficacité pas assez démontrée ;
- impression de produit générique ;
- manque de confiance immédiate ;
- hero ne confirmant pas assez vite la promesse de la pub ;
- éventuelle friction mobile ou performance à revérifier.

## 6. Bug JavaScript du header — travail de Claude

Erreur observée :

```text
MissingRefError: Required ref "headerDrawerContainer" not found in component header-component
```

Effets :

- erreur au chargement desktop et mobile ;
- icône panier non fonctionnelle ;
- l’ajout au panier fonctionne, mais recharge `/cart` au lieu d’ouvrir le tiroir.

Ce bug dégrade le tunnel, mais n’explique probablement pas les 0 ATC puisque les visiteurs observés ne cliquent pas sur le CTA.

### Mission déjà donnée à Claude

- Identifier le fichier et la cause exacte.
- Proposer un correctif minimal compatible Horizon 4.1.1.
- Montrer le diff avant modification.
- Éviter toute refonte large dans ce correctif.

### QA obligatoire après correction

- aucune erreur console desktop/mobile ;
- header et menu fonctionnels ;
- icône et tiroir panier fonctionnels ;
- ajout au panier et checkout testés ;
- aucune régression responsive ou de performance ;
- test sur copie/prévisualisation du thème avant publication.

## 7. Diagnostic PDP et principe directeur

La page est propre et cohérente, mais donne davantage l’impression d’un « bon petit produit » que d’une solution premium et désirable. Elle explique avant de faire ressentir.

Principe approuvé :

> Chaque élément doit augmenter le désir ou la confiance. S’il ne fait ni l’un ni l’autre, il est supprimé, condensé ou retravaillé.

Fraïk doit être présenté comme une solution personnelle de confort et de soulagement pendant les fortes chaleurs, pas principalement comme un mini-ventilateur USB.

Moins de specs isolées ; plus de bénéfices humains :

- fraîcheur ciblée sur le visage et la nuque ;
- travailler plus confortablement ;
- mieux se détendre ;
- rendre les moments de chaleur plus supportables ;
- preuve visible du fonctionnement ;
- qualité perçue de l’objet.

## 8. Refonte CRO V4 envisagée

### 8.1 Vidéo en premier

Mettre la vidéo en première position. Storyboard :

1. brume visible dès la première seconde ;
2. personne ressentant le soulagement ;
3. eau et éventuellement glaçons ;
4. produit en situation réelle ;
5. plan final propre et premium.

Éviter intro/logo lent. Vérifier autoplay muet, poids et vitesse mobile.

### 8.2 Promesse unique

Direction proposée :

> **La fraîcheur que tu ressens immédiatement.**

Sous-titre possible :

> Une fine brume fraîche dirigée sur ton visage et ta nuque, là où la chaleur devient la plus difficile à supporter.

Alternative alignée sur AD02 :

> Ton ventilateur souffle de l’air chaud. Fraïk diffuse une brume fraîche directement sur toi.

Rester honnête : ne jamais promettre de refroidir une pièce entière ou de remplacer une climatisation.

### 8.3 Réassurance sous le CTA

Ligne compacte, si chaque promesse est vraie :

> Garantie 30 jours · Livraison suivie · Paiement sécurisé

Puis éventuellement :

> Support client basé en France

Pas de badges, labels ou promesses non justifiables.

### 8.4 Preuve sociale immédiate

Remonter trois avis courts, spécifiques et authentiques, idéalement avec photo/contexte réel. Ne jamais inventer avis, note, volume de clients ou photos.

Les mentions `4,8/5` et `59 avis` ont été évoquées dans les maquettes, mais doivent être vérifiées avant utilisation.

### 8.5 Comparaison visuelle

Après le hero : vraie scène avant/après ou démonstration simple.

| Ventilateur classique | Fraïk |
|---|---|
| Brasse l’air ambiant | Diffuse une fine brume ciblée |
| Flux d’air seul | Eau + brume + ventilation |
| Soulagement parfois limité | Sensation directement sur la peau |

Le comparatif doit rester factuel.

### 8.6 Projection et qualité perçue

Montrer bureau, chambre, canapé et autres usages cohérents. Ajouter des plans soignés des boutons, buses, réservoir, finitions et manipulation. Le but est de diminuer l’impression générique sans simuler une qualité inexistante.

### 8.7 Bundles

- Trois choix maximum.
- Économies exactes et explicites.
- Une option recommandée.
- Cas d’usage : une pièce, bureau + chambre, foyer.
- Design aéré et premium.

Les prix précédemment évoqués — 39,90 €, 69,90 €, 94,90 € — ne sont que des pistes. Recalculer d’abord marge, TVA, livraison, frais de paiement et remboursements.

### 8.8 Urgence

Uniquement si vraie :

> Forte demande pendant les épisodes de chaleur.

Pas de faux compteur, faux stock ou fausse date limite.

## 9. Prix et protocole de test

Le prix peut bloquer puisque le CTA flottant le montre immédiatement. Cependant :

1. ne pas faire une baisse sèche non mesurée ;
2. améliorer d’abord preuve, confiance et valeur perçue ;
3. calculer la marge réelle ;
4. tester ensuite un prix ou une offre distincte si nécessaire.

Ne pas changer simultanément hero, prix, bundles, créas et ciblage. Si plusieurs modifications doivent être regroupées faute de trafic, documenter le lot comme une nouvelle version et ne pas attribuer le résultat à un seul élément.

## 10. Plan d’exécution exact

### Phase 0 — Baseline

- Capturer la PDP actuelle.
- Exporter les métriques Meta par publicité.
- Relever Shopify/Clarity et le fuseau horaire.
- Noter dépense, date et heure.
- Vérifier coûts, marge et prix.
- Créer une copie du thème.

### Phase 1 — Technique

- Examiner le travail/diff de Claude.
- Corriger le bug sur la copie.
- Tester console, header, panier, ATC, checkout et responsive.
- Vérifier qu’aucune autre erreur bloquante ne subsiste.

### Phase 2 — Publicité

- Couper AD03 si nécessaire.
- Garder AD01 et AD02 intactes.
- Ne pas changer budget/ciblage.
- Journaliser l’heure.

### Phase 3 — Hero V4

- Vidéo immédiate.
- Une promesse.
- Sous-titre court et honnête.
- CTA clair.
- Réassurance vérifiable.
- Mobile-first.

### Phase 4 — Premiers écrans

- Comparaison visuelle.
- Trois preuves sociales authentiques.
- Une scène lifestyle forte.
- Réduction du texte et des blocs inutiles.

### Phase 5 — Bundles

- Calcul de marge.
- Options simples.
- Économies exactes.
- Test complet mobile/panier.

### Phase 6 — QA

Tester iPhone/Safari, Android/Chrome si possible, desktop Chrome/Safari et navigateur Instagram : vidéo, CTA flottant, variantes, bundles, ATC, panier, checkout, politiques, contact, vitesse et console.

### Phase 7 — Publication et mesure

- Noter l’heure exacte de mise en ligne.
- Mesurer via Shopify et Clarity tant que Meta n’est pas connecté.
- Priorités : clics CTA, ATC, scroll, engagement, checkout, achats, device/source.
- Comparer des périodes et fuseaux cohérents.

### Phase 8 — Tracking Meta séparé

- Continuer le ticket Meta.
- Confirmer tous les IDs.
- Connecter au bon portefeuille/dataset une fois le blocage résolu.
- Tester `PageView`, `ViewContent`, `AddToCart`, `InitiateCheckout`, `Purchase` et la déduplication Pixel/CAPI.

## 11. Garde-fous

### Meta / Shopify

- Ne supprimer ni Fraïk France, ni dataset, ni compte publicitaire.
- Ne créer aucun nouveau Pixel/dataset sans audit des IDs.
- Ne reconnecter aucun actif au hasard.
- Ne pas tenir le délai de 7 jours pour certain.

### Code

- Travailler sur copie/prévisualisation.
- Montrer les diffs risqués.
- Changements minimaux et réversibles.
- Ne pas écraser le travail de Claude ou d’un autre terminal.
- Ne pas publier sans QA et test d’achat complet.

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

## 12. Questions ouvertes à vérifier

1. Claude a-t-il appliqué le correctif ? Quel diff exact ?
2. AD03 est-elle coupée ? Depuis quand ?
3. Quels sont les IDs exacts du compte publicitaire, de la Page et du dataset ?
4. Le dataset `1542660693927295` est-il sélectionné dans l’ensemble de publicités ?
5. Quels sont coût rendu, TVA, livraison, frais, marge et seuil de rentabilité ?
6. `4,8/5` et `59 avis` sont-ils authentiques ?
7. Garantie 30 jours, livraison suivie et support France sont-ils assurés ?
8. Quelle vidéo existe et répond-elle au storyboard ?
9. Quel budget reste-t-il et quel seuil servira à juger la V4 ?
10. Les maquettes HTML V2/V3 existent-elles encore ? Sinon, les recréer à partir des principes ci-dessus.

## 13. Brief de reprise pour Codex

> Reprends Fraïk à partir de ce handoff. Audite d’abord l’état réel du thème et du travail de Claude. Termine et vérifie le correctif JavaScript du header sans refonte large. Conçois ensuite sur une copie du thème une V4 mobile-first centrée sur une démonstration vidéo immédiate, une promesse unique, une réassurance authentique, une preuve sociale vérifiable et une comparaison visuelle honnête. L’objectif est d’augmenter fortement désir et confiance dans les cinq premières secondes, sans faux avis, fausse urgence ou promesse exagérée. Ne change pas simultanément campagne, prix et page. Conserve AD01 et AD02, coupe AD03 si nécessaire, documente les changements, fais une QA complète et mesure via Shopify et Clarity tant que Meta n’est pas connecté.

## 14. Définition de réussite

La V4 doit améliorer plusieurs signaux mesurables :

- moins de départs immédiats ;
- plus de temps engagé ;
- plus de scroll et d’interactions vidéo/galerie ;
- clics CTA ;
- premiers ajouts au panier ;
- initiations de checkout ;
- idéalement premiers achats avec une économie viable.

Le premier jalon indispensable est d’obtenir un signal d’intention réel — au minimum des ajouts au panier — sans dégrader confiance, marge ou conformité.
