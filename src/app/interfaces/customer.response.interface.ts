import { Brand } from './brand.interface';
import { DrinkContainer } from './drink-container.interface';

export interface CustomerResponse {
  brandSelected: Brand;
  tasteResults: TasteResult[];
}

export interface TasteResult {
  tasteName: string;
  drinkContainersAvailable: DrinkContainer[];
}
