import { Component, OnInit } from '@angular/core';
import { FormManyItemAbstractComponent } from 'src/app/abstract/components/form.many.item.abstract.component';
import { FormManyItemAbstractService } from 'src/app/abstract/service/form-many-item-abstract.service';
import { DrinkContainer } from '../../../interface/drink-container.interface';
import { DrinkContainerService } from '../../../service/drink-container.service';
import { FormManyDrinkContainerService } from '../../../service/form-many-drink-container.service';

@Component({
  selector: 'app-form-many-drink-container',
  templateUrl: './form-many-drink-container.component.html',
  styles: [],
})
export class FormManyDrinkContainerComponent extends FormManyItemAbstractComponent<DrinkContainer> {
  constructor(
    drinkContainerService: DrinkContainerService,
    formManyDrinkContainer: FormManyDrinkContainerService
  ) {
    super(drinkContainerService, formManyDrinkContainer);
  }
}
