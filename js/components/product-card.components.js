/**
 * @fileoverview Componente de card de produto
 */

import { formatPrice } from '../utils/formatters.js';

/**
 * Cria o HTML de um badge de desconto
 * @param {string} discount - Texto do desconto
 * @returns {string} HTML do badge
 */
function createDiscountBadge(discount) {
  return `<div class="discount-badge">${discount}</div>`;
}

/**
 * Cria o HTML do preço original (riscado)
 * @param {number} originalPrice - Preço original
 * @returns {string} HTML do preço original
 */
function createOriginalPrice(originalPrice) {
  return `<span style="text-decoration: line-through; color: #999; font-size: 0.9rem;">
    R$ ${formatPrice(originalPrice)}
  </span>`;
}

/**
 * Cria o HTML de um card de produto
 * @param {Product} product - Dados do produto
 * @returns {string} HTML do card completo
 */
export function createProductCard(product) {
  return `
    <div class="product-card" data-product-id="${product.id}">
      <div class="product-image" style="background-image: url('${product.image}')">
        ${product.discount ? createDiscountBadge(product.discount) : ""}
      </div>
      <div class="product-info">
        <div class="product-title">${product.name}</div>
        <div class="product-price">
          R$ ${formatPrice(product.price)}
          ${product.originalPrice ? createOriginalPrice(product.originalPrice) : ""}
        </div>
        <div class="quantity-controls">
          <button class="quantity-btn decrease-btn" data-product-id="${product.id}">−</button>
          <span class="quantity-display" data-product-id="${product.id}">1</span>
          <button class="quantity-btn increase-btn" data-product-id="${product.id}">+</button>
          <button class="add-to-cart" data-product-id="${product.id}">ADICIONAR</button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Atualiza a quantidade exibida de um produto
 * @param {number} productId - ID do produto
 * @param {number} quantity - Nova quantidade
 */
export function updateProductQuantity(productId, quantity) {
  const qtyElement = document.querySelector(`.quantity-display[data-product-id="${productId}"]`);
  if (qtyElement) {
    qtyElement.textContent = quantity;
  }
}

/**
 * Reseta a quantidade de um produto para 1
 * @param {number} productId - ID do produto
 */
export function resetProductQuantity(productId) {
  updateProductQuantity(productId, 1);
}