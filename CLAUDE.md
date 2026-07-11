# Projet
Nom : Fraïk

## Objectif
Vendre un mini rafraîchisseur d'air portable via Shopify en utilisant Meta Ads et TikTok Ads.
Objectif business : cash rapide sur quelques semaines/mois pendant la canicule 2026 —
pas une marque long terme.

## Produit
Mini rafraîchisseur d'air portable avec brume, vendu 44,90€ (coût fournisseur ~19€,
vérifié via prix API DSers réel — jamais le prix vitrine/promo AliExpress).
Utilisation principale : apporter une sensation immédiate de fraîcheur sur le visage
et le haut du corps.

## Avatar
Non genré. Personnes souffrant du pic de chaleur (surtout 15h-17h), sans climatisation
(budget, logement, propriétaire), qui ont déjà un ventilateur classique décevant.
Vit en appartement, achat impulsif, principalement sur mobile.

## Positionnement
On ne vend pas un climatiseur. On vend un soulagement immédiat pendant les pics de
chaleur. Ne jamais laisser la copy suggérer une équivalence de performance avec une
vraie clim (disclaimer obligatoire sur la page : "ça ne refroidit pas toute la pièce").
L'angle "alternative à la clim / pas les moyens" est un hook publicitaire uniquement,
jamais une promesse de page produit.

## Priorités
- Mobile first.
- Conversion avant esthétique.
- Simplicité.
- Vitesse de chargement.
- Peu de texte inutile.

## Boutique mono-produit
Tout le trafic doit converger vers la fiche produit unique, jamais vers une page
collection (logo header, boutons "continuer les achats", 404, etc.).

---

# Infos techniques figées

- Store réel : `17wkw9-2a.myshopify.com` (jamais `fraik.myshopify.com`, inexistant)
- Thème live : `fraik V1`, ID `187779088764` (Horizon 4.1.1)
- Repo de travail actif : `/Users/Dylan/fraik/shopify/`
- Fichier principal : `sections/fraik-product.liquid`
- Handle produit : `fraik-ventilateur-3-en-1`
- Compte Shopify : `brumepoil.contact@gmail.com` (gère aussi la boutique Brume & Poil
  séparée — pixels/audiences/comptes pub jamais partagés entre les deux)
- Business Manager Meta : `systeme.30`, pixel dédié `FRAÎK` (ID `1542660693927295`),
  compte pub dédié `FRAIK`

Une campagne Meta Ads payante est **active** sur ce produit. Toute régression sur la
page produit a un coût réel immédiat (trafic payant perdu). Prudence par défaut.

---

# Règles de code

Quand tu modifies du code :
- n'introduis jamais de régression ;
- privilégie les bénéfices client plutôt que les caractéristiques techniques ;
- explique toujours les changements importants avant de les appliquer lorsqu'ils sont
  susceptibles d'avoir un impact sur plusieurs fichiers.

## Règles CLI — non négociables

1. **Jamais de `shopify theme push` global sur le thème live.** Toujours `--only <fichier>` ciblé.
2. **Toujours `--theme <ID>` explicite**, jamais de sélection interactive.
3. **Toujours vérifier `pwd` avant toute commande CLI.** Le push envoie le fichier depuis
   le dossier où la commande est lancée — mauvais dossier = version obsolète poussée
   sans erreur visible.
4. **Avant de modifier un fichier sensible** (product.json, cart.json, settings_data.json,
   page.json, ou tout fichier avec un historique de bug) : diff local vs live d'abord.
