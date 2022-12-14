import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() label!: string;
  @Input() iconClass: string = 'bi bi-pencil';
  @Input() type: string = 'button';
  @Output() emitter: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  wasClicked() {
    console.log('boton clickeado');

    this.emitter.emit(true);
  }
}
