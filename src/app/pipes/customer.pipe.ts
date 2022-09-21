import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../pages/admin/views/brand/interface/brand.interface';
import { DrinkContainer } from '../pages/admin/views/drink-container/interface/drink-container.interface';

@Pipe({
  name: 'customerBrand',
})
export class CustomerBrandPipe implements PipeTransform {
  transform(customerBrands: Brand[]): Brand[] {
    let resultAdapted: Brand[];
    resultAdapted = customerBrands
      .sort((a, b) => a.id! - b.id!)
      .sort((a, b) => Number(b.isStocked) - Number(a.isStocked));

    return resultAdapted;
  }
}

@Pipe({
  name: 'customerDrinkContainer',
})
export class CustomerDrinkContainer implements PipeTransform {
  transform(customerDrinkContainer: DrinkContainer[]): DrinkContainer[] {
    return customerDrinkContainer
      .sort((a, b) => a.containerName!.localeCompare(b.containerName!))
      .sort((a, b) => Number(b.isStocked) - Number(a.isStocked));
  }
}
