import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaClienteComponent } from './vista-cliente/vista-cliente.component';
import { GaleriaComponent } from './vista-cliente/components/galeria/galeria.component';
import { VistaDetalladaComponent } from './vista-cliente/components/vista-detallada/vista-detallada.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [
    VistaClienteComponent,
    GaleriaComponent,
    VistaDetalladaComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [VistaClienteComponent],
})
export class ClienteModule {}
