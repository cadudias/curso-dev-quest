function mostrarAlerta() {
  alert("Olá");
}

let select = document.querySelector("select[name='cidade']");

select.addEventListener("change", function (event) {
  console.log(event.target.value);
});
