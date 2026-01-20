export interface VendaResponse {
  vendedor: string;
  valor: number;
}

export interface VendasResponse {
  vendas: VendaResponse[];
}