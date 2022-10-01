import { StockData } from '../../interfaces/stock-data.interface';
import { CrudService } from '../service/crud-abstract.service';
import { TableService } from '../../services/table.service';
import { first, tap } from 'rxjs';

export abstract class FormAbstractComponent<Entity extends StockData> {
  protected isByUpdate: boolean = false;
  protected isByManyCharge: boolean = false;
  public element!: Entity;

  constructor(
    public tableService: TableService<Entity>,
    public crudService: CrudService<Entity>
  ) {}

  abstract validate(): boolean;

  abstract reset(): void;

  abstract extraInit(): void;

  abstract createMany(): void;

  initForm() {
    this.reset();
    this.extraInit();
    this.listenTable();
  }

  listenTable() {
    this.crudService.sendFromtTableToFrom$
      .pipe(tap(console.log))
      .subscribe((response) => {
        this.element = { ...response };
        this.isByUpdate = true;
      });
  }

  identifyOperationAndValidateAndRun() {
    if (!this.validate()) {
      console.log('No cumple con la validación');
      return;
    }

    if (this.isByUpdate) {
      this.update();
    } else if (this.isByManyCharge) {
      this.createMany();
    } else {
      this.create();
    }
    this.reset();
  }

  create() {
    this.crudService
      .create(this.element)
      .pipe(first())
      .subscribe(
        ({ stockDataResult }) => {
          alert("Elemento/s creado");
          this.tableService.addRowData(stockDataResult[0]);
        },
        (error) => alert('Error al crear')
      );
  }

  update() {
    this.crudService
      .update(this.element)
      .pipe(first())
      .subscribe(
        ({ stockDataResult }) => {
          this.tableService.updateRowData(stockDataResult[0]);
          this.isByUpdate = false;
        },
        (error) => alert('Error al modificar')
      );
  }

  cancel() {
    this.reset();
  }
}
