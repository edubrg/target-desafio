import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MovimentacaoEstoqueResponse } from '../../model/interface/movimentacao-estoque.response';

export interface LancarMovimentacaoModalData {
  dadosMovimentacao: MovimentacaoEstoqueResponse;
}

@Component({
  selector: 'app-lancar-movimentacao-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './lancar-movimentacao-modal.html',
  styleUrls: ['./lancar-movimentacao-modal.scss']
})
export class LancarMovimentacaoModalComponent implements OnInit {
  private readonly dialogRef = inject(MatDialogRef<LancarMovimentacaoModalComponent>);
  private readonly fb = inject(FormBuilder);
  readonly modalData: LancarMovimentacaoModalData = inject(MAT_DIALOG_DATA);

  lancarForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  get data(): MovimentacaoEstoqueResponse {
    return this.modalData.dadosMovimentacao;
  }

  get podeLancar(): boolean {
    return this.lancarForm.valid;
  }

  get quantidade(): number {
    return this.lancarForm.get('quantidadeMovimentacao')?.value || 0;
  }

  get tipoMovimentacao(): string {
    const qtd = this.quantidade;
    if (qtd > 0) {
      return 'Entrada';
    } else if (qtd < 0) {
      return 'Saída';
    }
    return '';
  }

  private quantidadeNaoZeroValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value === null || value === undefined || value === '') {
      return null;
    }
    const numValue = Number(value);
    if (numValue === 0) {
      return { quantidadeZero: true };
    }
    return null;
  }
  
  private initForm(): void {
    const dataHoraAtual = this.obterDataHoraAtualFormatada();
    this.lancarForm = this.fb.group({
      codigoMovimentacao: ['', [Validators.required]],
      descricaoMovimentacao: ['', [Validators.required, Validators.maxLength(255)]],
      dataMovimentacao: [{ value: dataHoraAtual, disabled: true }],
      quantidadeMovimentacao: [null, [Validators.required, Validators.pattern(/^-?\d+$/), this.quantidadeNaoZeroValidator.bind(this)]]
    });
  }

  private obterDataHoraAtualFormatada(): string {
    const agora = new Date();
    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const ano = agora.getFullYear();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    
    return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
  }

  cancelar(): void {
    this.dialogRef.close();
  }

  confirmar(): void {
    if (!this.podeLancar) {
      return;
    }

    const formValue = this.lancarForm.getRawValue();
    const resultado = {
      codigoMovimentacao: formValue.codigoMovimentacao,
      descricaoMovimentacao: formValue.descricaoMovimentacao,
      dataMovimentacao: new Date(),
      quantidadeMovimentacao: Number(formValue.quantidadeMovimentacao)
    };

    this.dialogRef.close(resultado);
  }
}
