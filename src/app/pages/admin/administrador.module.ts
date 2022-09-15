import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { VistaAdministradorComponent } from './views/vista-administrador.component';
import { AsignacionTablaSaborEstadoComponent } from './views/taste/sabor-estado/components/asignacion-tabla-sabor-estado/asignacion-tabla-sabor-estado.component';
import { AsignacionMarcaSaborComponent } from './views/asignation/asignacion-marca-sabor/asignacion-marca-sabor.component';
import { AsignacionSaborFormatoComponent } from './views/asignation/asignacion-sabor-formato/asignacion-sabor-formato.component';
import { MarcaFormularioComponent } from './views/brand/components/marca-formulario/marca-formulario.component';
import { BuscadorMarcaComponent } from './views/brand/marca-estado/components/buscador-marca/buscador-marca.component';
import { TablaMarcaComponent } from './views/brand/marca-estado/components/tabla-marca/tabla-marca.component';
import { MarcaEstadoComponent } from './views/brand/marca-estado/marca-estado.component';
import { MarcaComponent } from './views/brand/marca.component';
import { FormatoFormularioComponent } from './views/drink-container/components/formato-formulario/formato-formulario.component';
import { TablaFormatoComponent } from './views/drink-container/components/tabla-formato/tabla-formato.component';
import { FormatoComponent } from './views/drink-container/formato.component';
import { BebidaFormularioComponent } from './views/taste/components/bebida-formulario/bebida-formulario.component';
import { TablaSaborComponent } from './views/taste/components/tabla-sabor/tabla-sabor.component';
import { BuscadorSaborComponent } from './views/taste/sabor-estado/components/buscador-sabor/buscador-sabor.component';
import { SaborEstadoComponent } from './views/taste/sabor-estado/sabor-estado.component';
import { SaborComponent } from './views/taste/sabor.component';
import { DrinkContainerTasteTableComponent } from './views/asignation/asignacion-sabor-formato/components/drink-container-taste-table/drink-container-taste-table.component';

@NgModule({
  declarations: [
    VistaAdministradorComponent,
    BebidaFormularioComponent,
    MarcaFormularioComponent,
    FormatoFormularioComponent,
    FormatoComponent,
    MarcaComponent,
    SaborComponent,
    MarcaEstadoComponent,
    SaborEstadoComponent,
    BuscadorMarcaComponent,
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
