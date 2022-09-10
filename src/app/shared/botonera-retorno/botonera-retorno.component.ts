import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botonera-retorno',
  templateUrl: './botonera-retorno.component.html',
  styleUrls: ['./botonera-retorno.component.css'],
})
export class BotoneraRetornoComponent implements OnInit {
  @Input() ruta: string = '';

  constructor() {}

  ngOnInit(): void {}
}
