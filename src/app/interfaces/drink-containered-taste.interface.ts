import { BrandedTaste } from './branded-taste.interface';
import { DrinkContainer } from './drink-container.interface';

export interface DrinkContaineredTaste {
  id: number;
  isStocked: boolean;
  drinkContainer: DrinkContainer;
  brandedTaste: BrandedTaste;
}
