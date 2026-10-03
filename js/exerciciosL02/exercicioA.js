//Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor.

document.getElementById("exercicioDiferencaValores").addEventListener("click", function() {
    let valor1 = parseInt(prompt("Digite o primeiro valor:"))
    let valor2 = parseInt(prompt("Digite o segundo valor:"))

    if (valor1 > valor2) {
       let diferenca = valor1 - valor2
       alert(`A diferença do maior pelo menor valor é: ${diferenca}`) 
    }else{
         let diferenca = valor2 - valor1
         alert(`A diferença do maior pelo menor valor é: ${diferenca}`)
    }

})