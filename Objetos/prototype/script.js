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

console.log(Pessoa.prototype); // retorna o objeto
console.log(andre.prototype); // undefined

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
console.log(Pessoa.prototype); // retorna o objeto

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
 * PROTOTYPE 2
 */