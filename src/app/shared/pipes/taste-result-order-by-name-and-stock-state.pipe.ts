import { Pipe, PipeTransform } from '@angular/core';
import { TasteResult } from 'src/app/pages/customer/views/interface/customer.response.interface';

@Pipe({
  name: 'tasteResultOrderByNameAndStockState'
})
export class TasteResultOrderByNameAndStockStatePipe implements PipeTransform {

  transform(tasteResult: TasteResult[]): TasteResult[] {

    return tasteResult
      .sort((a,b) => a.tasteName.localeCompare(b.tasteName))
      .sort((a,b) => Number(b.stockState) - Number(a.stockState))
  }

}
