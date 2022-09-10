import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  SaborAsociado,
  SaborAsociadoResponse,
} from '../interfaces/saborasociado.interface';

@Injectable({
  providedIn: 'root',
})
export class SaborAsociadoService {
  constructor(private http: HttpClient) {}

  getAllSaborAsociados(): Observable<SaborAsociadoResponse> {
    return this.http.get<SaborAsociadoResponse>(environment.apiSaborAsociado);
  }

  getAllByIdMarca(idMarca: string): Observable<SaborAsociadoResponse> {
    let params: HttpParams = new HttpParams().set('id', idMarca);
    return this.http.get<SaborAsociadoResponse>(environment.apiSaborAsociado, {
      params,
    });
  }

  crearSaborAsociado(
    saborAsociado: SaborAsociado
  ): Observable<SaborAsociadoResponse> {
    return this.http.post<SaborAsociadoResponse>(
      environment.apiSaborAsociado,
      saborAsociado
    );
  }

  actualizarSaborAsociado(
    body: SaborAsociado
  ): Observable<SaborAsociadoResponse> {
    return this.http.put<SaborAsociadoResponse>(
      environment.apiSaborAsociado,
      body
    );
  }

  eliminarSaborAsociado(id: string): Observable<SaborAsociadoResponse> {
    let params: HttpParams = new HttpParams().set('id', id);
    return this.http.delete<SaborAsociadoResponse>(
      environment.apiSaborAsociado,
      {
        params,
      }
    );
  }
}
