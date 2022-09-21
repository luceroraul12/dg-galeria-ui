import { StockData } from 'src/app/interfaces/stock-data.interface';

export interface DrinkContainer extends StockData {
  id?: number;
  containerName?: number;
  isStocked?: boolean;
}
