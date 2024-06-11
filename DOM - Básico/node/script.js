/**
 * 
 *  Node
 *  
 *  Toda tag HTML é representada pelo objeto Element
 *  e por isso herda os seus métodos e propiedades.
 *  Element é um tipo de objeto Node.
 * 
 */

const titulo = document.querySelector('h1');

console.log(titulo.innerText); // retorna o texto
console.log(titulo.classList); // retorna as classes
console.log(titulo.id); // retorna o id
console.log(titulo.offsetHeight); // retorna a altura do elemento

function callbackh1() {
    console.log("clicou em ", titulo.innerText)
}

titulo.addEventListener('click', callbackh1);
// ativa a função callback ao click no titulo

// ------------- EXERCICIO ------------------

// Retorne o url da página atual utilizando o objeto window

    const href = window.location.href;
    console.log(href)

    // alert(`Esse é o link: ${href}`);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

    console.log(document.querySelector('.ativo'));

// Retorne a linguagem do navegador

    console.log(navigator.language);

// Retorne a largura da janela 

    console.log(document.body.offsetWidth);

