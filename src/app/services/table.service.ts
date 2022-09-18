import { Injectable, Input } from '@angular/core';
import { StockData } from '../interfaces/stock-data.interface';

@Injectable({
  providedIn: 'root',
})
export class TableService<Entity extends StockData> {
  public stockDataTable: StockData[] = [];

  constructor() {}

  addRowData(rowDataSelected: Entity) {
    this.stockDataTable.push(rowDataSelected);
  }

  updateRowData(rowDataSelected: Entity): void {
    this.stockDataTable.forEach((item, index) => {
      if (item.id == rowDataSelected.id) {
        //TODO: fix this for true row data selected
        this.stockDataTable[index] = { id: 0, isStocked: false };
      }
    });
  }

  deleteRowData(rowDataSelected: Entity): void {
    this.stockDataTable.forEach((item, index) => {
      if (item.id == rowDataSelected.id) {
        //TODO: fix this for true row data selected
        this.stockDataTable.splice(index, 1);
      }
    });
  }

  changeStockState(rowDataSelected: Entity): void {
    this.stockDataTable.forEach((item, index) => {
      if (item.id == rowDataSelected.id) {
        console.log(item);

        //TODO: fix this for true row data selected
        // this.stockDataTable[index].isStocked =
        //   !this.stockDataTable[index].isStocked;
        item == rowDataSelected;
        console.log(item);
      }
    });
  }
}
