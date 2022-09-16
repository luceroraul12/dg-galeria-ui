import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { VistaAdministradorComponent } from './views/vista-administrador.component';
import { AsignacionTablaSaborEstadoComponent } from './views/taste/sabor-estado/components/asignacion-tabla-sabor-estado/asignacion-tabla-sabor-estado.component';
import { AsignacionSaborFormatoComponent } from './views/asignation/asignacion-sabor-formato/drink-containered-taste.component';
import { FormatoFormularioComponent } from './views/drink-container/components/formato-formulario/formato-formulario.component';
import { TablaFormatoComponent } from './views/drink-container/components/tabla-formato/tabla-formato.component';
import { FormatoComponent } from './views/drink-container/formato.component';
import { TasteFormComponent } from './views/taste/components/taste-form/taste-form.component';
import { TablaSaborComponent } from './views/taste/components/taste-table/tabla-sabor.component';
import { BuscadorSaborComponent } from './views/taste/sabor-estado/components/buscador-sabor/buscador-sabor.component';
import { SaborEstadoComponent } from './views/taste/sabor-estado/sabor-estado.component';
import { SaborComponent } from './views/taste/sabor.component';
import { DrinkContainerTasteTableComponent } from './views/asignation/asignacion-sabor-formato/components/drink-containered-taste-table/drink-containered-taste-table.component';
import { TablaMarcaComponent } from './views/brand/components/brand-table/brand-table.component';
import { MarcaEstadoComponent } from './views/brand/brand-state/brand-state.component';
import { MarcaComponent } from './views/brand/brand.component';
import { MarcaFormularioComponent } from './views/brand/components/brand-form/brand-form.component';
import { AsignacionMarcaSaborComponent } from './views/asignation/branded-taste/branded-taste.component';

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
    SaborEstadoComponent,
    TablaMarcaComponent,
    BuscadorSaborComponent,
    TablaSaborComponent,
    AsignacionMarcaSaborComponent,
    AsignacionSaborFormatoComponent,
    TablaFormatoComponent,
    AsignacionTablaSaborEstadoComponent,
    DrinkContainerTasteTableComponent,
  ],
  imports: [CommonModule, AppRoutingModule, SharedModule],
  exports: [VistaAdministradorComponent],
})
export class AdministradorModule {}
