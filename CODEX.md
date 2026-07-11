# Instructions de continuité

Avant toute analyse ou modification, lis entièrement `PROJECT_CONTEXT.md` (volontairement court : état actuel, tâches ouvertes, garde-fous). Ne va lire un fichier de `docs/sessions/` que si la tâche en cours a besoin du détail d'une session précise — ne pas tout relire par défaut.

Après tout diagnostic, changement de code, test, décision ou résultat significatif :
- si c'est un jalon important qui change l'état courant : mets à jour la section « État actuel » ou « Tâches ouvertes » de `PROJECT_CONTEXT.md`, en distinguant faits confirmés et hypothèses, avec les fichiers modifiés et les vérifications faites ;
- si c'est un compte-rendu détaillé de session (QA, diffs, étapes) : crée ou complète un fichier daté dans `docs/sessions/` plutôt que de l'empiler dans `PROJECT_CONTEXT.md`, et ajoute une ligne dans l'index de `PROJECT_CONTEXT.md`.

`PROJECT_CONTEXT.md` est la source de vérité commune avec Claude Code — il doit rester lisible en entier en quelques secondes. S'il redevient long, archive les sections datées vers `docs/sessions/` avant d'ajouter du contenu.

Ne modifie pas les actifs Meta, Shopify ou les paramètres de campagne sans confirmation explicite du propriétaire.
