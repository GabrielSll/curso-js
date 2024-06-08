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