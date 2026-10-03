// Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, 
// banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do 
// nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área
// do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar 
// calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor 
// total acumulado da área residencial.

document.getElementById("exercicioAreaResidencia").addEventListener("click", function() {
    let areaTotal = 0
    let continuar = "SIM"

    while (continuar.toUpperCase() === "SIM") { //toUpperCase() é usado para converter a resposta do usuário para maiúscula
        let nomeComodo = prompt("Digite o nome do cômodo: ")
        let larguraComodo = parseFloat(prompt("Digite a largura do cômodo:"))
        let comprimentoComodo = parseFloat(prompt("Digite o comprimento do cômodo:"))

        let areaComodo = larguraComodo * comprimentoComodo
        areaTotal += areaComodo //areaTotal = areaTotal + areaComodo

        alert(`A área do cômodo ${nomeComodo} é: ${areaComodo}`)

        let continuar = prompt("Deseja continuar calculando áreas? (SIM/NAO)")

        if (continuar.toUpperCase() === "NAO") {
            break //break é usado para sair do loop, nesse caso se o usuário digitar "NAO" o loop while será interrompido e o programa seguirá para a próxima linha de código.
        }
    }

    alert(`A área total da residência é: ${areaTotal}`)
})