import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminComponent } from './views/admin.component';
import { BrandStateComponent } from './views/brand/brand-state/brand-state.component';
import { BrandComponent } from './views/brand/brand.component';
import { BrandFormComponent } from './views/brand/components/brand-form/brand-form.component';
import { BrandTableComponent } from './views/brand/components/brand-table/brand-table.component';
import { BrandedTasteComponent } from './views/branded-taste/branded-taste.component';
import { FormDrinkContainerComponent } from './views/drink-container/components/form-drink-container/form-drink-container.component';
import { TableDrinkContainerComponent } from './views/drink-container/components/table-drink-container/table-drink-container.component';
import { DrinkContainerComponent } from './views/drink-container/drink-container.component';
import { DrinkContainerTasteTableComponent } from './views/drink-containered-taste/components/drink-containered-taste-table/drink-containered-taste-table.component';
import { DrinkContaineredTasteComponent } from './views/drink-containered-taste/drink-containered-taste.component';
import { TasteFormComponent } from './views/taste/components/taste-form/taste-form.component';
import { TasteTableComponent } from './views/taste/components/taste-table/taste-table.component';
import { TasteComponent } from './views/taste/sabor.component';

@NgModule({
  declarations: [
    AdminComponent,
    TasteFormComponent,
    BrandFormComponent,
    FormDrinkContainerComponent,
    DrinkContainerComponent,
    BrandComponent,
    TasteComponent,
    BrandStateComponent,
    BrandTableComponent,
    TasteTableComponent,
    BrandedTasteComponent,
    DrinkContaineredTasteComponent,
    TableDrinkContainerComponent,
    DrinkContainerTasteTableComponent,
  ],
  imports: [CommonModule, FormsModule, AppRoutingModule, SharedModule],
  exports: [AdminComponent, DrinkContainerComponent],
})
export class AdminModule {}