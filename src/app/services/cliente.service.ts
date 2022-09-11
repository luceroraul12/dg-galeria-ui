import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteResponse } from '../interfaces/cliente.interface';
import { Marca } from '../interfaces/marca.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  resumen(idMarca: string): Observable<ClienteResponse> {
    let url = `${environment.apiCliente}?id-marca=${idMarca}`;
    return this.http.get<ClienteResponse>(url);
  }
}
