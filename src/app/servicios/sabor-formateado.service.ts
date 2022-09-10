import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  SaborFormateadoResponse,
  SaborFormateado,
} from '../interfaces/saborformateado.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SaborFormateadoService {
  constructor(private http: HttpClient) {}

  getAllSaborFormateados(): Observable<SaborFormateadoResponse> {
    return this.http.get<SaborFormateadoResponse>(
      environment.apiSaborFormateado
    );
  }

  getAllByIdMarca(idMarca: string): Observable<SaborFormateadoResponse> {
    let params: HttpParams = new HttpParams().set('id', idMarca);
    return this.http.get<SaborFormateadoResponse>(
      environment.apiSaborFormateado,
      { params }
    );
  }

  crearSaborFormateado(tipo: string): Observable<SaborFormateadoResponse> {
    let params: HttpParams = new HttpParams().set('tipo', tipo);
    return this.http.post<SaborFormateadoResponse>(
      environment.apiSaborFormateado,
      params
    );
  }

  actualizarSaborFormateado(
    body: SaborFormateado
  ): Observable<SaborFormateadoResponse> {
    return this.http.put<SaborFormateadoResponse>(
      environment.apiSaborFormateado,
      body
    );
  }

  eliminarSaborFormateado(id: string): Observable<SaborFormateadoResponse> {
    let params: HttpParams = new HttpParams().set('id', id);
    return this.http.delete<SaborFormateadoResponse>(
      environment.apiSaborFormateado,
      {
        params,
      }
    );
  }
}
