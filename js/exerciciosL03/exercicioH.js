// Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 
// 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O 
// programa deve apresentar os valores das duas temperaturas. A fórmula de conversão 
// é F = 9c + 160
//        5
//  sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. 

document.getElementById("exercicioConversaoTemperatura").addEventListener("click", function() {
    let grausCelsius = 10
    let grausFahrenheit

    while (grausCelsius <= 100) {
        grausFahrenheit = (9 * grausCelsius + 160) / 5
        console.log(`Graus Celsius: ${grausCelsius}\n Graus Fahrenheit: ${grausFahrenheit}`)
        grausCelsius += 10 // Incrementa em 10 graus Celsius
    }
})