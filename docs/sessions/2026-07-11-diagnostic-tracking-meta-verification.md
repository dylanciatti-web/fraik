# Diagnostic tracking Meta Ads (pixel FRAÎK) + blocage de vérification d'entreprise — Fraïk

**Date** : 2026-07-11
**Périmètre** : (1) analyse de l'export Meta Ads du 1er au 11 juillet, (2) diagnostic complet de l'absence d'événements de conversion remontant au pixel FRAÎK malgré du trafic publicitaire réel, (3) investigation du blocage de connexion Shopify ↔ Meta et de la vérification d'entreprise associée.
**Aucune modification de code ni action destructive/irréversible effectuée pendant cette session** : uniquement de la lecture (Meta Events Manager, Ads Manager, Meta Business Suite, Shopify admin, DOM/réseau de fraik.fr) et l'ajout d'un message complémentaire, avec accord explicite de l'utilisateur, sur un ticket de support Meta déjà ouvert.

## Contexte

Demande initiale : analyser `Rapport-sans-titre-juil-1-2026-au-juil-11-2026.xlsx` (export Meta Ads) comme un expert et donner des recommandations, dans le contexte du projet Fraïk (campagne Meta Ads active depuis le 08/07, budget 15€/jour).

## Partie 1 — Analyse de l'export Meta Ads

- 3 publicités actives : `AD01_VIDEO_V7_BRUME`, `AD02_STATIC_VENTILATEUR_CHAUD`, `AD03_STATIC_BRUME_FRAICHE - Copie`.
- Dépense totale sur la période : 37,90€ (91 clics, 1256 impressions cumulés) — cohérent avec un budget de 15€/jour sous-délivré en phase d'apprentissage (campagne réellement lancée le 8/07).
- **AD02 (angle "ventilateur classique décevant / chaleur")** nettement le plus performant : CPM 9,58€, CTR 5,30%, CPC 0,18€ — cohérent avec l'avatar du projet.
- **AD03 ("- Copie")** le moins bon : CPM 22€ (2,3x plus cher), possible cannibalisation d'audience à vérifier vu le nom dupliqué.
- **Signal critique repéré** : 0 vue de landing page, 0 ajout panier, 0 paiement initié, 0 achat sur les 3 publicités, malgré 91 clics réels — anomalie plus grave qu'un simple manque de conversions, qui a motivé toute la suite de la session.

## Partie 2 — Diagnostic du pixel FRAÎK (Events Manager, Ads Manager)

- Dataset FRAÎK (ID `1542660693927295`) : **"n'a reçu aucune activité"** depuis sa création (6 juillet), confirmé dans Events Manager.
- Confirmé que ce dataset est bien celui utilisé par l'ad set de la campagne (`FRAIK_TEST_META_100€_V1` → `AD01_VIDEO_V7_BRUME`) — pas de confusion d'ID entre deux pixels différents.
- L'ad set affiche explicitement : *"Aucun évènement de conversion n'est configuré dans l'ensemble de données que vous avez sélectionné"*, alors que l'objectif choisi est "Achat" / "Maximiser le nombre de conversions" — la campagne optimise donc sans aucun signal de conversion depuis son lancement.

## Partie 3 — Vérification technique côté site (fraik.fr)

- Chargement complet de `fraik.fr/products/fraik-ventilateur-3-en-1` : aucun `fbq`, aucun script `connect.facebook.net`, **zéro requête réseau vers `facebook.com/tr`** au chargement. Seule requête de tracking observée : `POST https://t.clarity.ms/collect` (Microsoft Clarity, fonctionnel).
- Vérifié que ce n'est pas un blocage RGPD : consentement déjà accordé dans la session (`marketing: yes`, `analytics: yes` via `window.Shopify.customerPrivacy`).
- `grep` sur tout le repo theme (`.liquid`) : aucune occurrence de `fbq(`, `connect.facebook.net` ou de l'ID pixel — confirmé qu'aucun code pixel n'est ni codé en dur ni injecté dynamiquement.
- Conclusion : absence complète du Pixel Meta côté navigateur, pas seulement de la Conversions API.

## Partie 4 — Cause racine : connexion Shopify ↔ Meta jamais finalisée

- Shopify → Événements clients : canal **"Facebook & Instagram"** affiche uniquement *"Associer un compte Facebook"* — jamais connecté à un compte, contrairement à Microsoft Clarity (actif). Confirmé aussi dans l'appli du canal (`admin.shopify.com/.../apps/facebook-ads`).
- Historique fourni par l'utilisateur : Page Facebook "Fraïk" d'origine invalide (mauvais asset généré via Instagram/systeme.30), remplacée par une nouvelle Page **"Fraîk France"** (ID `1249220974937350`) créée dans le portefeuille business **"Dylan ciatti"** (ID `2155905972473589`) — la diffusion publicitaire fonctionne depuis, mais la connexion Shopify reste bloquée.

