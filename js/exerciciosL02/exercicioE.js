// Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de 
// segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o 
// referido cálculo. Lembre-se de que a variável A deve ser diferente de zero.

document.getElementById("exercicioEquacaoSegundoGrau").addEventListener("click", function() {
    let valorA = parseFloat(prompt("Digite o valor de A:"))
    let valorB = parseFloat(prompt("Digite o valor de B:"))
    let valorC = parseFloat(prompt("Digite o valor de C:"))
    let delta = (valorB * valorB) - (4 * valorA * valorC)

    if (valorA === 0){
        alert("O valor de A deve ser diferente de zero.")
    }
    else if (delta < 0) {
        alert("Não existem raízes reais para os valores informados.")
    }
    else {
        let valorX1 = (-valorB + Math.sqrt(delta)) / (2 * valorA)
        let valorX2 = (-valorB - Math.sqrt(delta)) / (2 * valorA)
        alert(`O valor da primeira raiz é: ${valorX1.toFixed(2)}\n O valor da segunda raiz é: ${valorX2.toFixed(2)}`)
    }
})