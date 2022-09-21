import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { FormAbstractComponent } from 'src/app/abstract/components/form.abstract.component';
import { GeneratorResultClassService } from 'src/app/services/generator-result-class.service';
import { TableService } from 'src/app/services/table.service';
import { ResultClassUtil } from 'src/app/util/map-result-class.util';
import { BrandedTaste } from '../../../branded-taste/interface/branded-taste.interface';
import { BrandedTasteService } from '../../../branded-taste/service/branded-taste.service';
import { FormManyBrandedTasteService } from '../../../branded-taste/service/form-many-branded-taste.service';
import { DrinkContainer } from '../../../drink-container/interface/drink-container.interface';
import { DrinkContainerService } from '../../../drink-container/service/drink-container.service';
import { FormManyDrinkContainerService } from '../../../drink-container/service/form-many-drink-container.service';
import { DrinkContaineredTaste } from '../../interface/drink-containered-taste.interface';
import { DrinkContaineredTasteService } from '../../service/drink-containered-taste.service';

@Component({
  selector: 'app-form-drink-containered-taste',
  templateUrl: './form-drink-containered-taste.component.html',
  styles: [],
})
export class FormDrinkContaineredTasteComponent
  extends FormAbstractComponent<DrinkContaineredTaste>
  implements OnInit
{
  public registeredBrandedTastes: BrandedTaste[] = [];
  public registeredDrinkContainers: DrinkContainer[] = [];

  constructor(
    tableService: TableService<DrinkContaineredTaste>,
    private drinkContaineredTasteService: DrinkContaineredTasteService,
    private brandedTasteService: BrandedTasteService,
    private drinkContainerService: DrinkContainerService,
    private formManyDrinkContainer: FormManyDrinkContainerService,
    private formManyBrandedTaste: FormManyBrandedTasteService,
    private generatorResultService: GeneratorResultClassService<
      BrandedTaste,
      DrinkContainer
    >
  ) {
    super(tableService, drinkContaineredTasteService);
  }

  ngOnInit(): void {
    this.initForm();
  }

  validate(): boolean {
    let isBrandedTasteValid: boolean =
      this.element.brandedTaste.id! > 0 ||
      this.formManyBrandedTaste.selectedElements.length != 0;
    let isDrinkContainerTasteValid: boolean =
      this.element.drinkContainer.id! > 0 ||
      this.formManyDrinkContainer.selectedElements.length != 0;
    return isBrandedTasteValid && isDrinkContainerTasteValid;
  }
  reset(): void {
    this.element = {
      id: 0,
      isStocked: true,
      brandedTaste: {
        id: 0,
        brand: {
          id: 0,
          brandName: '',
          isStocked: true,
        },
        taste: {
          id: 0,
          tasteName: '',
          isStocked: true,
        },
      },
      drinkContainer: {
        id: 0,
      },
    };
    this.isByUpdate = false;
    this.isByManyCharge = false;
    this.formManyBrandedTaste.reset();
    this.formManyDrinkContainer.reset();
    this.generatorResultService.reset();
  }
  extraInit(): void {
    this.brandedTasteService
      .read()
      .pipe(first())
      .subscribe(({ stockDataResult }) => {
        stockDataResult
          .sort((a, b) => a.brand.brandName.localeCompare(b.brand.brandName))
          .sort((a, b) => a.taste.tasteName.localeCompare(b.taste.tasteName));
        this.registeredBrandedTastes = stockDataResult;
      });
    this.drinkContainerService
      .read()
      .pipe(first())
      .subscribe(({ stockDataResult }) => {
        this.registeredDrinkContainers = stockDataResult;
      });
  }

  createMany(): void {
    this.initGen();
    this.drinkContaineredTasteService
      .createMany(this.generateAndConvertResult())
      .subscribe(console.log);
  }

  private initGen(): void {
    this.generatorResultService.primarySelected =
      this.formManyBrandedTaste.selectedElements;
    this.generatorResultService.secondSelected =
      this.formManyDrinkContainer.selectedElements;
  }

  private generateAndConvertResult(): DrinkContaineredTaste[] {
    let resultConverted: DrinkContaineredTaste[] = [];
    this.generatorResultService.generate().forEach((result) => {
      resultConverted.push(
        ResultClassUtil.convertToDrinkContaineredTaste(result)
      );
    });
    this.generatorResultService.reset();
    return resultConverted;
  }
}
