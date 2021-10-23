let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('Passo 1 finalizado: Água foi fervida')
            resolve()
        } else {
            console.log('é necessário colocar a chaleira com a água e ligar o fogão senão teu cafézinho não vai ficar pronto nunca')
            reject()
        }
    })
}

let passarOCafe = () => {
    return new Promise((resolve) => {        
        console.log('Passo 2 finalizado: Café foi passado')
        resolve()
    })
}

let tomarCafe = () => {
    return new Promise((resolve) => {        
        console.log('Passo 4 finalizado: Terminei de tomar o café')
        resolve()
    })
}

let lavarXicara = () => {
    return new Promise((resolve) => {        
        console.log('Passo 5 finalizado: Terminei de lavar a xícara')
        resolve()
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
  .then(() => {
    return passarOCafe();
  })
  .then(() => {  
    return tomarCafe();
  })
  .then(() => {  
    return lavarXicara();
  })
  .then(() => {
    console.log('Finalizado ritual do café, bora trabalhar');
  });