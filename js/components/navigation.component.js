/**
 * @fileoverview Componente de navegação
 */

/**
 * Define um item de navegação como ativo
 * @param {HTMLElement} element - Elemento de navegação clicado
 */
export function setActiveNav(element) {
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.remove("active");
  });
  element.classList.add("active");
}

/**
 * Inicializa os event listeners de navegação
 */
export function initNavigation() {
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", function(e) {
      e.preventDefault();
      setActiveNav(this);
    });
  });
}

/**
 * Navega para uma página específica
 * @param {string} page - Nome da página
 */
export function navigateTo(page) {
  console.log(`Navegando para: ${page}`);
  // Implementar lógica de navegação (SPA ou redirect)
}