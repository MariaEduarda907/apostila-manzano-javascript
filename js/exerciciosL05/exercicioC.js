// Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).

document.getElementById("exercicioSoma100").addEventListener("click", function() {
    let soma = 0

    for (let contador = 1; contador <= 100; contador++) {
        soma += contador // soma = soma + contador, acumula a soma dos números inteiros de 1 a 100
    }
    
    console.log(`A soma dos 100 primeiros números inteiros é: ${soma}`)
})