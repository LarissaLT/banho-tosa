import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AdminLayoutRoutes} from './admin-layout.routing';

import {CachorroComponent} from '../../pages/cachorro/cachorro.component';
import {ServicoComponent} from '../../pages/servico/servico.component';
import {TutorComponent} from '../../pages/tutor/tutor.component';
import {AgendamentoComponent} from '../../pages/agendamento/agendamento.component';
import {FuncionarioComponent} from '../../pages/funcionario/funcionario.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ListaTutorComponent} from 'app/pages/tutor-listar/tutor-listar.component';
import {ListaCachorroComponent} from 'app/pages/cachorro-listar/cachorro-listar.component';
import {ListaFuncionarioComponent} from 'app/pages/funcionario-listar/funcionario-listar.component';
import {ListaServicoComponent} from 'app/pages/servico-listar/servico-listar.component';
import {ListaAgendamentoComponent} from '../../pages/agendamento-listar/agendamento-listar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CachorroComponent,
    ServicoComponent,
    TutorComponent,
    AgendamentoComponent,
    FuncionarioComponent,
    ListaTutorComponent,
    ListaCachorroComponent,
    ListaFuncionarioComponent,
    ListaServicoComponent,
    ListaAgendamentoComponent,

  ]
})

export class AdminLayoutModule {
}
