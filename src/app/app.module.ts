import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenubarModule } from 'primeng/menubar';

import { AppComponent } from './app.component';
import { HomeComponent } from './navigation/home/home.component';
import { NavmenuComponent } from './navigation/navmenu/navmenu.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './navigation/about/about.component';
import { PortfolioComponent } from './navigation/portfolio/portfolio.component';
import { ContactComponent } from './navigation/contact/contact.component';
import { FooterComponent } from './navigation/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavmenuComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
