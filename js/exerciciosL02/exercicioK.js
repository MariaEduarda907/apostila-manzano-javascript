// Elaborar um programa que efetue a leitura de um determinado valor inteiro, e efetue a sua 
// apresentação, caso o valor não seja maior que três.

document.getElementById("exercicioValorInteiro").addEventListener("click", function() {
    let valor = parseInt(prompt("Digite um valor inteiro: "))

    if (valor <= 3) {
        alert(`O valor digitado é: ${valor}`)
    } else {
        alert("O valor digitado é maior que 3")
    }
})