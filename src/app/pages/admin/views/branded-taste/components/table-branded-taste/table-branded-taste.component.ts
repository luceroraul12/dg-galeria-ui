import { Component, OnInit } from '@angular/core';
import { TableAbstractComponent } from 'src/app/abstract/components/table.abstract.component';
import { TableService } from 'src/app/services/table.service';
import { BrandedTaste } from '../../interface/branded-taste.interface';
import { BrandedTasteService } from '../../service/branded-taste.service';

@Component({
  selector: 'app-table-branded-taste',
  templateUrl: './table-branded-taste.component.html',
  styles: [],
})
export class TableBrandedTasteComponent
  extends TableAbstractComponent<BrandedTaste>
  implements OnInit
{
  constructor(
    tableService: TableService<BrandedTaste>,
    private brandedTasteService: BrandedTasteService
  ) {
    super(tableService, brandedTasteService);
  }

  ngOnInit(): void {
    this.initTable();
  }
}
