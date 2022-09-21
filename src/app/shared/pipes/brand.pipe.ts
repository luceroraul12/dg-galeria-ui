import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from 'src/app/pages/admin/views/brand/interface/brand.interface';

@Pipe({
  name: 'brandOrderByName',
})
export class BrandOrderByName implements PipeTransform {
  transform(items: Brand[]): Brand[] {
    return items.sort((a, b) => a.brandName.localeCompare(b.brandName));
  }
}
