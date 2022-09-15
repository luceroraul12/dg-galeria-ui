import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-sabor',
  templateUrl: './tabla-sabor.component.html',
  styleUrls: ['./tabla-sabor.component.css'],
})
export class TablaSaborComponent implements OnInit {
  @Input() tipoDeTabla: string = 'determinado';
  public saboresCreados: any[] = [];
  constructor() {}

  ngOnInit(): void {}
}
