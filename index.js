const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const msjs = document.querySelectorAll(".mostrar");

console.log(msjs);

function check() {
  if (password.value === confirm.value) {
    msjs.forEach((msj) => {
      msj.classList.remove("mostrar");
      msj.classList.add("esconder");
    });
  }
}
password.addEventListener("click", check);
