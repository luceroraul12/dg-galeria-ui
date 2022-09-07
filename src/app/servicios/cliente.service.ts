import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formato, GaleriaResponse } from '../interfaces/galeria.interface';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private urlApi: string = 'http://localhost:8080/galeria';

  constructor(private http: HttpClient) {}

  formatosCreados(): Observable<Formato> {
    let url: string = `${this.urlApi}/formatos`;
    return this.http.get<Formato>(url);
  }
}
