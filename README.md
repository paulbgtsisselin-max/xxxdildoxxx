# Chat Perché — boutique dropshipping pour chats d'appartement

Site statique simple (HTML / CSS / JS, sans dépendance). Ouvrez `index.html` dans un navigateur.

## Onglets
- **Accueil**
- **Herbe à chat** : graines de cataire, kit à faire pousser (avoine/orge/blé), cataire séchée, matatabi, valériane, chèvrefeuille de Tartarie, spray…
- **Arbres à chat** : griffoirs, compact, XXL, sol-plafond, étagères murales, bois massif, hamac de fenêtre
- **Jouets** : canne à plumes, souris à la cataire, circuit à balles, tunnel, tapis de fouille, laser…
- **Fontaines & gamelles** : fontaines plastique / céramique / inox, filtres, gamelles surélevées, anti-glouton, distributeur

## Personnaliser
- Les produits sont dans `products.js` : nom, description, prix, badge, `supplier` (lien de l'article fournisseur)
  et `image` (photo). Sans `image`, la carte affiche l'emoji du produit.
- Photos produits : `images/produits/<id>.jpg`, photos fournisseurs AliExpress (800 px) de l'article indiqué dans `supplier`.
  Si vous changez de fournisseur pour un produit, changez aussi sa photo.
- Couleurs dans `style.css` (variables `:root`).
- Le bouton « Commander » est à brancher sur un vrai paiement (Stripe, Shopify, WooCommerce…).
- Photo d'accueil : `images/chat-accueil.jpg` (« Chelsea », photo de Stefan van der Walt, licence CC0 / domaine public,
  issue des données d'exemple de scikit-image). Remplacez le fichier par votre propre photo pour la changer.
