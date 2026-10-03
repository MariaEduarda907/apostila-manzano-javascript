// Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, 
// banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do 
// nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área 
// do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar 
// calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor 
// total acumulado da área residencial.

document.getElementById("exercicioAreaTotalResidencia").addEventListener("click", function() {
    let areaTotal = 0
    let continuar = "SIM"

    do {
        let nomeComodo = prompt("Digite o nome do cômodo: ")
        let largura = parseFloat(prompt(`Digite a largura do ${nomeComodo} em metros: `))
        let comprimento = parseFloat(prompt(`Digite o comprimento do ${nomeComodo} em metros: `))

        let areaComodo = largura * comprimento
        areaTotal += areaComodo
        alert(`A área de ${nomeComodo} é: ${areaComodo.toFixed(2)} m²`)

        let resposta = prompt("Deseja calcular a área de outro cômodo? (Digite 'SIM' para continuar ou 'NAO' para encerrar): ")
        if (resposta.toUpperCase() === "NAO") {
            break
        }
    } while (continuar.toUpperCase() === "SIM")
    alert(`A área total da residência é: ${areaTotal.toFixed(2)} m²`)
})