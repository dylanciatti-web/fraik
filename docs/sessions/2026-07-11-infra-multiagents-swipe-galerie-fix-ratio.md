# Infra multi-agents + swipe galerie + fix ratio mobile — Fraïk

**Date** : 2026-07-11 (soir)

## Infra multi-agents mise en place

Baseline git complet commité (le thème et les fichiers de handoff avaient été poussés en live/créés sans être commités). `gh` CLI installé et connecté (remplace la gestion manuelle de token). Règle de coordination ajoutée dans `AGENTS.md`/`CLAUDE.md` : commit immédiat après tout push live (Claude Code ou Codex), vérifier `git status`/`PROJECT_CONTEXT.md` avant toute tâche à risque.

## Fonctionnalité livrée : swipe tactile galerie

Swipe tactile sur la galerie photo/vidéo produit (`.gallery-main`) — swipe gauche/droite avance/recule dans les miniatures en réutilisant `fraikShowImage`/`fraikShowVideo` existants, verrouillage d'axe pour ne pas bloquer le scroll vertical, tap simple toujours inchangé (zoom lightbox). Validé sur thème de test (`fraik V4 TEST CRO`, `#187915075964`) avant publication live. Commit `e77cd24`.

## Bug corrigé : barres noires galerie mobile

Cause : `.gallery-main{aspect-ratio:3/2}` en mobile ne correspondait plus au format réel des médias (vidéo 1080×1080, 14/15 images 1254×1254 — carré). Remis à `1/1`. Validé sur thème de test puis publié live. Commit `17507e0`.

**Règle anti-régression ajoutée dans `AGENTS.md`/`CLAUDE.md` :** ne pas remodifier `aspect-ratio` de `.gallery-main` sans revérifier les dimensions réelles des médias produit. Si un gain de hauteur mobile est encore souhaité, le faire ailleurs (padding, gaps) plutôt qu'en cassant ce ratio.
