import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DrinkContainer } from 'src/app/interfaces/drink-container.interface';
import { CallInputsForm } from 'src/app/services/call-inputs-form.service';
import { DrinkContainerService } from 'src/app/services/crud/drink-container.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-formato-formulario',
  templateUrl: './formato-formulario.component.html',
  styleUrls: ['./formato-formulario.component.css'],
})
export class FormatoFormularioComponent
  extends CallInputsForm<DrinkContainer>
  implements OnInit
{
  public drinkContianer: DrinkContainer = {
    containerName: '',
    id: 0,
    isStocked: true,
  };

  constructor(
    drinkContainerService: DrinkContainerService,
    tableService: TableService
  ) {
    super(tableService, drinkContainerService);
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.drinkContianer.containerName == '') {
      return;
    }
    this.create(this.drinkContianer);
  }

  onCancel(form: NgForm) {
    form.reset();
  }
}
