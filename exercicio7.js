let alunos = [{ chamada: 4, nome: "Ana Alfreda" },{ chamada: 5, nome: "Alfredo" },{ chamada: 3, nome: "Malta" },{ chamada: 7, nome: "Brian" },{ chamada: 2, nome: "Sueny" }];

function ordenarAlunos(alunos) {
    for (let i = 0; i < alunos.length - 1; i++) {
    for (let j = 0; j < alunos.length - 1 - i; j++) {
        if (alunos[j].chamada > alunos[j + 1].chamada) {
             let temp = alunos[j];
             alunos[j] = alunos[j + 1];
             alunos[j + 1] = temp;
            }
        }
    }

    return alunos;
}

console.log(ordenarAlunos(alunos));
