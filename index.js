const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const msjs = document.querySelectorAll(".mostrar");
const form = document.querySelector("form");
const boton = document.querySelector("button");

function check() {
  if (
    password.value === confirm.value &&
    password.value.length >= 8 &&
    confirm.value.length >= 8
  ) {
    msjs.forEach((msj) => {
      msj.classList.remove("mostrar");
      msj.classList.add("esconder");
    });
    password.classList.remove("error");
    confirm.classList.remove("error");
  } else {
    msjs.forEach((msj) => {
      msj.classList.remove("esconder");
      msj.classList.add("mostrar");
    });
    password.classList.add("error");
    confirm.classList.add("error");
  }
}
function enviar() {
  console.log(password.classList.contains("error"));
  if (password.classList.contains("error") == false) {
    form.submit();
    return;
  } else {
    alert("Las contraseñas no coinciden");
    return false;
  }
}
password.addEventListener("input", check);
confirm.addEventListener("input", check);
