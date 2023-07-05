import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {HomeComponent} from './pages/usuario/home/home.component';
import {SobreComponent} from './pages/usuario/sobre/sobre.component';
import {FuncionamentoComponent} from './pages/usuario/funcionamento/funcionamento.component';
import {LoginComponent} from './pages/login/login/login.component';
import {CadastroComponent} from './pages/login/cadastro/cadastro.component';
import {AuthGuard} from './service/AuthGuard';
import {AgendamentoComponent} from './pages/agendamento/agendamento.component';


export const AppRoutesAdmin: Routes = [
  { path: 'home',                component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'sobre',               component: SobreComponent, canActivate: [AuthGuard] },
  { path: 'funcionamento',       component: FuncionamentoComponent, canActivate: [AuthGuard] },
  { path: 'login',               component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'cadastro',            component: CadastroComponent, canActivate: [AuthGuard] },
  { path: 'agendamento/:id',     component: AgendamentoComponent, canActivate: [AuthGuard] },


  {
    path: '',
    redirectTo: 'home',
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
