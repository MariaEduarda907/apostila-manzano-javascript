// Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo segundo

document.getElementById("exercicioQuadradoDiferenca").addEventListener("click", function() {
    let valorA = parseInt(prompt("Digite o valor de A: "))
    let valorB = parseInt(prompt("Digite o valor de B: "))
    let diferenca = valorA - valorB
    let resultado = diferenca * diferenca
    
    alert(`O quadrado da diferença entre A e B é: ${resultado}`)
})