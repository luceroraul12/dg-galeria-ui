import { Pipe, PipeTransform } from '@angular/core';
import { DrinkContainer } from 'src/app/pages/admin/views/drink-container/interface/drink-container.interface';
import { TasteResult } from 'src/app/pages/customer/views/interface/customer.response.interface';

@Pipe({
  name: 'drinkContainerStockByTasteStock'
})
export class TasteResultApplyStockStatePipe implements PipeTransform {

  transform(tasteResuls: TasteResult): DrinkContainer[] {
    return tasteResuls.drinkContainersAvailable.map(
      dc => {
        if(!tasteResuls.stockState){
          dc.isStocked = false;
        } else {
          dc.isStocked = dc.isStocked;
        }
        return dc;
      }
    );
  }

}
