import { ProdutoEstoqueResponse } from "../../app/domain/estoque/model/interface/produto.response";

export const ProdutosEstoqueMock: ProdutoEstoqueResponse[] = [
  {
    id: 1,
    codigoProduto: 101,
    descricaoProduto: 'Caneta Azul',
    estoque: 150,
    unidade: [
      { unidade: 'UN', fator: 1 },
      { unidade: 'CX', fator: 12 }
    ],
  },
  {
    id: 2,
    codigoProduto: 102,
    descricaoProduto: 'Caderno Universitário',
    estoque: 75,
    unidade: [
      { unidade: 'UN', fator: 1 },
      { unidade: 'CX', fator: 10 }
    ],
  },
  {
    id: 3,
    codigoProduto: 103,
    descricaoProduto: 'Borracha Branca',
    estoque: 200,
    unidade: [
      { unidade: 'UN', fator: 1 },
      { unidade: 'DP', fator: 5 },
      { unidade: 'CX', fator: 20 }
    ],
  },
  {
    id: 4,
    codigoProduto: 104,
    descricaoProduto: 'Lápis Preto HB',
    estoque: 320,
    unidade: [
      { unidade: 'UN', fator: 1 },
      { unidade: 'DP', fator: 6 },
      { unidade: 'CX', fator: 24 }
    ],
  },
  {
    id: 5,
    codigoProduto: 105,
    descricaoProduto: 'Marcador de Texto Amarelo',
    estoque: 90,
    unidade: [
      { unidade: 'UN', fator: 1 },
      { unidade: 'CX', fator: 6 }
    ],
  },
  {
    id: 6,
    codigoProduto: 106,
    descricaoProduto: 'Régua 30cm',
    estoque: 180,
    unidade: [
      { unidade: 'UN', fator: 1 },
      { unidade: 'CX', fator: 15 }
    ],
  },
  {
    id: 7,
    codigoProduto: 107,
    descricaoProduto: 'Apontador',
    estoque: 250,
    unidade: [
      { unidade: 'UN', fator: 1 },
      { unidade: 'DP', fator: 4 },
      { unidade: 'CX', fator: 20 }
    ],
  },
  {
    id: 8,
    codigoProduto: 108,
    descricaoProduto: 'Corretivo',
    estoque: 120,
    unidade: [
      { unidade: 'UN', fator: 1 },
      { unidade: 'CX', fator: 8 }
    ],
  },
  {
    id: 9,
    codigoProduto: 109,
    descricaoProduto: 'Estojo Escolar',
    estoque: 65,
    unidade: [
      { unidade: 'UN', fator: 1 },
      { unidade: 'CX', fator: 5 }
    ],
  },
  {
    id: 10,
    codigoProduto: 110,
    descricaoProduto: 'Grafite 0.7mm',
    estoque: 400,
    unidade: [
      { unidade: 'UN', fator: 1 },
      { unidade: 'DP', fator: 10 },
      { unidade: 'CX', fator: 50 }
    ],
  },
  {
    id: 11,
    codigoProduto: 111,
    descricaoProduto: 'Mochila Escolar',
    estoque: 45,
    unidade: [
      { unidade: 'UN', fator: 1 },
      { unidade: 'CX', fator: 3 }
    ],
  },
  {
    id: 12,
    codigoProduto: 112,
    descricaoProduto: 'Papel A4',
    estoque: 500,
    unidade: [
      { unidade: 'UN', fator: 1 },
      { unidade: 'CX', fator: 500 }
    ],
  },
  {
    id: 13,
    codigoProduto: 113,
    descricaoProduto: 'Clips de Papel',
    estoque: 600,
    unidade: [
      { unidade: 'UN', fator: 1 },
      { unidade: 'DP', fator: 20 },
      { unidade: 'CX', fator: 100 }
    ],
  },
  {
    id: 14,
    codigoProduto: 114,
    descricaoProduto: 'Grampeador',
    estoque: 85,
    unidade: [
      { unidade: 'UN', fator: 1 },
      { unidade: 'CX', fator: 6 }
    ],
  },
  {
    id: 15,
    codigoProduto: 115,
    descricaoProduto: 'Post-it',
    estoque: 220,
    unidade: [
      { unidade: 'UN', fator: 1 },
      { unidade: 'DP', fator: 3 },
      { unidade: 'CX', fator: 12 }
    ],
  }
];