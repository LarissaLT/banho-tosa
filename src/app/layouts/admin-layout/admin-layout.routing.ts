import { Routes } from '@angular/router';

import { CachorroComponent } from '../../pages/cachorro/cachorro.component';
import { ServicoComponent } from '../../pages/servico/servico.component';
import { FuncionarioComponent } from '../../pages/funcionario/funcionario.component';
import { TutorComponent } from '../../pages/tutor/tutor.component';
import {AgendamentoComponent} from '../../pages/agendamento/agendamento.component';
import { ListaTutorComponent } from 'app/pages/tutor-listar/tutor-listar.component';
import { ListaAgendamentoComponent } from 'app/pages/agendamento-listar/agendamento-listar.component';
import { ListaCachorroComponent } from 'app/pages/cachorro-listar/cachorro-listar.component';
import { ListaFuncionarioComponent } from 'app/pages/funcionario-listar/funcionario-listar.component';
import { ListaServicoComponent } from 'app/pages/servico-listar/servico-listar.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'cachorro',                 component: CachorroComponent },
    { path: 'servico',                  component: ServicoComponent },
    { path: 'funcionario',              component: FuncionarioComponent },
    { path: 'tutor',                    component: TutorComponent },
    { path: 'agendamento',              component: AgendamentoComponent },
    { path: 'tutor-listar',             component: ListaTutorComponent },
    { path: 'agendamento-listar',       component: ListaAgendamentoComponent },
    { path: 'cachorro-listar',          component: ListaCachorroComponent },
    { path: 'funcionario-listar',       component: ListaFuncionarioComponent },
    { path: 'servico-listar',           component: ListaServicoComponent },
    { path: 'funcionario/:id',          component: FuncionarioComponent },
    { path: 'agendamento/:id',          component: AgendamentoComponent },
    { path: 'cachorro/:id',             component: CachorroComponent },
    { path: 'servico/:id',              component: ServicoComponent },
    { path: 'tutor/:id',                component: TutorComponent },
    { path: 'tutor-listar/:id',         component: TutorComponent },


];
