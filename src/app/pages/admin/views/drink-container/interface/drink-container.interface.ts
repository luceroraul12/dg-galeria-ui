import { StockData } from 'src/app/interfaces/stock-data.interface';

export interface DrinkContainer extends StockData {
  id?: number;
  containerName?: string;
  isStocked?: boolean;
}
