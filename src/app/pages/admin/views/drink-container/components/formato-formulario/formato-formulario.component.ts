import { Component, OnInit } from '@angular/core';
import { DrinkContainer } from 'src/app/interfaces/drink-container.interface';

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

  constructor() {}

  ngOnInit(): void {}
}
