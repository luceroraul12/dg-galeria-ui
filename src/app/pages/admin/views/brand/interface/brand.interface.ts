import { StockData } from 'src/app/interfaces/stock-data.interface';

export interface Brand extends StockData {
  id?: number;
  brandName: string;
  url?: string;
  urlIconic?: string;
  isStocked?: boolean;
  brandCategory?: BrandCategory;
}
export interface BrandCategory {
  id:           number;
  categoryName: CategoryName;
}

export enum CategoryName {
  Cerveza = "CERVEZA",
  Espumante = "ESPUMANTE",
  Gaseosa = "GASEOSA",
  Otros = "OTROS",
  Vino = "VINO",
}
