let pessoas = [
    { nome: 'Roberto', idade: 33 },
    { nome: 'Ricardo', idade: 33 },
    { nome: 'Raphael', idade: 27 }
]

let nomes = []
for (let i = 0; i < pessoas.length; i++) {
    nomes.push(pessoas[i].nome)
}

// let nomes = pessoas.map(function (pessoa) {
//     return pessoa.nome + ' têm ' + pessoa.idade + ' anos de idade'
// })

let nomes = pessoas.map(pessoa => pessoa.nome + ' têm ' + pessoa.idade + ' anos de idade')

console.log(nomeDasPessoas)