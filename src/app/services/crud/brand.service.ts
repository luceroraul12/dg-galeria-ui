import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from 'src/app/interfaces/brand.interface';
import { environment } from 'src/environments/environment';
import { CrudService } from './crud-abstract.service';

@Injectable({
  providedIn: 'root',
})
export class BrandService extends CrudService<Brand> {
  constructor(http: HttpClient) {
    super(http, environment.apiMarca);
  }
}
