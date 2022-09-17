import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Brand } from 'src/app/interfaces/brand.interface';
import {
  CustomerResponse,
  TasteResult,
} from 'src/app/interfaces/customer.response.interface';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-detailed-gallery',
  templateUrl: './detailed-gallery.component.html',
  styleUrls: ['./detailed-gallery.component.css'],
})
export class DetailedGallery implements OnInit {
  @Output() fueClickeadoCambio = new EventEmitter<boolean>();

  private idMarca: string = '';
  public marcaElegida!: Brand;
  public saboresCreados!: TasteResult[];

  constructor(
    private activateRoute: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({ idMarca }) =>
      this.customerService
        .resultByIdBrand(idMarca)
        .subscribe((response: CustomerResponse) => {
          this.saboresCreados = response.customerResult.tasteResults;
          this.marcaElegida = response.customerResult.brandSelected;
        })
    );
  }
}