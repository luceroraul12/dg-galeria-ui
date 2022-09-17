import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { VistaDetalladaComponent } from './views/gallery/detailed-gallery/vista-detallada.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { CustomerComponent } from './views/customer.component';

@NgModule({
  declarations: [CustomerComponent, GalleryComponent, VistaDetalladaComponent],
  imports: [CommonModule, AppRoutingModule, SharedModule],
  exports: [CustomerComponent],
})
export class ClienteModule {}
