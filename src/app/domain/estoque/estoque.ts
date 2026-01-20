import { ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { EstoqueService } from './service/estoque.service';
import { PageLayoutComponent } from '../../shared/components/page-layout';
import { ProdutoEstoqueResponse } from './model/interface/produto.response';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { debounceTime, finalize } from 'rxjs/operators';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MovimentacaoEstoqueResponse } from './model/interface/movimentacao-estoque.response';
import { TableContainerComponent } from '../../shared/components/table-container';

@Component({
  selector: 'app-estoque',
  imports: [
    PageLayoutComponent,
    TableContainerComponent,
    MatTableModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [EstoqueService],
  templateUrl: './estoque.html',
  styleUrls: ['./estoque.scss']
})
export class EstoqueComponent implements OnInit, OnDestroy {
  private readonly movimentacaoEstoqueService = inject(EstoqueService);
  private readonly router = inject(Router);
  private readonly changedDetectorRef = inject(ChangeDetectorRef);
  private readonly formBuilder = inject(FormBuilder);
  private subscription!: Subscription;

  pesquisarProduto = this.formBuilder.control<string | null>(null);

  displayedColumns: string[] = ['codigoProduto', 'descricaoProduto', 'estoque', 'acoes'];
  produtos: ProdutoEstoqueResponse[] = [];
  produtosFiltrados: ProdutoEstoqueResponse[] = [];
  loading = true;

  ngOnInit(): void {
    this.carregarMovimentacoes();
    this.observarCampoPesquisarProduto();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  carregarMovimentacoes(): void {
    this.movimentacaoEstoqueService.getProdutosEstoque().pipe(
      finalize(() => {
        this.loading = false;
        this.changedDetectorRef.detectChanges();
      }))
      .subscribe({
      next: (response) => {
        this.produtos = response;
        this.produtosFiltrados = response;
      },
      error: (error) => {
        console.error('Erro ao buscar movimentações:', error);
      }
    });
  }

  verDetalhes(produto: MovimentacaoEstoqueResponse): void {
    this.router.navigate(['/estoque', produto.codigoProduto, 'detalhes']);
  }

  private observarCampoPesquisarProduto(): void {
    this.subscription?.unsubscribe();
    
    this.subscription = this.pesquisarProduto.valueChanges.pipe(
      debounceTime(300),
    ).subscribe((valor) => {
      if(!valor || valor?.trim().length === 0) {
        this.produtosFiltrados = this.produtos;
        this.changedDetectorRef.detectChanges();
        return;
      }

      this.filtrarProdutos(valor || '');
    });
  }

  private filtrarProdutos(valor: string): void {
    this.produtosFiltrados = this.produtos.filter((produto) => {
      return produto.descricaoProduto.toLowerCase().includes(valor.toLowerCase()) || 
      produto.codigoProduto.toString().includes(valor);
    });
    this.changedDetectorRef.detectChanges();
  }
}
