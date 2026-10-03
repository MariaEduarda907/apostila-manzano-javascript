// Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser 
// considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que 
// neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). 


document.getElementById("exercicioPotenciasDe3").addEventListener("click", function() {
    let expoente = 0
    let resultado = 1

     while (expoente <= 15) {
        console.log(`3 elevado a ${expoente} é igual a ${resultado}`)
        resultado *= 3 // resultado = resultado * 3

        expoente++
    }
})