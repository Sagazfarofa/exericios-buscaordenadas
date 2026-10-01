function ordenarCarros(carros) {
    for (let i = 0; i < carros.length - 1; i++) {
        for (let j = 0; j < carros.length - 1 - i; j++) {
            if (carros[j].anoFabricacao > carros[j + 1].anoFabricacao) {
                let temp = carros[j];
                carros[j] = carros[j + 1];
                carros[j + 1] = temp;
            }
        }
    }

    return carros;
}
