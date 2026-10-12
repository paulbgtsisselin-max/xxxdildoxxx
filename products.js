// Catalogue produits.
// Pour le dropshipping : renseignez "supplier" avec le lien fournisseur (AliExpress, CJ Dropshipping, BigBuy…)
// et remplacez "emoji" par "image" (URL de la photo fournisseur) quand vous les aurez.
const PRODUCTS = [
  // ---------- HERBE À CHAT ----------
  {
    id: "h1", category: "herbe", emoji: "🌱", badge: "Bio",
    name: "Graines de cataire (Nepeta cataria)",
    desc: "Sachet d'environ 500 graines bio de la vraie « herbe à chat ». Se sème en pot, sur un balcon ou au jardin, et repousse chaque année.",
    price: 4.9, supplier: ""
  },
  {
    id: "h2", category: "herbe", emoji: "🌾", badge: "Best-seller",
    name: "Kit herbe à chat à faire pousser",
    desc: "Pot en bambou, substrat de coco et graines d'avoine, d'orge et de blé. Prête à brouter en 5 à 7 jours, aide à éliminer les boules de poils.",
    price: 12.9, supplier: "https://www.aliexpress.us/item/3256810457998238.html"
  },
  {
    id: "h3", category: "herbe", emoji: "🌾",
    name: "Recharge graines mélange avoine / orge / blé — 500 g",
    desc: "De quoi faire une quinzaine de semis. Semez un nouveau pot toutes les 2 semaines pour avoir toujours de l'herbe fraîche.",
    price: 6.9, supplier: ""
  },
  {
    id: "h4", category: "herbe", emoji: "🍃", badge: "Bio",
    name: "Cataire séchée en vrac — 30 g",
    desc: "Feuilles et fleurs séchées, riches en népétalactone. À saupoudrer sur un griffoir, un panier ou dans un jouet rechargeable.",
    price: 7.9, supplier: "https://www.aliexpress.com/w/wholesale-cat-nip.html"
  },
  {
    id: "h5", category: "herbe", emoji: "🪵", badge: "Nouveau",
    name: "Bâtonnets de matatabi (silvervine) × 6",
    desc: "Tiges d'Actinidia polygama à mâchouiller. Fonctionne souvent chez les chats insensibles à la cataire et aide au nettoyage des dents.",
    price: 7.5, supplier: "https://www.aliexpress.com/w/wholesale-catnip-stick.html"
  },
  {
    id: "h6", category: "herbe", emoji: "✨",
    name: "Poudre de matatabi — 5 g",
    desc: "Fruit galle de matatabi broyé, très concentré : une pincée suffit. Idéal pour redonner de l'intérêt à un vieux jouet.",
    price: 5.9, supplier: "https://www.alibaba.com/product-detail/Factory-Supply-Silvervine-Raw-Material-Matatabi_1600935864191.html"
  },
  {
    id: "h7", category: "herbe", emoji: "🌿",
    name: "Racine de valériane séchée — 20 g",
    desc: "Odeur forte qui attire beaucoup de chats, effet plutôt apaisant après une phase de jeu. À glisser dans un coussin à kicker.",
    price: 6.9, supplier: "https://www.alibaba.com/product-introduction/Xie-cao-gen-wholesale-dried-valeriana_1600559069778.html"
  },
  {
    id: "h8", category: "herbe", emoji: "🪵",
    name: "Bois de chèvrefeuille de Tartarie",
    desc: "Morceaux de bois de Lonicera tatarica à mordiller et frotter. Alternative douce et durable, l'odeur se réactive en humidifiant le bois.",
    price: 9.9, supplier: ""
  },
  {
    id: "h9", category: "herbe", emoji: "🟢",
    name: "Boule de cataire compressée à fixer au mur",
    desc: "Boule rotative de cataire pressée sur support adhésif. Le chat la lèche et se frotte dessus, sans miettes partout.",
    price: 6.5, supplier: "https://www.aliexpress.com/w/wholesale-catnip-ball-wall.html"
  },
  {
    id: "h10", category: "herbe", emoji: "💦",
    name: "Spray à la cataire — 60 ml",
    desc: "Extrait de cataire en spray pour attirer le chat vers son griffoir ou son nouveau couchage plutôt que vers le canapé.",
    price: 8.9, supplier: "https://www.aliexpress.us/w/wholesale-catnip-spray.html"
  },

  // ---------- ARBRES À CHAT ----------
  {
    id: "a1", category: "arbres", emoji: "🪵",
    name: "Griffoir colonne en sisal — 60 cm",
    desc: "Poteau en sisal naturel sur base stable avec pompon suspendu. La solution la plus compacte pour les petits espaces.",
    price: 19.9, supplier: "https://www.aliexpress.us/item/3256811820515246.html"
  },
  {
    id: "a2", category: "arbres", emoji: "📦",
    name: "Griffoir incliné en carton recyclé",
    desc: "Rampe en carton ondulé, livrée avec un sachet de cataire. Réversible pour doubler sa durée de vie.",
    price: 14.9, supplier: "https://www.aliexpress.com/w/wholesale-cardboard-cat-scratch.html"
  },
  {
    id: "a3", category: "arbres", emoji: "🌳", badge: "Best-seller",
    name: "Arbre à chat compact — 90 cm",
    desc: "Deux plateformes, une niche cosy et des poteaux en sisal. Tient dans un coin de pièce, parfait pour un studio.",
    price: 44.9, supplier: "https://www.aliexpress.com/w/wholesale-cat-tree-condo-tower.html"
  },
  {
    id: "a4", category: "arbres", emoji: "🏰",
    name: "Arbre à chat XXL multi-niveaux — 160 cm",
    desc: "Deux niches, un hamac, trois plateformes et un poste d'observation. Idéal pour plusieurs chats ou les grands gabarits.",
    price: 99.9, supplier: "https://www.aliexpress.com/w/wholesale-cat-tower-tree.html"
  },
  {
    id: "a5", category: "arbres", emoji: "📏",
    name: "Arbre à chat sol-plafond réglable",
    desc: "Se bloque entre le sol et le plafond (230 à 270 cm) sans percer. Très stable, prend une emprise au sol minimale.",
    price: 119, supplier: "https://www.aliexpress.us/item/3256806910234710.html"
  },
  {
    id: "a6", category: "arbres", emoji: "🧗",
    name: "Kit d'étagères murales — 5 pièces",
    desc: "Marches en bois, pont suspendu et petite niche à fixer au mur pour créer un parcours en hauteur.",
    price: 74.9, supplier: "https://www.aliexpress.com/w/wholesale-cat-wall-shelves.html"
  },
  {
    id: "a7", category: "arbres", emoji: "🌲", badge: "Bois naturel",
    name: "Arbre à chat design en bois massif",
    desc: "Structure en bois clair et coussins en coton, à l'esthétique scandinave. Se fond dans la déco du salon.",
    price: 139, supplier: "https://www.aliexpress.com/w/wholesale-cat-tree-wood.html"
  },
  {
    id: "a8", category: "arbres", emoji: "🌵",
    name: "Griffoir cactus en sisal",
    desc: "Trois branches en sisal en forme de cactus, joli et efficace. Hauteur 65 cm.",
    price: 29.9, supplier: "https://www.aliexpress.us/w/wholesale-cactus-scratcher.html"
  },
  {
    id: "a9", category: "arbres", emoji: "🪟",
    name: "Hamac de fenêtre à ventouses",
    desc: "Supporte jusqu'à 18 kg. Le meilleur poste pour regarder les oiseaux et se chauffer au soleil.",
    price: 24.9, supplier: "https://www.aliexpress.us/item/3256802768769584.html"
  },

  // ---------- JOUETS ----------
  {
    id: "j1", category: "jouets", emoji: "🪶", badge: "Best-seller",
    name: "Canne à plumes + 5 recharges",
    desc: "Canne télescopique avec plumes, grelots et ver en tissu interchangeables. Le jouet de chasse indispensable.",
    price: 11.9, supplier: "https://www.aliexpress.com/w/wholesale-cat-toy-replacement-feather.html"
  },
  {
    id: "j2", category: "jouets", emoji: "🐭",
    name: "Lot de 6 souris en peluche à la cataire",
    desc: "Souris en feutre et coton fourrées à la cataire. Assez légères pour être lancées et rapportées.",
    price: 8.9, supplier: "https://fr.aliexpress.com/w/wholesale-catnip-mouse.html"
  },
  {
    id: "j3", category: "jouets", emoji: "🎡",
    name: "Circuit à balles 3 étages",
    desc: "Tour avec trois pistes et balles lumineuses. Le chat peut jouer seul pendant votre absence.",
    price: 16.9, supplier: "https://www.aliexpress.us/item/3256807363610462.html"
  },
  {
    id: "j4", category: "jouets", emoji: "🌀",
    name: "Tunnel pliable 3 voies",
    desc: "Tunnel en tissu froissant avec boule suspendue, se replie à plat. Parfait pour les courses-poursuites.",
    price: 15.9, supplier: "https://www.aliexpress.com/w/wholesale-tunnel-for-cats.html"
  },
  {
    id: "j5", category: "jouets", emoji: "🐟",
    name: "Poisson qui frétille (rechargeable USB)",
    desc: "Se met à bouger quand le chat le touche. Housse lavable et poche pour ajouter de la cataire.",
    price: 13.9, supplier: "https://www.alibaba.com/product-detail/Usb-Electric-Moving-Fish-Catnip-Dancing_62517636602.html"
  },
  {
    id: "j6", category: "jouets", emoji: "🧩", badge: "Anti-ennui",
    name: "Tapis de fouille pour friandises",
    desc: "Tapis en feutrine où cacher croquettes et friandises. Stimule le flair et ralentit les gloutons.",
    price: 14.9, supplier: "https://www.aliexpress.us/item/3256808640850699.html"
  },
  {
    id: "j7", category: "jouets", emoji: "⚽",
    name: "Balle distributrice de croquettes",
    desc: "Le chat fait rouler la balle pour libérer ses croquettes. Ouverture réglable selon la taille des croquettes.",
    price: 7.9, supplier: "https://www.aliexpress.us/w/wholesale-pet-dog-cat-food-dispenser-ball.html"
  },
  {
    id: "j8", category: "jouets", emoji: "🔴",
    name: "Laser automatique rotatif",
    desc: "Point lumineux en mouvement aléatoire, arrêt automatique après 15 minutes. Terminez toujours par un jouet attrapable !",
    price: 19.9, supplier: "https://www.aliexpress.us/w/wholesale-cat-laser-toy-automatic.html"
  },
  {
    id: "j9", category: "jouets", emoji: "🧶",
    name: "Coussin kicker en lin",
    desc: "Coussin long à attraper et « lapiner » avec les pattes arrière. Rechargeable en valériane ou cataire.",
    price: 9.9, supplier: "https://www.aliexpress.com/item/1005005999557122.html"
  },
  {
    id: "j10", category: "jouets", emoji: "🛎️",
    name: "Lot de 10 balles à grelots",
    desc: "Balles légères en plastique ajouré avec grelot. Simples, pas chères, toujours efficaces.",
    price: 5.9, supplier: ""
  },

  // ---------- FONTAINES & GAMELLES ----------
  {
    id: "f1", category: "fontaines", emoji: "⛲", badge: "Best-seller",
    name: "Fontaine à eau silencieuse — 2 L",
    desc: "Pompe ultra-silencieuse, triple filtration (mousse, charbon, résine) et voyant de niveau d'eau.",
    price: 29.9, supplier: "https://www.aliexpress.us/item/3256811685820905.html"
  },
  {
    id: "f2", category: "fontaines", emoji: "🏺",
    name: "Fontaine en céramique — 2,1 L",
    desc: "Céramique émaillée, facile à nettoyer et passe au lave-vaisselle. Plus hygiénique que le plastique.",
    price: 49.9, supplier: "https://www.aliexpress.com/w/wholesale-ceramic-cat-water-fountain.html"
  },
  {
    id: "f3", category: "fontaines", emoji: "🔘",
    name: "Fontaine en inox — 3 L",
    desc: "Plateau en acier inoxydable, grande capacité pour plusieurs chats, pompe basse consommation.",
    price: 39.9, supplier: "https://www.aliexpress.com/w/wholesale-stainless-steel-cat-fountain.html"
  },
  {
    id: "f4", category: "fontaines", emoji: "🔄",
    name: "Filtres de rechange × 6",
    desc: "Compatibles avec nos fontaines. À changer toutes les 2 à 4 semaines pour une eau toujours fraîche.",
    price: 9.9, supplier: "https://www.aliexpress.com/w/wholesale-cat-water-filter.html"
  },
  {
    id: "f5", category: "fontaines", emoji: "🥣",
    name: "Gamelle surélevée inclinée en céramique",
    desc: "Inclinaison de 15° pour une posture plus confortable, bords bas qui ne gênent pas les moustaches.",
    price: 16.9, supplier: "https://www.aliexpress.com/w/wholesale-ceramic-tilted-cat-bowl.html"
  },
  {
    id: "f6", category: "fontaines", emoji: "🎋", badge: "Bois naturel",
    name: "Double gamelle sur support en bambou",
    desc: "Deux bols en céramique sur un support en bambou surélevé. Un pour l'eau, un pour les croquettes.",
    price: 22.9, supplier: "https://www.aliexpress.us/w/wholesale-ceramic-cat-dish.html"
  },
  {
    id: "f7", category: "fontaines", emoji: "🐢",
    name: "Gamelle anti-glouton",
    desc: "Reliefs en labyrinthe qui obligent à manger plus lentement. Réduit les vomissements et les ballonnements.",
    price: 11.9, supplier: "https://www.aliexpress.us/w/wholesale-slow-feeder-cat.html"
  },
  {
    id: "f8", category: "fontaines", emoji: "⏰",
    name: "Distributeur de croquettes programmable — 4 L",
    desc: "Jusqu'à 6 repas par jour à heures fixes, enregistrement vocal et alimentation secteur ou piles.",
    price: 59.9, supplier: "https://www.aliexpress.com/w/wholesale-automatic-cat-feeders.html"
  },
  {
    id: "f9", category: "fontaines", emoji: "🧽",
    name: "Tapis de gamelle en silicone",
    desc: "Rebords relevés anti-débordement, antidérapant, lavable en machine. Protège le sol autour des repas.",
    price: 8.9, supplier: "https://www.aliexpress.us/item/3256811717295967.html"
  }
];
