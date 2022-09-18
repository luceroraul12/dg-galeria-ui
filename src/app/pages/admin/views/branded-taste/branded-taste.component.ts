import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { TableAbstractComponent } from 'src/app/abstract/components/table.abstract.component';
import { BrandedTaste } from 'src/app/pages/admin/views/branded-taste/interface/branded-taste.interface';
import { BrandedTasteService } from 'src/app/pages/admin/views/branded-taste/service/branded-taste.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-branded-taste',
  templateUrl: './branded-taste.component.html',
  styleUrls: ['./branded-taste.component.css'],
})
export class BrandedTasteComponent
  extends TableAbstractComponent<BrandedTaste>
  implements OnInit
{
  public brandedTasteData: BrandedTaste[] = [];

  constructor(
    private brandedTasteService: BrandedTasteService,
    tableService: TableService<BrandedTaste>
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
