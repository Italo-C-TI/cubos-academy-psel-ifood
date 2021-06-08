function solucao(ano) {
    if (ano % 4 == 0) {
        console.log("JOGOS");
    }
    if (ano % 2 == 0 && ano % 4 != 0) {
        console.log("COPA");
    }
    if (ano % 2 != 0) {
        console.log("MEH")
    }
}