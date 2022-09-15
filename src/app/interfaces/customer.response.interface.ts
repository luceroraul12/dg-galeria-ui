import { Brand } from './brand.interface';
import { DrinkContainer } from './drink-container.interface';

export interface CustomerResponse {
  customerResult: CustomerResult;
  message: string;
}

export interface CustomerResult {
  brandSelected: Brand;
  tasteResults: TasteResult[];
}

export interface TasteResult {
  tasteName: string;
  drinkContainersAvailable: DrinkContainer[];
}
