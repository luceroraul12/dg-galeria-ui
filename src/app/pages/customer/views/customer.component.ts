import { ShoppingCartViewComponent } from './shopping-cart-view/shopping-cart-view.component';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from './service/customer.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private dialog: MatDialog
    ) {}

  ngOnInit(): void {}

  downloadPDF(): void {
    this.customerService.getPDF().subscribe(

      response => {

        let blob: Blob = response.body as Blob;

        let a = document.createElement('a');
        a.download = `Distribuidora Gustavo - Resumen`;
        a.href = window.URL.createObjectURL(blob);

        a.click();

      }
    )
  }

  verMarcado(): void {
    this.dialog.open(ShoppingCartViewComponent);
  }
}

