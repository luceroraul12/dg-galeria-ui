import { Brand } from '../pages/admin/views/brand/interface/brand.interface';
import { BrandedTaste } from '../pages/admin/views/branded-taste/interface/branded-taste.interface';
import { Taste } from '../pages/admin/views/taste/interface/taste.interface';
import { ResultClass } from '../services/generator-branded-taste.service';

export class ResultClassUtil {
  public static convertToBrandedTaste(
    result: ResultClass<Brand, Taste>
  ): BrandedTaste {
    let { primary, secundary } = result;
    return { brand: primary, taste: secundary };
  }
}
