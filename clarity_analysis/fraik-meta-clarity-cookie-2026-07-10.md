# Fraïk — Premier bilan Meta Ads, analyse Clarity et optimisation de la bannière cookies

_Date : 10 juillet 2026_

## Contexte

- Budget total du test : **100 €**
- Dépenses au moment du premier bilan : environ **25 €**
- Objectif : valider rapidement une combinaison **créa + offre + page produit** qui convertit
- Approche : test court terme, pas construction de marque long terme
- Campagne Meta Ads active avec 3 publicités :
  - `AD01_VIDEO_V7_BRUME`
  - `AD02_STATIC_VENTILATEUR_CHAUD`
  - `AD03_STATIC_BRUME_FRAICHE`

## Optimisations automatiques Meta

Une publicité statique est apparue dans le feed Instagram avec de la musique.

Cause :
- Certaines optimisations Advantage+ étaient restées activées
- Meta avait transformé la statique en variante enrichie avec musique / animation

Décision :
- Désactiver les optimisations automatiques qui modifient la créa
- Conserver uniquement ce qui n’altère pas le visuel d’origine

Réglages retenus :
- `Commentaires pertinents` : activé
- `Améliorer le CTA` : désactivé
- `Ajouter des effets vidéo` : désactivé
- `Ajouter de la musique` : désactivé
- `Ajuster luminosité et contraste` : désactivé
- `Toutes les optimisations` : désactivé

Extensions de site :
- `Images` : activé uniquement si les images récupérées sont cohérentes
- `Liens de découverte` : désactivé
- `Résumé du site Web` : activé
- `Promotions / codes promo` : désactivé
- Vérifier que les arguments affichés sont vrais, notamment la note `4,8/5`

## Premier bilan Meta Ads

| Publicité | Dépensé | CTR lien | CPC | CPM |
|---|---:|---:|---:|---:|
| `AD02_STATIC_VENTILATEUR_CHAUD` | 7,21 € | 5,03 % | 0,18 € | 9,30 € |
| `AD01_VIDEO_V7_BRUME` | 9,39 € | 2,33 % | 0,41 € | 9,52 € |
| `AD03_STATIC_BRUME_FRAICHE` | 8,76 € | 2,93 % | 0,73 € | 21,37 € |

### Lecture

#### `AD02_STATIC_VENTILATEUR_CHAUD`
- Meilleure créa
- CTR très élevé
- CPC très bas
- Angle problème très efficace

#### `AD01_VIDEO_V7_BRUME`
- Performance correcte
- Peut continuer à tourner

#### `AD03_STATIC_BRUME_FRAICHE`
- CPC nettement plus élevé
- CPM très supérieur aux autres
- À surveiller
- Candidate à couper si l’écart reste important au prochain palier

### Limite de l’export

Colonnes manquantes :
- vues de page de destination
- ajouts au panier
- paiements initiés
- achats
- ROAS

## Correction importante sur les conversions

Un ajout au panier avait initialement été considéré comme réel.

Correction :
- Cet ajout au panier provenait d’un test effectué par Dylan
- Il ne doit pas être pris en compte

État réel du tunnel :
- Clics : oui
- Sessions engagées : oui
- Ajouts au panier réels : **0**
- Checkouts réels : **0**
- Achats : **0**

Conclusion prudente :
- La créa génère de l’intérêt
- La page ne transforme pas encore cet intérêt en intention d’achat mesurable
- Il est encore trop tôt pour conclure définitivement à environ 25 € dépensés

## Analyse Microsoft Clarity

Rapport détaillé :

```text
clarity_analysis/analysis.md
```

### Données disponibles

- 28 sessions recensées sur les 3 derniers jours
- Majorité des visiteurs provenant d’Instagram
- Navigation principalement dans le navigateur intégré Instagram
- Plusieurs sessions longues et engagées
- Plusieurs rebonds très courts

### Session A — 1 min 21

Parcours :
- Arrivée sur la page produit
- Consultation du hero
- Scroll vers prix / CTA
- Retour au hero
- Consultation détaillée du carrousel
- Retour au CTA
- Scroll jusqu’au bundle
- Fin de session sur la zone des offres

Constat :
- Le visiteur ne rebondit pas immédiatement
- Il revient en arrière
- Il inspecte les images
- Il atteint la zone commerciale
- Aucun ajout panier confirmé

### Session B — 1 min 25

Parcours :
- Acceptation immédiate de la bannière cookies
- Consultation de plusieurs images du carrousel
- Scroll rapide vers le bundle
- Retour vers le mécanisme produit
- Consultation du contenu explicatif
- Lecture des avis
- Consultation des éléments de réassurance
- Consultation du comparatif
- Scroll jusqu’en bas de page
- Retour complet vers le haut
- Nouvelle consultation du carrousel
- Fin de session sans ajout panier

Constat :
- La page retient l’attention
- Le carrousel est un élément fort
- Le visiteur cherche de l’information avant de décider
- Aucun signal d’achat confirmé

### Sessions courtes

