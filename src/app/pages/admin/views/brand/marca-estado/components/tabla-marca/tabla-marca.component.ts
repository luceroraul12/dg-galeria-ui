import { Component, Input, OnInit } from '@angular/core';
import { Brand } from 'src/app/interfaces/brand.interface';
import { CallInputsTable } from 'src/app/services/call-inputs-table.service';
import { BrandService } from 'src/app/services/crud/brand.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-tabla-marca',
  templateUrl: './tabla-marca.component.html',
  styleUrls: ['./tabla-marca.component.css'],
})
export class TablaMarcaComponent
  extends CallInputsTable<Brand>
  implements OnInit
{
  public marcasCreadas: Brand[] = [];
  @Input() tipoDeTabla: string = 'determinado';

  constructor(private brandService: BrandService, tableService: TableService) {
    super(tableService);
  }

  ngOnInit(): void {
    this.brandService.read().subscribe((response) => {
      this.marcasCreadas = response.stockDataResult;
      this.tableService.stockDataTable = response.stockDataResult;
    });
  }
}
