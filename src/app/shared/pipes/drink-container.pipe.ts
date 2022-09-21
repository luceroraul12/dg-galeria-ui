import { Pipe, PipeTransform } from '@angular/core';
import { DrinkContainer } from 'src/app/pages/admin/views/drink-container/interface/drink-container.interface';

@Pipe({
  name: 'drinkContainerName',
})
export class DrinkContainerName implements PipeTransform {
  transform(value: number): string {
    let subFix: string;
    let valueFix: number;
    if (value < 1000) {
      subFix = 'ml';
      valueFix = value;
    } else {
      subFix = 'lts';
      valueFix = value / 1000;
    }
    return `${valueFix} ${subFix}`;
  }
}

@Pipe({
  name: 'drinkContainerOrderByValue',
})
export class DrinkContainerOrderByValue implements PipeTransform {
  transform(items: DrinkContainer[]): DrinkContainer[] {
    return items.sort((a, b) => a.containerName! - b.containerName!);
  }
}
