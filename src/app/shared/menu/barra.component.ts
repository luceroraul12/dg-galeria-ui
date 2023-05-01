import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  public hasCartItems!: boolean;

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.hasCartItems = this.shoppingCartService.hasData;
    this.shoppingCartService.update$.subscribe(r => this.hasCartItems = this.shoppingCartService.hasData);
  }

  openDialogDetails(): void {
    this.shoppingCartService.openDialogDetails();
  }

  sendSimpleMessage(): void {
    this.shoppingCartService.sendSimpleMessage();
  }
}
