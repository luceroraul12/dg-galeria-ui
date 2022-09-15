import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Taste } from 'src/app/interfaces/taste.interface';
import { environment } from 'src/environments/environment';
import { CrudService } from './crud-abstract.service';

@Injectable({
  providedIn: 'root',
})
export class TasteService extends CrudService<Taste> {
  urlApi: string = environment.apiSabor;

  constructor(http: HttpClient) {
    super(http);
  }
}
