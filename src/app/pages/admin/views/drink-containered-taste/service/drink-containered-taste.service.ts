import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DrinkContaineredTaste } from 'src/app/pages/admin/views/drink-containered-taste/interface/drink-containered-taste.interface';
import { environment } from 'src/environments/environment';
import { CrudService } from '../../../../../abstract/crud-abstract.service';

@Injectable({
  providedIn: 'root',
})
export class DrinkContaineredTasteService extends CrudService<DrinkContaineredTaste> {
  urlApi: string = environment.apiSaborFormateado;

  constructor(http: HttpClient) {
    super(http);
  }
}
