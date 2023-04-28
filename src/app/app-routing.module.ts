import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  // Agregar nuevas rutas y redireccionar al Home
  {
    path: '',
    component: NavigationComponent,
    children: [
      { path: 'work', component: WorkComponent },
      { path: 'home', component: HomeComponent },
      { path: "**", redirectTo: "home" }
    ]
  },
  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
