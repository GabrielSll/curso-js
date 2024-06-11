// COMENTÁRIOS
// Servem para explicar o código

// Comentário de uma linha

/*
Comentário
com diversas
linhas
*/

// let nome = 'André';

// Comentar uma linha de código desativa a mesma. Não deixe linhas de código comentadas no arquivo final.

// OPERADORES DE ATRIBUIÇÃO
// Podem funcionar como formas abreviadas

let x = 5;
let y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

// OPERADOR TERNÁRIO
// Abreviação de condicionais com if e else

let idade = 19;
let podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber) // Pode beber

// condição ? true : false

// Geralmente utilizado quando precisamos 
// atribuir um valor para uma letiável, dependendo de uma condição

// IF ABREVIADO
// Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código

let possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

// ou
if(possuiFaculdade)
  console.log('Possui faculdade');
else
  console.log('Não possui faculdade');

/**
* 
* ----------------- EXERCÍCIO -------------------------
* 
*/

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
let soma = 500;
let scroll = 1000;

scroll += soma;

console.log(scroll)



// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.

let possuiCarro = true;
let possuiCasa = true;

let darCredito = (possuiCarro && possuiCasa)

console.log(darCredito)