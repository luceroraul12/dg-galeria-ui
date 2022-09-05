import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaAdministradorComponent } from './paginas/administrador/vista-administrador/vista-administrador.component';
import { VistaClienteComponent } from './paginas/cliente/vista-cliente/vista-cliente.component';

const routes: Routes = [
  {
    path: "cliente",
    component: VistaClienteComponent
  },
  {
    path: "administrador",
    component: VistaAdministradorComponent
  },
  {
    path: "**",
    redirectTo: "cliente"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
