import { DrinkContainerName } from './../shared/pipes/drink-container.pipe';
import { Injectable } from '@angular/core';
import { TasteResult } from '../pages/customer/views/interface/customer.response.interface';
import { DrinkContainer } from '../pages/admin/views/drink-container/interface/drink-container.interface';
import { Subject } from 'rxjs';

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

  public deleteItem$: Subject<CartItem> = new Subject();

  constructor() { }

  addItem(tasteResult: TasteResult, item: DrinkContainer): void {
    this.items.push({
      containerSelected: {...item},
      tasteResul: {...tasteResult},
      amount: 1
    });
  }

  removeItem(item: CartItem): CartItem[] {
    this.items = this.items.filter(i => i != item);
    return [...this.items];
  }

  getAddedItems(): CartItem[] {
    console.log(this.items);
    return this.items;
  }

  plusAmount(item: CartItem): void {
    item.amount++;
  }

  minusAmount(item: CartItem): void {
    item.amount--;
  }

  generateMessage(): void {
    //ordeno el arreglo en funcion del nombre de las marcas
    this.items.sort((a,b) => b.tasteResul.brandName.localeCompare(a.tasteResul.brandName));
    let pipe = new DrinkContainerName();
    console.log("Hola mi nombre es !@#WDEF, TEL: !2324123\n y mi pedido es:");
    this.items.forEach((item, index) => {
      let {brandName, tasteName, packageAvailable} = item.tasteResul;
      let amount = item.amount;
      let containerSelectedName: string = pipe.transform(item.containerSelected.containerName!);
      console.log(`${index+1})Marca: ${brandName}, Sabor: ${tasteName}, Calibre: ${containerSelectedName}, Paquete: ${packageAvailable[0].amount}U, Cantidad: ${amount}`);
    })
  }

}