### Vérifications d'accès (Meta Business Suite vs Facebook classique)

- Business Settings → Pages → Fraîk France → Personnes : **"dylan ciatti (Accès total)"** confirmé, seul et unique système d'accès existant pour cette Page (pas de rôle de Page classique séparé).
- **Meta Business Suite** (`business.facebook.com`) : accès fonctionnel complet confirmé (Créer une publication, Créer une publicité, etc.).
- **Facebook classique** (`facebook.com/1249220974937350`), avec la session de Dylan connectée : la Page s'affiche comme pour un visiteur externe — boutons "Suivre" / "Message", menu "..." limité à "Signaler la Page / Aider Fraîk France / Bloquer / Inviter des ami(e)s". Aucune option d'administration visible.
- **Conclusion** : l'accès portefeuille business est réel et fonctionnel dans Business Suite, mais ne se propage pas à la vue Facebook classique ni (probablement) à l'intégration OAuth de Shopify, qui semble s'appuyer sur l'ancien système de rôles de Page classique (`/me/accounts`).

### Statut de vérification d'entreprise

- Portefeuille "Dylan ciatti" : statut de vérification **"Refusé"** (*"Meta ne peut pas déterminer entreprise réelle"*), portefeuille créé le 6 juillet 2026.
- Hypothèse retenue comme cause probable du désalignement d'accès : Meta restreint la propagation de certaines permissions/synchronisations tant que le portefeuille n'est pas vérifié.
- Assistant IA de vérification (Meta Business Suite, "Bêta") ouvert et parcouru **sans rien soumettre** (fermeture systématique avant tout envoi de document) pour comprendre le parcours :
  - Étape 1 "Vérifier les informations de l'entreprise" : auto-matching nom/adresse, a correctement suggéré la bonne adresse de domiciliation (59 Rue de Ponthieu, bureau 326, Paris 75008) sans demander de document — donc l'adresse de domiciliation n'est pas la cause du blocage.
  - Type d'entreprise sélectionnable : Société / **Entreprise individuelle** / Partenariat / Entreprise privée / Institution. Utilisateur confirmé auto-entrepreneur → "Entreprise individuelle" est le bon choix, ce qui explique que seuls des documents d'identité personnelle (CNI/passeport/permis) soient proposés à l'étape suivante, jamais de Kbis (normal pour ce statut, pas un bug).
  - Étape "Confirmez votre lien" (identité personnelle) : **3 documents différents testés par l'utilisateur (CNI, passeport, permis)**, tous rejetés avec le même message générique *"nous ne pouvons pas valider votre document d'identité"*, sans raison précise. Pattern jugé plus cohérent avec un blocage automatisé (scoring anti-fraude sur portefeuille récent) qu'avec un problème réel de contenu de document.

## Partie 5 — Support Meta

- Un chat d'assistance a été ouvert dans Meta Business Suite (icône aide) : c'est un bot IA ("Bêta"), pas un ticket humain formel.
- **Découverte d'un vrai ticket de support déjà actif** : `1744227466772293` ("Votre demande auprès de Meta"), ouvert le 10/07, statut *"en attente d'un retour de la part de nos spécialistes"*.
- Avec l'accord explicite de l'utilisateur, un message complémentaire a été ajouté à ce ticket existant, détaillant le pattern des 3 documents rejetés de façon identique, le statut auto-entrepreneur, et l'impact sur la campagne publicitaire active.
- **Fiabilité de l'assistant IA à noter** : au moins 3 hallucinations factuelles constatées pendant la session (un ID de compte publicitaire inventé une première fois, un numéro de carte bancaire jamais fourni par l'utilisateur, puis un troisième ID de compte pub différent et une affirmation invérifiable/fausse d'absence de moyen de paiement configuré). Les réponses de ce bot ne doivent pas être prises pour argent comptant sans vérification croisée manuelle.

## Actions à faire plus tard

- [ ] Attendre la réponse d'un spécialiste humain sur le ticket `1744227466772293` ; relancer via "Demander des nouvelles" si pas de nouvelles sous quelques jours.
- [ ] Ne pas retenter la connexion Shopify ↔ Meta tant que la vérification d'entreprise n'a pas abouti (échec certain pour la même raison).
- [ ] Ne pas créer de nouveau pixel ni de nouvelle Page — le dataset FRAÎK (`1542660693927295`) et la Page Fraîk France (`1249220974937350`) existants sont corrects et doivent être réutilisés une fois le blocage levé.
- [ ] En attendant, juger la rentabilité de la campagne sur les commandes Shopify réelles plutôt que sur les métriques Ads Manager (coût par achat/ROAS resteront vides).
- [ ] Surveiller particulièrement AD02 (angle ventilateur/chaleur) comme piste de scale si le signal CPM/CTR se confirme sur davantage de volume ; vérifier le ciblage d'AD03 pour écarter une cannibalisation d'audience.
