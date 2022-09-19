import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { FormAbstractComponent } from 'src/app/abstract/components/form.abstract.component';
import { TableService } from 'src/app/services/table.service';
import { BrandedTaste } from '../../../branded-taste/interface/branded-taste.interface';
import { BrandedTasteService } from '../../../branded-taste/service/branded-taste.service';
import { DrinkContainer } from '../../../drink-container/interface/drink-container.interface';
import { DrinkContainerService } from '../../../drink-container/service/drink-container.service';
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
    drinkContaineredTasteService: DrinkContaineredTasteService,
    private brandedTasteService: BrandedTasteService,
    private drinkContainerService: DrinkContainerService
  ) {
    super(tableService, drinkContaineredTasteService);
  }

  ngOnInit(): void {
    this.initForm();
  }

  validate(): boolean {
    return false;
  }
  reset(): void {}
  extraInit(): void {
    this.brandedTasteService
      .read()
      .pipe(first())
      .subscribe(({ stockDataResult }) => {
        stockDataResult.sort((a, b) => a.brand.id! - b.brand.id!);
        this.registeredBrandedTastes = stockDataResult;
      });
    this.drinkContainerService
      .read()
      .pipe(first())
      .subscribe(({ stockDataResult }) => {
        this.registeredDrinkContainers = stockDataResult;
      });
  }
}
