import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MovimentacaoResponse } from '../../model/interface/movimentacao-estoque.response';
import { TipoMovimentacao } from '../../model/enum/tipo-movimentacao.enum';

export interface EstornoModalData {
  movimentacao: MovimentacaoResponse;
  estoqueAtual: number;
}

@Component({
  selector: 'app-estornar-movimentacao-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  templateUrl: './estornar-movimentacao-modal.html',
  styleUrls: ['./estornar-movimentacao-modal.scss']
})
export class EstornarMovimentacaoModalComponent {
  private readonly dialogRef = inject(MatDialogRef<EstornarMovimentacaoModalComponent>);
  readonly modalData: EstornoModalData = inject(MAT_DIALOG_DATA);
  readonly TipoMovimentacao = TipoMovimentacao;

  get data(): MovimentacaoResponse {
    return this.modalData.movimentacao;
  }

  get estoqueAtual(): number {
    return this.modalData.estoqueAtual;
  }

  getTipoMovimentacaoLabel(tipo: TipoMovimentacao): string {
    switch (tipo) {
      case TipoMovimentacao.ENTRADA:
        return 'Entrada';
      case TipoMovimentacao.SAIDA:
        return 'Saída';
      case TipoMovimentacao.ESTORNO:
        return 'Estorno';
      case TipoMovimentacao.ESTORNO_PARCIAL:
        return 'Estorno Parcial';
      default:
        return tipo;
    }
  }

  cancelar(): void {
    this.dialogRef.close();
  }

  confirmar(): void {
    const resultado = {
      movimentacao: this.data,
      quantidade: this.data.quantidadeMovimentacao
    };

    this.dialogRef.close(resultado);
  }
}
