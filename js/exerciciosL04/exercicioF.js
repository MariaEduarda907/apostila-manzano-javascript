// Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o 
// total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras 
// dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve 
// parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar 
// como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da 
// média. 

document.getElementById("exercicioSomaMediaQuantidade").addEventListener("click", function() {
    let soma = 0
    let quantidade = 0
    let media = 0

    do{
        let numero = parseInt(prompt("Digite um número inteiro (ou um número negativo para encerrar):"))
        if (numero >= 0) {
            soma += numero //adiciona o número à soma total
            quantidade++ //incrementa a quantidade de números lidos
        } else {
            break //encerra o loop se o número for negativo
        }
    } while (true)

    if (quantidade > 0) {
        media = soma / quantidade
    }

    console.log(`Soma: ${soma}\nMédia: ${media}\nQuantidade: ${quantidade}`)
})