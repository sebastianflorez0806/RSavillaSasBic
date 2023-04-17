import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
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
        routerLink: '/portfolio',
        items: [
          {
            label: 'Catálogo',
            icon: 'pi pi-list',
            routerLink: '/catalog'
          },
          {
            label: 'Proyectos',
            icon: 'pi pi-folder-open',
            routerLink: '/projects'
          }
        ]
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

  ngOnInit() {

  }

}
