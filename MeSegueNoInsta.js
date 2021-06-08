function solucao(largura, altura) {
    if (altura > largura) {
        console.log("RETRATO");
    }
    if (largura > altura) {
        console.log("PAISAGEM");
    }
    if (largura === altura) {
        console.log("QUADRADA");
    }

}