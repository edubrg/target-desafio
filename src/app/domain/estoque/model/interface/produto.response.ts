export interface ProdutoEstoqueResponse {
    id: number;
    codigoProduto:  number;
    descricaoProduto: string;
    estoque: number;
    unidade: UnidadeResponse[];
}

export interface UnidadeResponse {
    unidade: string;
    fator: number;
}