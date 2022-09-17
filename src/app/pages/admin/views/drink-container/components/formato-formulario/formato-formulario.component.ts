import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DrinkContainer } from 'src/app/interfaces/drink-container.interface';
import { DrinkContainerService } from 'src/app/services/crud/drink-container.service';

@Component({
  selector: 'app-formato-formulario',
  templateUrl: './formato-formulario.component.html',
  styleUrls: ['./formato-formulario.component.css'],
})
export class FormatoFormularioComponent implements OnInit {
  public drinkContianer: DrinkContainer = {
    containerName: '',
    id: 0,
    isStocked: true,
  };

  constructor(private drinkContainerService: DrinkContainerService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(this.drinkContianer.containerName);
    this.drinkContainerService
      .create(this.drinkContianer)
      .subscribe(({ stockDataResult }) => {
        console.log(stockDataResult[0]);
      });
  }

  onCancel(form: NgForm) {
    form.reset();
  }
}
