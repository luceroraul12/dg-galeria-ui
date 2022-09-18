import { StockData } from '../interfaces/stock-data.interface';
import { CrudService } from './crud-abstract.service';
import { TableService } from './table.service';

export abstract class CallInputsForm<Entity extends StockData> {
  constructor(
    private tableService: TableService,
    private crudService: CrudService<Entity>
  ) {}
  create(formData: Entity) {
    this.crudService.create(formData).subscribe(({ stockDataResult }) => {
      console.log(stockDataResult[0]);
      this.tableService.addRowData(stockDataResult[0]);
    });
  }

  update(formData: Entity) {
    this.crudService.update(formData).subscribe(({ stockDataResult }) => {
      console.log(stockDataResult[0]);
      this.tableService.updateRowData(stockDataResult[0]);
    });
  }
}
