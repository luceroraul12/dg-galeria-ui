import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DetailedGallery } from './views/gallery/detailed-gallery/detailed-galllery.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { CustomerComponent } from './views/customer.component';

@NgModule({
  declarations: [CustomerComponent, GalleryComponent, DetailedGallery],
  imports: [CommonModule, AppRoutingModule, SharedModule],
  exports: [CustomerComponent],
})
export class ClienteModule {}
