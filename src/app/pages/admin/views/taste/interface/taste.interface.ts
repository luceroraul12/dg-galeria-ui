import { StockData } from 'src/app/interfaces/stock-data.interface';

export interface Taste extends StockData {
  id?: number;
  tasteName?: string;
  isStocked?: boolean;
}
