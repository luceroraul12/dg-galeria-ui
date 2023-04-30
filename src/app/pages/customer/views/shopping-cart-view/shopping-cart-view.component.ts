import { CartItem, ShoppingCartService } from './../../../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, ReplaySubject } from 'rxjs';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-shopping-cart-view',
  templateUrl: './shopping-cart-view.component.html',
  styleUrls: ['./shopping-cart-view.component.css']
})
export class ShoppingCartViewComponent implements OnInit {

  public data!: CartItem[];

  constructor(
    private dialogRef: MatDialogRef<ShoppingCartViewComponent>,
    private shoppingCartService: ShoppingCartService 
  ) { }

  ngOnInit(): void {
    this.data = this.shoppingCartService.getAddedItems();
  }

  plusAmount(item: CartItem): void {
    this.shoppingCartService.plusAmount(item);
  }

  minusAmount(item: CartItem): void {
    this.shoppingCartService.minusAmount(item);
  }

  generateMessage(): void {
    this.shoppingCartService.generateMessage();
  }

  removeItem(item: CartItem): void {
    this.data = this.shoppingCartService.removeItem(item);
  }
}
