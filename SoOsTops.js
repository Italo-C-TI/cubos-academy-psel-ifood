function solucao(produtos) {
    let total = 0;
    let tops = 0

    for (let item of produtos) {
        const preco = item.preco;
        total = total + item.preco

        if (item.preco > 10000) {
            tops = tops + item.preco;
        }
    }
    console.log("{" + " totalTop: " + tops + "," + " percentual: " + tops / total + " }");
}