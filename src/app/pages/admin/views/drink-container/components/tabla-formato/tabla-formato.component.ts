import { Component, OnInit } from '@angular/core';
import { DrinkContainer } from 'src/app/interfaces/drink-container.interface';
import { DrinkContainerService } from 'src/app/services/crud/drink-container.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-tabla-formato',
  templateUrl: './tabla-formato.component.html',
  styleUrls: ['./tabla-formato.component.css'],
})
export class TablaFormatoComponent implements OnInit {
  public drinkContainerCreated: DrinkContainer[] = [];

  constructor(
    private drinkContainerService: DrinkContainerService,
    private tableService: TableService
  ) {}

  ngOnInit(): void {
    this.drinkContainerService.read().subscribe((response) => {
      this.drinkContainerCreated = response.stockDataResult;
      this.tableService.stockDataTable = response.stockDataResult;
    });
    this.tableService.stockDataTable = this.drinkContainerCreated;
  }

  delete(drinkContainer: DrinkContainer): void {
    console.log('delete tabla formato');

    this.tableService.deleteRowData(drinkContainer);
  }

  update(drinkContainer: DrinkContainer): void {
    console.log('update tabla formato');

    this.tableService.updateRowData(drinkContainer);
  }

  changeStockState(drinkContainer: DrinkContainer): void {
    console.log('changeState tabla formato');
    this.tableService.changeStockState(drinkContainer);
  }
}
