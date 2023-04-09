import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  socialMedias = [
    { icon: "../../../assets/images/instagram.svg", url: "https://www.instagram.com/r.savillasas/" },
    { icon: "../../../assets/images/facebook.svg", url: "https://www.facebook.com/RSavillaSASBIC" },
    { icon: "../../../assets/images/linkedin.svg", url: "" }, //Preguntar URL de Linkedin
  ]

  datos = [
    { label: "Dirección: Cra 86B # 42-06 Sur, Patio Bonito, Bogotá DC." }, 
    { label: "WhatsApp: +57 3508382041"},
    { label: "Tel: (601) 4815874 Cel: 3508382043 "}, 
    { label: "E-mail: reciclajesavilla@hotmail.com"},
  ]
}
