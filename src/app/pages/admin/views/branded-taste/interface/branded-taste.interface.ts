import { StockData } from 'src/app/interfaces/stock-data.interface';
import { Brand } from '../../brand/interface/brand.interface';
import { Taste } from '../../taste/interface/taste.interface';

export interface BrandedTaste extends StockData {
  id?: number;
  isStocked?: boolean;
  brand: Brand;
  taste: Taste;
}
