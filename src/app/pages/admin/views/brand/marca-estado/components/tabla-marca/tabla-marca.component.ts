import { Component, Input, OnInit } from '@angular/core';
import { Brand } from 'src/app/interfaces/brand.interface';
import { BrandService } from 'src/app/services/crud/brand.service';

@Component({
  selector: 'app-tabla-marca',
  templateUrl: './tabla-marca.component.html',
  styleUrls: ['./tabla-marca.component.css'],
})
export class TablaMarcaComponent implements OnInit {
  public marcasCreadas: Brand[] = [];
  @Input() tipoDeTabla: string = 'determinado';

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.brandService
      .read()
      .subscribe((response) => (this.marcasCreadas = response.stockDataResult));
  }
}
