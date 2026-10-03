// Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 
// 1 até 500.

document.getElementById("exercicioSomaPares").addEventListener("click", function() {
    let numero = 1
    let soma = 0

    do {
        if (numero % 2 === 0) {
            soma += numero // soma = soma + numero
        }
        numero++
    } while (numero <= 500)
        
    console.log(`A soma dos valores pares de 1 a 500 é: ${soma}`)
})