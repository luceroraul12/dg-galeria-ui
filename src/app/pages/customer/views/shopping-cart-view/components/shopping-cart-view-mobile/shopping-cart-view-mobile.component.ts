import { Component, Input, OnInit } from '@angular/core';
import { CartItem, ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-view-mobile',
  templateUrl: './shopping-cart-view-mobile.component.html',
  styleUrls: ['./shopping-cart-view-mobile.component.css']
})
export class ShoppingCartViewMobileComponent implements OnInit {

  @Input() cartItems!: CartItem[];

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit(): void {

  }

  plusAmount(item: CartItem): void {
    this.shoppingCartService.plusAmount(item);
  }

  minusAmount(item: CartItem): void {
    this.shoppingCartService.minusAmount(item);
  }

  removeItem(item: CartItem): void {
    this.cartItems = this.shoppingCartService.removeItem(item);
  }

}
