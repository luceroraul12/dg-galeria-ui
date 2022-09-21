import { Pipe, PipeTransform } from '@angular/core';
import { BrandedTaste } from 'src/app/pages/admin/views/branded-taste/interface/branded-taste.interface';
import { BrandOrderByName } from './brand.pipe';

@Pipe({
  name: 'brandedTasteOrder',
})
export class BrandedTasteOrder implements PipeTransform {
  transform(items: BrandedTaste[]): BrandedTaste[] {
    return items
      .sort((a, b) => {
        return a.brand.brandName.localeCompare(b.brand.brandName);
      })
      .sort((a, b) => {
        return a.taste.tasteName.localeCompare(b.taste.tasteName);
      });
  }
}
