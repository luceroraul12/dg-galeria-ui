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
import { GalleryCategoryComponent } from './pages/customer/views/gallery-category/gallery-category.component';
import { GalleryComponent } from './pages/customer/views/gallery/gallery.component';

const routes: Routes = [
  {
    path: 'cliente',
    component: CustomerComponent,
    pathMatch: 'full',
  },
// im updatating routes in this part
  {
    path: 'cliente/:idBrandCategory',
    component: GalleryComponent
  },
  {
    path: 'cliente/:idBrandCategory/:idMarca',
    component: DetailedGallery,
  },
  {
    path: 'dgadmbr',
    component: AdminComponent,
  },
  {
    path: 'dgadmbr/tamaños',
    component: DrinkContainerComponent,
  },
  {
    path: 'dgadmbr/marcas',
    component: BrandComponent,
  },
  {
    path: 'dgadmbr/sabores',
    component: TasteComponent,
  },
  {
    path: 'dgadmbr/marcas/estado',
    component: BrandStateComponent,
  },
  {
    path: 'dgadmbr/sabores/estado',
    component: DrinkContaineredTasteComponent,
  },
  {
    path: 'dgadmbr/vinculacion/marcasabor',
    component: BrandedTasteComponent,
  },
  {
    path: 'dgadmbr/vinculacion/marcasabor/estado',
    component: StateBrandedTasteComponent,
  },
  {
    path: 'dgadmbr/vinculacion/sabortamaño',
    component: DrinkContaineredTasteComponent,
  },
  {
    path: 'dgadmbr/vinculacion/sabortamaño/estado',
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
