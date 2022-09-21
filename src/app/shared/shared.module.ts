import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotoneraRetornoComponent } from './button-return/botonera-retorno.component';
import { AppRoutingModule } from '../app-routing.module';
import { BarraComponent } from './menu/barra.component';
import { ButtonComponent } from './button/button.component';
import { TableButtonsComponent } from './table-buttons/table-buttons.component';
import { ButtonReturnAdminComponent } from './button-return-admin/button-return-admin.component';
import { ButtonFormsComponent } from './button-forms/button-forms.component';
import {
  CustomerBrandPipe,
  CustomerDrinkContainerOrder,
} from './pipes/customer.pipe';
import {
  DrinkContainerName,
  DrinkContainerOrderByValue,
} from './pipes/drink-container.pipe';
import { BrandOrderByName } from './pipes/brand.pipe';
import { TasteOrderByName } from './pipes/taste.pipe';
import { BrandedTasteOrder } from './pipes/branded-taste.pipe';

@NgModule({
  declarations: [
    BotoneraRetornoComponent,
    BarraComponent,
    ButtonComponent,
    TableButtonsComponent,
    ButtonReturnAdminComponent,
    ButtonFormsComponent,
    CustomerBrandPipe,
    CustomerDrinkContainerOrder,
    DrinkContainerName,
    DrinkContainerOrderByValue,
    BrandOrderByName,
    TasteOrderByName,
    BrandedTasteOrder,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [
    BotoneraRetornoComponent,
    BarraComponent,
    TableButtonsComponent,
    ButtonReturnAdminComponent,
    ButtonFormsComponent,
    CustomerBrandPipe,
    CustomerDrinkContainerOrder,
    DrinkContainerName,
    DrinkContainerOrderByValue,
    BrandOrderByName,
    TasteOrderByName,
    BrandedTasteOrder,
  ],
  providers: [
    CustomerBrandPipe,
    CustomerDrinkContainerOrder,
    DrinkContainerName,
    DrinkContainerOrderByValue,
    BrandOrderByName,
    TasteOrderByName,
    BrandedTasteOrder,
  ],
})
export class SharedModule {}
