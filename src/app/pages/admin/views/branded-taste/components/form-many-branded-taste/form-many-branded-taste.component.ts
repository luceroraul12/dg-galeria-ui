import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Taste } from '../../../taste/interface/taste.interface';
import { TasteService } from '../../../taste/service/taste.service';
import { BrandedTaste } from '../../interface/branded-taste.interface';

@Component({
  selector: 'app-form-many-branded-taste',
  templateUrl: './form-many-branded-taste.component.html',
  styles: [],
})
export class FormManyBrandedTasteComponent implements OnInit {
  public registeredTastes: Taste[] = [];
  public addedTastes: Taste[] = [];

  constructor(private tasteService: TasteService) {}

  ngOnInit(): void {
    this.tasteService
      .read()
      .pipe(first())
      .subscribe(({ stockDataResult }) => {
        stockDataResult.sort((a, b) =>
          a.tasteName!.localeCompare(b.tasteName!)
        );
        this.registeredTastes = stockDataResult;
      });
  }

  changeCheckbox(item: Taste) {
    if (!this.addedTastes.includes(item)) {
      this.addedTastes.push(item);
    } else {
      this.addedTastes = this.addedTastes.filter((x) => x != item);
    }
    console.log(this.addedTastes);
  }
}
