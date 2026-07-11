# Analyse Meta Ads (0 vente confirmée) + pixel personnalisé Shopify — Fraïk

**Date** : 2026-07-11 (nuit)

## Constat chiffré revérifié en direct dans Ads Manager

Compte FRAIK, vue lifetime : 47,69 € dépensés (budget 15 €/j), **0 résultat/achat enregistré** sur la campagne et sur les 3 publicités individuellement, 0 vue de landing page trackée.

Détail par publicité :

| Pub | Dépensé | CPC lien | CTR lien | Statut |
|---|---:|---:|---:|---|
| AD01_VIDEO_V7 | 24,80 € | 0,48 € | 2,63 % | Active — modification non publiée en attente (à vérifier) |
| AD02_STATIC_VENTILATEUR_CHAUD | 8,16 € | 0,19 € | 5,27 % | Active — nettement la plus efficiente |
| AD03 (désactivée) | 14,73 € | 0,92 € | 2,45 % | Désactivée depuis le 11/07 18:05 CEST |

## Vérité terrain confirmée via Shopify directement

`list-orders` (MCP Shopify) : **0 commande, total confondu, sur toute la boutique.** Donc 0 € de retour confirmé sur les ~48 € dépensés à ce jour — mais du vrai trafic humain arrive sur le site (CTR cohérent, déjà recoupé avec Clarity dans le diagnostic du 11/07 après-midi, voir `2026-07-11-diagnostic-tracking-meta-verification.md`).

## Cause racine déjà connue

Intégration Shopify↔Meta bloquée par le refus de vérification d'entreprise du portefeuille (voir `2026-07-11-diagnostic-tracking-meta-verification.md`). Hors de notre contrôle, ticket support Meta `1744227466772293` en attente d'un retour humain.

## Contournement mis en place (accord explicite de Dylan)

Création d'un pixel personnalisé Shopify (Réglages → Événements clients → « Meta Pixel FRAIK (manuel) », ID interne `277840252`), connecté (accès boutique en ligne + paiement + confirmation de commande accordé). Réutilise le dataset FRAÎK existant (`1542660693927295`), **aucun nouveau pixel Meta créé**, conforme à la règle de ne pas créer de nouvel actif.

- Confidentialité : autorisation « Requise » sur Marketing + Analyse (cohérent avec le consentement déjà accordé sur le site : marketing=yes, analytics=yes, preferences=yes).
- **Première version (chargement de `fbevents.js` + `fbq()`) écartée :** le sandbox du pixel personnalisé Shopify semble bloquer le chargement de scripts externes (aucune requête réseau détectée après plusieurs rechargements malgré une iframe sandbox confirmée active et chargée — vérifié via `document.querySelectorAll('iframe')`, src `.../custom/web-pixel-277840252@1/sandbox/...` bien présent).
- **Version mise en place :** envoi direct des événements standards (`PageView`, `ViewContent`, `AddToCart`, `InitiateCheckout`, `Purchase`) via `fetch()` vers `https://www.facebook.com/tr/` (endpoint de tracking Meta sans JS, pattern officiellement documenté par Shopify pour les pixels personnalisés — contrairement au chargement de script, l'envoi `fetch` vers un serveur tiers est le pattern illustré dans la doc officielle Shopify Web Pixels API).
- **Statut de vérification à la fin de la session : non concluant.** Ni les outils de capture réseau du navigateur ni le tableau de bord Meta Events Manager (Ensembles de données → FRAÎK → Vue d'ensemble) n'ont confirmé de requête sortante après rechargement de page + ajout au panier de test. Meta indique lui-même un délai de traitement pouvant aller jusqu'à 30 minutes — donc pas une preuve d'échec à ce stade.

## Suivi automatique mis en place

Cron local (session Claude Code, `CronCreate`) programmé toutes les 30 minutes pour revérifier <https://business.facebook.com/events_manager2/list/dataset/1542660693927295/overview>. **Limite connue :** ce cron ne tourne que si le Mac reste éveillé et la session ouverte — pas une routine cloud (le check nécessite un accès navigateur à Meta Business Suite, non disponible dans l'environnement cloud isolé, aucun connecteur Meta/Facebook configuré).

## Action à faire en priorité à la prochaine session

Rouvrir le lien Events Manager ci-dessus. Si toujours vide après un vrai délai d'attente et un nouveau test (page produit + ajout panier), le pixel personnalisé n'est probablement pas viable tel quel (CSP du sandbox trop restrictive même pour `fetch`) et il faudra soit tester un envoi côté serveur (Shopify Flow + webhook vers l'API Conversions, token généré manuellement dans Events Manager sans dépendre de la connexion Shopify cassée), soit attendre la résolution du ticket support Meta.

## Résultat du suivi automatique — 12 juillet 2026, ~00:15 CEST

**Le contournement fonctionne.** Premier tick du cron local ayant trouvé un résultat concret : Events Manager (Ensembles de données → FRAÎK → Vue d'ensemble) affiche désormais une carte « Évènements de site Web » (absente avant) et « Intégrations : Pixel Meta » (avant : « Aucune intégration »). Dans le tableau des événements :

- `PageView` — **13 événements reçus**, statut Actif, dernière réception il y a 23 minutes au moment du check, intégration « Navigateur ».
- `Vue du contenu` (ViewContent) — **9 événements reçus**, statut Actif, même ancienneté.

`AddToCart`, `InitiateCheckout` et `Purchase` n'ont pas été vérifiés individuellement lors de ce check (liste tronquée par la hauteur de la fenêtre), mais le mécanisme `fetch()` vers `facebook.com/tr` est validé — pas de raison structurelle que les autres événements ne remontent pas aussi puisqu'ils utilisent la même fonction `trackMeta()`. À reconfirmer sur ces événements précis à la prochaine session (déclencher un ATC réel et vérifier).

**Cron de suivi automatique arrêté** (objectif atteint, plus besoin de vérification répétée).

## Fichiers modifiés

Uniquement le pixel personnalisé dans Shopify (hors dépôt git, configuré via l'admin Shopify). Aucun fichier du thème modifié pendant cette tâche.
