import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  // Agregar nuevas rutas y redireccionar al Home
  { path: 'work', component: WorkComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'work'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }