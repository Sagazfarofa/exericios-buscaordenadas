function buscarNumero(array, numero) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === numero) {
            return i;
        }
    }
    return -1;
}
