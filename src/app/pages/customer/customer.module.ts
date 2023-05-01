import { AngularModule } from './../../angular/angular.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ShoppingCartViewComponent } from './views/shopping-cart-view/shopping-cart-view.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ShoppingCartViewMobileComponent } from './views/shopping-cart-view/components/shopping-cart-view-mobile/shopping-cart-view-mobile.component';


@NgModule({
  declarations: [CustomerComponent, GalleryComponent, DetailedGallery, GalleryCategoryComponent, ShoppingCartViewComponent, ShoppingCartViewMobileComponent],
  imports: [
    CommonModule,
    AppRoutingModule, 
    SharedModule,
    MatDialogModule,
    BrowserAnimationsModule,
    AngularModule,
    FormsModule,
  ],
  exports: [CustomerComponent],
})
export class CustomerModule {}
