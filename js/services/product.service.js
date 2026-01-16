/**
 * @fileoverview Serviço de gerenciamento de produtos
 */

import { products } from '../data/products-mock.data.js';
import { isValidProductId } from '../utils/validators.js';

/**
 * Busca um produto pelo ID
 * @param {number} productId - ID do produto
 * @returns {Product|undefined} Produto encontrado ou undefined
 */
export function getProductById(productId) {
  if (!isValidProductId(productId)) {
    console.warn(`ID de produto inválido: ${productId}`);
    return undefined;
  }
  return products.find(p => p.id === productId);
}

/**
 * Obtém todos os produtos
 * @returns {Product[]} Lista de produtos
 */
export function getAllProducts() {
  return [...products];
}

/**
 * Busca produtos por termo
 * @param {string} searchTerm - Termo de busca
 * @returns {Product[]} Produtos encontrados
 */
export function searchProducts(searchTerm) {
  const term = searchTerm.toLowerCase().trim();
  if (!term) return products;
  
  return products.filter(product => 
    product.name.toLowerCase().includes(term)
  );
}

/**
 * Verifica se um produto tem desconto
 * @param {number} productId - ID do produto
 * @returns {boolean} True se tem desconto
 */
export function hasDiscount(productId) {
  const product = getProductById(productId);
  return product ? !!product.discount : false;
}