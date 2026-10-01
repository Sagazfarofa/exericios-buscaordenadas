function contarNotasMaximas(notas) {
    let contador = 0;

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] === 10) {
            contador++;
        }
    }

    return contador;
}
