import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Marca, MarcaResponse } from '../interfaces/marca.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MarcaService {
  constructor(private http: HttpClient) {}

  getAllMarcas(): Observable<MarcaResponse> {
    return this.http.get<MarcaResponse>(environment.apiMarca);
  }

  getById(idMarca: string): Observable<MarcaResponse> {
    let url = `${environment.apiMarca}/by-id`;
    let params: HttpParams = new HttpParams().set('id', idMarca);
    return this.http.get<MarcaResponse>(url, { params });
  }

  crearMarca(tipo: string): Observable<MarcaResponse> {
    let params: HttpParams = new HttpParams().set('tipo', tipo);
    return this.http.post<MarcaResponse>(environment.apiMarca, params);
  }

  actualizarMarca(body: Marca): Observable<MarcaResponse> {
    return this.http.put<MarcaResponse>(environment.apiMarca, body);
  }

  eliminarMarca(id: string): Observable<MarcaResponse> {
    let params: HttpParams = new HttpParams().set('id', id);
    return this.http.delete<MarcaResponse>(environment.apiMarca, {
      params,
    });
  }
}
