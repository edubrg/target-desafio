import { Injectable } from '@angular/core';
import { VendaResponse } from '../model/interface/venda.response';
import { ComissaoVendedor } from '../model/interface/comissao-vendedor';

@Injectable()
export class CalculoComissaoService {
  calcularComissoes(vendas: VendaResponse[]): ComissaoVendedor[] {
    const comissoesPorVendedor = new Map<string, { 
      totalVendas: number; 
      totalComissao: number; 
      quantidadeVendas: number 
    }>();

    vendas.forEach(venda => {
      const comissao = this.calcularComissaoPorVenda(venda.valor);

      if (!comissoesPorVendedor.has(venda.vendedor)) {
        comissoesPorVendedor.set(venda.vendedor, {
          totalVendas: 0,
          totalComissao: 0,
          quantidadeVendas: 0
        });
      }

      const dados = comissoesPorVendedor.get(venda.vendedor)!;
      dados.totalVendas += venda.valor;
      dados.totalComissao += comissao;
      dados.quantidadeVendas += 1;
    });

    const resultado: ComissaoVendedor[] = Array.from(comissoesPorVendedor.entries()).map(([vendedor, dados]) => ({
      vendedor,
      totalVendas: dados.totalVendas,
      totalComissao: dados.totalComissao,
      quantidadeVendas: dados.quantidadeVendas
    }));

    return this.ranquearPorVendasEComissao(resultado);
  }

  private calcularComissaoPorVenda(valor: number): number {
    if (valor < 100) {
      return 0;
    }

    if (valor < 500) {
      return valor * 0.01;
    }

    return valor * 0.05;
  }

  private ranquearPorVendasEComissao(comissoes: ComissaoVendedor[]): ComissaoVendedor[] {
    return [...comissoes].sort((a, b) => {
      if (b.totalVendas !== a.totalVendas) {
        return b.totalVendas - a.totalVendas;
      }
      return b.totalComissao - a.totalComissao;
    });
  }
}
