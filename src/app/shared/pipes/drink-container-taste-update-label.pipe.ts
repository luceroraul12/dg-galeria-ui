import { Pipe, PipeTransform } from '@angular/core';
import { DrinkContaineredTaste } from 'src/app/pages/admin/views/drink-containered-taste/interface/drink-containered-taste.interface';
import { DrinkContainerName } from './drink-container.pipe';

@Pipe({
  name: 'drinkContainerTasteUpdateLabel'
})
export class DrinkContainerTasteUpdateLabelPipe implements PipeTransform {

  constructor(private dPipe: DrinkContainerName){

  }

  transform(drinkContaineredTaste: DrinkContaineredTaste): string {
    let brandName: string = drinkContaineredTaste.brandedTaste.brand.brandName;
    let tasteName: string = drinkContaineredTaste.brandedTaste.taste.tasteName;
    let drinkContainerName: number = drinkContaineredTaste.drinkContainer.containerName!;
    return `${brandName} - ${tasteName} - ${this.dPipe.transform(drinkContainerName)} `;
  }

}
