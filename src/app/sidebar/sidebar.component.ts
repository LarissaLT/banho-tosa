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
  // {path: '/dashboard', title: 'Dashboard', icon: 'nc-bank', class: ''},
  // { path: '/atos',          title: 'Atos Teste',        icon:'nc-air-baloon', class: '' },
  // {path: '/icons', title: 'Icones', icon: 'nc-diamond', class: ''},
  // { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
  // {path: '/notifications', title: 'Notifications', icon: 'nc-bell-55', class: ''},
  // { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
  // {path: '/table', title: 'Table List', icon: 'nc-tile-56', class: ''},
  // {path: '/typography', title: 'Typography', icon: 'nc-caps-small', class: ''},
  // {path: '/upgrade', title: 'Upgrade to PRO', icon: 'nc-spaceship', class: 'active-pro'},

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
    // this.addAdminOnlyRoutes()
    // this.addCommonRoutes()
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
      ROUTES.push({path: '/notifications', title: 'Icones', icon: 'nc-diamond', class: ''})
    }
  }

  // addAdminOnlyRoutes(): void {
  //   if (this.authTokenService.isUserAdmin()) {
  //     ROUTES.push({path: '/agendamento-listar', title: 'Agendamentos', icon: 'nc-calendar-60', class: ''})
  //     ROUTES.push({path: '/cachorro-listar', title: 'Cachorros', icon: 'nc-single-02', class: ''})
  //     ROUTES.push({path: '/funcionario-listar', title: 'Funcionários', icon: 'nc-single-02', class: ''})
  //     ROUTES.push({path: '/servico-listar', title: 'Serviços', icon: 'nc-single-02', class: ''})
  //
  //   }
  // }
  //
  // addCommonRoutes(): void {
  //   ROUTES.push({path: '/agendamento', title: 'Agendamentos', icon: 'nc-calendar-60', class: ''})
  //   ROUTES.push({path: '/cachorro-listar', title: 'Cachorros', icon: 'nc-single-02', class: ''})
  //   ROUTES.push({path: '/notifications', title: 'Icones', icon: 'nc-diamond', class: ''})
  //
  // }
}
