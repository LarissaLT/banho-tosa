import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-cmp',
  moduleId: module.id,
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent {
  loggedIn: boolean; // Variável que indica se o usuário está logado

  constructor(private router: Router) {}

  checkLoginAndToken() {
    // Verificar se o usuário está logado
    if (this.loggedIn) {
      // Usar a rota de agendamento
      this.router.navigate(['/agendamento']);
    } else {
      // Redirecionar para a página de login
      this.router.navigate(['/login']);
    }
  }
}

