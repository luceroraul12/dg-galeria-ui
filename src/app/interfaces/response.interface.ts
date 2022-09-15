import { StockData } from './stock-data.interface';

export interface StockDataResponse<Entity extends StockData> {
  stockDataResult: Entity[];
  message: string;
}
