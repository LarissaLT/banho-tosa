import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {HomeComponent} from './pages/usuario/home/home.component';
import {SobreComponent} from './pages/usuario/sobre/sobre.component';
import {FuncionamentoComponent} from './pages/usuario/funcionamento/funcionamento.component';
import {LoginComponent} from './pages/login/login/login.component';
import {CadastroComponent} from './pages/login/cadastro/cadastro.component';
import {AppComponent} from './app.component';
import {AgendamentoComponent} from './pages/agendamento/agendamento.component';
import {AuthGuard} from './service/AuthGuard';


export const AppRoutes: Routes = [
  { path: 'home',                component: HomeComponent },
  { path: 'sobre',               component: SobreComponent },
  { path: 'funcionamento',       component: FuncionamentoComponent },
  { path: 'login',               component: LoginComponent },
  { path: 'cadastro',            component: CadastroComponent },

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent, canActivate: [AuthGuard],
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }]},
  {
    path: '**',
    redirectTo: 'home'
  }
]
