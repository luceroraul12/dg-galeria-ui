import { Injectable } from '@angular/core';
import { FormManyItemAbstractService } from 'src/app/abstract/service/form-many-item-abstract.service';
import { Taste } from '../../taste/interface/taste.interface';

@Injectable({
  providedIn: 'root',
})
export class FormManyTasteService extends FormManyItemAbstractService<Taste> {
  constructor() {
    super();
  }
}
