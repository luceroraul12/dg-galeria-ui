import { Injectable } from '@angular/core';

export interface ResultClass<Primary, Secundary> {
  primary: Primary;
  secundary: Secundary;
}

@Injectable({
  providedIn: 'root',
})
export class GeneratorResultClassService<PrimaryEntity, SecundaryEntity> {
  public primarySelected!: PrimaryEntity[];
  public secondSelected!: SecundaryEntity[];

  private _resultCreated!: ResultClass<PrimaryEntity, SecundaryEntity>[];

  public reset() {
    this.primarySelected = [];
    this.secondSelected = [];
    this._resultCreated = [];
  }

  generate(): ResultClass<PrimaryEntity, SecundaryEntity>[] {
    this.primarySelected.forEach((primary) => {
      this.secondSelected.forEach((secundary) => {
        this._resultCreated.push({ primary, secundary });
      });
    });
    return this._resultCreated;
  }
}
