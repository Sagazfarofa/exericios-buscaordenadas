function usuarioExiste(usuarios, nome) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i] === nome) {
            return true;
        }
    }
    return false;
}
