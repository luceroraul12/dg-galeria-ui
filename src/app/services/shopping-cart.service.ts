import { Injectable } from '@angular/core';
import { TasteResult } from '../pages/customer/views/interface/customer.response.interface';
import { DrinkContainer } from '../pages/admin/views/drink-container/interface/drink-container.interface';

export interface CartItem {
  tasteResul: TasteResult;
  containerSelected: DrinkContainer;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private items: CartItem[] = [];

  constructor() { }

  addItem(tasteResult: TasteResult, item: DrinkContainer): void {
    this.items.push({
      containerSelected: {...item},
      tasteResul: {...tasteResult},
      amount: 1
    });
  }

  removeItem(tasteResult: TasteResult,item: any): void {
    this.items = this.items.filter(i => i != item);
  }

  getAddedItems(): CartItem[] {
    console.log(this.items);
    return this.items;
  }
}
