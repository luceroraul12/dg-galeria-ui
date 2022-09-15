import { Component, OnInit } from '@angular/core';
import { DrinkContainer } from 'src/app/interfaces/drink-container.interface';
import { CallInputsTable } from 'src/app/services/call-inputs-table.service';
import { DrinkContainerService } from 'src/app/services/crud/drink-container.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-tabla-formato',
  templateUrl: './tabla-formato.component.html',
  styleUrls: ['./tabla-formato.component.css'],
})
export class TablaFormatoComponent
  extends CallInputsTable<DrinkContainer>
  implements OnInit
{
  public drinkContainerCreated: DrinkContainer[] = [];

  constructor(
    private drinkContainerService: DrinkContainerService,
    tableService: TableService
  ) {
    super(tableService);
  }

  ngOnInit(): void {
    this.drinkContainerService.read().subscribe((response) => {
      this.drinkContainerCreated = response.stockDataResult;
      this.tableService.stockDataTable = response.stockDataResult;
    });
    this.tableService.stockDataTable = this.drinkContainerCreated;
  }
}
