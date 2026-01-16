/**
 * @fileoverview Funções de validação
 */

/**
 * Valida se um elemento existe no DOM
 * @param {HTMLElement|null} element - Elemento a ser validado
 * @param {string} elementName - Nome do elemento para mensagem de erro
 * @throws {Error} Se o elemento não existir
 */
export function validateElement(element, elementName) {
  if (!element) {
    throw new Error(`Elemento ${elementName} não encontrado no DOM`);
  }
}

/**
 * Valida se um ID de produto é válido
 * @param {number} productId - ID do produto
 * @returns {boolean} True se válido
 */
export function isValidProductId(productId) {
  return typeof productId === 'number' && productId > 0;
}

/**
 * Valida se uma quantidade é válida
 * @param {number} quantity - Quantidade a validar
 * @returns {boolean} True se válido
 */
export function isValidQuantity(quantity) {
  return typeof quantity === 'number' && quantity > 0;
}