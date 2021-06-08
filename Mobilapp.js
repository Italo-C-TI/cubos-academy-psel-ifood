function solucao(tempo, distancia) {
    if (tempo < 5) {
        console.log("600");
    }
    if (tempo >= 5 && tempo <= 60) {
        console.log(distancia * 50 + tempo * 100);
    }
    if (tempo > 60 && distancia < 100) {
        console.log(distancia * 200);
    }
    if (tempo > 60 && distancia >= 100) {
        console.log(distancia * 150);
    }
}