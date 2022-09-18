import { Brand } from '../../../admin/views/brand/interface/brand.interface';
import { DrinkContainer } from '../../../admin/views/drink-container/interface/drink-container.interface';

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
