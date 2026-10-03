// Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente. 

document.getElementById("exercicioOrdemCrescente").addEventListener("click", function() {
    let valorA = parseFloat(prompt("Digite o valor A:"))
    let valorB = parseFloat(prompt("Digite o valor B:"))
    let valorC = parseFloat(prompt("Digite o valor C:"))

    if (valorA < valorB && valorA < valorC) {
        if (valorB < valorC) {
            alert(`A ordem crescente é: ${valorA}, ${valorB}, ${valorC}`)
        } else {
            alert(`A ordem crescente é: ${valorA}, ${valorC}, ${valorB}`)
        }
    } else if (valorB < valorA && valorB < valorC) {
        if (valorA < valorC) {
            alert(`A ordem crescente é: ${valorB}, ${valorA}, ${valorC}`)
        } else {
            alert(`A ordem crescente é: ${valorB}, ${valorC}, ${valorA}`)
        }
    } else {
        if (valorA < valorB) {
            alert(`A ordem crescente é: ${valorC}, ${valorA}, ${valorB}`)
        } else {
            alert(`A ordem crescente é: ${valorC}, ${valorB}, ${valorA}`)
        }
    }
})