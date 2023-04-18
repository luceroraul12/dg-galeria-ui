import { ShoppingCartService } from './../../../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-shopping-cart-view',
  templateUrl: './shopping-cart-view.component.html',
  styleUrls: ['./shopping-cart-view.component.css']
})
export class ShoppingCartViewComponent implements OnInit {

  public data!: string[];

  constructor(
    private dialogRef: MatDialogRef<ShoppingCartViewComponent>,
    private shoppingCartService: ShoppingCartService 
  ) { }

  ngOnInit(): void {
    this.data = this.shoppingCartService.getAddedItems();
  }

}
