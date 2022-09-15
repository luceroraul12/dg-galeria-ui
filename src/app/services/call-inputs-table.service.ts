import { StockData } from '../interfaces/stock-data.interface';
import { TableService } from './table.service';

export abstract class CallInputsTable<Entity extends StockData> {
  constructor(public tableService: TableService) {}

  delete(drinkContainer: Entity): void {
    console.log('delete tabla formato');

    this.tableService.deleteRowData(drinkContainer);
  }

  update(drinkContainer: Entity): void {
    console.log('update tabla formato');

    this.tableService.updateRowData(drinkContainer);
  }

  changeStockState(drinkContainer: Entity): void {
    console.log('changeState tabla formato');
    this.tableService.changeStockState(drinkContainer);
  }
}
