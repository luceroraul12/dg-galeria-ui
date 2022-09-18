import { Component, OnInit } from '@angular/core';
import { FormAbstractComponent } from 'src/app/abstract/components/form.abstract.component';
import { TableService } from 'src/app/services/table.service';
import { Brand } from '../../interface/brand.interface';
import { BrandService } from '../../service/brand.service';

@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.css'],
})
export class BrandFormComponent
  extends FormAbstractComponent<Brand>
  implements OnInit
{
  validate(): boolean {
    throw new Error('Method not implemented.');
  }
  reset(): void {
    throw new Error('Method not implemented.');
  }
  constructor(tableService: TableService<Brand>, brandService: BrandService) {
    super(tableService, brandService);
  }

  ngOnInit(): void {}
}
