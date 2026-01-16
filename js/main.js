/**
 * @fileoverview Arquivo principal - inicializa a aplicação
 * @author Sua Equipe
 * @version 1.0.0
 */

import { products } from "./data/products-mock.data.js";
import { cartItems } from "./data/cart-item-mock.data.js";
import { validateElement } from "./utils/validators.js";
import { showNotification, getDataAttributeAsNumber } from "./utils/helpers.js";
import { getProductById } from "./services/product.service.js";
import { addToCart as addToCartService } from "./services/cart.service.js";
import {
  createProductCard,
  updateProductQuantity,
  resetProductQuantity,
} from "./components/product-card.components.js";

import { createCartItemHTML } from "./components/card-item.component.js";
import { initNavigation } from "./components/navigation.component.js";
import { initSearch } from "./components/search.js";

/**
 * Renderiza todos os itens do carrinho
 * @returns {void}
 */
function renderProducts() {
  const productGrid = document.getElementById("productGrid");
  validateElement(productGrid, "productGrid");
  console.log(products);
  productGrid.innerHTML = products.map(createProductCard).join("");
  attachProductEventListeners();
}

/**
 * Renderiza todos os itens do carrinho
 * @throws {Error} Se o elemento cartItems não existir
 */
function renderCartItems() {
  const cartContainer = document.getElementById("cartItems");
  validateElement(cartContainer, "cartItems");

  cartContainer.innerHTML = cartItems.map(createCartItemHTML).join("");
  attachCartEventListeners();
}

/**
 * Anexa event listeners aos controles de produtos
 */
function attachProductEventListeners() {
  // Botões de aumentar quantidade
  document.querySelectorAll(".increase-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const productId = getDataAttributeAsNumber(btn, "productId");
      handleIncreaseQuantity(productId);
    });
  });

  // Botões de diminuir quantidade
  document.querySelectorAll(".decrease-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const productId = getDataAttributeAsNumber(btn, "productId");
      handleDecreaseQuantity(productId);
    });
  });

  // Botões de adicionar ao carrinho
  document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", () => {
      const productId = getDataAttributeAsNumber(btn, "productId");
      handleAddToCart(productId);
    });
  });
}

/**
 * Anexa event listeners aos itens do carrinho
 */
function attachCartEventListeners() {
  document.querySelectorAll(".cart-item-action").forEach((icon) => {
    icon.addEventListener("click", () => {
      const itemId = getDataAttributeAsNumber(icon, "itemId");
      handleOpenCartItem(itemId);
    });
  });
}

/**
 * Manipula o aumento de quantidade
 * @param {number} productId - ID do produto
 */
function handleIncreaseQuantity(productId) {
  const qtyElement = document.querySelector(
    `.quantity-display[data-product-id="${productId}"]`
  );

  if (qtyElement) {
    const currentQty = parseInt(qtyElement.textContent);
    updateProductQuantity(productId, currentQty + 1);
  }
}

/**
 * Manipula a diminuição de quantidade
 * @param {number} productId - ID do produto
 */
function handleDecreaseQuantity(productId) {
  const qtyElement = document.querySelector(
    `.quantity-display[data-product-id="${productId}"]`
  );

  if (qtyElement) {
    const currentQty = parseInt(qtyElement.textContent);
    if (currentQty > 1) {
      updateProductQuantity(productId, currentQty - 1);
    }
  }
}

/**
 * Manipula a adição de produto ao carrinho
 * @param {number} productId - ID do produto
 */
function handleAddToCart(productId) {
  const product = getProductById(productId);

  if (!product) {
    console.error(`Produto com ID ${productId} não encontrado`);
    return;
  }

  const qtyElement = document.querySelector(
    `.quantity-display[data-product-id="${productId}"]`
  );
  const quantity = qtyElement ? parseInt(qtyElement.textContent) : 1;

  // Adiciona ao carrinho usando o service
  const success = addToCartService(productId, quantity);

  if (success) {
    showNotification(
      `Adicionado ao carrinho:\n${product.name}\nQuantidade: ${quantity}`,
      "success"
    );

    // Reseta quantidade para 1
    resetProductQuantity(productId);
  }
}

/**
 * Manipula a abertura de detalhes de um item do carrinho
 * @param {number} itemId - ID do item
 */
function handleOpenCartItem(itemId) {
  console.log(`Abrindo detalhes do item ${itemId}`);
  // Implementar lógica de visualização/detalhes
}

/**
 * Inicializa toda a aplicação
 * Configura event listeners e renderiza componentes iniciais
 */
function initApp() {
  try {
    renderProducts();
    renderCartItems();
    initNavigation();
    initSearch();

    console.log("✓ Aplicação inicializada com sucesso");
    console.log(`✓ ${products.length} produtos carregados`);
    console.log(`✓ ${cartItems.length} itens no carrinho`);
  } catch (error) {
    console.error("✗ Erro ao inicializar aplicação:", error);
    showNotification(
      "Erro ao carregar a aplicação. Por favor, recarregue a página.",
      "error"
    );
  }
}

// Inicializa quando o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", initApp);
