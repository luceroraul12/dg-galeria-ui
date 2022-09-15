export interface StockDataResponse {
  customerResult: CustomerResult;
  message: string;
}

export interface CustomerResult {
  brandSelected: BrandSelected;
  tasteResults: TasteResult[];
}

export interface BrandSelected {
  id: number;
  brandName: string;
  url: string;
  isStocked: boolean;
}

export interface TasteResult {
  tasteName: string;
  drinkContainersAvailable: DrinkContainersAvailable[];
}

export interface DrinkContainersAvailable {
  id: number;
  containerName: string;
  isStocked: boolean;
}
