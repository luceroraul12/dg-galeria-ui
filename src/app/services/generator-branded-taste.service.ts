import { Injectable } from '@angular/core';
import { Brand } from '../pages/admin/views/brand/interface/brand.interface';
import { BrandedTaste } from '../pages/admin/views/branded-taste/interface/branded-taste.interface';
import { Taste } from '../pages/admin/views/taste/interface/taste.interface';

export class EntityGeneral<EntityPrimary, EntitySecundary> {
  public primaryElements!: EntityPrimary[];
  public secundaryElements!: EntitySecundary[];
}

@Injectable({
  providedIn: 'root',
})
export class GeneratorBrandedTasteService {
  public selectedBrands!: Brand[];
  public selectedTastes!: Taste[];

  private _createdBrandTastes!: BrandedTaste[];

  public reset() {
    this._createdBrandTastes = [];
  }

  generate(): BrandedTaste[] {
    this.selectedBrands.forEach((brand) => {
      this.selectedTastes.forEach((taste) => {
        this._createdBrandTastes.push({
          brand,
          taste,
          isStocked: true,
        });
      });
    });
    return this._createdBrandTastes;
  }
}
