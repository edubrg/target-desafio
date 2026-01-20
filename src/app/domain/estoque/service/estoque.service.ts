import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { ProdutosEstoqueMock } from '../../../../mocks/estoque/produtos-estoque.mock';
import { MovimentacoesProdutoMock } from '../../../../mocks/estoque/movimentacoes-produto.mock';
import { ProdutoEstoqueResponse } from '../model/interface/produto.response';
import { MovimentacaoEstoqueResponse, MovimentacaoResponse } from '../model/interface/movimentacao-estoque.response';
import { TipoMovimentacao } from '../model/enum/tipo-movimentacao.enum';

export interface LancarMovimentacaoRequest {
  codigoMovimentacao: string;
  descricaoMovimentacao: string;
  dataMovimentacao: Date;
  quantidadeMovimentacao: number;
}

export interface LancarMovimentacaoResult {
  movimentacao: MovimentacaoResponse;
  dadosAtualizados: MovimentacaoEstoqueResponse;
}

@Injectable()
export class EstoqueService {
  getProdutosEstoque(): Observable<ProdutoEstoqueResponse[]> {
    return of(ProdutosEstoqueMock).pipe(delay(1000));
  }

  getMovimentacoesProduto(codigoProduto: number): Observable<MovimentacaoEstoqueResponse | undefined> {
    const movimentacao = MovimentacoesProdutoMock.find(m => m.codigoProduto === codigoProduto);
    return of(movimentacao).pipe(delay(1000));
  }

  processarLancamento(
    dadosMovimentacao: MovimentacaoEstoqueResponse,
    request: LancarMovimentacaoRequest
  ): LancarMovimentacaoResult {
    const tipoMovimentacao = request.quantidadeMovimentacao > 0 
      ? TipoMovimentacao.ENTRADA 
      : TipoMovimentacao.SAIDA;

    const novoId = this.obterProximoId(dadosMovimentacao.movimentacoes);

    const dataHoraFormatada = this.formatarDataHora(request.dataMovimentacao);
    const novaMovimentacao: MovimentacaoResponse = {
      idMovimentacao: novoId,
      codigoMovimentacao: request.codigoMovimentacao,
      descricaoMovimentacao: request.descricaoMovimentacao,
      dataMovimentacao: dataHoraFormatada,
      quantidadeMovimentacao: Math.abs(request.quantidadeMovimentacao),
      tipoMovimentacao: tipoMovimentacao
    };

    const movimentacoesAtualizadas = [...dadosMovimentacao.movimentacoes, novaMovimentacao];
    const movimentacoesOrdenadas = this.ordenarMovimentacoesPorData(movimentacoesAtualizadas);

    const novoEstoque = this.calcularNovoEstoque(
      dadosMovimentacao.estoque,
      tipoMovimentacao,
      Math.abs(request.quantidadeMovimentacao)
    );

    const dadosAtualizados: MovimentacaoEstoqueResponse = {
      ...dadosMovimentacao,
      estoque: novoEstoque,
      movimentacoes: movimentacoesOrdenadas
    };

    return {
      movimentacao: novaMovimentacao,
      dadosAtualizados
    };
  }

  private ordenarMovimentacoesPorData(movimentacoes: MovimentacaoResponse[]): MovimentacaoResponse[] {
    return [...movimentacoes].sort((a, b) => {
      const dataA = new Date(a.dataMovimentacao).getTime();
      const dataB = new Date(b.dataMovimentacao).getTime();
      return dataB - dataA;
    });
  }

  private calcularNovoEstoque(
    estoqueAtual: number,
    tipoMovimentacao: TipoMovimentacao,
    quantidade: number
  ): number {
    if (tipoMovimentacao === TipoMovimentacao.ENTRADA) {
      return estoqueAtual + quantidade;
    } else if (tipoMovimentacao === TipoMovimentacao.SAIDA) {
      return estoqueAtual - quantidade;
    }
    return estoqueAtual;
  }

  private obterProximoId(movimentacoes: MovimentacaoResponse[]): number {
    if (movimentacoes.length === 0) {
      return 1;
    }
    return Math.max(...movimentacoes.map(m => m.idMovimentacao), 0) + 1;
  }

  private formatarDataHora(data: Date): string {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');
    
    return `${ano}-${mes}-${dia}T${horas}:${minutos}:${segundos}`;
  }
}
