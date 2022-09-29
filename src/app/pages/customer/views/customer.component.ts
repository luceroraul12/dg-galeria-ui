import { Component, OnInit } from '@angular/core';
import { CustomerService } from './service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

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
}

