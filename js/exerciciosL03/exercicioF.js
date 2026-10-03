// Elaborar um programa que apresente como resultado o valor de uma potência de uma base 
// qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor 
// do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do 
// portuguol (^).

document.getElementById("exercicioPotencia").addEventListener("click", function() {
    let base = parseFloat(prompt("Digite o valor da base:"))
    let expoente = parseInt(prompt("Digite o valor do expoente:"))
    let contador = 0
    let resultado = 1

    while (expoente > contador) {
        resultado = Math.pow(base, expoente) //resultado = resultado * base, multiplica a base pelo resultado a cada iteração do loop
        contador++
    }
    alert(`O resultado de ${base} elevado a ${expoente} é igual a ${resultado}`)
})