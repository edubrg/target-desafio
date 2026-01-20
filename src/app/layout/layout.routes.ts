import { Routes } from '@angular/router';

export const layoutRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../layout/components/home/home').then(m => m.HomeComponent),
  },
  {
    path: 'comissao-vendas',
    loadComponent: () => import('../domain/comissao-vendas/comissao-vendas').then(m => m.ComissaoVendasComponent),
  },
  {
    path: 'estoque',
    loadComponent: () => import('../domain/estoque/estoque').then(m => m.EstoqueComponent),
  },
  {
    path: 'estoque/:codigoProduto/detalhes',
    loadComponent: () => import('../domain/estoque/detalhes-movimentacao/detalhes-movimentacao').then(m => m.DetalhesMovimentacaoComponent),
  }
];
