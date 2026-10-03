// Apresentar os quadrados dos números inteiros de 15 a 200. 

document.getElementById("exercicioQuadradosNumeros").addEventListener("click", function() {
    let numero = 15
    
    do {
        let quadrado = Math.pow(numero, 2) //Math.pow() é uma função que retorna a base elevada ao expoente, ou seja, o quadrado do número. É o mesmo que numero * numero
        console.log(`O quadrado de ${numero} é ${quadrado}`)
        numero++
    } while (numero <= 200)
})