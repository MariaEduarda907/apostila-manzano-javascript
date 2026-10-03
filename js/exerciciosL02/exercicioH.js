// Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores. 

document.getElementById("exercicioMaiorMenorValor").addEventListener("click", function() {
    let valor1 = parseInt(prompt("Digite o primeiro valor:"))
    let valor2 = parseInt(prompt("Digite o segundo valor:"))
    let valor3 = parseInt(prompt("Digite o terceiro valor:"))
    let valor4 = parseInt(prompt("Digite o quarto valor:"))
    let valor5 = parseInt(prompt("Digite o quinto valor:"))

    let maior = Math.max(valor1, valor2, valor3, valor4, valor5)
    let menor = Math.min(valor1, valor2, valor3, valor4, valor5)

    alert(`O maior valor é: ${maior}\nO menor valor é: ${menor}`)
})