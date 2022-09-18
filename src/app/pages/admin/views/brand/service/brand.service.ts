import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from 'src/app/pages/admin/views/brand/interface/brand.interface';
import { environment } from 'src/environments/environment';
import { CrudService } from '../../../../../abstract/crud-abstract.service';

@Injectable({
  providedIn: 'root',
})
export class BrandService extends CrudService<Brand> {
  urlApi: string = environment.apiMarca;
  constructor(http: HttpClient) {
    super(http);
  }
}
