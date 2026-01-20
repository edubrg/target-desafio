import { TipoMovimentacao } from "../enum/tipo-movimentacao.enum";
import { ProdutoEstoqueResponse } from "./produto.response";

export interface MovimentacaoEstoqueResponse extends ProdutoEstoqueResponse {
    movimentacoes: MovimentacaoResponse[];
}

export interface MovimentacaoResponse {
    idMovimentacao: number;
    codigoMovimentacao: string;
    descricaoMovimentacao: string;
    dataMovimentacao: string;
    quantidadeMovimentacao: number;
    tipoMovimentacao: TipoMovimentacao;
}