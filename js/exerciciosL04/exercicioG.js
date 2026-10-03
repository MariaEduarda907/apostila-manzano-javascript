// Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares 
// situados na faixa numérica de 1 a 10.

document.getElementById("exercicioFatorialImpares").addEventListener("click", function() {
    let valor = 1

    do {
        if (valor % 2 !== 0) {
            let fatorial = 1
            for (let contador = 1; contador <= valor; contador++) { //loop para calcular o fatorial do valor atual
                fatorial *= contador //fatorial = fatorial * contador
            }
            console.log(`Fatorial de ${valor} é: ${fatorial}`)
        }
        valor++
    } while (valor <= 10)
})