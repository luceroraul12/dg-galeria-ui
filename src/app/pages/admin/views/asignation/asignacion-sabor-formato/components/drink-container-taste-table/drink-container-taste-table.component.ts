import { Component, OnInit } from '@angular/core';
import { DrinkContaineredTaste } from 'src/app/interfaces/drink-containered-taste.interface';
import { DrinkContaineredTasteService } from 'src/app/services/crud/drink-containered-taste.service';

@Component({
  selector: 'app-drink-container-taste-table',
  templateUrl: './drink-container-taste-table.component.html',
  styleUrls: ['./drink-container-taste-table.component.css'],
})
export class DrinkContainerTasteTableComponent implements OnInit {
  public drinkContainerTasteData: DrinkContaineredTaste[] = [];

  constructor(
    private drinkContainerTasteService: DrinkContaineredTasteService
  ) {}

  ngOnInit(): void {
    this.drinkContainerTasteService
      .read()
      .subscribe(
        (response) => (this.drinkContainerTasteData = response.stockDataResult)
      );
  }
}
