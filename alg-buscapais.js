// ubequistão, groelandia, Paquistão, angola, baren, cabo verde, França, islandia, Honduras

const paises = ['Ubequistão', 'Groelandia', 'Paquistão', 'Angola', 'Baren', 'Cabo verde', 'França', 'Islandia', 'Honduras'];

function buscaPais(pais, paises){
    for(let i = 0; i< paises.length; i++){
        if(pais == paises[i]){
            console.log(`O pais ${paises[i]} foi localizado!`);
            return;
        }
    }
    console.log('Pais inexistente ')
}

buscaPais('Groelandia', paises)