import {Component, OnInit} from '@angular/core';


export interface RouteUserInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES_USER: RouteUserInfo[] = [
  // {path: '/dashboard', title: 'Dashboard', icon: 'nc-bank', class: ''},
  // { path: '/atos',          title: 'Atos Teste',        icon:'nc-air-baloon', class: '' },
  // {path: '/icons', title: 'Icones', icon: 'nc-diamond', class: ''},
  // { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
  // {path: '/notifications', title: 'Notifications', icon: 'nc-bell-55', class: ''},
  // { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
  // {path: '/table', title: 'Table List', icon: 'nc-tile-56', class: ''},
  // {path: '/typography', title: 'Typography', icon: 'nc-caps-small', class: ''},
  // {path: '/upgrade', title: 'Upgrade to PRO', icon: 'nc-spaceship', class: 'active-pro'},
  {path: '/tutor', title: 'Tutores', icon: 'nc-single-02', class: ''},
  {path: '/agendamento', title: 'Agendamentos', icon: 'nc-calendar-60', class: ''},
  {path: '/cachorro', title: 'Cachorros', icon: 'nc-single-02', class: ''},
];

@Component({
  moduleId: module.id,
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.user.component.html',
})

export class SidebarUserComponent implements OnInit {
  public menuItems: any[];

  ngOnInit() {
    this.menuItems = ROUTES_USER.filter(menuItem => menuItem);
  }
}
