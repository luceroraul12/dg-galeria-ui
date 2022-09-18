import { StockData } from 'src/app/interfaces/stock-data.interface';

export interface Brand extends StockData {
  id?: number;
  brandName?: string;
  url?: string;
  isStocked?: boolean;
}
