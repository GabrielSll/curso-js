/*

    Funções

    Bloco de código que pode ser executado e reutilizado. Valores
    podem ser passados por uma função e a mesma retorna outro valor.

*/

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4); // 16
areaQuadrado(5); // 25
areaQuadrado(2); // 4

/*

    PARÂMETROS E ARGUMENTOS
    Ao criar uma função, você pode definir parâmetros.

    Ao executar uma função, você pode passar argumentos.

*/

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

imc(80, 1.8); // 80 e 1.80 são os argumentos
imc(60, 1.7); // 60 e 1.70 são os argumentos

/* 

    Separar por vírgula cada parâmetro. 
    Você pode definir mais de um parâmetro ou nenhum também

*/

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "Eu gosto de mato";
  } else {
    return "Eu não gosto de nada";
  }
}

/*

    ARGUMENTOS PODEM SER FUNÇÕES

    Chamadas de Callback, geralmente são funções 
    que ocorrem após algum evento.

*/

addEventListener("click", function () {
  console.log("Clicou");
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

/* 

    PODE OU NÃO RETORNAR UM VALOR

    Quando não definimos o return, 
    ela irá retornar undefined. O código interno 
    da função é executado normalmente, independente de 
    existir valor de return ou não.

*/

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc2(80, 1.8); // retorna o imc
console.log(imc2(80, 1.8)); // retorna o imc e undefined

/*
 
VALORES RETORNADOS

Uma função pode retornar qualquer tipo de dado e até outras funções.

*/

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

/*
 
  ESCOPO LÉXICO

  Funções conseguem acessar variáveis que foram criadas no contexto pai
 
*/

var profissao = "Designer";

function dados() {
  var nome = "André";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro

// ----------- EXERCICIO ---------------- //

// Crie uma função para verificar se um valor é Truthy

    function itsTrue (dado) {
        return Boolean(dado)
    }

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
  return lado * 4;
}

console.log(perimetroQuadrado(5));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeSobrenome(nome, sobrenome) {
  return nome + " " + sobrenome;
}

console.log(nomeSobrenome("Gabriel", "Lima"));

// Crie uma função que verifica se um número é par

function verificaPar(numero) {
  if (numero % 2 === 0) {
    return "é par";
  } else if (numero % 2 !== 0) {
    return "não é par";
  } else {
    return "Digite um valor válido";
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoArgumento(arg) {
  return typeof arg;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", () => {
  console.log("Gabriel Lima");
});

// Corrija o erro abaixo
let totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
