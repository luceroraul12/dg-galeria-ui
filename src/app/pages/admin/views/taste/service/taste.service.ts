import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Taste } from 'src/app/pages/admin/views/taste/interface/taste.interface';
import { environment } from 'src/environments/environment';
import { CrudService } from '../../../../../abstract/service/crud-abstract.service';

@Injectable({
  providedIn: 'root',
})
export class TasteService extends CrudService<Taste> {
  urlApi: string = environment.apiSabor;

  constructor(http: HttpClient) {
    super(http);
  }
}
