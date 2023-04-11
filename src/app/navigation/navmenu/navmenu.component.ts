import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent {

  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Portafolio',
        icon: 'pi pi-briefcase',
        routerLink: '/portfolio'
      },
      {
        label: 'Acerca de',
        icon: 'pi pi-info',
        routerLink: '/about'
      },
      {
        label: 'Contactenos',
        icon: 'pi pi-envelope',
        routerLink: '/contact'
      }
    ];
  }

}
