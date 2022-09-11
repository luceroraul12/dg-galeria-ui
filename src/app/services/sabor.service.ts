import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sabor, SaborResponse } from '../interfaces/sabor.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SaborService {
  constructor(private http: HttpClient) {}

  getAllSabores(): Observable<SaborResponse> {
    return this.http.get<SaborResponse>(environment.apiSabor);
  }

  crearSabor(tipo: string): Observable<SaborResponse> {
    let params: HttpParams = new HttpParams().set('tipo', tipo);
    return this.http.post<SaborResponse>(environment.apiSabor, params);
  }

  actualizarSabor(body: Sabor): Observable<SaborResponse> {
    return this.http.put<SaborResponse>(environment.apiSabor, body);
  }

  eliminarSabor(id: string): Observable<SaborResponse> {
    let params: HttpParams = new HttpParams().set('id', id);
    return this.http.delete<SaborResponse>(environment.apiSabor, {
      params,
    });
  }
}
