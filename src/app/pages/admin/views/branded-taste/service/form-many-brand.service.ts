import { Injectable } from '@angular/core';
import { FormManyItemAbstractService } from 'src/app/abstract/service/form-many-item-abstract.service';
import { BrandedTaste } from '../interface/branded-taste.interface';

@Injectable({
  providedIn: 'root',
})
export class FormManyBrandService extends FormManyItemAbstractService<BrandedTaste> {
  constructor() {
    super();
  }
}
