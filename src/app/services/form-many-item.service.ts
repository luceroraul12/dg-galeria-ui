import { Injectable } from '@angular/core';
import { StockData } from '../interfaces/stock-data.interface';

@Injectable({
  providedIn: 'root',
})
export class FormManyItemService<Entity extends StockData> {
  public registeredElements: Entity[] = [];
  public selectedElements: Entity[] = [];

  constructor() {}

  reset() {
    this.selectedElements = [];
  }

  verifyAndAddElement(element: Entity): void {
    if (!this.selectedElements.includes(element)) {
      this.selectedElements.push(element);
    } else {
      this.selectedElements = this.selectedElements.filter((x) => x != element);
    }
    console.log(this.selectedElements);
  }
}
