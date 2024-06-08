/*

    Objetos

    Conjunto de variáveis e funções, que são chamadas
    de propriedades e métodos.

    Um objeto tem acesso a variáveis que foram
    criadas fora do seu escopo.

*/

let pessoa = {
    nome: 'Gabriel',
    idade: 23,
    profissao: 'Desempregado',
    possuiFaculdade: true,
}

// console.log(pessoa)

/*

    Métodos

    É uma propriedade que possui uma função
    no local do seu valor

*/

let quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado
    }
}

// console.log(quadrado.area(5))
// console.log(quadrado.perimetro(5))

/*

    Abreviação de area: function() {}
    para
    area() {}, no ES6+

    let quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado
    }
}


*/

/*

    Objetos - Organização de Código

    Objetos servem para organizar o código em
    pequenas partes reutilizáveis

*/

Math.PI;
Math.random;

let pi = Math.PI;
// console.log(pi)

/*

    Dot Notation Get

    Acesse propiedades de um objeto utilizando o ponto .

*/

let menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
}

let hg = menu.height;
let bg = menu.backgroundColor;

// console.log(hg)
// console.log(bg)

/*

    Adicionar Propriedades e Métodos

    Basta adicionar um novo nome e definir o valor

*/

let carro = {
    modelo: 'Civic',
    ano: 2015,
    cor: '#000'
}

carro.blindado = true;

/*

    Palavra-chave this

    this irá fazer uma refência ao própio objeto.

*/

height = 150;

let predio = {
    width: 800,
    height: 50,
    metadeHeight() {
        return this.height / 2 // o this faz referência a variável
                              // que foi criada no escopo do objeto
    }
}

/*

    Protótipo e Herança

    O objeto herda propriedades e métodos
    do objeto que foi utilizado para criar o
    mesmo.

*/

// -------------- EXERCÍCIO ----------------

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

    let dadosPessoais = {
        nome: 'Gabriel',
        sobrenome: ' da Silva Lima',
        idade: 23 + 'Anos',
        possuiFaculdade: true,
        possuiCNH: false,
        estadoCivil: 'Solteiro',
        email: 'gabrieldasilvlima@gmai.com',
        mostraNomeCompleto() {
            return this.nome + this.sobrenome
        }
    }

    // console.log(dadosPessoais);


// Crie um método no objeto anterior, que mostre o seu nome completo



// Modifique o valor da propriedade preco para 3000
let civic = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

civic.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

let cachorro = {
    raca: 'labrador',
    cor: '#000',
    idade: 10 + 'anos',
    viuHomem(viu) {
        if(viu) {
            return "AU AU!"
        }  else {
            return "Fodase"
        }
    }
}

/*

    Tudo é Objeto

    Strings, Números, Boolean, Objetos e mais, possuem propriedades
    e métodos. Por isso são objetos.

*/

let nome = 'Gabriel';

// console.log(nome.length)
// console.log(nome.charAt(5))
// console.log(nome.replace('el', 'ela'))

/*

    Números 

    Por um breve momento o número é
    envolvido em um Objeto (coerção),
    tendo acesso assim as suas propriedades 
    métodos
*/

let altura = 1.7;

altura.toString();
altura.toFixed();

function areaQuadrado(lado) {
    return lado * lado;
}

function perimetro(lados, lado) {
    return lados * lado
}
