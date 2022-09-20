import { Component, OnInit } from '@angular/core';
import { FormAbstractComponent } from 'src/app/abstract/components/form.abstract.component';
import { TableService } from 'src/app/services/table.service';
import { Taste } from '../../interface/taste.interface';
import { TasteService } from '../../service/taste.service';

@Component({
  selector: 'app-taste-formulario',
  templateUrl: './taste-form.component.html',
})
export class TasteFormComponent
  extends FormAbstractComponent<Taste>
  implements OnInit
{
  createMany(): void {}
  extraInit(): void {}
  validate(): boolean {
    return this.element.tasteName != '';
  }
  reset(): void {
    this.element = {
      tasteName: '',
    };
  }
  constructor(
    tableService: TableService<Taste>,
    public tasteService: TasteService
  ) {
    super(tableService, tasteService);
  }

  ngOnInit(): void {
    this.initForm();
  }
}
