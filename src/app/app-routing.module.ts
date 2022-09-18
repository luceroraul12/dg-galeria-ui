import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcaEstadoComponent } from './pages/admin/views/brand/brand-state/brand-state.component';
import { MarcaComponent } from './pages/admin/views/brand/brand.component';
import { FormatoComponent } from './pages/admin/views/drink-container/formato.component';
import { SaborComponent } from './pages/admin/views/taste/sabor.component';
import { VistaAdministradorComponent } from './pages/admin/views/admin.component';
import { CustomerComponent } from './pages/customer/views/customer.component';
import { DetailedGallery } from './pages/customer/views/detailed-gallery/detailed-galllery.component';
import { AsignacionSaborFormatoComponent } from './pages/admin/views/drink-containered-taste/drink-containered-taste.component';
import { AsignacionMarcaSaborComponent } from './pages/admin/views/branded-taste/branded-taste.component';

const routes: Routes = [
  {
    path: 'cliente',
    component: CustomerComponent,
  },
  {
    path: 'cliente/:idMarca',
    component: DetailedGallery,
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
