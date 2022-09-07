import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaClienteComponent } from './vista-cliente/vista-cliente.component';
import { GaleriaComponent } from './vista-cliente/components/galeria/galeria.component';
import { VistaDetalladaComponent } from './vista-cliente/components/vista-detallada/vista-detallada.component';

@NgModule({
  declarations: [
    VistaClienteComponent,
    GaleriaComponent,
    VistaDetalladaComponent,
  ],
  imports: [CommonModule],
  exports: [VistaClienteComponent],
})
export class ClienteModule {}
