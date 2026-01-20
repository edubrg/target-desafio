import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ComissaoVendasService } from './service/comissao-vendas.service';
import { CalculoComissaoService } from './service/calculo-comissao.service';
import { PageLayoutComponent } from '../../shared/components/page-layout';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { finalize } from 'rxjs/operators';
import { TableContainerComponent } from '../../shared/components/table-container';
import { ComissaoVendedor } from './model/interface/comissao-vendedor';

@Component({
  selector: 'app-comissao-vendas',
  standalone: true,
  imports: [
    PageLayoutComponent,
    TableContainerComponent,
    MatTableModule,
    CommonModule,
    MatProgressSpinnerModule,
  ],
  providers: [ComissaoVendasService, CalculoComissaoService],
  templateUrl: './comissao-vendas.html',
  styleUrls: ['./comissao-vendas.scss']
})
export class ComissaoVendasComponent implements OnInit {
  private readonly comissaoVendasService = inject(ComissaoVendasService);
  private readonly calculoComissaoService = inject(CalculoComissaoService);
  private readonly changedDetectorRef = inject(ChangeDetectorRef);

  displayedColumns: string[] = ['posicao', 'vendedor', 'quantidadeVendas', 'totalVendas', 'totalComissao'];
  comissoes: ComissaoVendedor[] = [];
  loading = true;

  ngOnInit(): void {
    this.carregarComissoes();
  }

  carregarComissoes(): void {
    this.comissaoVendasService.getVendas().pipe(
      finalize(() => {
        this.loading = false;
        this.changedDetectorRef.detectChanges();
      }))
      .subscribe({
        next: (vendas) => {
          this.comissoes = this.calculoComissaoService.calcularComissoes(vendas);
        },
        error: (error) => {
          console.error('Erro ao buscar vendas:', error);
        }
      });
  }

  formatarMoeda(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  }
}
