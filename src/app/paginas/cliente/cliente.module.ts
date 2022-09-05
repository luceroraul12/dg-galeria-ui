import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaClienteComponent } from './vista-cliente/vista-cliente.component';



@NgModule({
  declarations: [
    VistaClienteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VistaClienteComponent
  ]
})
export class ClienteModule { }
