import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcaEstadoComponent } from './pages/admin/views/brand/brand-state/brand-state.component';
import { MarcaComponent } from './pages/admin/views/brand/brand.component';
import { FormatoComponent } from './pages/admin/views/drink-container/formato.component';
import { AsignacionMarcaSaborComponent } from './pages/admin/views/mixed/branded-taste/branded-taste.component';
import { AsignacionSaborFormatoComponent } from './pages/admin/views/mixed/drink-containered-taste/drink-containered-taste.component';
import { SaborComponent } from './pages/admin/views/taste/sabor.component';
import { VistaAdministradorComponent } from './pages/admin/views/vista-administrador.component';
import { VistaDetalladaComponent } from './pages/customer/views/gallery/detailed-gallery/vista-detallada.component';
import { VistaClienteComponent } from './pages/customer/views/vista-cliente.component';

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
    component: AsignacionSaborFormatoComponent,
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
