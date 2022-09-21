import { Component, OnInit } from '@angular/core';
import { FormManyItemAbstractComponent } from 'src/app/abstract/components/form.many.item.abstract.component';
import { Brand } from '../../../interface/brand.interface';
import { BrandService } from '../../../service/brand.service';
import { FormManyBrandService } from '../../../../branded-taste/service/form-many-brand.service';

@Component({
  selector: 'app-form-many-brand',
  templateUrl: './form-many-brand.component.html',
  styles: [],
})
export class FormManyBrandComponent extends FormManyItemAbstractComponent<Brand> {
  constructor(
    brandService: BrandService,
    formManyBrandService: FormManyBrandService
  ) {
    super(brandService, formManyBrandService);
  }
}
