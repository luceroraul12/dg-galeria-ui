import { StockData } from '../../interfaces/stock-data.interface';
import { CrudService } from '../service/crud-abstract.service';
import { TableService } from '../../services/table.service';
import { first } from 'rxjs';

export abstract class FormAbstractComponent<Entity extends StockData> {
  protected isByUpdate: boolean = false;
  public element!: Entity;

  constructor(
    private tableService: TableService<Entity>,
    private crudService: CrudService<Entity>
  ) {}

  abstract validate(): boolean;

  abstract reset(): void;

  identifyOperationAndValidateAndRun() {
    if (!this.validate()) {
      console.log('No cumple con la validación');
      return;
    }

    if (this.isByUpdate) {
      this.update();
    } else {
      this.create();
    }
  }

  create() {
    this.crudService
      .create(this.element)
      .pipe(first())
      .subscribe(({ stockDataResult }) => {
        console.log(stockDataResult[0]);
        this.tableService.addRowData(stockDataResult[0]);
      });
  }

  update() {
    this.crudService
      .update(this.element)
      .pipe(first())
      .subscribe(({ stockDataResult }) => {
        console.log(stockDataResult[0]);
        this.tableService.updateRowData(stockDataResult[0]);
        this.isByUpdate = false;
      });
  }

  cancel() {
    this.reset();
  }
}