// Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 
// 1 até 500. 

document.getElementById("exercicioSomaPares").addEventListener("click", function() {
    let soma = 0

    for (let contador = 2; contador <= 500; contador += 2) {
        soma += contador // soma = soma + contador, acumula a soma dos números pares de 1 a 500
    }

    console.log(`A soma dos valores pares de 1 a 500 é: ${soma}`)
})