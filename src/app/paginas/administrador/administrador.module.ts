import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaAdministradorComponent } from './vista-administrador/vista-administrador.component';
import { BebidaFormularioComponent } from './vista-administrador/sabor/components/bebida-formulario/bebida-formulario.component';
import { MarcaFormularioComponent } from './vista-administrador/marca/components/marca-formulario/marca-formulario.component';
import { FormatoFormularioComponent } from './vista-administrador/formato/components/formato-formulario/formato-formulario.component';
import { AppRoutingModule } from '../../app-routing.module';
import { FormatoComponent } from './vista-administrador/formato/formato.component';
import { MarcaComponent } from './vista-administrador/marca/marca.component';
import { SaborComponent } from './vista-administrador/sabor/sabor.component';

@NgModule({
  declarations: [
    VistaAdministradorComponent,
    BebidaFormularioComponent,
    MarcaFormularioComponent,
    FormatoFormularioComponent,
    FormatoComponent,
    MarcaComponent,
    SaborComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [VistaAdministradorComponent],
})
export class AdministradorModule {}
