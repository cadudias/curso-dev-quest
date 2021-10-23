// let pessoa = { 
//     nome: 'Roberto',
//     sobrenome: 'Dias',
//     idade: 33
// }

// let { nome: nomeDaPessoa, idade } = pessoa

// console.log(nomeDaPessoa)
// console.log(idade)

// function imprimirPessoa(nome, idade){
//     console.log(`Nome da pessoa: ${nome} idade: ${idade}`)
// }

// imprimirPessoa('Roberto', 33)
// imprimirPessoa(...pessoa1)

// function incentivarQuester(nomeQuester){
//     console.log(`Muito bem ${nomeQuester}, você chegou ao JS, continue assim!`)
// }

// incentivarQuester('Roberto')

function incentivarQuester(mensagem, ...nomesQuesters){
    nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}!`))
}
incentivarQuester('Parabéns por ter chego ao módulo de JS', 'Roberto', 'Ricardo', 'Raphael')

let timeoutId = setTimeout(() => {
    alert('Olá mundo!')
}, 3000);

// setTimeout(function(){
//     alert('Olá mundo!')
// }, 3000);

let interval = setInterval(() => {
    console.log('Executando a cada 2 segundos')
}, 2000);

clearTimeout(interval)

/* sincrono assincrono */

function colocarAguaPraFerver(){
    console.log('colocar água pra ferver')
    aguaPronta = true;
}

function prepararPraPassarOCafe(){
    console.log('pegar o pó de café')
    console.log('pegar o filtro de café')
    console.log('colocar o café no filtro')
    console.log('colocar o filtro em cima da xicara')
}

function passarOCafe(){
    console.log('Passando o café')
}

// colocarAguaPraFerver()
// prepararPraPassarOCafe()

// let aguaPronta = false

// setTimeout(() => {
//     colocarAguaPraFerver()    
// }, 5000);

// prepararPraPassarOCafe()

// if(aguaPronta) passarOCafe()


ferverAgua(() => {
    console.log('Água pronta.'); 
  
    esperarAteOCafePassar(() => {
      console.log('Café esta passado!');
      
      tomarCafe(() => {
        console.log('Tomei tudo');
        
        lavarXicara(() => {
          console.log('Depois de tomar o café é interessante lavar a xícara :p');
        });
      });
    });
  });

  ferverAgua()
  .then(() => {
    console.log('Água pronta.');
  
    return esperarAteOCafePassar();
  })
  .then(() => {
    console.log('Café esta passado!');
  
    return tomarCafe();
  })
  .then(() => {
    console.log('Tomei tudo');
  
    return lavarXicara();
  })
  .then(() => {
    console.log('Depois de tomar o café é interessante lavar a xícara :p');
  });


  let ferverAgua = (colocouChaleira, ligouFogao) =>{
    return new Promisse((resolve, reject) =>{
        if(colocouChaleira && ligouFogao){
            console.log('Fervendo agua')
            resolve()
        }else{
            console.log('Tche, coloca a chaleira com a água e liga o fogão senão teu cafézinho não vai ficar pronto nunca')
            reject()
        }
    })
}

let colocouChaleira = true
let ligouFogao = true
ferverAgua(colocouChaleira, ligouFogao)