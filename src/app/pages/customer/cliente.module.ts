import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { VistaClienteComponent } from './views/vista-cliente.component';
import { GaleriaComponent } from './views/gallery/galeria.component';
import { VistaDetalladaComponent } from './views/gallery/detailed-gallery/vista-detallada.component';

@NgModule({
  declarations: [
    VistaClienteComponent,
    GaleriaComponent,
    VistaDetalladaComponent,
  ],
  imports: [CommonModule, AppRoutingModule, SharedModule],
  exports: [VistaClienteComponent],
})
export class ClienteModule {}
