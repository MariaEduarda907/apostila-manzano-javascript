// Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).

document.getElementById("exercicioSomaCemNumeros").addEventListener("click", function() {
    let soma = 0
    let numero = 1

    while (numero <= 100) {
        soma += numero // soma = soma + numero
        numero++
    }

    alert(`A soma dos cem primeiros números inteiros é: ${soma}`)
})