import { Injectable, Input } from '@angular/core';
import { StockData } from '../interfaces/stock-data.interface';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  public stockDataTable: StockData[] = [];

  constructor() {}

  updateRowData(rowDataSelected: StockData): void {
    this.stockDataTable.forEach((item, index) => {
      if (item.id == rowDataSelected.id) {
        //TODO: fix this for true row data selected
        this.stockDataTable[index] = { id: 0, isStocked: false };
      }
    });
  }

  deleteRowData(rowDataSelected: StockData): void {
    this.stockDataTable.forEach((item, index) => {
      if (item.id == rowDataSelected.id) {
        //TODO: fix this for true row data selected
        this.stockDataTable.splice(index, 1);
      }
    });
  }

  changeStockState(rowDataSelected: StockData): void {
    this.stockDataTable.forEach((item, index) => {
      if (item.id == rowDataSelected.id) {
        //TODO: fix this for true row data selected
        this.stockDataTable[index].isStocked =
          !this.stockDataTable[index].isStocked;
      }
    });
  }
}
