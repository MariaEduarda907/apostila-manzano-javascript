// Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula 
// PRESTACAO <- VALOR + (VALOR * TAXA/100) * TEMPO).

document.getElementById("exercicioPrestacaoAtraso").addEventListener("click", function () {
    let valorPrestacao = parseFloat(prompt("Digite o valor da prestação:"))
    let taxaJuros = parseFloat(prompt("Digite a taxa de juros (%):"))
    let tempoAtraso = parseInt(prompt("Digite o tempo de atraso (em meses):"))

    let prestacaoAtrasada = valorPrestacao + (valorPrestacao * (taxaJuros / 100) * tempoAtraso)

    console.log(`Valor da prestação: R$ ${valorPrestacao.toFixed(2)}`)
    console.log(`Taxa de juros: ${taxaJuros}%`)
    console.log(`Tempo de atraso: ${tempoAtraso} meses`)
    console.log(`Valor da prestação em atraso: R$ ${prestacaoAtrasada.toFixed(2)}`)
})