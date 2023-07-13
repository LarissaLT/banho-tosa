import {Component, OnInit} from '@angular/core';
import {AuthTokenService} from '../service/authToken.service';
import {Tutor, TutorHttpService} from '../service/tutorHttp.service';
import {Observable, switchMap} from 'rxjs';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export let ROUTES: RouteInfo[] = [
];

@Component({
  moduleId: module.id,
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public tutor: Tutor;

  constructor(private authTokenService: AuthTokenService, private tutorService: TutorHttpService) {
  }

  ngOnInit() {
    this.initRoutes();
    this.menuItems = ROUTES.filter(menuItem => menuItem);

  }

  initRoutes() {
    ROUTES = []
    this.addTutorRouteByUserRole()
  }

  addTutorRouteByUserRole(): void {
    if (this.authTokenService.isUserAdmin()) {
      ROUTES.push({path: '/agendamento-listar', title: 'Agendamentos', icon: 'nc-calendar-60', class: ''})
      ROUTES.push({path: '/cachorro-listar', title: 'Cachorros', icon: 'nc-single-02', class: ''})
      ROUTES.push({path: '/funcionario-listar', title: 'Funcionários', icon: 'nc-single-02', class: ''})
      ROUTES.push({path: '/servico-listar', title: 'Serviços', icon: 'nc-single-02', class: ''})
      ROUTES.push({path: '/tutor-listar', title: 'Tutores', icon: 'nc-single-02', class: ''})
    } else {
      let path = '/tutor/' + this.authTokenService.getUserId()
      ROUTES.push({path: path, title: 'Perfil', icon: 'nc-single-02', class: ''})
      ROUTES.push({path: '/agendamento', title: 'Agendamentos', icon: 'nc-calendar-60', class: ''})
      ROUTES.push({path: '/cachorro-listar', title: 'Cachorros', icon: 'nc-single-02', class: ''})
      ROUTES.push({path: '/agendamento-listar', title: 'Histórico', icon: 'nc-calendar-60', class: ''})
    }
  }
}
