import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // Abrir e fechar o sidebar
  isMenuOpen: boolean = false;
  closeMenu() {
    this.isMenuOpen = false;
  }

  // Atualizar os dados do dashboard com base no período selecionado
  period: 7 | 30 = 7;
  PeriodChange(period: 7 | 30) {
    this.period = period;
  }

  logout() {
     this.authService.logout()
     this.router.navigate(['/login']);
  }
}
