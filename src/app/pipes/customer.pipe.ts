import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../pages/admin/views/brand/interface/brand.interface';
import { CustomerResult } from '../pages/customer/views/interface/customer.response.interface';

@Pipe({
  name: 'customerBrand',
})
export class customerBrandPipe implements PipeTransform {
  transform(customerBrands: Brand[]): Brand[] {
    let resultAdapted: Brand[];
    resultAdapted = customerBrands
      .sort((a, b) => a.brandName.localeCompare(b.brandName))
      .sort((a, b) => Number(a.isStocked) - Number(b.isStocked));

    return resultAdapted;
  }
}
