import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotoneraRetornoComponent } from './button-return/botonera-retorno.component';
import { AppRoutingModule } from '../app-routing.module';
import { BarraComponent } from './menu/barra.component';
import { ButtonComponent } from './button/button.component';
import { TableButtonsComponent } from './table-buttons/table-buttons.component';

@NgModule({
  declarations: [
    BotoneraRetornoComponent,
    BarraComponent,
    ButtonComponent,
    TableButtonsComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [BotoneraRetornoComponent, BarraComponent, TableButtonsComponent],
})
export class SharedModule {}
