import { Component, Injectable, Input } from '@angular/core';
import { first } from 'rxjs';
import { StockData } from 'src/app/interfaces/stock-data.interface';
import { TableService } from 'src/app/services/table.service';
import { CrudService } from '../service/crud-abstract.service';

@Component({
  template: '',
})
export abstract class TableAbstractComponent<Entity extends StockData> {
  public listElements!: Entity[];
  @Input()
  public stockState: boolean = false;

  constructor(
    public tableService: TableService<Entity>,
    public crudService: CrudService<Entity>
  ) {}

  initTable() {
    this.crudService
      .read()
      .pipe(first())
      .subscribe(({ stockDataResult }) => {
        this.listElements = stockDataResult;
        this.tableService.stockDataTable = stockDataResult;
      });
  }

  delete(item: Entity): void {
    console.log('delete tabla formato');

    this.crudService
      .delete(item)
      .pipe(first())
      .subscribe(
        (response) => {
          this.tableService.deleteRowData(response.stockDataResult[0]);
        },
        (err) => alert('No es posible eliminar, tiene elementos asociados')
      );
  }

  update(item: Entity): void {
    console.log('update tabla formato');
    this.crudService.sendFromtTableToFrom$.next(item);
  }

  changeStockState(item: Entity): void {
    console.log('changeState tabla formato');
    item.isStocked = !item.isStocked;
    this.crudService
      .update(item)
      .pipe(first())
      .subscribe((response) => {
        this.tableService.changeStockState(item);
      });
  }
}
