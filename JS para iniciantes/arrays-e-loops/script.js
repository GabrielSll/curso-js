/**
 *
 *  Array
 *  É um grupo de valores geralmente
 *  relacionados. Servem para guardamos
 *  diferentes valores em uma única variável. 
 * 
 */

let videoGames = ['PS4', 'Switch', 'Xbox', '3DS'];

for(let i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i])
    if(videoGames[i] === 'Switch') {
        break
    }
}

let carros = ['civic', 'fusca', 'gol', 'mustang'];

for(let i = 0; i < carros.length; i++) {
    console.log(carros[i])
}

/**
 * 
 *  Métodos e Propriedades de uma Array
 * 
 */


videoGames.push('3DS');

/**
 * 
 *  For Loop
 *
 *  Fazem algo repetidamente até que uma condição
 *  seja atingida.
 * 
 *  possui 3 partes - início, condição e incremento
 *  
 */

for (let number = 0; number < 11; number++) {
    // console.log(number)
}


/**
 * 
 *  While Loop
 *
 **/

let i = 0;

while (i < 10) {
    // console.log(i);
    i++
}

/**
 * 
 *  forEach
 *  
 *  forEach é um método que executa uma função 
 *  para cada item da Array. 
 *  É uma forma mais simples de utilizarmos 
 *  um loop com arrays (ou array-like)
 * 
 */

var videoGames1 = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames1.forEach(function(item) {
  console.log(item);
});

// O argumento item será atribuído dinamicamente

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

let brasilCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

brasilCampeao.forEach(function (item) {
    return console.log(`O brasil ganhou a copa de ${item}`)
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
    if(frutas[i] === 'Pera') {
        break
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

let variavel = frutas[4]

console.log(variavel)