import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandStateComponent } from './pages/admin/views/brand/brand-state/brand-state.component';
import { BrandComponent } from './pages/admin/views/brand/brand.component';
import { DrinkContainerComponent } from './pages/admin/views/drink-container/drink-container.component';
import { TasteComponent } from './pages/admin/views/taste/sabor.component';
import { AdminComponent } from './pages/admin/views/admin.component';
import { CustomerComponent } from './pages/customer/views/customer.component';
import { DetailedGallery } from './pages/customer/views/detailed-gallery/detailed-galllery.component';
import { DrinkContaineredTasteComponent } from './pages/admin/views/drink-containered-taste/drink-containered-taste.component';
import { BrandedTasteComponent } from './pages/admin/views/branded-taste/branded-taste.component';
import { StateDrinkContaineredTasteComponent } from './pages/admin/views/drink-containered-taste/state-drink-containered-taste/state-drink-containered-taste.component';
import { StateBrandedTasteComponent } from './pages/admin/views/branded-taste/state-branded-taste/state-branded-taste.component';

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
    component: AdminComponent,
  },
  {
    path: 'administrador/formatos',
    component: DrinkContainerComponent,
  },
  {
    path: 'administrador/marcas',
    component: BrandComponent,
  },
  {
    path: 'administrador/sabores',
    component: TasteComponent,
  },
  {
    path: 'administrador/marcas/estado',
    component: BrandStateComponent,
  },
  {
    path: 'administrador/sabores/estado',
    component: DrinkContaineredTasteComponent,
  },
  {
    path: 'administrador/asignacion/marcasabor',
    component: BrandedTasteComponent,
  },
  {
    path: 'administrador/asignacion/marcasabor/estado',
    component: StateBrandedTasteComponent,
  },
  {
    path: 'administrador/asignacion/saborformato',
    component: DrinkContaineredTasteComponent,
  },
  {
    path: 'administrador/asignacion/saborformato/estado',
    component: StateDrinkContaineredTasteComponent,
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
