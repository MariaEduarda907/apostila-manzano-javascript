// Elaborar um programa que efetue a leitura de um número inteiro e apresentar uma mensagem 
// informando se o número é par ou ímpar. 

document.getElementById("exercicioParOuImpar").addEventListener("click", function() {
    let numero = parseInt(prompt("Digite um número inteiro:"))

    if (numero % 2 === 0) {
        alert(`O número ${numero} é par.`)
    } else {
        alert(`O número ${numero} é ímpar.`)
    }
})