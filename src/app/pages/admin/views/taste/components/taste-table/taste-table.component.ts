import { Component, Input, OnInit } from '@angular/core';
import { TableAbstractComponent } from 'src/app/abstract/components/table.abstract.component';
import { TableType } from 'src/app/constants/table-type';
import { Taste } from 'src/app/pages/admin/views/taste/interface/taste.interface';
import { TasteService } from 'src/app/pages/admin/views/taste/service/taste.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-tabla-sabor',
  templateUrl: './taste-table.component.html',
  styleUrls: ['./taste-table.component.css'],
})
export class TasteTableComponent
  extends TableAbstractComponent<Taste>
  implements OnInit
{
  @Input() tableType: TableType = TableType.ASIGNATION;
  public saboresCreados: Taste[] = [];
  constructor(private tasteService: TasteService, tableService: TableService) {
    super(tableService, tasteService);
  }

  ngOnInit(): void {
    this.tasteService.read().subscribe((response) => {
      this.saboresCreados = response.stockDataResult;
      this.tableService.stockDataTable = response.stockDataResult;
    });
  }

  isStockState() {
    return this.tableType == TableType.STOCK_STATE;
  }
}
