'use strict'

// THIS NO CONTEXTO GLOBAL É O OBJETO WINDOW
console.log('this no contexto global', this)
console.log('objeto window', window)
console.log(window === this)

// INVOCAÇÂO DE UMA FUNÇÃO
// TBM CONHECIDO COMO CHAMAR A FUNÇÂO
this.name = 'Ricardo';
function saudar(nome) {
  console.log('this no contexto da função', this) // com use strict é undefined
  console.log('Olá, ' + nome + '!');
}
// ISSO AQUI SERIA CHAMAR A FUNÇÃO
saudar('Luana');

// THIS NO CONTEXTO DE UM METODO
const usuario = {
  nome: 'Roberto',
  saudar: function() {
    console.log('this no contexto do método', this)
    console.log('this.name no contexto do método', this.nome)
  }
}
usuario.saudar()

/* USANDO O THIS NO CONTEXTO DA FUNÇÂO PARA ACESSAR PROPRIEDADES DO OBJETO */
const comida = {
  nome: 'Brócolis',
  temperatura: 0
};

// aqui eu só criei uma função que aceita dois parametros e vai realizar alguma ação quenado ela for chamada
// nesse caso ela vai aumentar a temperatura da comida usando a temperatura que eu passar no temperaturaDeCozimento
comida.cozinhar = function(temperaturaDeCozimento) {
	console.log(this)
	this.temperatura += temperaturaDeCozimento;
};

console.log(comida)

// CHAMADA DA FUNÇÃO
comida.cozinhar(80)

console.log(comida)