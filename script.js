const FREE_SHIPPING = 39;
const SHIPPING_COST = 4.9;

const euro = (n) => n.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
const $ = (sel) => document.querySelector(sel);

// ---------- Onglets ----------
function showTab(name) {
  document.querySelectorAll(".panel").forEach((p) => p.classList.toggle("active", p.id === `panel-${name}`));
  document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t.dataset.tab === name));
  if (location.hash !== `#${name}`) history.replaceState(null, "", `#${name}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-tab]");
  if (!trigger) return;
  e.preventDefault();
  showTab(trigger.dataset.tab);
});

// ---------- Catalogue ----------
function renderProducts() {
  document.querySelectorAll(".grid[data-category]").forEach((grid) => {
    const items = PRODUCTS.filter((p) => p.category === grid.dataset.category);
    grid.innerHTML = items.map((p) => `
      <article class="card">
        <div class="card-media cat-${p.category}">
          ${p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy">` : `<span>${p.emoji}</span>`}
          ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
        </div>
        <div class="card-body">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <div class="card-foot">
            <span class="price">${euro(p.price)}</span>
            <button class="btn btn-small" data-add="${p.id}">Ajouter</button>
          </div>
        </div>
      </article>`).join("");
  });
}

// ---------- Panier ----------
let cart = {};
try { cart = JSON.parse(localStorage.getItem("cart")) || {}; } catch { cart = {}; }

function saveCart() {
  try { localStorage.setItem("cart", JSON.stringify(cart)); } catch { /* stockage indisponible */ }
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
  const p = PRODUCTS.find((x) => x.id === id);
  toast(`« ${p.name} » ajouté au panier`);
}

function changeQty(id, delta) {
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
  renderCart();
}

function renderCart() {
  const entries = Object.entries(cart)
    .map(([id, qty]) => ({ p: PRODUCTS.find((x) => x.id === id), qty }))
    .filter((e) => e.p);
  const count = entries.reduce((s, e) => s + e.qty, 0);
  const subtotal = entries.reduce((s, e) => s + e.qty * e.p.price, 0);
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING ? 0 : SHIPPING_COST;

  $("#cartCount").textContent = count;
  $("#cartItems").innerHTML = entries.length
    ? entries.map(({ p, qty }) => `
      <div class="cart-item">
        <div class="cart-thumb cat-${p.category}">${p.emoji}</div>
        <div class="cart-info">
          <p class="cart-name">${p.name}</p>
          <p class="muted small">${euro(p.price)}</p>
          <div class="qty">
            <button data-qty="${p.id}" data-delta="-1" aria-label="Retirer un">−</button>
            <span>${qty}</span>
            <button data-qty="${p.id}" data-delta="1" aria-label="Ajouter un">+</button>
          </div>
        </div>
        <strong>${euro(p.price * qty)}</strong>
      </div>`).join("")
    : `<p class="empty">Votre panier est vide.<br>Votre chat mérite mieux 🐾</p>`;

  $("#shippingNote").textContent = subtotal === 0 ? ""
    : shipping === 0 ? "🎉 Livraison offerte"
    : `Plus que ${euro(FREE_SHIPPING - subtotal)} pour la livraison offerte (sinon ${euro(SHIPPING_COST)})`;
  $("#cartTotal").textContent = euro(subtotal + shipping);
  $("#checkoutBtn").disabled = count === 0;
}

function openCart(open) {
  $("#cart").classList.toggle("open", open);
  $("#overlay").classList.toggle("open", open);
}

document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add) return addToCart(add.dataset.add);
  const qty = e.target.closest("[data-qty]");
  if (qty) return changeQty(qty.dataset.qty, Number(qty.dataset.delta));
});

$("#cartBtn").addEventListener("click", () => openCart(true));
$("#cartClose").addEventListener("click", () => openCart(false));
$("#overlay").addEventListener("click", () => openCart(false));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") openCart(false); });

// À brancher sur Shopify / Stripe / WooCommerce pour le vrai paiement.
$("#checkoutBtn").addEventListener("click", () => {
  toast("Paiement à connecter (Stripe, Shopify…) — commande non envoyée");
});

// ---------- Toast ----------
let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

// ---------- Init ----------
renderProducts();
renderCart();
const initial = location.hash.slice(1);
if (document.getElementById(`panel-${initial}`)) showTab(initial);
