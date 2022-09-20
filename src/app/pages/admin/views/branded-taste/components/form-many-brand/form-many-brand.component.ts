import { Component, OnInit } from '@angular/core';
import { FormManyItemAbstractComponent } from 'src/app/abstract/components/form.many.item.abstract.component';
import { Brand } from '../../../brand/interface/brand.interface';
import { BrandService } from '../../../brand/service/brand.service';
import { FormManyBrandService } from '../../service/form-many-brand.service';

@Component({
  selector: 'app-form-many-brand',
  templateUrl: './form-many-brand.component.html',
  styles: [],
})
export class FormManyBrandComponent extends FormManyItemAbstractComponent<Brand> {
  wayToSort(a: Brand, b: Brand): number {
    return a.brandName.localeCompare(b.brandName);
  }

  constructor(
    brandService: BrandService,
    formManyBrandService: FormManyBrandService
  ) {
    super(brandService, formManyBrandService);
  }
}
