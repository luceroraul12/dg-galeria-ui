import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockDataResponse } from 'src/app/interfaces/response.interface';
import { BrandedTaste } from 'src/app/pages/admin/views/branded-taste/interface/branded-taste.interface';
import { environment } from 'src/environments/environment';
import { CrudService } from '../../../../../abstract/service/crud-abstract.service';

@Injectable({
  providedIn: 'root',
})
export class BrandedTasteService extends CrudService<BrandedTaste> {
  urlApi: string = environment.apiSaborAsociado;

  constructor(http: HttpClient) {
    super(http);
  }

  createMany(
    brandedTastes: BrandedTaste[]
  ): Observable<StockDataResponse<BrandedTaste>> {
    let url: string = `${this.urlApi}/monton`;
    return this.http.post<StockDataResponse<BrandedTaste>>(url, brandedTastes);
  }
}
