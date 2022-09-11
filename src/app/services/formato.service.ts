import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formato, FormatoResponse } from '../interfaces/formato.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FormatoService {
  constructor(private http: HttpClient) {}

  getAllFormatos(): Observable<FormatoResponse> {
    return this.http.get<FormatoResponse>(environment.apiFormato);
  }

  crearFormato(tipo: string): Observable<FormatoResponse> {
    let params: HttpParams = new HttpParams().set('tipo', tipo);
    return this.http.post<FormatoResponse>(environment.apiFormato, params);
  }

  actualizarFormato(body: Formato): Observable<FormatoResponse> {
    return this.http.put<FormatoResponse>(environment.apiFormato, body);
  }

  eliminarFormato(id: string): Observable<FormatoResponse> {
    let params: HttpParams = new HttpParams().set('id', id);
    return this.http.delete<FormatoResponse>(environment.apiFormato, {
      params,
    });
  }
}
