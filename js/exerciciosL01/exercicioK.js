// Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em 
// real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível 
// com o usuário, para que seja apresentado o valor em moeda americana.

document.getElementById("exercicioConversorDolar").addEventListener("click", function() {
    let cotacaoDolar = parseFloat(prompt("Digite o valor da cotação atual do dólar: "))
    let quantidadeReal = parseFloat(prompt("Digite a quantidade de reais que você possui: "))
    let valorEmDolar = quantidadeReal / cotacaoDolar

    alert(`O valor em dólar é: $${valorEmDolar.toFixed(2)}`)
})