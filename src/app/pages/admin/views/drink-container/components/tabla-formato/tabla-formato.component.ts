import { Component, OnInit } from '@angular/core';
import { TableAbstractComponent } from 'src/app/abstract/components/table.abstract.component';
import { DrinkContainer } from 'src/app/pages/admin/views/drink-container/interface/drink-container.interface';
import { DrinkContainerService } from 'src/app/pages/admin/views/drink-container/service/drink-container.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-tabla-formato',
  templateUrl: './tabla-formato.component.html',
  styleUrls: ['./tabla-formato.component.css'],
})
export class TablaFormatoComponent
  extends TableAbstractComponent<DrinkContainer>
  implements OnInit
{
  public drinkContainerCreated: DrinkContainer[] = [];

  constructor(
    private drinkContainerService: DrinkContainerService,
    tableService: TableService
  ) {
    super(tableService, drinkContainerService);
  }

  ngOnInit(): void {
    this.drinkContainerService.read().subscribe((response) => {
      this.drinkContainerCreated = response.stockDataResult;
      this.tableService.stockDataTable = response.stockDataResult;
    });
    this.tableService.stockDataTable = this.drinkContainerCreated;
  }
}
