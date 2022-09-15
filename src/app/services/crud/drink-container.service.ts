import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DrinkContainer } from 'src/app/interfaces/drink-container.interface';
import { environment } from 'src/environments/environment';
import { CrudService } from './crud-abstract.service';

@Injectable({
  providedIn: 'root',
})
export class DrinkContainerService extends CrudService<DrinkContainer> {
  urlApi: string = environment.apiFormato;

  constructor(http: HttpClient) {
    super(http);
  }
}
