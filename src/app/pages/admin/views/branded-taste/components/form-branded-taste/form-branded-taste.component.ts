import { Component, OnInit } from '@angular/core';
import { FormAbstractComponent } from 'src/app/abstract/components/form.abstract.component';
import { TableService } from 'src/app/services/table.service';
import { BrandedTaste } from '../../interface/branded-taste.interface';
import { BrandedTasteService } from '../../service/branded-taste.service';

@Component({
  selector: 'app-form-branded-taste',
  templateUrl: './form-branded-taste.component.html',
  styles: [],
})
export class FormBrandedTasteComponent
  extends FormAbstractComponent<BrandedTaste>
  implements OnInit
{
  validate(): boolean {
    return false;
  }
  reset(): void {}
  constructor(
    tableService: TableService<BrandedTaste>,
    brandedTasteService: BrandedTasteService
  ) {
    super(tableService, brandedTasteService);
  }

  ngOnInit(): void {
    this.initForm();
  }
}
