// Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do 
// somatório e a média aritmética dos valores lidos.

//utilizei array para guardar os valores digitados, e push() para adicionar os valores no array

document.getElementById("exercicioSomaEmedia").addEventListener("click", function() {
    let valoresDigitados = [] //array para guardar os valores
    let soma = 0

    while (valoresDigitados.length < 10) { //enquanto o tamanho do array for menor que 10, continua pedindo valores
        
        let valor = parseFloat(prompt(`Digite o ${valoresDigitados.length + 1}º valor:`))
        valoresDigitados.push(valor) //adiciona o valor digitado no array

        soma += valor //soma = soma + valor 
    }

    let media = soma / 10

    alert(`O total da soma é: ${soma}\nO total da média é: ${media}`)
})