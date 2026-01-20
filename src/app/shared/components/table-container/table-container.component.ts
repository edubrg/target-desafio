import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-table-container',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss'],
})
export class TableContainerComponent {
  @Input() loading = false;
}

