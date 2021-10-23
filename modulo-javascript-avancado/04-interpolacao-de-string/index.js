const imprimirInformacoesPessoa= (primeiroNome, ultimoNome, idade) => {
    return `Primeiro Nome: ${primeiroNome} ${ultimoNome !== '' ? `Último Nome:' ${ultimoNome}` : '' } Idade: ${idade}`
}
console.log(imprimirInformacoesPessoa('Roberto', '', 33))