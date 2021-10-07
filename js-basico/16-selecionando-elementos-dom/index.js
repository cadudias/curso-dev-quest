console.log(document)

let paragrafo = document.getElementById('paragarafo1');
console.log(paragrafo)

let inputsPorClasse = document.getElementsByClassName('tag-de-input');
console.log(inputsPorClasse[0])

let inputsPorTag = document.getElementsByTagName('input');
console.log(inputsPorTag[0])

let inputsPorName = document.querySelectorAll("input[name='email']");
console.log(inputsPorName[0])