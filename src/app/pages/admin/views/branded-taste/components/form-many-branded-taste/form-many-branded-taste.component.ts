import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { FormManyItemAbstractService } from 'src/app/abstract/service/form-many-item-abstract.service';
import { Taste } from '../../../taste/interface/taste.interface';
import { TasteService } from '../../../taste/service/taste.service';
import { BrandedTaste } from '../../interface/branded-taste.interface';
import { FormManyTasteService } from '../../service/form-many-taste.service';

@Component({
  selector: 'app-form-many-branded-taste',
  templateUrl: './form-many-branded-taste.component.html',
  styles: [],
})
export class FormManyBrandedTasteComponent implements OnInit {
  public registeredTastes: Taste[] = [];
  public addedTastes: Taste[] = [];

  constructor(
    private tasteService: TasteService,
    private formManyTasteService: FormManyTasteService
  ) {}

  ngOnInit(): void {
    this.tasteService
      .read()
      .pipe(first())
      .subscribe(({ stockDataResult }) => {
        stockDataResult.sort((a, b) =>
          a.tasteName!.localeCompare(b.tasteName!)
        );
        this.registeredTastes = stockDataResult;
        this.formManyTasteService.registeredElements = stockDataResult;
        this.formManyTasteService.selectedElements = [];
      });
  }

  verifyAndAddElement(item: Taste) {
    this.formManyTasteService.verifyAndAddElement(item);
  }
}
