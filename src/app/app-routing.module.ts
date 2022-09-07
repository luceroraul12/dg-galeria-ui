import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaAdministradorComponent } from './paginas/administrador/vista-administrador/vista-administrador.component';
import { VistaClienteComponent } from './paginas/cliente/vista-cliente/vista-cliente.component';
import { VistaDetalladaComponent } from './paginas/cliente/vista-cliente/components/vista-detallada/vista-detallada.component';

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
    path: '**',
    redirectTo: 'cliente',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
