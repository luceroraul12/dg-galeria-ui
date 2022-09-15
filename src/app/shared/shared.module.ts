import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotoneraRetornoComponent } from './button-return/botonera-retorno.component';
import { AppRoutingModule } from '../app-routing.module';
import { BarraComponent } from './menu/barra.component';

@NgModule({
  declarations: [BotoneraRetornoComponent, BarraComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [BotoneraRetornoComponent, BarraComponent],
})
export class SharedModule {}