- Certaines quittent quasi immédiatement
- Certaines restent bloquées avec la bannière cookies affichée
- Une session de 23 secondes atteint seulement le début de la zone offre

## Patterns observés

### Ce qui fonctionne

- Le hero n’est pas ignoré
- Le carrousel attire fortement l’attention
- Certains visiteurs reviennent plusieurs fois vers le haut de page
- Plusieurs utilisateurs scrollent loin
- La page n’est pas rejetée instantanément par tous les visiteurs

### Ce qui ne fonctionne pas encore

- Aucun ajout panier réel
- Aucun clic d’achat confirmé
- Aucun checkout réel
- Aucun achat

### Hypothèses encore ouvertes

- valeur perçue insuffisante
- justification du prix insuffisante
- manque de preuve juste avant le CTA
- manque de conviction au moment de passer à l’action
- ordre des sections perfectible

## Décision prise sur la page produit

À environ 25 € dépensés :

- Ne pas refaire toute la PDP
- Ne pas modifier le hero
- Ne pas modifier le carrousel
- Ne pas modifier l’offre immédiatement
- Ne pas lancer un popup de réduction pour l’instant
- Ne pas toucher à Meta sauf erreur évidente

Palier de décision :
- Continuer jusqu’à environ **40 € dépensés**
- Refaire un point complet à ce niveau

À 40 € :
- Si au moins 1 vrai ajout panier : laisser tourner
- Si 0 ajout panier réel :
  - renforcer la zone avant le CTA
  - remonter preuve / mécanisme / justification du prix
- Si `AD03` reste nettement derrière :
  - la couper

## Optimisation immédiate : bannière cookies

La bannière cookies a été identifiée comme une friction claire sur mobile.

### Problème

- Elle masque une grande partie du hero
- Elle apparaît dès l’arrivée
- Elle peut absorber plusieurs secondes de la session
- Elle réduit l’impact du premier écran

### Identification technique

La bannière n’est pas un composant du thème.

Il s’agit de la bannière native Shopify :

```text
Shopify Customer Privacy
```

Elle est injectée automatiquement selon la géolocalisation et la réglementation applicable.

Classes identifiées :

```css
.shopify-pc__banner__dialog
.shopify-pc__banner__wrapper
.shopify-pc__banner__body
.shopify-pc__banner__btns
```

### Modification réalisée

Mobile uniquement :

- Bannière transformée en barre compacte collée en bas
- Hauteur finale : environ 69 px
- Coins arrondis en haut
- Titre masqué
- Texte réduit à une ligne avec ellipse
- Bouton `Accepter` rendu prioritaire
- Bouton `Refuser` conservé et aussi accessible
- `Gérer vos préférences` transformé en lien discret
- Aucun changement desktop
- Aucune logique de consentement modifiée
- Aucun impact sur :
  - stockage du consentement
  - blocage des scripts
  - conformité
  - fonctionnement Shopify

Point technique corrigé :
- Shopify appliquait des marges et paddings natifs trop importants
- Ils ont été neutralisés pour éviter un contenu réel de 133–158 px dans une barre de 69 px

### Résultat attendu

- Le hero reste visible dès l’arrivée
- La conformité est conservée
- La bannière devient beaucoup moins intrusive
- Le test Meta reste propre car ni l’offre ni le message ne sont modifiés

## Prochaine étape

1. Laisser la campagne tourner jusqu’à environ 40 € dépensés
2. Ne plus toucher au hero ni au carrousel
3. Continuer à regarder les sessions Clarity
4. Exporter à nouveau les métriques Meta avec :
   - dépenses
   - impressions
   - CPM
   - CTR sortant
   - CPC sortant
   - clics sur le lien
   - vues de page de destination
   - ajouts au panier
   - paiements initiés
   - achats
   - coût par achat
   - valeur de conversion
5. Refaire un diagnostic à 40 €

## Règle de décision pour le reste du budget

Budget restant approximatif : **75 €**

### Jusqu’à 40 €
- Laisser tourner
- Collecter les données
- Surveiller Clarity

### À 40 €
- Garder les meilleures créas
- Couper la moins rentable si l’écart est confirmé
- Vérifier si un vrai ajout panier est apparu

### Entre 40 et 60 €
Si toujours 0 ajout panier :
- créer une V2 ciblée de la zone avant CTA
- ajouter :
  - mécanisme simple
  - preuve sociale
  - comparaison avec ventilateur classique
  - justification du prix

### À 70–80 €
Si toujours aucun signal d’achat :
- stopper le test
- ne pas consommer automatiquement les 100 €
- réserver le solde à une nouvelle créa ou une nouvelle offre

## État actuel

- L’angle publicitaire `ventilateur qui brasse de l’air chaud` fonctionne
- Le carrousel retient l’attention
- La page est consultée en profondeur par certains visiteurs
- Aucun vrai signal d’achat n’est encore enregistré
- La bannière cookies mobile était une friction réelle et a été corrigée
- La prochaine décision sera prise à environ 40 € de dépenses
