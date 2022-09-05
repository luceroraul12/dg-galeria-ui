import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaAdministradorComponent } from './vista-administrador/vista-administrador.component';



@NgModule({
  declarations: [
    VistaAdministradorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VistaAdministradorComponent
  ]
})
export class AdministradorModule { }