5. **Auth Shopify OAuth : uniquement en terminal natif** (Terminal.app/iTerm), jamais dans
   Claude Code (non-interactif, l'OAuth navigateur échoue).
6. Commande de push type à réutiliser :
   ```
   cd /Users/Dylan/fraik/shopify && shopify theme push --only sections/fraik-product.liquid --theme 187779088764 --store 17wkw9-2a.myshopify.com --allow-live
   ```
7. **Ne pas modifier `aspect-ratio` de `.gallery-main` (mobile, `@media(max-width:820px)`)
   sans vérifier d'abord les dimensions réelles des médias produit.** La vidéo fait
   1080×1080 et la quasi-totalité des images 1254×1254 (carré, 1:1). Un ratio différent
   (ex. `3/2`, testé le 11 juillet 2026 pour remonter le CTA) crée des barres noires sur
   les côtés en `object-fit:contain` — régression déjà survenue une fois, corrigée en
   remettant `1/1`. Si un gain de hauteur mobile est encore souhaité, le faire ailleurs
   (padding, gaps) plutôt qu'en cassant ce ratio.

## Workflow de modification

- **Changement mineur** (texte, lien, style CSS localisé) : modifier, diff pour confirmer
  que rien d'autre n'a bougé, push direct avec `--only`, vérifier en navigation privée
  après coup.
- **Changement structurel ou à risque** (nouveau bloc, JS, logique d'affichage, tout ce
  qui touche zoom/lightbox/sélecteur variante/ATC sticky) : dupliquer le thème live en
  thème de test d'abord, fournir l'URL preview, attendre validation manuelle sur mobile
  avant tout push en live.
- Avant de conclure qu'une modification "fonctionne", vérifier réellement sur la boutique
  live (pas seulement en local) — ne jamais annoncer un changement comme fait s'il n'a
  pas été poussé.
- Ne jamais pousser depuis un dossier différent du repo de travail actif sans avoir diffé
  au préalable — un rapatriement/clone parallèle peut désynchroniser des fonctionnalités
  déjà en place (bundle, avis, badges paiement, sélecteur variante, prix barrés, sticky ATC,
  comparatif, FAQ).

## Discipline de décision

- Ne pas rouvrir un sujet déjà tranché par Dylan sans qu'il le rouvre lui-même. Si une
  décision passée semble mauvaise techniquement, le signaler **une fois**, brièvement,
  puis exécuter sans insister.
- Toujours utiliser le **prix API réel DSers**, jamais le prix vitrine/promo AliExpress,
  pour tout calcul de marge.
- Le délai de livraison affiché sur le site est **3-5 jours ouvrés** (décision assumée
  par Dylan, délai réel fournisseur 8-12j) — ne pas le "corriger" de sa propre initiative.
- Pas de faux témoignages avec identités totalement inventées ; les avis sont des avis
  réels reformulés. Pas de nom de marque concurrente cité dans les créas.

## Style de réponse attendu

- Concis, pas de pavés inutiles.
- Objectif : signaler clairement si une demande, un choix de code ou une idée pose un
  problème réel (sécurité, régression, incohérence), sans juste valider par confort.
- Avant toute action CLI destructive ou en live, présenter clairement ce qui va être
  exécuté avant de l'exécuter.
- Si une tâche gagnerait à être traitée sur un modèle plus puissant (Opus) — code
  multi-fichiers complexe, raisonnement long enchaîné, gros documents — le signaler
  explicitement en début de réponse plutôt que de traiter la tâche en sous-régime.

---

## Continuité avec Codex

`PROJECT_CONTEXT.md` est le handoff partagé entre Claude Code et Codex.

Le lire uniquement :

- au début d'une nouvelle session de travail sur Fraïk ;
- lorsque Dylan demande explicitement une reprise de contexte ;
- avant une décision stratégique ou une modification à risque.

Le mettre à jour uniquement après un jalon important : décision validée, diagnostic
confirmé, changement publié, résultat de test, ou blocage nouveau. Le garder concis
et factuel ; ne pas consigner les micro-étapes.

Ne pas modifier les actifs Meta, Shopify ou les paramètres de campagne sans
confirmation explicite de Dylan.

## Coordination multi-agents (Claude Code + Codex)

Claude Code et Codex peuvent tous les deux modifier des fichiers et pousser en live
sur ce projet de façon autonome. Ça crée un risque réel de désynchronisation entre
ce que voit git et ce qui est réellement live, ou de travail écrasé entre agents.

- **Commit immédiatement après tout push live**, que ce soit Claude Code ou Codex qui
  l'ait fait. Ne jamais laisser une modification déjà en live rester non commitée.
- **Avant de commencer une tâche à risque**, vérifier `git status` et l'état récent de
  `PROJECT_CONTEXT.md` pour détecter un travail de l'autre agent pas encore commité ou
  pas encore mergé.
- La règle "changement structurel ou à risque → thème de test d'abord, validation
  manuelle avant push live" s'applique à Claude Code **et** à Codex, même si les deux
  sont capables de pousser directement en live sans confirmation intermédiaire.
