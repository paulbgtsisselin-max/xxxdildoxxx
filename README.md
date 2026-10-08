# Chat Perché — boutique dropshipping pour chats d'appartement

Site statique simple (HTML / CSS / JS, sans dépendance). Ouvrez `index.html` dans un navigateur.

## Onglets
- **Accueil**
- **Herbe à chat** : graines de cataire, kit à faire pousser (avoine/orge/blé), cataire séchée, matatabi, valériane, chèvrefeuille de Tartarie, spray…
- **Arbres à chat** : griffoirs, compact, XXL, sol-plafond, étagères murales, bois massif, hamac de fenêtre
- **Jouets** : canne à plumes, souris à la cataire, circuit à balles, tunnel, tapis de fouille, laser…
- **Fontaines & gamelles** : fontaines plastique / céramique / inox, filtres, gamelles surélevées, anti-glouton, distributeur

## Personnaliser
- Les produits sont dans `products.js` : nom, description, prix, badge.
  Ajoutez `image: "https://..."` (photo fournisseur) pour remplacer l'emoji, et `supplier` pour garder le lien fournisseur.
- Couleurs dans `style.css` (variables `:root`).
- Le bouton « Commander » est à brancher sur un vrai paiement (Stripe, Shopify, WooCommerce…).
