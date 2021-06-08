function solucao(precos) {

    let cont = 0;
    let soma = 0;
    let menor = precos[0];

    for (cont = 0; cont < precos.length; cont++) {
        soma = soma + precos[cont];
        if (precos[cont] < menor) {
            menor = precos[cont];
        }
    }
    if (precos.length < 5) {
        console.log(soma);
    }
    if (precos.length >= 5) {
        console.log(soma - menor);
    }
}