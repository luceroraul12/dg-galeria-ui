import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DrinkContainer } from 'src/app/pages/admin/views/drink-container/interface/drink-container.interface';
import { environment } from 'src/environments/environment';
import { CrudService } from '../../../../../abstract/crud-abstract.service';

@Injectable({
  providedIn: 'root',
})
export class DrinkContainerService extends CrudService<DrinkContainer> {
  urlApi: string = environment.apiFormato;

  constructor(http: HttpClient) {
    super(http);
  }
}
