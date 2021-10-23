async function buscarQuadrinhos() {
	var url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey="+publicKey +"&hash=" + md5;
    console.log(url)
    const response = await fetch(url);
    const quadrinhos = await response.json();
	return quadrinhos;
}

buscarQuadrinhos().then(quadrinhos => {
    console.log(quadrinhos.data.results);
});