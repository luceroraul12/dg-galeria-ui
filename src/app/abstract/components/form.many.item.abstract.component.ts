import { Component } from '@angular/core';
import { first } from 'rxjs';
import { StockData } from 'src/app/interfaces/stock-data.interface';
import { CrudService } from '../service/crud-abstract.service';
import { FormManyItemAbstractService } from '../service/form-many-item-abstract.service';

@Component({
  template: '',
})
export abstract class FormManyItemAbstractComponent<Entity extends StockData> {
  public registeredTastes: Entity[] = [];
  public addedTastes: Entity[] = [];

  constructor(
    public crudService: CrudService<Entity>,
    public formManyItemService: FormManyItemAbstractService<Entity>
  ) {}

  ngOnInit(): void {
    this.crudService
      .read()
      .pipe(first())
      .subscribe(({ stockDataResult }) => {
        stockDataResult.sort((a, b) => this.wayToSort(a, b));
        this.registeredTastes = stockDataResult;
        this.formManyItemService.registeredElements = stockDataResult;
        this.formManyItemService.selectedElements = [];
      });
  }

  abstract wayToSort(a: Entity, b: Entity): number;

  verifyAndAddElement(item: Entity) {
    this.formManyItemService.verifyAndAddElement(item);
  }
}
