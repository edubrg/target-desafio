import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { EstoqueService } from '../service/estoque.service';
import { EstornoService } from '../service/estorno.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { PageLayoutComponent } from '../../../shared/components/page-layout';
import { TableContainerComponent } from '../../../shared/components/table-container';
import { ActivatedRoute } from '@angular/router';
import { MovimentacaoEstoqueResponse, MovimentacaoResponse } from '../model/interface/movimentacao-estoque.response';
import { TipoMovimentacao } from '../model/enum/tipo-movimentacao.enum';
import { finalize } from 'rxjs/operators';
import { EstornarMovimentacaoModalComponent } from './estornar-movimentacao-modal/estornar-movimentacao-modal';
import { LancarMovimentacaoModalComponent } from './lancar-movimentacao-modal/lancar-movimentacao-modal';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-detalhes-movimentacao',
  imports: [
    MatTableModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    PageLayoutComponent,
    TableContainerComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [EstoqueService, EstornoService],
  templateUrl: './detalhes-movimentacao.html',
  styleUrls: ['./detalhes-movimentacao.scss']
})
export class DetalhesMovimentacaoComponent implements OnInit {
  private readonly estoqueService = inject(EstoqueService);
  private readonly estornoService = inject(EstornoService);
  private readonly route = inject(ActivatedRoute);
  private readonly changedDetectorRef = inject(ChangeDetectorRef);
  private readonly dialog = inject(MatDialog);
  private readonly fb = inject(FormBuilder);

  dadosMovimentacao!: MovimentacaoEstoqueResponse | undefined;
  displayedColumns: string[] = ['codigo', 'descricao', 'tipoMovimentacao', 'data', 'quantidade', 'acoes'];
  dataSource: MovimentacaoResponse[] = [];
  movimentacoesOriginais: MovimentacaoResponse[] = [];
  TipoMovimentacao = TipoMovimentacao;
  loading = true;
  filtroForm!: FormGroup;

  ngOnInit(): void {
    this.initFiltroForm();
    this.obterProduto();
  }

  private initFiltroForm(): void {
    this.filtroForm = this.fb.group({
      dataInicio: [null],
      dataFim: [null],
      buscaDescricao: ['']
    });

    this.observarFiltroForm();
  }

  private observarFiltroForm(): void {
    this.filtroForm.valueChanges.subscribe(() => {
      this.aplicarFiltros();
    });
  }

  exibirBotaoEstornar(codigoMovimentacao: string, tipoMovimentacao: TipoMovimentacao): boolean {
    if (tipoMovimentacao === TipoMovimentacao.ESTORNO) {
      return false;
    }

    const jaFoiEstornado = this.dataSource.some(
      mov => mov.codigoMovimentacao === codigoMovimentacao && 
             mov.tipoMovimentacao === TipoMovimentacao.ESTORNO
    );

    return !jaFoiEstornado;
  }

  private obterProduto(): void {
    const codigoProduto = Number(this.route.snapshot.paramMap.get('codigoProduto'));
    this.estoqueService.getMovimentacoesProduto(codigoProduto).pipe(
      finalize(() => {
        this.loading = false;
        this.changedDetectorRef.detectChanges();
      })
    ).subscribe({
      next: (response) => {
        this.dadosMovimentacao = response;
        this.movimentacoesOriginais = this.estornoService.ordenarMovimentacoesPorData(response?.movimentacoes || []);
        this.dataSource = [...this.movimentacoesOriginais];
        this.changedDetectorRef.detectChanges();
      },
      error: (error) => {
        console.error('Erro ao obter os dados da movimentação:', error);
      }
    });
  }

  estornarMovimentacao(movimentacao: MovimentacaoResponse): void {
    const dialogRef = this.dialog.open(EstornarMovimentacaoModalComponent, {
      width: '600px',
      data: {
        movimentacao: movimentacao,
        estoqueAtual: this.dadosMovimentacao?.estoque || 0
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.processarEstorno(result);
      }
    });
  }

