function buscarProduto(produtos) {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].preco < 20) {
            return produtos[i].nomeProduto;
        }
    }

    return null;
}
