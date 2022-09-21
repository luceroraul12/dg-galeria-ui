import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DetailedGallery } from './views/detailed-gallery/detailed-galllery.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { CustomerComponent } from './views/customer.component';
import {
  CustomerBrandPipe,
  CustomerDrinkContainerOrder,
} from 'src/app/pipes/customer.pipe';
import { DrinkContainerName } from 'src/app/pipes/drink-container.pipe';

@NgModule({
  declarations: [
    CustomerComponent,
    GalleryComponent,
    DetailedGallery,
    CustomerBrandPipe,
    CustomerDrinkContainerOrder,
    DrinkContainerName,
  ],
  imports: [CommonModule, AppRoutingModule, SharedModule],
  exports: [CustomerComponent],
})
export class CustomerModule {}
