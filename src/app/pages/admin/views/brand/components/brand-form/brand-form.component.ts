import { Component, OnInit } from '@angular/core';
import { FormAbstractComponent } from 'src/app/abstract/components/form.abstract.component';
import { TableService } from 'src/app/services/table.service';
import { Brand, BrandCategory } from '../../interface/brand.interface';
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
  public categories!: BrandCategory[];



  createMany(): void {}
  extraInit(): void {}
  validate(): boolean {
    return this.element.brandName != '' && this.element.url != '' && this.element.urlIconic != '';
  }
  reset(): void {
    this.element = {
      brandName: '',
      url: '',
    };
  }
  constructor(tableService: TableService<Brand>,
    private brandService: BrandService) {
    super(tableService, brandService);
  }

  ngOnInit(): void {
    this.initForm();
    this.brandService.categories().subscribe(
      ({stockDataResult}) => this.categories = stockDataResult
    )
  }
}
