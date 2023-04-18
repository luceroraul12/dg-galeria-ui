import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-shopping-cart-view',
  templateUrl: './shopping-cart-view.component.html',
  styleUrls: ['./shopping-cart-view.component.css']
})
export class ShoppingCartViewComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ShoppingCartViewComponent>
  ) { }

  ngOnInit(): void {
  }

}
