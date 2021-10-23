async function criarEEmbaralharAsCartas() {
	var url = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const resposta = await fetch(url)    
    return await resposta.json()	
}

async function tirarUmaCarta(idDoBaralho){
    var url = `http://deckofcardsapi.com/api/deck/${idDoBaralho}/draw/?count=1`
    const resposta = await fetch(url)
    return await resposta.json()        
}

async function tirarCartaAleatoriaDoBaralho(){
    const baralho = await criarEEmbaralharAsCartas();    
    const carta = await tirarUmaCarta(baralho.deck_id)
    console.log(carta)
}

tirarCartaAleatoriaDoBaralho()
console.log('segue o fluxo sem esperar a função tirarCartaAleatoriaDoBaralho() ficar pronta')