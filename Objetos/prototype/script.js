/**
 * PROTOTYPE
 * 
 * A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.
 */

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const andre = new Pessoa('André', 28);

// console.log(Pessoa.prototype); // retorna o objeto
// console.log(andre.prototype); // undefined

/**
 * FUNCAO.PROTOTYPE
 * 
 * É possível adicionar novas propriedades e métodos ao objeto prototype.
 */

Pessoa.prototype.andar = function () {
    return this.nome + ' andou';
}
Pessoa.prototype.nadar = function () {
    return this.nome + ' nadou';
}
// console.log(Pessoa.prototype); // retorna o objeto

/**
 * ACESSO AO PROTÓTIPO
 * 
 * O objeto criado utilizando o construtor, 
 * possui acesso aos métodos e propriedades do protótipo deste construtor. 
 * Lembrando, prototype é uma propriedade de funções apenas.
 */

const rafael = new Pessoa('Rafael', 28);

rafael.nome;
rafael.idade;
rafael.andar();
rafael.nadar();

/**
 * PROTO
 * 
 * O novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__. 
 * É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente.
 */

// Acessam o mesmo método
// mas __proto__ não terá
// acesso ao this.nome

andre.andar();
andre.__proto__.andar();

/**
 * HERANÇA DE PROTÓTIPO
 * 
 * O objeto possui acesso aos métodos e propriedades do protótipo do 
 * construtor responsável por criar este objeto. 
 * O objeto abaixo possui acesso a métodos que nunca definimos, 
 * mas são herdados do protótipo de Object.
 */

Object.prototype;
andre.toString();
andre.isPrototypeOf();
andre.valueOf();

/**
 * CONSTRUTORES NATIVOS
 * 
 * Objetos, Funções, Números, Strings e outros tipos de dados 
 * são criados utilizando construtores. Esses construtores possuem 
 * um protótipo com propriedades e métodos, que poderão ser acessadas 
 * pelo tipo de dado.
 * 
 * Ou seja se for criado uma variável com o nome de cidade e ela receber uma String
 * Ela terá acesso a todos as propiedades e métodos de uma String.
 */

const pais = 'Brasil' // se for acessado no console: pais. -> será mostrado dentro de __proto__ todas as
                      // propiedades e métodos que umas string possui.
const cidade = new String('Rio'); // possui todos os métodos de uma string, porém retorna um objeto do tipo String que possui "Rio".

/**
 * É POSSÍVEL ACESSAR A FUNÇÃO DO PROTÓTIPO
 * 
 * É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array.
 */

const lista = document.querySelectorAll('li'); // aqui temos uma NodeList.
const listaArray = Array.prototype.slice.call(lista) // retorna uma Array das listas do site. || Existe o método Array.from()

/**
 * MÉTODO DO OBJETO VS PROTÓTIPO
 * 
 * Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo.
 */

Object.getOwnPropertyNames(Array); // retorna os métodos linkados diretamente ao objeto Array;
Object.getOwnPropertyNames(Array.prototype); // retorna os métodos linkados diretamente ao prototype de Array;

/**
 * APENAS OS MÉTODOS DO PROTÓTIPO SÃO HERDADOS
 */

/**
 * ENTENDA O QUE ESTÁ SENDO RETORNADO!!
 * 
 * Os métodos e propriedades acessado com o . são referentes ao tipo de dados que é retornado antes desse .
 */

const Carro = {
    marca: 'Ford',
    preco: 2000,
    acelerar() {
      return true;
    }
}

Carro // Object
Carro.marca // retornado uma String, pois marca foi definido como uma string dentro do objeto, logo só se terá acesso aos métodos de uma string.
Carro.preco // retornado um Number, pois marca foi definido como uma string dentro do objeto, logo só se terá acesso aos métodos de uma string.
Carro.acelerar // retornado uma Function, pois aqui não estamos acessando uma execução de uma função, e terá acesso aos métodos de uma função.
Carro.acelerar() // retornado um Boolean, agora estamos acessando uma execução de uma função, logo o acesso será dado de acordo com o dado que é retornado na função.
Carro.marca.charAt // retornado uma Function, pois se trata necessariamente do ultimo item acessado com . e charAt é uma função.
Carro.marca.charAt(0) // retorna uma String, pois agora na execução da função será retornado um caractere que é uma String no caso retornaria: "F".

// ---------------- Exercícios ------------------

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa2(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = () => {
    return `${this.name} + ${this.sobrenome}`
}

const carlos = new Pessoa2('Carlos', 'Miguel', 20);


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // Fuction
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String