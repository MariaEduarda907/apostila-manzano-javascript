// Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de 
// conversão é C < (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

document.getElementById("exercicioConversorGrausCelsius").addEventListener("click", function (){
    let grausFahrenheit = parseFloat(prompt("Digite o valor da temperatura em graus Fahrenheit: "))
    let grausCelsius = (grausFahrenheit - 32) * (5 / 9)

    alert(`A temperatura em graus Celsius é: ${grausCelsius}°`)
})