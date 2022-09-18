import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerResponse } from '../interface/customer.response.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private url: string = environment.apiCliente;

  constructor(private http: HttpClient) {}

  resultByIdBrand(idBrand: number): Observable<CustomerResponse> {
    let params = new HttpParams().set('id-brand', idBrand);
    return this.http.get<CustomerResponse>(this.url, { params });
  }
}
