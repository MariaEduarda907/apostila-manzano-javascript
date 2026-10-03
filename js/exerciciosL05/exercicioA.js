// Apresentar os quadrados dos números inteiros de 15 a 200. 

document.getElementById("exercicioQuadradosNumeros").addEventListener("click", function() {
    for (let numero = 15; numero <= 200; numero++) {
        let quadrado = Math.pow(numero, 2) // ou numero * numero
        console.log(`O quadrado de ${numero} é: ${quadrado}`)
    }
})