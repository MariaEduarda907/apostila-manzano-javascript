// Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um
// valor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se 
// de verificar se o número fornecido é menor que zero; sendo, multiplique-o por -1. 

document.getElementById("exercicioModuloNumero").addEventListener("click", function() {
    let numero = parseInt(prompt("Digite um número:"))
    let modulo = 0

    if (numero < 0) {
        modulo = numero * -1
    }else{
        modulo = numero
    }
    alert(`O módulo do número ${numero} é: ${modulo}`)

})