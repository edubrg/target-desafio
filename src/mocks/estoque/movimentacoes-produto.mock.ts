import { TipoMovimentacao } from "../../app/domain/estoque/model/enum/tipo-movimentacao.enum";
import { MovimentacaoEstoqueResponse } from "../../app/domain/estoque/model/interface/movimentacao-estoque.response";

export const MovimentacoesProdutoMock: MovimentacaoEstoqueResponse[] = [
  {
    id: 1,
    codigoProduto: 101,
    descricaoProduto: 'Caneta Azul',
    estoque: 150,
    unidade: [
      { unidade: 'UN', fator: 1 },
      { unidade: 'CX', fator: 12 }
    ],
    movimentacoes: [
      { idMovimentacao: 1, codigoMovimentacao: 'MV-001', descricaoMovimentacao: 'Entrada inicial', dataMovimentacao: '2025-01-15T08:00:00', quantidadeMovimentacao: 200, tipoMovimentacao: TipoMovimentacao.ENTRADA },
      { idMovimentacao: 2, codigoMovimentacao: 'MV-002', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-01-20T14:30:00', quantidadeMovimentacao: 30, tipoMovimentacao: TipoMovimentacao.SAIDA },
      { idMovimentacao: 3, codigoMovimentacao: 'MV-003', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-01-25T15:45:00', quantidadeMovimentacao: 20, tipoMovimentacao: TipoMovimentacao.SAIDA }
    ]
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
    movimentacoes: [
      { idMovimentacao: 4, codigoMovimentacao: 'MV-004', descricaoMovimentacao: 'Entrada inicial', dataMovimentacao: '2025-01-10T09:00:00', quantidadeMovimentacao: 100, tipoMovimentacao: TipoMovimentacao.ENTRADA },
      { idMovimentacao: 5, codigoMovimentacao: 'MV-005', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-01-18T14:15:00', quantidadeMovimentacao: 15, tipoMovimentacao: TipoMovimentacao.SAIDA },
      { idMovimentacao: 6, codigoMovimentacao: 'MV-006', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-01-22T16:20:00', quantidadeMovimentacao: 10, tipoMovimentacao: TipoMovimentacao.SAIDA }
    ]
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
    movimentacoes: [
      { idMovimentacao: 7, codigoMovimentacao: 'MV-007', descricaoMovimentacao: 'Entrada inicial', dataMovimentacao: '2025-01-20T10:00:00', quantidadeMovimentacao: 250, tipoMovimentacao: TipoMovimentacao.ENTRADA },
      { idMovimentacao: 8, codigoMovimentacao: 'MV-008', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-01-28T15:00:00', quantidadeMovimentacao: 30, tipoMovimentacao: TipoMovimentacao.SAIDA },
      { idMovimentacao: 9, codigoMovimentacao: 'MV-009', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-02-05T16:30:00', quantidadeMovimentacao: 20, tipoMovimentacao: TipoMovimentacao.SAIDA }
    ]
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
    movimentacoes: [
      { idMovimentacao: 10, codigoMovimentacao: 'MV-010', descricaoMovimentacao: 'Entrada inicial', dataMovimentacao: '2025-01-05T08:30:00', quantidadeMovimentacao: 400, tipoMovimentacao: TipoMovimentacao.ENTRADA },
      { idMovimentacao: 11, codigoMovimentacao: 'MV-011', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-01-15T14:00:00', quantidadeMovimentacao: 50, tipoMovimentacao: TipoMovimentacao.SAIDA },
      { idMovimentacao: 12, codigoMovimentacao: 'MV-012', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-01-30T17:00:00', quantidadeMovimentacao: 30, tipoMovimentacao: TipoMovimentacao.SAIDA }
    ]
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
    movimentacoes: [
      { idMovimentacao: 13, codigoMovimentacao: 'MV-013', descricaoMovimentacao: 'Entrada inicial', dataMovimentacao: '2025-01-18T09:15:00', quantidadeMovimentacao: 120, tipoMovimentacao: TipoMovimentacao.ENTRADA },
      { idMovimentacao: 14, codigoMovimentacao: 'MV-014', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-01-25T15:30:00', quantidadeMovimentacao: 20, tipoMovimentacao: TipoMovimentacao.SAIDA },
      { idMovimentacao: 15, codigoMovimentacao: 'MV-015', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-02-10T16:45:00', quantidadeMovimentacao: 10, tipoMovimentacao: TipoMovimentacao.SAIDA }
    ]
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
    movimentacoes: [
      { idMovimentacao: 16, codigoMovimentacao: 'MV-016', descricaoMovimentacao: 'Entrada inicial', dataMovimentacao: '2025-01-12T08:45:00', quantidadeMovimentacao: 220, tipoMovimentacao: TipoMovimentacao.ENTRADA },
      { idMovimentacao: 17, codigoMovimentacao: 'MV-017', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-01-20T14:20:00', quantidadeMovimentacao: 25, tipoMovimentacao: TipoMovimentacao.SAIDA },
      { idMovimentacao: 18, codigoMovimentacao: 'MV-018', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-02-03T17:15:00', quantidadeMovimentacao: 15, tipoMovimentacao: TipoMovimentacao.SAIDA }
    ]
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
    movimentacoes: [  
      { idMovimentacao: 19, codigoMovimentacao: 'MV-019', descricaoMovimentacao: 'Entrada inicial', dataMovimentacao: '2025-01-08T10:30:00', quantidadeMovimentacao: 300, tipoMovimentacao: TipoMovimentacao.ENTRADA },
      { idMovimentacao: 20, codigoMovimentacao: 'MV-020', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-01-18T15:45:00', quantidadeMovimentacao: 30, tipoMovimentacao: TipoMovimentacao.SAIDA },
      { idMovimentacao: 21, codigoMovimentacao: 'MV-021', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-02-08T16:00:00', quantidadeMovimentacao: 20, tipoMovimentacao: TipoMovimentacao.SAIDA }
    ]
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
    movimentacoes: [
      { idMovimentacao: 22, codigoMovimentacao: 'MV-022', descricaoMovimentacao: 'Entrada inicial', dataMovimentacao: '2025-01-22T11:00:00', quantidadeMovimentacao: 150, tipoMovimentacao: TipoMovimentacao.ENTRADA },
      { idMovimentacao: 23, codigoMovimentacao: 'MV-023', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-01-30T14:30:00', quantidadeMovimentacao: 20, tipoMovimentacao: TipoMovimentacao.SAIDA },
      { idMovimentacao: 24, codigoMovimentacao: 'MV-024', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-02-12T17:30:00', quantidadeMovimentacao: 10, tipoMovimentacao: TipoMovimentacao.SAIDA }
    ]
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
    movimentacoes: [
      { idMovimentacao: 25, codigoMovimentacao: 'MV-025', descricaoMovimentacao: 'Entrada inicial', dataMovimentacao: '2025-01-14T09:30:00', quantidadeMovimentacao: 80, tipoMovimentacao: TipoMovimentacao.ENTRADA },
      { idMovimentacao: 26, codigoMovimentacao: 'MV-026', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-01-22T15:15:00', quantidadeMovimentacao: 10, tipoMovimentacao: TipoMovimentacao.SAIDA },
      { idMovimentacao: 27, codigoMovimentacao: 'MV-027', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-02-05T16:20:00', quantidadeMovimentacao: 5, tipoMovimentacao: TipoMovimentacao.SAIDA }
    ]
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
    movimentacoes: [
      { idMovimentacao: 28, codigoMovimentacao: 'MV-028', descricaoMovimentacao: 'Entrada inicial', dataMovimentacao: '2025-01-06T08:00:00', quantidadeMovimentacao: 500, tipoMovimentacao: TipoMovimentacao.ENTRADA },
      { idMovimentacao: 29, codigoMovimentacao: 'MV-029', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-01-20T13:30:00', quantidadeMovimentacao: 60, tipoMovimentacao: TipoMovimentacao.SAIDA },
      { idMovimentacao: 30, codigoMovimentacao: 'MV-030', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-02-10T18:00:00', quantidadeMovimentacao: 40, tipoMovimentacao: TipoMovimentacao.SAIDA }
    ]
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
    movimentacoes: [
      { idMovimentacao: 31, codigoMovimentacao: 'MV-031', descricaoMovimentacao: 'Entrada inicial', dataMovimentacao: '2025-01-16T10:15:00', quantidadeMovimentacao: 60, tipoMovimentacao: TipoMovimentacao.ENTRADA },
      { idMovimentacao: 32, codigoMovimentacao: 'MV-032', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-01-25T14:45:00', quantidadeMovimentacao: 10, tipoMovimentacao: TipoMovimentacao.SAIDA },
      { idMovimentacao: 33, codigoMovimentacao: 'MV-033', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-02-08T17:00:00', quantidadeMovimentacao: 5, tipoMovimentacao: TipoMovimentacao.SAIDA }
    ]
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
    movimentacoes: [
      { idMovimentacao: 34, codigoMovimentacao: 'MV-034', descricaoMovimentacao: 'Entrada inicial', dataMovimentacao: '2025-01-03T07:30:00', quantidadeMovimentacao: 600, tipoMovimentacao: TipoMovimentacao.ENTRADA },
      { idMovimentacao: 35, codigoMovimentacao: 'MV-035', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-01-18T15:30:00', quantidadeMovimentacao: 70, tipoMovimentacao: TipoMovimentacao.SAIDA },
      { idMovimentacao: 36, codigoMovimentacao: 'MV-036', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-02-05T16:45:00', quantidadeMovimentacao: 30, tipoMovimentacao: TipoMovimentacao.SAIDA }
    ]
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
    movimentacoes: [
      { idMovimentacao: 37, codigoMovimentacao: 'MV-037', descricaoMovimentacao: 'Entrada inicial', dataMovimentacao: '2025-01-07T08:15:00', quantidadeMovimentacao: 700, tipoMovimentacao: TipoMovimentacao.ENTRADA },
      { idMovimentacao: 38, codigoMovimentacao: 'MV-038', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-01-22T14:00:00', quantidadeMovimentacao: 80, tipoMovimentacao: TipoMovimentacao.SAIDA },
      { idMovimentacao: 39, codigoMovimentacao: 'MV-039', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-02-12T17:15:00', quantidadeMovimentacao: 20, tipoMovimentacao: TipoMovimentacao.SAIDA }
    ]
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
    movimentacoes: [
      { idMovimentacao: 40, codigoMovimentacao: 'MV-040', descricaoMovimentacao: 'Entrada inicial', dataMovimentacao: '2025-01-19T09:45:00', quantidadeMovimentacao: 110, tipoMovimentacao: TipoMovimentacao.ENTRADA },
      { idMovimentacao: 41, codigoMovimentacao: 'MV-041', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-01-28T15:20:00', quantidadeMovimentacao: 15, tipoMovimentacao: TipoMovimentacao.SAIDA },
      { idMovimentacao: 42, codigoMovimentacao: 'MV-042', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-02-10T18:30:00', quantidadeMovimentacao: 10, tipoMovimentacao: TipoMovimentacao.SAIDA }
    ]
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
    movimentacoes: [
      { idMovimentacao: 43, codigoMovimentacao: 'MV-043', descricaoMovimentacao: 'Entrada inicial', dataMovimentacao: '2025-01-11T11:30:00', quantidadeMovimentacao: 280, tipoMovimentacao: TipoMovimentacao.ENTRADA },
      { idMovimentacao: 44, codigoMovimentacao: 'MV-044', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-01-25T16:00:00', quantidadeMovimentacao: 35, tipoMovimentacao: TipoMovimentacao.SAIDA },
      { idMovimentacao: 45, codigoMovimentacao: 'MV-045', descricaoMovimentacao: 'Venda', dataMovimentacao: '2025-02-08T17:45:00', quantidadeMovimentacao: 25, tipoMovimentacao: TipoMovimentacao.SAIDA }
    ]
  }
];
