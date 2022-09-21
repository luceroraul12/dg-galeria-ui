import { Brand } from '../pages/admin/views/brand/interface/brand.interface';
import { BrandedTaste } from '../pages/admin/views/branded-taste/interface/branded-taste.interface';
import { DrinkContainer } from '../pages/admin/views/drink-container/interface/drink-container.interface';
import { DrinkContaineredTaste } from '../pages/admin/views/drink-containered-taste/interface/drink-containered-taste.interface';
import { Taste } from '../pages/admin/views/taste/interface/taste.interface';
import { ResultClass } from '../services/generator-result-class.service';

export class ResultClassUtil {
  public static convertToBrandedTaste(
    result: ResultClass<Brand, Taste>
  ): BrandedTaste {
    let { primary, secundary } = result;
    return { brand: primary, taste: secundary, isStocked: true };
  }

  public static convertToDrinkContaineredTaste(
    result: ResultClass<BrandedTaste, DrinkContainer>
  ): DrinkContaineredTaste {
    let { primary, secundary } = result;
    return {
      brandedTaste: primary,
      drinkContainer: secundary,
      isStocked: true,
    };
  }
}
