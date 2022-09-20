import { Component, OnInit } from '@angular/core';
import { first, tap } from 'rxjs';
import { FormAbstractComponent } from 'src/app/abstract/components/form.abstract.component';
import { StockDataResponse } from 'src/app/interfaces/response.interface';
import { GeneratorResultClassService } from 'src/app/services/generator-result-class.service';
import { TableService } from 'src/app/services/table.service';
import { ResultClassUtil } from 'src/app/util/map-result-class.util';
import { Brand } from '../../../brand/interface/brand.interface';
import { BrandService } from '../../../brand/service/brand.service';
import { Taste } from '../../../taste/interface/taste.interface';
import { TasteService } from '../../../taste/service/taste.service';
import { BrandedTaste } from '../../interface/branded-taste.interface';
import { BrandedTasteService } from '../../service/branded-taste.service';
import { FormManyBrandService } from '../../service/form-many-brand.service';
import { FormManyTasteService } from '../../service/form-many-taste.service';

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
    let isbrandValid: boolean = this.element.brand.brandName != '';
    let isBrandedTasteValid: boolean =
      this.element.taste?.id! > 0 || this.isByManyCharge;
    return isbrandValid && isBrandedTasteValid;
  }
  reset(): void {
    this.element = {
      id: 0,
      isStocked: true,
      brand: {
        id: 0,
        brandName: '',
      },
      taste: {
        id: 0,
      },
    };
    this.isByManyCharge = false;
    this.isByUpdate = false;
  }
  constructor(
    tableService: TableService<BrandedTaste>,
    private brandedTasteService: BrandedTasteService,
    private brandService: BrandService,
    private tasteService: TasteService,
    private formManyBrandService: FormManyBrandService,
    private formManyTasteService: FormManyTasteService,
    private generatorBrandedTaste: GeneratorResultClassService<Brand, Taste>
  ) {
    super(tableService, brandedTasteService);
  }

  ngOnInit(): void {
    this.initForm();
    this.generatorBrandedTaste.reset();
    this.formManyBrandService.reset();
    this.formManyTasteService.reset();
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
  createMany(): void {
    this.asignation();
    this.brandedTasteService
      .createMany(this.generateAndConvertResult())
      .pipe(tap(console.log))
      .subscribe(({ stockDataResult }: StockDataResponse<BrandedTaste>) => {
        console.log('resultado', stockDataResult);
        this.generatorBrandedTaste.reset();
        stockDataResult.forEach((brandTaste) =>
          this.tableService.addRowData(brandTaste)
        );
      });
  }

  private asignation() {
    if (!this.isByManyCharge) {
      this.generatorBrandedTaste.primarySelected = [this.element.brand];
    } else {
      this.generatorBrandedTaste.primarySelected =
        this.formManyBrandService.selectedElements;
    }

    this.generatorBrandedTaste.secondSelected =
      this.formManyTasteService.selectedElements;
  }

  private generateAndConvertResult(): BrandedTaste[] {
    let resultConverted: BrandedTaste[] = [];
    this.generatorBrandedTaste.generate().forEach((result) => {
      resultConverted.push(ResultClassUtil.convertToBrandedTaste(result));
    });
    this.generatorBrandedTaste.reset();
    return resultConverted;
  }
}
