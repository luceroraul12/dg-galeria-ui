import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { FormAbstractComponent } from 'src/app/abstract/components/form.abstract.component';
import { TableService } from 'src/app/services/table.service';
import { Brand } from '../../../brand/interface/brand.interface';
import { BrandService } from '../../../brand/service/brand.service';
import { Taste } from '../../../taste/interface/taste.interface';
import { TasteService } from '../../../taste/service/taste.service';
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
  public registeredBrands: Brand[] = [];
  public registeredTastes: Taste[] = [];

  validate(): boolean {
    return false;
  }
  reset(): void {}
  constructor(
    tableService: TableService<BrandedTaste>,
    brandedTasteService: BrandedTasteService,
    private brandService: BrandService,
    private tasteService: TasteService
  ) {
    super(tableService, brandedTasteService);
  }

  ngOnInit(): void {
    this.initForm();
    this.extraInit();
  }

  extraInit() {
    this.brandService
      .read()
      .pipe(first())
      .subscribe(
        ({ stockDataResult }) => (this.registeredBrands = stockDataResult)
      );

    this.tasteService
      .read()
      .pipe(first())
      .subscribe(
        ({ stockDataResult }) => (this.registeredTastes = stockDataResult)
      );
  }
}
