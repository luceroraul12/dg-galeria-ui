import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { VistaAdministradorComponent } from './views/admin.component';
import { FormatoFormularioComponent } from './views/drink-container/components/formato-formulario/formato-formulario.component';
import { TablaFormatoComponent } from './views/drink-container/components/tabla-formato/tabla-formato.component';
import { FormatoComponent } from './views/drink-container/formato.component';
import { TasteFormComponent } from './views/taste/components/taste-form/taste-form.component';
import { TablaSaborComponent } from './views/taste/components/taste-table/tabla-sabor.component';
import { SaborComponent } from './views/taste/sabor.component';
import { TablaMarcaComponent } from './views/brand/components/brand-table/brand-table.component';
import { MarcaEstadoComponent } from './views/brand/brand-state/brand-state.component';
import { MarcaComponent } from './views/brand/brand.component';
import { MarcaFormularioComponent } from './views/brand/components/brand-form/brand-form.component';
import { AsignacionMarcaSaborComponent } from './views/mixed/branded-taste/branded-taste.component';
import { AsignacionSaborFormatoComponent } from './views/mixed/drink-containered-taste/drink-containered-taste.component';
import { DrinkContainerTasteTableComponent } from './views/mixed/drink-containered-taste/components/drink-containered-taste-table/drink-containered-taste-table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VistaAdministradorComponent,
    TasteFormComponent,
    MarcaFormularioComponent,
    FormatoFormularioComponent,
    FormatoComponent,
    MarcaComponent,
    SaborComponent,
    MarcaEstadoComponent,
    TablaMarcaComponent,
    TablaSaborComponent,
    AsignacionMarcaSaborComponent,
    AsignacionSaborFormatoComponent,
    TablaFormatoComponent,
    DrinkContainerTasteTableComponent,
  ],
  imports: [CommonModule, FormsModule, AppRoutingModule, SharedModule],
  exports: [VistaAdministradorComponent],
})
export class AdministradorModule {}
