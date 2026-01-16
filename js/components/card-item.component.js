/**
 * @fileoverview Componente de item do carrinho
 */

/**
 * Cria o HTML de um item do carrinho
 * @param {CartItem} item - Dados do item
 * @returns {string} HTML do item
 */
export function createCartItemHTML(item) {
  return `
    <div class="cart-item" data-item-id="${item.id}">
      <div class="cart-item-image" style="background-image: url('${item.image}')"></div>
      <div class="cart-item-info">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-status">• ${item.status}</div>
        <div class="cart-item-date">${item.date}</div>
      </div>
      <i class="bi bi-box-arrow-up-right cart-item-action" data-item-id="${item.id}"></i>
    </div>
  `;
}

/**
 * Atualiza o status de um item do carrinho
 * @param {number} itemId - ID do item
 * @param {string} newStatus - Novo status
 */
export function updateCartItemStatus(itemId, newStatus) {
  const statusElement = document.querySelector(
    `.cart-item[data-item-id="${itemId}"] .cart-item-status`
  );
  
  if (statusElement) {
    statusElement.textContent = `• ${newStatus}`;
  }
}