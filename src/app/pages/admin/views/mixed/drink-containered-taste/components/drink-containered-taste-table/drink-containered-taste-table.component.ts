import { Component, Input, OnInit } from '@angular/core';
import { TableType } from 'src/app/constants/table-type';
import { DrinkContaineredTaste } from 'src/app/interfaces/drink-containered-taste.interface';
import { CallInputsTable } from 'src/app/services/call-inputs-table.service';
import { DrinkContaineredTasteService } from 'src/app/services/crud/drink-containered-taste.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-drink-containered-taste-table',
  templateUrl: './drink-containered-taste-table.component.html',
  styleUrls: ['./drink-containered-taste-table.component.css'],
})
export class DrinkContainerTasteTableComponent
  extends CallInputsTable<DrinkContaineredTaste>
  implements OnInit
{
  public drinkContainerTasteData: DrinkContaineredTaste[] = [];

  @Input() tableType: TableType = TableType.ASIGNATION;

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
