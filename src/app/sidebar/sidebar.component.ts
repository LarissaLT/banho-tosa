import {Component, OnInit} from '@angular/core';


export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  // {path: '/dashboard', title: 'Dashboard', icon: 'nc-bank', class: ''},
  // { path: '/atos',          title: 'Atos Teste',        icon:'nc-air-baloon', class: '' },
  {path: '/icons', title: 'Icones', icon: 'nc-diamond', class: ''},
  // { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
  // {path: '/notifications', title: 'Notifications', icon: 'nc-bell-55', class: ''},
  // { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
  // {path: '/table', title: 'Table List', icon: 'nc-tile-56', class: ''},
  // {path: '/typography', title: 'Typography', icon: 'nc-caps-small', class: ''},
  // {path: '/upgrade', title: 'Upgrade to PRO', icon: 'nc-spaceship', class: 'active-pro'},
  {path: '/tutor-listar', title: 'Tutores', icon: 'nc-single-02', class: ''},
  {path: '/agendamento-listar', title: 'Agendamentos', icon: 'nc-calendar-60', class: ''},
  {path: '/cachorro-listar', title: 'Cachorros', icon: 'nc-single-02', class: ''},
  {path: '/funcionario-listar', title: 'Funcionários', icon: 'nc-single-02', class: ''},
  {path: '/servico-listar', title: 'Serviços', icon: 'nc-shop', class: ''},
];

@Component({
  moduleId: module.id,
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
  public menuItems: any[];

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
