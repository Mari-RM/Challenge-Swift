/**
 * @fileoverview Funções auxiliares gerais
 */

/**
 * Obtém o valor de um data-attribute como número
 * @param {HTMLElement} element - Elemento DOM
 * @param {string} attribute - Nome do atributo (sem 'data-')
 * @returns {number} Valor convertido para número
 */
export function getDataAttributeAsNumber(element, attribute) {
  return parseInt(element.dataset[attribute] ?? '0', 10);
}

/**
 * Adiciona ou remove uma classe de um elemento
 * @param {HTMLElement} element - Elemento DOM
 * @param {string} className - Nome da classe
 * @param {boolean} add - True para adicionar, false para remover
 */
export function toggleClass(element, className, add) {
  if (add) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
}

/**
 * Mostra uma notificação para o usuário
 * @param {string} message - Mensagem a exibir
 * @param {('success'|'error'|'info')} type - Tipo da notificação
 */
export function showNotification(message, type = 'info') {
  // Por enquanto usa alert, mas pode ser substituído por toast/modal
  alert(message);
  console.log(`[${type.toUpperCase()}] ${message}`);
}