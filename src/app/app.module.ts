import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng/primeng.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { WorkComponent } from './work/work.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkComponent,
    FooterComponent,
    HomeComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
