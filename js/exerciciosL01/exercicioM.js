// Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o quadrado da soma dos três valores lidos.

document.getElementById("exercicioQuadradoSoma").addEventListener("click", function() {
    let valorA = parseFloat(prompt("Digite o valor de A: "))
    let valorB = parseFloat(prompt("Digite o valor de B: "))
    let valorC = parseFloat(prompt("Digite o valor de C: "))
    let soma = valorA + valorB + valorC
    let quadradoSoma = Math.pow(soma, 2)
    //Math.pow(valor, 2) retorna o valor elevado ao quadrado

    alert(`O resultado do quadrado da soma dos valores A, B e C é: ${quadradoSoma}`)
})