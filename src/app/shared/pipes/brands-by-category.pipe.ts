import { Pipe, PipeTransform } from '@angular/core';
import { Brand, BrandCategory } from 'src/app/pages/admin/views/brand/interface/brand.interface';

@Pipe({
  name: 'brandsByCategory'
})
export class BrandsByCategoryPipe implements PipeTransform {

  transform(brands: Brand[], category: number): Brand[] {
    return brands.filter( brand => brand.brandCategory?.id == category);
  }

}
