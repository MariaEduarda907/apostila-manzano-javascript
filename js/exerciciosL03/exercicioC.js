// Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 
// 1 até 500. 

document.getElementById("exercicioSomaPares").addEventListener("click", function() {
    let soma = 0
    let numero = 1

    while (numero <= 500) {
        if (numero % 2 === 0) {
            soma += numero // soma = soma + numero
        }
        numero++
    }

    alert(`A soma dos números pares de 1 a 500 é: ${soma}`)
})