import { Component, Input, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { TableAbstractComponent } from 'src/app/abstract/components/table.abstract.component';
import { Brand } from 'src/app/pages/admin/views/brand/interface/brand.interface';
import { BrandService } from 'src/app/pages/admin/views/brand/service/brand.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-brand-table',
  templateUrl: './brand-table.component.html',
  styleUrls: ['./brand-table.component.css'],
})
export class BrandTableComponent
  extends TableAbstractComponent<Brand>
  implements OnInit
{
  public marcasCreadas: Brand[] = [];

  constructor(
    private brandService: BrandService,
    tableService: TableService<Brand>
  ) {
    super(tableService, brandService);
  }

  ngOnInit(): void {
    this.brandService
      .read()
      .pipe(first())
      .subscribe(({ stockDataResult }) => {
        stockDataResult.sort((a, b) => a.id! - b.id!);
        this.marcasCreadas = stockDataResult;
        this.tableService.stockDataTable = stockDataResult;
      });
  }
}
