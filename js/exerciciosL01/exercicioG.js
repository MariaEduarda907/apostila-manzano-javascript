// Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na 
// utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D,
// devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim 
// C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de 
// multiplicação e apresentar doze resultados de saída.

document.getElementById("exercicioSomaMultiplicacao").addEventListener("click", function() {
    let A = parseInt(prompt("Digite o valor de A: "))
    let B = parseInt(prompt("Digite o valor de B: "))
    let C = parseInt(prompt("Digite o valor de C: "))
    let D = parseInt(prompt("Digite o valor de D: "))

    let somaAB = A + B
    let somaAC = A + C
    let somaAD = A + D
    let somaBC = B + C
    let somaBD = B + D
    let somaCD = C + D

    let multiplicacaoAB = A * B
    let multiplicacaoAC = A * C
    let multiplicacaoAD = A * D
    let multiplicacaoBC = B * C
    let multiplicacaoBD = B * D
    let multiplicacaoCD = C * D

    console.log(`Resultados da adição de A + B: ${somaAB}`)
    console.log(`Resultados da adição de A + C: ${somaAC}`)
    console.log(`Resultados da adição de A + D: ${somaAD}`)
    console.log(`Resultados da adição de B + C: ${somaBC}`)
    console.log(`Resultados da adição de B + D: ${somaBD}`)
    console.log(`Resultados da adição de C + D: ${somaCD}`)
    console.log(`Resultados da multiplicação de A * B: ${multiplicacaoAB}`)
    console.log(`Resultados da multiplicação de A * C: ${multiplicacaoAC}`)
    console.log(`Resultados da multiplicação de A * D: ${multiplicacaoAD}`)
    console.log(`Resultados da multiplicação de B * C: ${multiplicacaoBC}`)
    console.log(`Resultados da multiplicação de B * D: ${multiplicacaoBD}`)
    console.log(`Resultados da multiplicação de C * D: ${multiplicacaoCD}`)
})