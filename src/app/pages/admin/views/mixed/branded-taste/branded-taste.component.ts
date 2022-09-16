import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { BrandedTaste } from 'src/app/interfaces/branded-taste.interface';
import { CallInputsTable } from 'src/app/services/call-inputs-table.service';
import { BrandedTasteService } from 'src/app/services/crud/branded-taste.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-branded-taste',
  templateUrl: './branded-taste.component.html',
  styleUrls: ['./branded-taste.component.css'],
})
export class AsignacionMarcaSaborComponent
  extends CallInputsTable<BrandedTaste>
  implements OnInit
{
  public brandedTasteData: BrandedTaste[] = [];

  constructor(
    private brandedTasteService: BrandedTasteService,
    tableService: TableService
  ) {
    super(tableService, brandedTasteService);
  }

  ngOnInit(): void {
    this.brandedTasteService
      .read()
      .pipe(first())
      .subscribe(({ stockDataResult }) => {
        stockDataResult.sort();
        this.brandedTasteData = stockDataResult;
        this.tableService.stockDataTable = stockDataResult;
      });
  }
}
