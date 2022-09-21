let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {

        if(typeof chaleiraEstaNoFogao != "boolean") throw "Somente tipo boleano é aceito"

        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('Passo 1 finalizado: Água foi fervida')
            resolve()
        } else {
            let mensagemDeErro = 'é necessário colocar a chaleira com a água e ligar o fogão senão teu cafézinho não vai ficar pronto nunca'
            reject(mensagemDeErro)
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
let fogaoEstaLigado = false

async function iniciarProcessoDeFazerCafe(){
    try{
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)    
        const cafePassado = await passarOCafe()   
    }catch(err){
        console.log(err)
    }finally{
        console.log('terminar processo de fazer café')
    }
}
iniciarProcessoDeFazerCafe()