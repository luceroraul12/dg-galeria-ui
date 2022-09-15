import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockDataResponse } from 'src/app/interfaces/response.interface';
import { StockData } from 'src/app/interfaces/stock-data.interface';

export abstract class CrudService<Entity extends StockData> {
  constructor(private http: HttpClient, private urlApi: string) {}

  create(element: Entity): Observable<StockDataResponse<Entity>> {
    return this.http.post<StockDataResponse<Entity>>(this.urlApi, element);
  }

  read(): Observable<StockDataResponse<Entity>> {
    return this.http.get<StockDataResponse<Entity>>(this.urlApi);
  }

  update(element: Entity): Observable<StockDataResponse<Entity>> {
    return this.http.put<StockDataResponse<Entity>>(this.urlApi, element);
  }

  delete(element: Entity): Observable<StockDataResponse<Entity>> {
    return this.http.delete<StockDataResponse<Entity>>(this.urlApi);
  }
}