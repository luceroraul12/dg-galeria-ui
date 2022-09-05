import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaAdministradorComponent } from './vista-administrador/vista-administrador.component';
import { BebidaFormularioComponent } from './vista-administrador/components/bebida-formulario/bebida-formulario.component';



@NgModule({
  declarations: [
    VistaAdministradorComponent,
    BebidaFormularioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VistaAdministradorComponent
  ]
})
export class AdministradorModule { }
