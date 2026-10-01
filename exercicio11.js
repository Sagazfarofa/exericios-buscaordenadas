let temperaturas = [33, 37, 39, 23, 40, 27, 25];

function selectionSort(temperaturas) {
    for (let i = 0; i < temperaturas.length - 1; i++) {
        let menor = i;

        for (let j = i + 1; j < temperaturas.length; j++) {
            if (temperaturas[j] < temperaturas[menor]) {
                menor = j;
            }
        }

        let aux = temperaturas[i];
        temperaturas[i] = temperaturas[menor];
        temperaturas[menor] = aux;
    }
}

selectionSort(temperaturas);

console.log(temperaturas);