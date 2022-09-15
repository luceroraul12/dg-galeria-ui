import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DrinkContaineredTaste } from 'src/app/interfaces/drink-containered-taste.interface';
import { environment } from 'src/environments/environment';
import { CrudService } from './crud-abstract.service';

@Injectable({
  providedIn: 'root',
})
export class DrinkContaineredTasteService extends CrudService<DrinkContaineredTaste> {
  urlApi: string = environment.apiSaborFormateado;

  constructor(http: HttpClient) {
    super(http);
  }
}
