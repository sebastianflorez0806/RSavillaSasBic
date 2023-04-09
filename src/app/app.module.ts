import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimengModule } from './primeng/primeng.module';
import { AppRoutingModule } from './app-routing.module';
import { WorkComponent } from './work/work.component';

import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuItemComponent } from './shared/header/menu-item/menu-item.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    FooterComponent,
    HeaderComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    AppRoutingModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
