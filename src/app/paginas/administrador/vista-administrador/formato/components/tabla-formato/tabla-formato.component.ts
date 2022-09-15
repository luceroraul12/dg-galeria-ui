import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-formato',
  templateUrl: './tabla-formato.component.html',
  styleUrls: ['./tabla-formato.component.css'],
})
export class TablaFormatoComponent implements OnInit {
  public formatosCreados: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
