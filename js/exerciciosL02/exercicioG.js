// Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3. 

document.getElementById("exercicioDivisiveisPor2E3").addEventListener("click", function() {
    let numero1 = parseInt(prompt("Digite o primeiro número: "))
    let numero2 = parseInt(prompt("Digite o segundo número: "))
    let numero3 = parseInt(prompt("Digite o terceiro número: "))
    let numero4 = parseInt(prompt("Digite o quarto número: "))

    if (numero1 % 2 === 0 && numero1 % 3 === 0) {
        console.log(`O número ${numero1} é divisível por 2 e 3.`)
    }
    if (numero2 % 2 === 0 && numero2 % 3 === 0) {
        console.log(`O número ${numero2} é divisível por 2 e 3.`)
    }
    if (numero3 % 2 === 0 && numero3 % 3 === 0) {
        console.log(`O número ${numero3} é divisível por 2 e 3.`)
    }
    if (numero4 % 2 === 0 && numero4 % 3 === 0) {
        console.log(`O número ${numero4} é divisível por 2 e 3.`)
    }
})