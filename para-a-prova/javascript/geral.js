function exercicio2() {
    const ValorHora = Number(prompt("Digite outro número:"))
    const HorasTrabalhadas = Number(prompt("Digite um número:"))
    alert (ValorHora * HorasTrabalhadas)
    alert (resultado)    
}
const butttonExercicio2 = document.getElementById("exercicio2")
butttonExercicio2.addEventListener('click', () => { exercicio2() })

function exercicio3() {

    const peso1 = Number(prompt("Digite o peso da pessoa 1:"))
    const peso2 = Number(prompt("Digite o peso da pessoa 2:"))
    const peso3 = Number(prompt("Digite o peso da pessoa 3:"))
    const peso4 = Number(prompt("Digite o peso da pessoa 4:"))
    const peso5 = Number(prompt("Digite o peso da pessoa 5:"))
    const resultado = (peso1 + peso2 + peso3 + peso4 + peso5)
    alert(resultado)
}
const butttonExercicio3 = document.getElementById("exercicio3")
butttonExercicio3.addEventListener('click', () => {exercicio3() })

function exercicio4() {
    const celcios = Number(prompt("Digite a temperatura em graus"))
alert((9 * celcios + 160)/5) = Number
}
const butttonExercicio4 = document.getElementById("exerrcicio4")
butttonExercicio4.addEventListener('click', () => {exercicio4() })

function exercicio5() {

 const milha = Number(prompt("Qual é a distancis em milhas?:"))

const resultado = milha*1.60934

alert(resultado + "Km")   
}
const butttonExercicio5 = document.getElementById("exercicio5")
butttonExercicio5.addEventListener('click', () => {exercicio5() })

function exercicio6() {

const segundos = Number(prompt("Segundos"))
alert(segundos * 60)
alert (1 * 60)
alert (segundos / 60)
}
const butttonExercicio6 = document.getElementById("exercicio6")
butttonExercicio6.addEventListener('click', () => {exercicio6() })

function exercicio7() {

const kilometros = Number(prompt("Colocar metros"))
const metros = kilometros * 1000
const centimetros = metros * 100
alert(kilometros)
alert(metros)
alert(centimetros)
}
const butttonExercicio7 = document.getElementById("exercicio7")
butttonExercicio7.addEventListener('click', () => {exercicio7() })

function exercicio8() {

const numero = Number(prompt("Número"))
alert(numero*0)
alert(numero*1)
alert(numero*2)
alert(numero*3)
alert(numero*4)
alert(numero*5)
alert(numero*6)
alert(numero*7)
alert(numero*8)
alert(numero*9)
alert(numero*10)
}
const butttonExercicio8 = document.getElementById("exercicio8")
butttonExercicio8.addEventListener('click', () => {exercicio8() })