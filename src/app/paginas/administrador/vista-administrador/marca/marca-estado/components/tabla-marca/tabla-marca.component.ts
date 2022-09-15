import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-marca',
  templateUrl: './tabla-marca.component.html',
  styleUrls: ['./tabla-marca.component.css'],
})
export class TablaMarcaComponent implements OnInit {
  public marcasCreadas: any[] = [];
  @Input() tipoDeTabla: string = 'determinado';

  constructor() {}

  ngOnInit(): void {}
}
