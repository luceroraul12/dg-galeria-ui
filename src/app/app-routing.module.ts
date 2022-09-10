import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaAdministradorComponent } from './paginas/administrador/vista-administrador/vista-administrador.component';
import { VistaClienteComponent } from './paginas/cliente/vista-cliente/vista-cliente.component';
import { VistaDetalladaComponent } from './paginas/cliente/vista-cliente/components/vista-detallada/vista-detallada.component';
import { FormatoComponent } from './paginas/administrador/vista-administrador/formato/formato.component';
import { MarcaComponent } from './paginas/administrador/vista-administrador/marca/marca.component';
import { SaborComponent } from './paginas/administrador/vista-administrador/sabor/sabor.component';
import { MarcaEstadoComponent } from './paginas/administrador/vista-administrador/marca/marca-estado/marca-estado.component';
import { SaborEstadoComponent } from './paginas/administrador/vista-administrador/sabor/sabor-estado/sabor-estado.component';
import { AsignacionMarcaSaborComponent } from './paginas/administrador/vista-administrador/asignacion/asignacion-marca-sabor/asignacion-marca-sabor.component';
import { AsignacionSaborFormatoComponent } from './paginas/administrador/vista-administrador/asignacion/asignacion-sabor-formato/asignacion-sabor-formato.component';

const routes: Routes = [
  {
    path: 'cliente',
    component: VistaClienteComponent,
  },
  {
    path: 'cliente/:idMarca',
    component: VistaDetalladaComponent,
  },
  {
    path: 'administrador',
    component: VistaAdministradorComponent,
  },
  {
    path: 'administrador/formatos',
    component: FormatoComponent,
  },
  {
    path: 'administrador/marcas',
    component: MarcaComponent,
  },
  {
    path: 'administrador/sabores',
    component: SaborComponent,
  },
  {
    path: 'administrador/marcas/estado',
    component: MarcaEstadoComponent,
  },
  {
    path: 'administrador/sabores/estado',
    component: SaborEstadoComponent,
  },
  {
    path: 'administrador/asignacion/marcasabor',
    component: AsignacionMarcaSaborComponent,
  },
  {
    path: 'administrador/asignacion/saborformato',
    component: AsignacionSaborFormatoComponent,
  },
  {
    path: '**',
    redirectTo: 'cliente',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
