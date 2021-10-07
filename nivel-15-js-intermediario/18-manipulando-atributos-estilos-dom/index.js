function alterarCorDeFundoPrimeiroPost() {
  let posts = document.getElementsByClassName('post');
  console.log('posts', posts)

  let primeiroPost = posts[0];
  primeiroPost.style.backgroundColor = 'red';
  console.log('backgroundColor', primeiroPost.style.backgroundColor)
}

// function alterarCorDeFundoTodosPosts() {
//   let posts = document.getElementsByClassName('post');

//   console.log(posts.length)

//   for(let i = 0; i < posts.length; i++) {
//     posts[i].style.backgroundColor = 'blue'
//   }
// }

function aumentarFonte() {
  let textoPosts = document.getElementsByClassName('texto-post');
  console.log(textoPosts[0].classList)
  textoPosts[0].classList.add('fonte-grande')
  console.log(textoPosts[0].classList)
}

function marcarCheckbox(genero) {
  let checkboxMasculino = document.getElementById("genero-masculino");
  let checkboxFeminino = document.getElementById("genero-feminino");
  
  if(genero === 'M') {
    checkboxMasculino.checked = true; // temos acesso ao atributo checked do input radio
    console.log('masculino')
  }else if (genero === 'F') {
    checkboxFeminino.checked = true;
    console.log('feminino')
  }
}