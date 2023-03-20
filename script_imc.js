 function calcular(){
  const peso = document.getElementById("Peso").value;
  const altura = document.getElementById("Altura").value / 100;
  const resultado = document.getElementById("resultado");

  if (altura !== "" && peso !== "") {
    let imc = (peso / (altura * altura)).toFixed(2);
    let mensagem = "";
    if (imc < 18.5) {
      mensagem = "Magreza";
    } else if (imc > 18.5 && imc < 24.9) {
      mensagem = "Normal";
    } else if (imc > 25 && imc < 29.9) {
      mensagem = "Sobrepeso";
    } else if (imc > 30 && imc < 34.5) {
      mensagem = "Obesidade grau I";
    } else if (imc > 35 && imc < 39.9) {
      mensagem = "Obesidade grau II";
    } else if (imc >= 40) {
      mensagem = "Obesidade grau III";
    }
    resultado.value = `Seu IMC é ${imc}! ${mensagem}`;
  } else {
    resultado.value = "Preencha todos os campos!";
  }
}

const Apagar = document.getElementById("Apagar");
const theme = window.localStorage.getItem("theme");

if(theme === "dark") document.body.classList.add("dark");

Apagar.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
  }else window.localStorage.setItem("theme", "light");
  });