import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { VendaResponse } from '../model/interface/venda.response';
import { VendasMock } from '../../../../mocks/comissao-vendas/vendas.mock';

@Injectable()
export class ComissaoVendasService {
  getVendas(): Observable<VendaResponse[]> {
    return of(VendasMock.vendas).pipe(delay(1000));
  }
}
