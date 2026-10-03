// Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores 
// pares situados na faixa numérica de 50 a 70. 

document.getElementById("exercicioSomaEmediaPares").addEventListener("click", function() {
    let contador = 50
    let soma = 0
    let quantidadePares = 0

    while (contador <= 70) { //enquanto o contador for menor ou igual a 70, continua somando os valores pares
        if (contador % 2 === 0) { //verifica se o contador é par
            soma += contador      //soma = soma + contador
            quantidadePares++     //incrementa a quantidade de pares
        }
        contador++
    }

    let media = soma / quantidadePares

    alert(`O total da soma é: ${soma}\nO total da média é: ${media}`)
})