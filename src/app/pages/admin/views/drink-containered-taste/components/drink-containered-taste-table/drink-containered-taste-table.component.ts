import { Component, Input, OnInit } from '@angular/core';
import { TableAbstractComponent } from 'src/app/abstract/components/table.abstract.component';
import { DrinkContaineredTaste } from 'src/app/pages/admin/views/drink-containered-taste/interface/drink-containered-taste.interface';
import { DrinkContaineredTasteService } from 'src/app/pages/admin/views/drink-containered-taste/service/drink-containered-taste.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-drink-containered-taste-table',
  templateUrl: './drink-containered-taste-table.component.html',
  styleUrls: ['./drink-containered-taste-table.component.css'],
})
export class DrinkContainerTasteTableComponent
  extends TableAbstractComponent<DrinkContaineredTaste>
  implements OnInit
{
  public drinkContainerTasteData: DrinkContaineredTaste[] = [];

  constructor(
    private drinkContainerTasteService: DrinkContaineredTasteService,
    tableService: TableService
  ) {
    super(tableService, drinkContainerTasteService);
  }

  ngOnInit(): void {
    this.drinkContainerTasteService.read().subscribe((response) => {
      this.drinkContainerTasteData = response.stockDataResult;
      this.tableService.stockDataTable = response.stockDataResult;
    });
  }
}
