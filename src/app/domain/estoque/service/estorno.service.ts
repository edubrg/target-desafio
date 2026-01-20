import { Injectable } from '@angular/core';
import { MovimentacaoEstoqueResponse, MovimentacaoResponse } from '../model/interface/movimentacao-estoque.response';
import { TipoMovimentacao } from '../model/enum/tipo-movimentacao.enum';

export interface EstornoResult {
  movimentacaoEstorno: MovimentacaoResponse;
  dadosAtualizados: MovimentacaoEstoqueResponse;
}

export interface EstornoRequest {
  movimentacao: MovimentacaoResponse;
  quantidade: number;
}

@Injectable()
export class EstornoService {
  processarEstorno(
    dadosMovimentacao: MovimentacaoEstoqueResponse,
    request: EstornoRequest
  ): EstornoResult {
    const novoId = this.obterProximoId(dadosMovimentacao.movimentacoes);
    
    const movimentacaoEstorno: MovimentacaoResponse = {
      idMovimentacao: novoId,
      codigoMovimentacao: request.movimentacao.codigoMovimentacao,
      descricaoMovimentacao: `Estorno - ${request.movimentacao.descricaoMovimentacao}`,
      dataMovimentacao: this.obterDataHoraAtual(),
      quantidadeMovimentacao: request.quantidade,
      tipoMovimentacao: TipoMovimentacao.ESTORNO
    };

    const movimentacoesAtualizadas = [...dadosMovimentacao.movimentacoes, movimentacaoEstorno];
    const movimentacoesOrdenadas = this.ordenarMovimentacoesPorData(movimentacoesAtualizadas);

    const novoEstoque = this.calcularNovoEstoque(
      dadosMovimentacao.estoque,
      request.movimentacao.tipoMovimentacao,
      request.quantidade
    );

    const dadosAtualizados: MovimentacaoEstoqueResponse = {
      ...dadosMovimentacao,
      estoque: novoEstoque,
      movimentacoes: movimentacoesOrdenadas
    };

    return {
      movimentacaoEstorno,
      dadosAtualizados
    };
  }

  ordenarMovimentacoesPorData(movimentacoes: MovimentacaoResponse[]): MovimentacaoResponse[] {
    return [...movimentacoes].sort((a, b) => {
      const dataA = new Date(a.dataMovimentacao).getTime();
      const dataB = new Date(b.dataMovimentacao).getTime();
      return dataB - dataA;
    });
  }

  calcularNovoEstoque(
    estoqueAtual: number,
    tipoMovimentacaoOriginal: TipoMovimentacao,
    quantidadeEstorno: number
  ): number {
    if (tipoMovimentacaoOriginal === TipoMovimentacao.ENTRADA) {
      return estoqueAtual - quantidadeEstorno;
    } else if (tipoMovimentacaoOriginal === TipoMovimentacao.SAIDA) {
      return estoqueAtual + quantidadeEstorno;
    }
    return estoqueAtual;
  }

  private obterProximoId(movimentacoes: MovimentacaoResponse[]): number {
    if (movimentacoes.length === 0) {
      return 1;
    }
    return Math.max(...movimentacoes.map(m => m.idMovimentacao), 0) + 1;
  }

  private obterDataHoraAtual(): string {
    const agora = new Date();
    const ano = agora.getFullYear();
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const dia = String(agora.getDate()).padStart(2, '0');
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    
    return `${ano}-${mes}-${dia}T${horas}:${minutos}:${segundos}`;
  }

}
