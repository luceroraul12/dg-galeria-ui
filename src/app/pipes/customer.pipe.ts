import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../pages/admin/views/brand/interface/brand.interface';

@Pipe({
  name: 'customerBrand',
})
export class customerBrandPipe implements PipeTransform {
  transform(customerBrands: Brand[]): Brand[] {
    let resultAdapted: Brand[];
    resultAdapted = customerBrands
      .sort((a, b) => a.id! - b.id!)
      .sort((a, b) => Number(b.isStocked) - Number(a.isStocked));

    return resultAdapted;
  }
}
