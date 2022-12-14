import { Injectable } from '@angular/core';
import { FormManyItemAbstractService } from 'src/app/abstract/service/form-many-item-abstract.service';
import { Brand } from '../../brand/interface/brand.interface';

@Injectable({
  providedIn: 'root',
})
export class FormManyBrandService extends FormManyItemAbstractService<Brand> {
  constructor() {
    super();
  }
}
