import { StockData } from '../../interfaces/stock-data.interface';
import { CrudService } from '../service/crud-abstract.service';
import { TableService } from '../../services/table.service';

export abstract class FormAbstractComponent<Entity extends StockData> {
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
