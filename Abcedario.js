function solucao(letra, palavras) {
    let criancasErradas = 0;

    for (let primeiraLetra of palavras) {
        if (primeiraLetra[0] !== letra) {
            criancasErradas++;
        }
    }
    console.log(criancasErradas);
}