import { LocalstorageService } from './../../../../services/localstorage.service';
import { CartItem, CustomerData, ShoppingCartService } from './../../../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-shopping-cart-view',
  templateUrl: './shopping-cart-view.component.html',
  styleUrls: ['./shopping-cart-view.component.css']
})
export class ShoppingCartViewComponent implements OnInit {


  public data!: CartItem[];
  public customerData!: CustomerData;
  public isMobile!: boolean;

  constructor(
    private dialogRef: MatDialogRef<ShoppingCartViewComponent>,
    private shoppingCartService: ShoppingCartService,
    private localstorageService: LocalstorageService
  ) { }

  ngOnInit(): void {
    this.customerData = this.shoppingCartService.getCustomerData();
    this.data = this.shoppingCartService.getAddedItems();
    // this.isMobile = this.shoppingCartService.isMobile;
    this.isMobile = true;
  }

  plusAmount(item: CartItem): void {
    this.shoppingCartService.plusAmount(item);
  }

  minusAmount(item: CartItem): void {
    this.shoppingCartService.minusAmount(item);
  }

  generateMessage(): void {
    this.shoppingCartService.sendCartMessage();
  }

  removeItem(item: CartItem): void {
    this.data = this.shoppingCartService.removeItem(item);
  }

  contactFromWhatsapp(): void {
    this.shoppingCartService.sendSimpleMessage();
  }

  
}
