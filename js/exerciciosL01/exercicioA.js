// Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de 
// conversão é F < (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

document.getElementById("exercicioConversorGrausFahrenheit").addEventListener("click", function (){
    let grausCelsius = parseFloat(prompt("Digite o valor da temperatura em graus Celsius:"))
    let grausFahrenheit = (9 * grausCelsius + 160) / 5

    alert(`A temperatura em graus Fahrenheit é: ${grausFahrenheit}°`)
})