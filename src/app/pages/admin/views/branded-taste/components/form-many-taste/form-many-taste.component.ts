import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { FormManyItemAbstractComponent } from 'src/app/abstract/components/form.many.item.abstract.component';
import { Taste } from '../../../taste/interface/taste.interface';
import { TasteService } from '../../../taste/service/taste.service';
import { FormManyTasteService } from '../../service/form-many-taste.service';

@Component({
  selector: 'app-form-many-taste',
  templateUrl: './form-many-taste.component.html',
  styles: [],
})
export class FormManyTasteComponent
  extends FormManyItemAbstractComponent<Taste>
  implements OnInit
{
  constructor(
    crudService: TasteService,
    formManyItemService: FormManyTasteService
  ) {
    super(crudService, formManyItemService);
  }

  wayToSort(a: Taste, b: Taste): number {
    return a.tasteName.localeCompare(b.tasteName);
  }
}
