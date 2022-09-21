import { Pipe, PipeTransform } from '@angular/core';
import { BrandedTaste } from 'src/app/pages/admin/views/branded-taste/interface/branded-taste.interface';
import { DrinkContaineredTaste } from 'src/app/pages/admin/views/drink-containered-taste/interface/drink-containered-taste.interface';
import { BrandOrderByName } from './brand.pipe';

@Pipe({
  name: 'drinkContaineredTasteOrder',
})
export class DrinkContaineredTasteOrder implements PipeTransform {
  transform(items: DrinkContaineredTaste[]): DrinkContaineredTaste[] {
    return items
      .sort(
        (a, b) =>
          a.drinkContainer.containerName! - b.drinkContainer.containerName!
      )
      .sort((a, b) =>
        a.brandedTaste.taste.tasteName.localeCompare(
          b.brandedTaste.taste.tasteName
        )
      )
      .sort((a, b) => {
        return a.brandedTaste.brand.brandName.localeCompare(
          b.brandedTaste.brand.brandName
        );
      });
  }
}
