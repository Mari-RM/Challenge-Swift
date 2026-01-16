/**
 * @fileoverview Componente de busca
 */

import { normalizeText } from '../utils/formatters.js';

/**
 * Filtra produtos baseado em um termo de busca
 * @param {string} searchTerm - Termo a ser buscado
 */
export function filterProducts(searchTerm) {
  const normalizedTerm = normalizeText(searchTerm);
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach(card => {
    const productTitle = card.querySelector(".product-title");
    
    if (!productTitle) return;
    
    const titleText = normalizeText(productTitle.textContent);
    const shouldShow = titleText.includes(normalizedTerm);
    
    card.style.display = shouldShow ? "block" : "none";
  });
}

/**
 * Inicializa a funcionalidade de busca
 */
export function initSearch() {
  const searchInput = document.querySelector(".search-input");
  
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      filterProducts(e.target.value);
    });
    
    // Limpar busca ao pressionar ESC
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        searchInput.value = "";
        filterProducts("");
      }
    });
  }
}

/**
 * Limpa o campo de busca e mostra todos os produtos
 */
export function clearSearch() {
  const searchInput = document.querySelector(".search-input");
  if (searchInput) {
    searchInput.value = "";
    filterProducts("");
  }
}