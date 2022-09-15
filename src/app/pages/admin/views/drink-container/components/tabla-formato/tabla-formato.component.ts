import { Component, OnInit } from '@angular/core';
import { DrinkContainer } from 'src/app/interfaces/drink-container.interface';
import { DrinkContainerService } from 'src/app/services/crud/drink-container.service';

@Component({
  selector: 'app-tabla-formato',
  templateUrl: './tabla-formato.component.html',
  styleUrls: ['./tabla-formato.component.css'],
})
export class TablaFormatoComponent implements OnInit {
  public formatosCreados: DrinkContainer[] = [];

  constructor(private drinkContainerService: DrinkContainerService) {}

  ngOnInit(): void {
    this.drinkContainerService
      .read()
      .subscribe(
        (response) => (this.formatosCreados = response.stockDataResult)
      );
  }
}
