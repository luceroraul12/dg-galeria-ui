import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { FormManyItemAbstractComponent } from 'src/app/abstract/components/form.many.item.abstract.component';
import { Taste } from '../../../interface/taste.interface';
import { TasteService } from '../../../service/taste.service';
import { FormManyTasteService } from '../../../../branded-taste/service/form-many-taste.service';

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
}
