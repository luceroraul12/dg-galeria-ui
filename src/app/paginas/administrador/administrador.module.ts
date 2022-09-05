import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaAdministradorComponent } from './vista-administrador/vista-administrador.component';
import { BebidaFormularioComponent } from './vista-administrador/components/bebida-formulario/bebida-formulario.component';
import { MarcaFormularioComponent } from './vista-administrador/components/marca-formulario/marca-formulario.component';
import { FormatoFormularioComponent } from './vista-administrador/components/formato-formulario/formato-formulario.component';



@NgModule({
  declarations: [
    VistaAdministradorComponent,
    BebidaFormularioComponent,
    MarcaFormularioComponent,
    FormatoFormularioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VistaAdministradorComponent
  ]
})
export class AdministradorModule { }
