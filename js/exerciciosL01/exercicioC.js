// Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:
// Volume *Raio * Altura

document.getElementById("exercicioVolumeLata").addEventListener("click", function (){
    let raio = parseFloat(prompt("Digite o valor do raio da lata de óleo: "))
    let altura = parseFloat(prompt("Digite o valor da altura da lata de óleo: "))
    let volume = 3.14 * Math.pow(raio, 2) * altura // volume = π * raio² * altura

    alert(`O volume da lata é: ${volume.toFixed(2)} cm³`)// toFixed(2) limita o resultado a duas casas decimais
})