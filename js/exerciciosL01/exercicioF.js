// Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de 
// forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da
// variável A. Apresentar os valores trocados

document.getElementById("exercicioTrocaValores").addEventListener("click", function() {
    valorA = prompt("Digite o valor de A: ")
    valorB = prompt("Digite o valor de B: ")

    let valorTrocado = valorA
    valorA = valorB
    valorB = valorTrocado

    alert(`VALORES TROCADOS\nValor de A: ${valorA}\nValor de B: ${valorB}`)
})