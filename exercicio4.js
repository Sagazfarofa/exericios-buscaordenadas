function buscarTelefone(contatos, nome) {
    for (let i = 0; i < contatos.length; i++) {
        if (contatos[i].nome === nome) {
            return contatos[i].telefone;
        }
    }

    return null;
}
