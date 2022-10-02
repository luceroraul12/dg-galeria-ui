import { Pipe, PipeTransform } from '@angular/core';
import { DrinkContainer } from 'src/app/pages/admin/views/drink-container/interface/drink-container.interface';
import { DrinkContainerName } from './drink-container.pipe';

@Pipe({
  name: 'drinkContainerStockState'
})
export class DrinkContainerStockStatePipe implements PipeTransform {
  constructor(private drinkcontainerNamePipe: DrinkContainerName){

  }

  transform(drinkContainer: DrinkContainer): string {
    let result: string = this.drinkcontainerNamePipe.transform(
      drinkContainer.containerName!
    );

    if(!drinkContainer.isStocked){
      result = `${result} SIN STOCK`;
    }
    return result;
  }

}
