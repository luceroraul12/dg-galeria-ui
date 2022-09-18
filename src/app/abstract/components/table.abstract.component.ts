import { first } from 'rxjs';
import { StockData } from 'src/app/interfaces/stock-data.interface';
import { TableService } from 'src/app/services/table.service';
import { CrudService } from '../service/crud-abstract.service';

export abstract class TableAbstractComponent<Entity extends StockData> {
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
    this.crudService.sendFromtTableToFrom$.next([item]);

    // this.tableService.updateRowData(item);
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
