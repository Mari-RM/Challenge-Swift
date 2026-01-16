/**
 * @fileoverview Serviço de gerenciamento do carrinho
 */

/**
 * Estado do carrinho (poderia ser localStorage ou estado global)
 * @type {Map<number, number>}
 */
const cart = new Map();

/**
 * Adiciona um produto ao carrinho
 * @param {number} productId - ID do produto
 * @param {number} quantity - Quantidade a adicionar
 * @returns {boolean} True se adicionado com sucesso
 */
export function addToCart(productId, quantity) {
  if (quantity <= 0) {
    console.error('Quantidade inválida');
    return false;
  }

  const currentQuantity = cart.get(productId) || 0;
  cart.set(productId, currentQuantity + quantity);
  
  return true;
}

/**
 * Remove um produto do carrinho
 * @param {number} productId - ID do produto
 * @returns {boolean} True se removido com sucesso
 */
export function removeFromCart(productId) {
  return cart.delete(productId);
}

/**
 * Obtém a quantidade de um produto no carrinho
 * @param {number} productId - ID do produto
 * @returns {number} Quantidade no carrinho
 */
export function getCartQuantity(productId) {
  return cart.get(productId) || 0;
}

/**
 * Obtém o total de itens no carrinho
 * @returns {number} Total de itens
 */
export function getTotalItems() {
  let total = 0;
  cart.forEach(quantity => total += quantity);
  return total;
}

/**
 * Limpa o carrinho
 */
export function clearCart() {
  cart.clear();
}

/**
 * Obtém todos os itens do carrinho
 * @returns {Array<{productId: number, quantity: number}>}
 */
export function getCartItems() {
  return Array.from(cart.entries()).map(([productId, quantity]) => ({
    productId,
    quantity
  }));
}