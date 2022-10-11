import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockDataResponse } from 'src/app/interfaces/response.interface';
import { Brand, BrandCategory } from 'src/app/pages/admin/views/brand/interface/brand.interface';
import { environment } from 'src/environments/environment';
import { CrudService } from '../../../../../abstract/service/crud-abstract.service';

@Injectable({
  providedIn: 'root',
})
export class BrandService extends CrudService<Brand> {
  urlApi: string = environment.apiMarca;
  constructor(http: HttpClient) {
    super(http);
  }

  categories(): Observable<StockDataResponse<BrandCategory>> {
    return this.http.get<StockDataResponse<BrandCategory>>(`${this.urlApi}/categories`);
  }
}
