import { first } from 'rxjs';
import { StockData } from '../interfaces/stock-data.interface';
import { CrudService } from './crud/crud-abstract.service';
import { TableService } from './table.service';

export abstract class CallInputsTable<Entity extends StockData> {
  constructor(
    public tableService: TableService,
    public crudService: CrudService<Entity>
  ) {}

  delete(item: Entity): void {
    console.log('delete tabla formato');

    this.crudService
      .delete(item)
      .pipe(first())
      .subscribe((response) => {
        this.tableService.deleteRowData(item);
      });
  }

  update(item: Entity): void {
    console.log('update tabla formato');

    this.tableService.updateRowData(item);
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
