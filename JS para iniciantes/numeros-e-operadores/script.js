/* 

    Operadores Aritméticos

    Lembrando que soma + em Strings
    serve para concatenar
*/

    let soma = 100 + 50;// 150
    let subtracao = 100 - 50; // 50
    let multiplicacao = 100 * 2; // 200
    let divisao = 100 / 2; //50 
    let expoente = 2 ** 4; // 16
    let modulo = 14 % 5; // 4

/* 

    Operadores Aritméticos (Strings)

    Lembrando que soma + em Strings
    serve para concatenar
*/

    let somaString = '100' + 50;
    let divisaoString = '200' / 50;

/* 

    Operadores Aritméticos - Ordem IMPORTA

    Começa por multiplicação e divisão, depois
    por soma e subtração

    Parênteses para priorizar uma expressão

*/ 

    let total1 = 20 + 5 * 2;
    let total2 = (20 + 5) * 2;
    let total3 = 20 / 2 * 5;
    let total4 = 10 + 10 * 2 + 20 / 2;

/* 

    Operadores Aritméticos Unários

*/

    let incremento = 5;
    console.log(incremento++); // 5
    console.log(incremento); // 6

    let incremento2 = 5;
    console.log(++incremento2); // 6 
    console.log(incremento2); // 6

    let decremento1 = 5;
    console.log(decremento1--); // 5
    console.log(decremento1); // 4

    let decremento2 = 5;
    console.log(--decremento2); // 4
    console.log(decremento2); // 4

    let frase = 'Isso é um teste';
    +frase; // NaN
    -frase; // NaN

    let idade = "23";
    +idade; // 23 (número)
    -idade; // -23 (número)
    console.log(+idade + 5); // 33

    let possuiFaculdade = true;
    console.log(+possuiFaculdade); // 1

    /* 
    
    Exercício

    */

// Qual o resultado da seguinte expressão ?

    let total = 10 + 5 * 2 / 2 + 20; // 35
    console.log(total);

// Crie duas expressões que retornem NaN

    let frase1 = "Isso é uma frase" / 2;
    let frase2 = "Isso é uma frase" - 5;
    console.log(frase1, frase2);

// Somar a string "200" com o número 50 e retornar 250

    let stringNumber = +"200" + 50;
    console.log(stringNumber);

// Incremente o número 5 o seu valor incrementado

    var x = 5;
    console.log(++x);

// Como dividir o peso por 2 ?
    let numero = +"80" / 2;
    let unidade = "kg";
    let peso = +numero + unidade;

    console.log(peso)

