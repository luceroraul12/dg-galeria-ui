import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/interfaces/brand.interface';
import { BrandService } from 'src/app/services/crud/brand.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent implements OnInit {
  public informacionDisponible: any[] = [];

  public marcasCreadas: Brand[] = [];

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.brandService
      .read()
      .subscribe((response) => (this.marcasCreadas = response.stockDataResult));
  }
}
