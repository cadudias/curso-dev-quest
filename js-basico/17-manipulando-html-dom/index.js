function adicionarComentario() {  
  // pegar o valor do input que a pessoa digitou
  let inputDoComentario = document.getElementsByName('novo-comentario');
  let textoDigitado = inputDoComentario[0].value;

  // adicionar o texto que a pessoa digitou 
  let novosComentarios = document.getElementById('novos-comentarios');
  console.log(novosComentarios);
  novosComentarios.innerHTML = novosComentarios.innerHTML + '<p>Novo comentário: ' + textoDigitado + '</p>';
}