  private processarEstorno(resultado: any): void {
    if (!this.dadosMovimentacao) {
      return;
    }

    const estornoResult = this.estornoService.processarEstorno(
      this.dadosMovimentacao,
      {
        movimentacao: resultado.movimentacao,
        quantidade: resultado.quantidade
      }
    );

    this.dadosMovimentacao = estornoResult.dadosAtualizados;
    this.movimentacoesOriginais = this.estornoService.ordenarMovimentacoesPorData(estornoResult.dadosAtualizados.movimentacoes);
    this.aplicarFiltros();
    this.changedDetectorRef.markForCheck();
  }

  abrirModalLancar(): void {
    if (!this.dadosMovimentacao) {
      return;
    }

    const dialogRef = this.dialog.open(LancarMovimentacaoModalComponent, {
      width: '600px',
      data: {
        dadosMovimentacao: this.dadosMovimentacao
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.processarLancamento(result);
      }
    });
  }

  private processarLancamento(resultado: any): void {
    if (!this.dadosMovimentacao) {
      return;
    }

    const lancamentoResult = this.estoqueService.processarLancamento(
      this.dadosMovimentacao,
      {
        codigoMovimentacao: resultado.codigoMovimentacao,
        descricaoMovimentacao: resultado.descricaoMovimentacao,
        dataMovimentacao: resultado.dataMovimentacao,
        quantidadeMovimentacao: resultado.quantidadeMovimentacao
      }
    );

    this.dadosMovimentacao = lancamentoResult.dadosAtualizados;
    this.movimentacoesOriginais = this.estornoService.ordenarMovimentacoesPorData(lancamentoResult.dadosAtualizados.movimentacoes);
    this.aplicarFiltros();
    this.changedDetectorRef.markForCheck();
  }

  private aplicarFiltros(): void {
    let movimentacoesFiltradas = [...this.movimentacoesOriginais];
    const filtros = this.filtroForm.value;

    movimentacoesFiltradas = this.filtrarPorData(movimentacoesFiltradas, filtros.dataInicio, filtros.dataFim);
    movimentacoesFiltradas = this.filtrarPorTexto(movimentacoesFiltradas, filtros.buscaDescricao);

    this.dataSource = movimentacoesFiltradas;
  }

  private filtrarPorData(movimentacoes: MovimentacaoResponse[], dataInicio: Date | null, dataFim: Date | null): MovimentacaoResponse[] {
    if (!dataInicio && !dataFim) {
      return movimentacoes;
    }

    return movimentacoes.filter(mov => {
      const dataMov = this.extrairApenasData(new Date(mov.dataMovimentacao));
      const inicio = dataInicio ? this.extrairApenasData(new Date(dataInicio)) : null;
      const fim = dataFim ? this.extrairApenasData(new Date(dataFim)) : null;

      if (inicio && fim) {
        return dataMov >= inicio && dataMov <= fim;
      } else if (inicio) {
        return dataMov >= inicio;
      } else if (fim) {
        return dataMov <= fim;
      }
      return true;
    });
  }

  private filtrarPorTexto(movimentacoes: MovimentacaoResponse[], texto: string | null): MovimentacaoResponse[] {
    if (!texto || texto.trim() === '') {
      return movimentacoes;
    }

    const termoBusca = texto.toLowerCase().trim();
    return movimentacoes.filter(mov => {
      return mov.descricaoMovimentacao.toLowerCase().includes(termoBusca) ||
             mov.codigoMovimentacao.toLowerCase().includes(termoBusca);
    });
  }

  limparFiltros(): void {
    this.filtroForm.reset();
    this.dataSource = [...this.movimentacoesOriginais];
  }

  private extrairApenasData(data: Date): Date {
    const dataSemHora = new Date(data);
    dataSemHora.setHours(0, 0, 0, 0);
    return dataSemHora;
  }
}
