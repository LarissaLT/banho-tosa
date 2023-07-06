import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AdminLayoutRoutes} from './admin-layout.routing';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {UserComponent} from '../../pages/user/user.component';
import {CachorroComponent} from '../../pages/cachorro/cachorro.component';
import {ServicoComponent} from '../../pages/servico/servico.component';
import {TutorComponent} from '../../pages/tutor/tutor.component';
import {AgendamentoComponent} from '../../pages/agendamento/agendamento.component';
import {FuncionarioComponent} from '../../pages/funcionario/funcionario.component';
import {TableComponent} from '../../pages/table/table.component';
import {TypographyComponent} from '../../pages/typography/typography.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
import {NotificationsComponent} from '../../pages/notifications/notifications.component';
import {UpgradeComponent} from '../../pages/upgrade/upgrade.component';

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
    DashboardComponent,
    UserComponent,
    CachorroComponent,
    ServicoComponent,
    TutorComponent,
    AgendamentoComponent,
    FuncionarioComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    ListaTutorComponent,
    ListaCachorroComponent,
    ListaFuncionarioComponent,
    ListaServicoComponent,
    ListaAgendamentoComponent,

  ]
})

export class AdminLayoutModule {
}
