import { Pipe, PipeTransform } from '@angular/core';

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
