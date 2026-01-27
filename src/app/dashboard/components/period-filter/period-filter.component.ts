import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-period-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './period-filter.component.html',
  styleUrl: './period-filter.component.css'
})
export class PeriodFilterComponent {
  @Input() value: 7 | 30 = 7
  @Output() valueChange = new EventEmitter<7 | 30>();
  @Input() isLoading: boolean = false

  selectPeriod(period: 7 | 30) {
    if (this.value !== period) {
      this.valueChange.emit(period)
    }
  }
}
