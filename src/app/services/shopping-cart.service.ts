import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private addedItems: string[] = [];

  constructor() { }

  addItem(item: string): void {
    this.addedItems.push(item);
  }

  removeItem(item: string): void {
    this.addedItems = this.addedItems.filter(i => i != item);
  }

  getAddedItems(): void {
    console.log(this.addedItems);
  }
}
