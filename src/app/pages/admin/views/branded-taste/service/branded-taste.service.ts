import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrandedTaste } from 'src/app/pages/admin/views/branded-taste/interface/branded-taste.interface';
import { environment } from 'src/environments/environment';
import { CrudService } from '../../../../../services/crud-abstract.service';

@Injectable({
  providedIn: 'root',
})
export class BrandedTasteService extends CrudService<BrandedTaste> {
  urlApi: string = environment.apiSaborAsociado;

  constructor(http: HttpClient) {
    super(http);
  }
}
