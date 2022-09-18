import { Brand } from '../../brand/interface/brand.interface';
import { Taste } from '../../taste/interface/taste.interface';

export interface BrandedTaste {
  id: number;
  isStocked: boolean;
  brand: Brand;
  taste: Taste;
}
