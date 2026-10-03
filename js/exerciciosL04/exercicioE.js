// Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o 
// total do somatório da fatorial de cada valor lido. 

document.getElementById("exercicioSomaFatorial").addEventListener("click", function() {
    let contador = 1
    let somaFatorial = 0

    do {
        let numero = parseInt(prompt("Digite o " + contador + "º número inteiro:"))
        let fatorial = 1

        for (let i = 1; i <= numero; i++) { //calcula o fatorial do número
            fatorial *= i //fatorial = fatorial * i, multiplica o fatorial pelo número atual
        }
        somaFatorial += fatorial //adiciona o fatorial à soma total
        contador++
    } while (contador <= 15)

    console.log(`A soma dos fatoriais é: ${somaFatorial}`)
})