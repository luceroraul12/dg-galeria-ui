import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotoneraRetornoComponent } from './button-return/botonera-retorno.component';
import { AppRoutingModule } from '../app-routing.module';
import { BarraComponent } from './menu/barra.component';
import { ButtonComponent } from './button/button.component';
import { TableButtonsComponent } from './table-buttons/table-buttons.component';
import { ButtonReturnAdminComponent } from './button-return-admin/button-return-admin.component';

@NgModule({
  declarations: [
    BotoneraRetornoComponent,
    BarraComponent,
    ButtonComponent,
    TableButtonsComponent,
    ButtonReturnAdminComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [
    BotoneraRetornoComponent,
    BarraComponent,
    TableButtonsComponent,
    ButtonReturnAdminComponent,
  ],
})
export class SharedModule {}
