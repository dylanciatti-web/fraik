# Fix — `MissingRefError` dans `header.js` (JS du header mort)

**Date :** 2026-07-11
**Thème :** `fraik V1` (Horizon 4.1.1), ID live `187779088764`
**Boutique :** `17wkw9-2a.myshopify.com`
**Statut :** ✅ corrigé et poussé en live

## Symptôme

Erreur JavaScript sur **toutes** les pages, à chaque chargement (desktop + mobile) :

```
MissingRefError: Required ref "headerDrawerContainer" not found in component header-component
    at HeaderComponent.connectedCallback (assets/component.js)
    at HeaderComponent.connectedCallback (assets/header.js)
```

L'exception est levée dans le `connectedCallback` de `<header-component>` → le composant **n'achève jamais son initialisation** → tout le JavaScript du header est inerte (sticky, marquee de la barre d'annonces, calcul du style de menu, toggles/tiroirs).

Détecté via une session Microsoft Clarity de trafic Instagram payant, puis reproduit dans la console sur `fraik.fr`.

## Cause racine

`assets/header.js` (ligne 28) déclare 3 refs obligatoires :

```js
requiredRefs = ['headerDrawerContainer', 'headerMenu', 'headerRowTop'];
```

Origine de chaque ref dans le markup :

| Ref | Rendu dans | Condition de rendu | Présent au runtime |
|---|---|---|---|
| `headerRowTop` | `sections/header.liquid` (L448) | toujours | ✅ |
| `headerDrawerContainer` | `blocks/_header-menu.liquid` (L18) | variante `mobile` du bloc menu | ❌ |
| `headerMenu` | `blocks/_header-menu.liquid` (L167) | variante menu par défaut | ❌ |

Les deux éléments `headerDrawerContainer` et `headerMenu` ne sont produits **que si un bloc menu de navigation `_header-menu` est présent dans le header**. La boutique étant **mono-produit sans menu de navigation** (choix assumé : tout le trafic sur la fiche produit), les captures `menu` et `drawer_menu` de `header.liquid` sont vides → aucun des deux éléments n'entre dans le DOM → `header.js` lève `MissingRefError` sur le premier manquant (`headerDrawerContainer`).

Ce n'est pas une régression du code Fraïk : c'est un conflit entre le thème Horizon (qui suppose un menu) et le header sans navigation.

## Correctif

`headerDrawerContainer` et `headerMenu` ne sont **jamais consommés** ailleurs dans `header.js` (uniquement des `@property` JSDoc). On les retire donc de `requiredRefs` :

```js
// Fraïk : header sans menu de navigation (boutique mono-produit) → les refs
// headerDrawerContainer et headerMenu ne sont jamais rendus dans le DOM.
// On ne garde que headerRowTop pour éviter le MissingRefError qui faisait
// planter le connectedCallback et cassait tout le JS du header.
requiredRefs = ['headerRowTop'];
```

Fichier modifié : **`shopify/assets/header.js`** (une seule ligne + commentaire).

## Procédure suivie

1. Fix appliqué en local, testé sur un **thème dupliqué non publié** (preview mobile) → `MissingRefError` disparue, JS du header réactivé.
2. Diff de sécurité `live actuel` vs `fix` juste avant push → seule la ligne `requiredRefs` diffère.
3. Push ciblé : `shopify theme push --only assets/header.js --theme 187779088764 --allow-live`.
4. Vérifié en live post-push (re-pull du fichier + console propre).

## ⚠️ Maintenance

`assets/header.js` est un fichier du **thème stock Horizon**. **Toute mise à jour du thème écrasera ce correctif et le bug reviendra.** → Re-appliquer la ligne `requiredRefs = ['headerRowTop'];` après chaque update.

## Hors périmètre (à traiter séparément si besoin)

- **Tiroir panier** vs rechargement `/cart` : réglage de thème séparé (Personnaliser → panier : type « page » vs « tiroir »).
- **0 clic ATC** des sessions Instagram : les enregistrements Clarity montrent des visiteurs qui scrollent sans jamais cliquer les CTA — problème page/offre distinct du bug technique.
