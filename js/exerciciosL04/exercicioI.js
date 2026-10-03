// Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo 
// seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo 
// usuário.

document.getElementById("exercicioMaiorMenorValor").addEventListener("click", function() {
    let maiorValor = null //null indica que ainda não foi definido nenhum valor
    let menorValor = null

    do{
        let numero = parseInt(prompt("Digite um número positivo (ou um número negativo para encerrar): "))

        if (numero < 0) { //se o número for negativo, sai do loop
            break
        }

        if (maiorValor === null || numero > maiorValor) {
            maiorValor = numero
        }

        if (menorValor === null || numero < menorValor) {
            menorValor = numero
        }
    } while (true)

    alert(`O maior valor informado foi: ${maiorValor}\nO menor valor informado foi: ${menorValor}`)
})