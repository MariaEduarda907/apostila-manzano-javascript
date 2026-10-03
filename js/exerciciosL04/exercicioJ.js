// Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer. 
// Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético 
// DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve 
// apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo.

document.getElementById("exercicioDivisao").addEventListener("click", function() {
    let dividendo = parseInt(prompt("Digite o dividendo: "))
    let divisor = parseInt(prompt("Digite o divisor: "))
    let quociente = 0

    do {
        if (divisor === 0) {
            console.log("Inválido! Digite um valor maior que zero para o divisor.")
            return //encerra a execução da função se o divisor for zero
        }
        dividendo -= divisor //dividendo = dividendo - divisor, subtrai o divisor do dividendo
        quociente++
    } while (dividendo >= divisor) 

    console.log(`O quociente da divisão é: ${quociente}`)
    console.log(`O resto da divisão é: ${dividendo}`)
})