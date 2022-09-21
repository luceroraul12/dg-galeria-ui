import { Pipe, PipeTransform } from '@angular/core';
import { Taste } from 'src/app/pages/admin/views/taste/interface/taste.interface';

@Pipe({
  name: 'tasteOrderByName',
})
export class TasteOrderByName implements PipeTransform {
  transform(items: Taste[]): Taste[] {
    return items.sort((a, b) => a.tasteName.localeCompare(b.tasteName));
  }
}
