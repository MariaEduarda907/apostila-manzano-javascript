/*Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à soma dos quadrados dos três valores lidos.*/

document.getElementById("exercicioSomaQuadrados").addEventListener("click", function() {
    let valorA = parseFloat(prompt("Digite o valor de A: "))
    let valorB = parseFloat(prompt("Digite o valor de B: "))
    let valorC = parseFloat(prompt("Digite o valor de C: "))

    let somaQuadrados = Math.pow(valorA, 2) + Math.pow(valorB, 2) + Math.pow(valorC, 2)
    //Math.pow(valor, 2) retorna o valor elevado ao quadrado

    alert(`A soma dos quadrados de A, B e C é: ${somaQuadrados}`)
})