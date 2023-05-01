import { LocalstorageService } from './localstorage.service';
import { DrinkContainerName } from './../shared/pipes/drink-container.pipe';
import { Injectable } from '@angular/core';
import { TasteResult } from '../pages/customer/views/interface/customer.response.interface';
import { DrinkContainer } from '../pages/admin/views/drink-container/interface/drink-container.interface';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingCartViewComponent } from '../pages/customer/views/shopping-cart-view/shopping-cart-view.component';
import { Platform } from '@angular/cdk/platform';

export interface CartItem {
  tasteResul: TasteResult;
  containerSelected: DrinkContainer;
  amount: number;
}

export interface CustomerData {
  firstName?: string;
  lastName?: string;
  phone?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private customerKey: string = 'customerData';
  private cartItemsKey: string = 'cartItems';
  private items: CartItem[];
  private customerData!: CustomerData;
  private isMobile!: boolean;


  public get hasData(): boolean {
    return this.items.length > 0;
  }

  // Esta hecho para que los componentes que dependan del carrito puedan volver a pedir el estado de la informacion
  public update$: Subject<boolean> = new Subject();

  constructor(
    private localstorageService: LocalstorageService,
    private dialog: MatDialog,
    private platform: Platform
  ) {
    let cartStored = this.localstorageService.getData(this.cartItemsKey);
    let customerStored = this.localstorageService.getData(this.customerKey);
    this.items = cartStored ? cartStored : [];
    this.customerData = customerStored ? customerStored : {};
    this.isMobile = platform.ANDROID || platform.IOS;
  }

  addItem(tasteResult: TasteResult, item: DrinkContainer): void {
    this.items.push({
      containerSelected: { ...item },
      tasteResul: { ...tasteResult },
      amount: 1
    });
    this.saveCart();
    this.update$.next(true);
  }

  removeItem(item: CartItem): CartItem[] {
    this.items = this.items.filter(i => i != item);
    this.saveCart();
    return [...this.items];
    this.update$.next(true);
  }

  getAddedItems(): CartItem[] {
    console.log(this.items);
    return this.items;
  }

  getCustomerData(): CustomerData {
    return this.customerData;
  }

  plusAmount(item: CartItem): void {
    item.amount++;
  }

  minusAmount(item: CartItem): void {
    item.amount--;
  }

  sendCartMessage(): void {
    //ordeno el arreglo en funcion del nombre de las marcas
    this.items.sort((a, b) => b.tasteResul.brandName.localeCompare(a.tasteResul.brandName));
    let pipe = new DrinkContainerName();
    let { firstName, lastName, phone } = this.customerData;

    let message = `*Nombre:*:${firstName},${lastName} \n*TEL:* ${phone}\n *Pedido:*\n`;
    this.items.forEach((item, index) => {
      let { brandName, tasteName, packageAvailable } = item.tasteResul;
      let amount = item.amount;
      let containerSelectedName: string = pipe.transform(item.containerSelected.containerName!);
      message = message.concat(`*${index + 1})Marca:* ${brandName}, *Sabor:* ${tasteName}, *Calibre:* ${containerSelectedName}, *Paquete:* ${packageAvailable[0].amount}U, *Cantidad:* ${amount}\n`);
    });
    let url: string = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url);
    this.saveCart();
  }

  sendSimpleMessage(): void {
    let phone: string = '542657678661';
    let url: string = `https://wa.me/${phone}?text=${encodeURIComponent("Hola queria consultarte algo sobre las bebidas")}`;
    window.open(url);
    this.saveCustomer();
  }

  openDialogDetails(): void {
    this.dialog.open(ShoppingCartViewComponent);
  }


  // almacena los datos de los productos marcados
  private saveCart(): void {
    this.localstorageService.setData(this.cartItemsKey, this.items);
    this.update$.next(true);
  }

  // almacena los datos del cliente
  private saveCustomer(): void {
    this.localstorageService.setData(this.customerKey, this.customerData);
  }
}
