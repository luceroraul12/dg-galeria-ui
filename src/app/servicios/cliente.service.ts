import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Formato,
  GaleriaResponse,
  Marca,
} from '../interfaces/galeria.interface';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private urlApi: string = 'http://localhost:8080/galeria';

  constructor(private http: HttpClient) {}

  formatosCreados(): Observable<GaleriaResponse> {
    let url: string = `${this.urlApi}/formatos`;
    return this.http.get<GaleriaResponse>(url);
  }

  marcasCreadas(): Observable<GaleriaResponse> {
    let url: string = `${this.urlApi}/marcas`;
    return this.http.get<GaleriaResponse>(url);
  }

  saboresCreadosByIdMarca(idMarca: string): Observable<GaleriaResponse> {
    let url: string = `${this.urlApi}/sabores?id-marca=${idMarca}`;
    return this.http.get<GaleriaResponse>(url);
  }

  saboresCreadosByIdMarcayStock(idMarca: string): Observable<GaleriaResponse> {
    let url: string = `${this.urlApi}/sabores/con-stock?id-marca=${idMarca}`;
    return this.http.get<GaleriaResponse>(url);
  }
}
