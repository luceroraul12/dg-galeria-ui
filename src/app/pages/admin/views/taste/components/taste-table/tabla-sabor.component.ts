import { Component, Input, OnInit } from '@angular/core';
import { TableType } from 'src/app/constants/table-type';
import { Taste } from 'src/app/interfaces/taste.interface';
import { CallInputsTable } from 'src/app/services/call-inputs-table.service';
import { TasteService } from 'src/app/services/crud/taste.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-tabla-sabor',
  templateUrl: './tabla-sabor.component.html',
  styleUrls: ['./tabla-sabor.component.css'],
})
export class TablaSaborComponent
  extends CallInputsTable<Taste>
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
