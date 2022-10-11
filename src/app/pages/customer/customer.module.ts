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
} from 'src/app/shared/pipes/customer.pipe';
import { DrinkContainerName } from 'src/app/shared/pipes/drink-container.pipe';
import { GalleryCategoryComponent } from './views/gallery-category/gallery-category.component';

@NgModule({
  declarations: [CustomerComponent, GalleryComponent, DetailedGallery, GalleryCategoryComponent],
  imports: [CommonModule, AppRoutingModule, SharedModule],
  exports: [CustomerComponent],
})
export class CustomerModule {}
