/**
 * Constructor Functions
 * 
 * Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. 
 * Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior? 
 * É possível com o Object.create, mas veremos ele mais tarde.
 * 
 * O código abaixo parece certo, porém ao atribuir o valor de carro a honda ou fiat
 * o valor do objeto carro é modificado.
 */

const carro = {
    marca: 'Marca',
    preco: 0,
}

// const honda = carro;
// honda.marca = 'Honda';
// honda.preco = 4000;

// const fiat = carro;
// fiat.marca = 'Fiat';
// fiat.preco = 3000;

/**
 * Para isso existem as Constructor Functions, ou seja, 
 * Funções Construtoras que são responsáveis por construir 
 * novos objetos sempre que chamamos a mesma.
 */

function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
}

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 5000.00;

const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 3500.00

/**
 * PARÂMETROS E ARGUMENTOS
 * 
 * Podemos passar argumentos que serão utilizados no momento da criação do objeto.
 */

const chevrolet = new Carro('Chevrolet', 4000);
const Mitsubishi = new Carro('Mitsubishi', 8000);

/**
 * THIS KEYWORD
 * 
 * O this faz referência ao próprio objeto construído com a Constructor Function.
 */

function Moto(marca, preco) {
    this.taxa = 1.2;
    const precoFinal = preco * this.taxa;
    this.marca = marca;
    this.preco = precoFinal;
}

const Suzuki = new Moto('Suzuki', 5000.00);
const Yamaha = new Moto('Yamaha', 3500.00);

/**
 * EXEMPLO REAL
 */

function Dom(seletor) {
    const element = document.querySelector(seletor);

    this.ativo = function (classe) {
        element.classList.add(classe);
    }
}

const li = new Dom('li');


// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.andar = () => {
        console.log(this.nome + ' andou');
    }
}

const Gabriel = new Pessoa('Gabriel', 23);
// Gabriel.andar();

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const Joao = new Pessoa('João', 20);
const Maria = new Pessoa('Maria', 25);
const Bruno = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom2(seletor) {
    const element2 = document.querySelectorAll(seletor);

    this.remover = function removeClass(classe) {
        element2.forEach((item) => {
            item.classList.toggle(classe);
        }) 
    }

    this.ativar = function addClass(classe) {
        element2.forEach((item) => {
            item.classList.add(classe)
        })
    }
}

const li2 = new Dom2('li')


