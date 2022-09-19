import { Component, OnInit } from '@angular/core';
import { TableAbstractComponent } from 'src/app/abstract/components/table.abstract.component';
import { DrinkContainer } from 'src/app/pages/admin/views/drink-container/interface/drink-container.interface';
import { DrinkContainerService } from 'src/app/pages/admin/views/drink-container/service/drink-container.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table-drink-container',
  templateUrl: './table-drink-container.component.html',
  styleUrls: ['./table-drink-container.component.css'],
})
export class TableDrinkContainerComponent
  extends TableAbstractComponent<DrinkContainer>
  implements OnInit
{
  constructor(
    private drinkContainerService: DrinkContainerService,
    tableService: TableService<DrinkContainer>
  ) {
    super(tableService, drinkContainerService);
  }

  ngOnInit(): void {
    this.initView();
  }
}
