import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DrinkContainer } from 'src/app/pages/admin/views/drink-container/interface/drink-container.interface';
import { FormAbstractComponent } from 'src/app/abstract/components/form.abstract.component';
import { DrinkContainerService } from 'src/app/pages/admin/views/drink-container/service/drink-container.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-form-drink-container',
  templateUrl: './form-drink-container.component.html',
  styleUrls: ['./form-drink-container.component.css'],
})
export class FormDrinkContainerComponent
  extends FormAbstractComponent<DrinkContainer>
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
