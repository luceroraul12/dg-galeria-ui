import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaClienteComponent } from './vista-cliente/vista-cliente.component';
import { GaleriaComponent } from './vista-cliente/components/galeria/galeria.component';



@NgModule({
  declarations: [
    VistaClienteComponent,
    GaleriaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VistaClienteComponent
  ]
})
export class ClienteModule { }
