/**
 * 
 *  Document Object Model (DOM)
 *  
 *  É um interface que representa documentos
 *  HTML e XML através de objetos. Com ela é 
 *  possível manipular a estrutura, estilo e
 *  conteúdo destes documentos.
 * 
 */

window.alert('');

/**
 * 
 *  Window e Document
 * 
 *  São os objetos principais do Dom,
 *  boa parte da manipulação é feita  
 *  através dos seus métodos e
 *  propiedades.
 * 
 */

const h1Selecionado = document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // Retorna o body