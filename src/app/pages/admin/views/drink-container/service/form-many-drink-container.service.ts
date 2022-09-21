import { Injectable } from '@angular/core';
import { FormManyItemAbstractService } from 'src/app/abstract/service/form-many-item-abstract.service';
import { DrinkContainer } from '../interface/drink-container.interface';

@Injectable({
  providedIn: 'root',
})
export class FormManyDrinkContainerService extends FormManyItemAbstractService<DrinkContainer> {
  constructor() {
    super();
  }
}
