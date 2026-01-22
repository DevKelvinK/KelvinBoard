import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseInputComponent } from '../../../shared/components/base-input/base-input.component';

@Component({
  selector: 'app-order-table',
  standalone: true,
  imports: [BaseInputComponent],
  templateUrl: './order-table.component.html',
  styleUrl: './order-table.component.css'
})
export class OrderTableComponent {
  @Input() orders: Order[] = [];

  @Output() search = new EventEmitter<string>();
}
