import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {HomeComponent} from './pages/usuario/home/home.component';
import {SobreComponent} from './pages/usuario/sobre/sobre.component';
import {FuncionamentoComponent} from './pages/usuario/funcionamento/funcionamento.component';


export const AppRoutes: Routes = [
  { path: 'home',                component: HomeComponent },
  { path: 'sobre',               component: SobreComponent },
  { path: 'funcionamento',       component: FuncionamentoComponent },

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
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
