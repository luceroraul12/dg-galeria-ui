import { Component, OnInit } from '@angular/core';
import { FormManyItemAbstractComponent } from 'src/app/abstract/components/form.many.item.abstract.component';
import { BrandedTaste } from '../../../interface/branded-taste.interface';
import { BrandedTasteService } from '../../../service/branded-taste.service';
import { FormManyBrandedTasteService } from '../../../service/form-many-branded-taste.service';

@Component({
  selector: 'app-form-many-branded-taste',
  templateUrl: './form-many-branded-taste.component.html',
  styles: [],
})
export class FormManyBrandedTasteComponent extends FormManyItemAbstractComponent<BrandedTaste> {
  wayToSort(a: BrandedTaste, b: BrandedTaste): number {
    return a.brand.brandName.localeCompare(b.brand.brandName);
  }

  constructor(
    brandedTasteService: BrandedTasteService,
    formManyBrandedTaste: FormManyBrandedTasteService
  ) {
    super(brandedTasteService, formManyBrandedTaste);
  }
}
