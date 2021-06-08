function solucao(joao, andre) {
    if ((andre == "PEDRA" && joao == "PEDRA") || (andre == "PAPEL" && joao == "PAPEL") || (andre == "TESOURA" && joao == "TESOURA")) {
        console.log("EMPATE");
    }
    if ((andre == "PEDRA" && joao == "TESOURA") || (andre == "PAPEL" && joao == "PEDRA") || (andre == "TESOURA" && joao == "PAPEL")) {
        console.log("ANDRE");
    }
    if ((andre == "PEDRA" && joao == "PAPEL") || (andre == "PAPEL" && joao == "TESOURA") || (andre == "TESOURA" && joao == "PEDRA")) {
        console.log("JOAO");
    }
}