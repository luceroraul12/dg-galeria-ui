import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-forms',
  templateUrl: './button-forms.component.html',
  styleUrls: ['./button-forms.component.css'],
})
export class ButtonFormsComponent implements OnInit {
  @Output() submit: EventEmitter<boolean> = new EventEmitter();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter();
  @Output() addMany: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.submit.emit(true);
  }

  onCancel() {
    this.cancel.emit(true);
  }

  onAddMany() {
    this.addMany.emit(true);
  }
}
