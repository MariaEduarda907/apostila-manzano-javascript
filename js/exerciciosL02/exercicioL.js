// Elaborar um programa que efetue a leitura do nome e do sexo de uma pessoa, apresentando com 
// saída uma das seguintes mensagens: "Ilmo Sr.", se o sexo informado como masculino, ou a 
// mensagem "Ilma Sra.", para o sexo informado como feminino. Apresente também junto da 
// mensagem de saudação o nome previamente informado.

document.getElementById("exercicioSaudacao").addEventListener("click", function() {
    let nome = prompt("Digite o seu nome: ")
    let sexo = prompt("Digite o seu sexo: ")

    if (sexo === "MASCULINO" || sexo === "masculino" || sexo === "Masculino") {
        alert(`Ilmo Sr. ${nome}`)
    } else if (sexo === "FEMININO" || sexo === "feminino" || sexo === "Feminino") {
        alert(`Ilma Sra. ${nome}`)
    } else {
        alert("Inválido")
    }
})