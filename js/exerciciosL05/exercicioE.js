// Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar 
// se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução 
// se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo. 

document.getElementById("exercicioNumerosImpares").addEventListener("click", function() {
    for (let contador = 1; contador <= 20; contador += 2) { // contador = contador + 2, incrementa o contador de 2 em 2 mostrando apenas números ímpares

        console.log(`Número ímpar: ${contador}`) // exibe os números ímpares de 1 a 20
    }
})