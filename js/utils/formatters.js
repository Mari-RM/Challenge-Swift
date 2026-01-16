/**
 * @fileoverview Funções utilitárias de formatação
 */

/**
 * Formata um número para o formato de moeda brasileira
 * @param {number} value - Valor a ser formatado
 * @returns {string} Valor formatado (ex: "18,50")
 */
export function formatPrice(value) {
  return value.toFixed(2).replace(".", ",");
}

/**
 * Formata uma data para o formato brasileiro
 * @param {Date} date - Data a ser formatada
 * @returns {string} Data formatada (ex: "22/07/2024")
 */
export function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year.toString()}`;
}

/**
 * @param {string} text - Texto a ser normalizado
 * @returns {string} Texto normalizado
 */
export function normalizeText(text) {
  return text.toLowerCase().trim();
}