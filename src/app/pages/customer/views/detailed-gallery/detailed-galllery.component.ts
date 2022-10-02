import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CustomerResponse,
  TasteResult,
} from 'src/app/pages/customer/views/interface/customer.response.interface';
import { Brand } from 'src/app/pages/admin/views/brand/interface/brand.interface';
import { CustomerService } from 'src/app/pages/customer/views/service/customer.service';

@Component({
  selector: 'app-detailed-gallery',
  templateUrl: './detailed-gallery.component.html',
  styleUrls: ['./detailed-gallery.component.css'],
})
export class DetailedGallery implements OnInit {
  @Output() fueClickeadoCambio = new EventEmitter<boolean>();

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
        .subscribe(({ customerResult }: CustomerResponse) => {
          let { tasteResults, brandSelected } = customerResult;
          tasteResults.map((taste) => {
            if (!brandSelected.isStocked) {
              taste.drinkContainersAvailable.map(
                (drinkContainer) => (drinkContainer.isStocked = false)
              );
            }
          });
          this.saboresCreados = tasteResults;
          this.marcaElegida = brandSelected;
        })
    );
  }
}
