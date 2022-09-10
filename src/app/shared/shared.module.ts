import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotoneraRetornoComponent } from './botonera-retorno/botonera-retorno.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [BotoneraRetornoComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [BotoneraRetornoComponent],
})
export class SharedModule {}
