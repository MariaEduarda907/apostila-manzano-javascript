// Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. 

document.getElementById("exercicioTabuada").addEventListener("click", function() {
    let numero = parseInt(prompt("Digite um número para ver a tabuada: "))
    
    for (let fator = 1; fator <= 10; fator++) {
        let produto = numero * fator
        console.log(`${numero} x ${fator} = ${produto}`)
    }
})