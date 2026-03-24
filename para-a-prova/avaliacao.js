// função
// getElementById
// addEventlistner

//-------------------------- QUESTÃO 1 ------------------------------\\
function questao1() {
  const numero = Number(prompt("Digite um número:"))
  const numero2 = Number(prompt("Digite outro número:"))
  alert(numero+numero2)
}
const buttonQuestao1 = document.getElementById("questao1") 
buttonQuestao1.addEventListener('click',() => {questao1() })