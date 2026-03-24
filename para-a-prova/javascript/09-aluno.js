// 9. Peça três notas de um aluno, calcule a média e informe:

//"Aprovado" se a média for maior ou igual a 7

//"Recuperação" se for maior ou igual a 5 e menor que 7

//"Reprovado" se for menor que 5


const nota1 = Number(prompt("digite a nota 1"))
const nota2 = Number(prompt("digite a nota 2"))
const nota3 = Number(prompt("digite a nota 3"))
const media = (nota1 + nota2 + nota3) / 3

if (media >= 7) {
    alert("aprovado")
}
else if (media >= 5 && )