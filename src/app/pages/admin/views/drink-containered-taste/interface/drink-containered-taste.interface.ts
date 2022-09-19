import { StockData } from 'src/app/interfaces/stock-data.interface';
import { BrandedTaste } from '../../branded-taste/interface/branded-taste.interface';
import { DrinkContainer } from '../../drink-container/interface/drink-container.interface';

export interface DrinkContaineredTaste extends StockData {
  id: number;
  isStocked: boolean;
  drinkContainer: DrinkContainer;
  brandedTaste: BrandedTaste;
}
