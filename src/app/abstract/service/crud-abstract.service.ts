import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { StockDataResponse } from 'src/app/interfaces/response.interface';
import { StockData } from 'src/app/interfaces/stock-data.interface';

export abstract class CrudService<Entity extends StockData> {
  abstract urlApi: string;

  public sendFromtTableToFrom$: EventEmitter<Entity> = new EventEmitter();

  constructor(public http: HttpClient) {}

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
    return this.http.delete<StockDataResponse<Entity>>(this.urlApi, {
      body: element,
    });
  }

  changeStockState(element: Entity): Observable<StockDataResponse<Entity>> {
    return this.http.patch<StockDataResponse<Entity>>(this.urlApi, element);
  }
}
