import { Component, Input, OnInit } from '@angular/core';
import { first } from 'rxjs';
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
  constructor(
    private drinkContainerTasteService: DrinkContaineredTasteService,
    tableService: TableService<DrinkContaineredTaste>
  ) {
    super(tableService, drinkContainerTasteService);
  }

  ngOnInit(): void {
    this.initTable();
  }

  override changeStockState(item: DrinkContaineredTaste): void {
    console.log('changeState tabla formato');
    item.isStocked = !item.isStocked;
    this.crudService
      .changeStockState(item)
      .pipe(first())
      .subscribe((response) => {
        this.tableService.changeStockState(item);
      });
  }
}
