import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  enlaces = [
    {routerLink: "/home",label:"Inicio"},
    {routerLink: "/work",label:"Recolección y Aprovechamiento"},
    {routerLink: "/about",label:"Compromiso Ambiental"},
    {routerLink: "/contact",label:"Contacto"},
  ]
}
