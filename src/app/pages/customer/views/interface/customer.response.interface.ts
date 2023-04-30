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

export interface Package {
  id: number;
  description: string;
  amount: number;
}

export interface TasteResult {
  id: number;
  tasteName: string;
  brandName: string;
  stockState: boolean;
  drinkContainersAvailable: DrinkContainer[];
  packageAvailable: Package[];
}
