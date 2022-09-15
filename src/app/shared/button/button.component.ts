import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() label!: string;
  @Output() emitter: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  wasClicked() {
    this.emitter.emit(true);
  }
}
