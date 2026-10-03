// Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em 
// dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares 
// disponível com o usuário, para que seja apresentado o valor em moeda brasileira

document.getElementById("exercicioConversorReal").addEventListener("click", function() {
    let cotacaoDolar = parseFloat(prompt("Digite o valor da cotação atual do dólar: "))
    let quantidadeDolar = parseFloat(prompt("Digite a quantidade de dólares que você possui: "))
    let valorEmReal = cotacaoDolar * quantidadeDolar

    alert(`O valor em real é: R$${valorEmReal.toFixed(2)}`)
})