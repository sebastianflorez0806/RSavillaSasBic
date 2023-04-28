import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { HomeComponent } from './home/home.component';
// HEAD
import { ManagementComponent } from './management/management.component';

import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
// ae51a11fbbb7a8052cebc191cf587b42db63ad6f



const routes: Routes = [
  // Agregar nuevas rutas y redireccionar al Home
// HEAD
  { path: 'work', component: WorkComponent },
  { path: 'home', component: HomeComponent },
  { path: 'management', component:  ManagementComponent },
////////////////////77
  {
    path: '',
    component: NavigationComponent,
    children: [
      { path: 'work', component: WorkComponent },
      { path: 'home', component: HomeComponent },
      { path: "**", redirectTo: "home" }
    ]
  },
// ae51a11fbbb7a8052cebc191cf587b42db63ad6f
  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [


  ],

})
export class AppModule { }


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
