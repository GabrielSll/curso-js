/* 

    Condicionais If e Else

    Verificar se uma expressão é 
    verdadeira com if, caso contrário
    o else será ativado.

    O valor dentro dos parênteses sempre
    será avaliado em false ou true.
*/

let possuiGraduacao1 = true;

if (possuiGraduacao1) {
    console.log("Possui Graduação");
} else {
    console.log("Não possui graduação");
}


var possuiGraduacao2 = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
    console.log('Possui graduação e doutorado');
} else if (possuiGraduacao2) {
    console.log('Possui graduação, mas não possui doutorado');
} else {
    console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado

/*

    Operador Lógico de Negação !

    O operador !, nega uma operação booleana. Ou
    seja, !true é igual a false

*/

// Truthy
if (!true) // false
    if (!1) // false
        if (!'') // true
            if (!undefined) // true
                if (!!' ') // true
                    if (!!'') // false


/* 
                        
Operadores de comparação
                        
*/

    10 > 5; // true
    5 > 10; // false
    20 < 10; // false
    10 <= 10 // true
    10 >= 11 // false

    10 == "10"; // false
    10 == 10; // true
    10 === "10"; // false
    10 === 10; // true
    10 != 15; // true
    10 != "10"; // true
    10 !== "10"; // true

/* 

    Operadores Lógicos &&

    && Compara se uma expressão e a outra é verdadeira

*/

    true && true; // true
    true && false; // false
    false && true; // false
    'Gato' && 'Cão'; // 'Cão'
    (5 - 5) && (5 + 5); // 0
    'Gato' && false; // false
    (5 >= 5) && (3 < 6); // true

/* 

    Operadores Lógicos ||

    || Compara se uma expressão ou outra é verdadeira

*/

    true || true; // true
    true || false; // true
    false || true; // true
    'Gato' || 'Cão'; // 'Gato'
    (5 - 5) || (5 + 5); // 10
    'Gato' || false; // Gato
    (5 >= 5) || (3 < 6); // true


/*

    Switch

    Com o switch você pode verificar se uma 
    variável é igual à diferentes valores 
    utilizando o case. Caso ela seja igual,
    você pode fazer alguma coisa e utilizar a
    palavra chave break; para cancelar a con-
    tinuação. O valor de default ocorrerá caso
    nenhuma das anteriores seja verdadeira.

*/


var corFavorita = 'Azul';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu.');
        break;
    case 'Vermelho':
        console.log('Olhe para rosas.');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol.');
        break;
    default:
        console.log('Feche os olhos');
}

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

let idadeG = 23;
let idadeA = 58;

if(idadeG > idadeA) {
    console.log("é maior")
} else if (idadeG === idadeA) {
    console.log("É igual")
} else { 
    console.log("É menor")
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

if(expressao) {
    console.log("Verdairo!")
} else {
    console.log("Falso!")
}

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // Truthy
var idade = 28; // Truthy
var possuiDoutorado = false; // False
var empregoFuturo; // False
var dinheiroNaConta = 0; // False

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
    console.log("é maior")
} else if (brasil === china) {
    console.log("É igual")
} else { 
    console.log("É menor")
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}