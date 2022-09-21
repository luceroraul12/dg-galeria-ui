import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockDataResponse } from 'src/app/interfaces/response.interface';
import { DrinkContaineredTaste } from 'src/app/pages/admin/views/drink-containered-taste/interface/drink-containered-taste.interface';
import { environment } from 'src/environments/environment';
import { CrudService } from '../../../../../abstract/service/crud-abstract.service';

@Injectable({
  providedIn: 'root',
})
export class DrinkContaineredTasteService extends CrudService<DrinkContaineredTaste> {
  urlApi: string = environment.apiSaborFormateado;

  constructor(http: HttpClient) {
    super(http);
  }

  public createMany(
    items: DrinkContaineredTaste[]
  ): Observable<StockDataResponse<DrinkContaineredTaste>> {
    let url: string = `${this.urlApi}/por-monton`;
    return this.http.post<StockDataResponse<DrinkContaineredTaste>>(url, items);
  }
}
