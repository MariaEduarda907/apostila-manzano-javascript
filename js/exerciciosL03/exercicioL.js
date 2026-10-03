// Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo 
// seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo 
// usuário. 

document.getElementById("exercicioMaiorMenor").addEventListener("click", function() {
    let maiorValor = null //null indica que ainda não foi definido nenhum valor
    let menorValor = null

    while (true) { //loop infinito até que um número negativo seja informado
        let numero = parseInt(prompt("Digite um número positivo (ou um número negativo para encerrar): "))

        if (numero < 0) { //se o número for negativo, sai do loop
            break
        }

        if (maiorValor === null || numero > maiorValor) { //se maiorValor ainda não foi definido ou o número atual é maior que o maiorValor
            maiorValor = numero
        }
        if (menorValor === null || numero < menorValor) {
            menorValor = numero
        }
    }

    alert(`O maior valor informado foi: ${maiorValor}\nO menor valor informado foi: ${menorValor}`)
})