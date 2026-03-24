alert("teste exercicio2")
// Identificar variáveis - ValorHora e horastrabalhadas
// Indentificar funçãoes para serem utilizadas - Alert, Prompt
//Identificar a opeção


function exercicio2() {
    
    
    // entrada
    const ValorHora = Number(prompt("Digite outro número:"))
    const HorasTrabalhadas = Number(prompt("Digite um número:"))
    
    
    //processamento
    
    alert (ValorHora * HorasTrabalhadas)
    
    //Saida
    alert (resultado)
    
}

const butttonExercicio2 = document.getElementById("exercicio2")
butttonExercicio2.addEventListener('click', () => { exercicio2() })
// o carinha de escuta - addEventlistner