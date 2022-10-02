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
import { DrinkContaineredTasteOrder } from './pipes/drink-containered-taste.pipe';
import { DrinkContainerTasteUpdateLabelPipe } from './pipes/drink-container-taste-update-label.pipe';
import { DrinkContainerStockStatePipe } from './pipes/drink-container-stock-state.pipe';
import { TasteResultApplyStockStatePipe } from './pipes/taste-result-apply-stock-state.pipe';
import { TasteResultOrderByNameAndStockStatePipe } from './pipes/taste-result-order-by-name-and-stock-state.pipe';

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
    DrinkContaineredTasteOrder,
    DrinkContainerTasteUpdateLabelPipe,
    DrinkContainerStockStatePipe,
    TasteResultApplyStockStatePipe,
    TasteResultOrderByNameAndStockStatePipe,
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
    DrinkContaineredTasteOrder,
    DrinkContainerTasteUpdateLabelPipe,
    DrinkContainerStockStatePipe,
    TasteResultApplyStockStatePipe,
    TasteResultOrderByNameAndStockStatePipe
  ],
  providers: [
    CustomerBrandPipe,
    CustomerDrinkContainerOrder,
    DrinkContainerName,
    DrinkContainerOrderByValue,
    BrandOrderByName,
    TasteOrderByName,
    BrandedTasteOrder,
    DrinkContaineredTasteOrder,
    DrinkContainerTasteUpdateLabelPipe,
    
  ],
})
export class SharedModule {}
