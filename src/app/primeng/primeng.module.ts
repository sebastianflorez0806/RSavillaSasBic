import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  exports: [
    ButtonModule,
    ScrollPanelModule,
  ]
})
export class PrimengModule { }
