/**
 * @fileoverview Dados dos produtos
 */

/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {number} price
 * @property {number|null} originalPrice
 * @property {string|null} discount
 * @property {string} image
 */

/**
 * Lista de produtos disponíveis
 * @type {Product[]}
 */
export const products = [
  {
    id: 1,
    name: "LINGUIÇA TOSCANA SWIFT 700G",
    price: 18.5,
    originalPrice: null,
    discount: "30% DE DESCONTO",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300&h=200&fit=crop",
  },
  {
    id: 2,
    name: "ANCHO SUÍNO AO CHIMICHURRI SWIFT...",
    price: 29.5,
    originalPrice: null,
    discount: null,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop",
  },
  {
    id: 3,
    name: "CARNE MOÍDA SUÍNA SWIFT 500G",
    price: 16.9,
    originalPrice: null,
    discount: null,
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=300&h=200&fit=crop",
  },
  {
    id: 4,
    name: "FILÉ DE SALMÃO PREMIUM 650G",
    price: 78.9,
    originalPrice: null,
    discount: null,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300&h=200&fit=crop",
  },
];