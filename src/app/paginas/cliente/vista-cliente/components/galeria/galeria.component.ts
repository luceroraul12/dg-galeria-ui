import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent implements OnInit {
  public informacionDisponible: any[] = [];

  public marcasCreadas: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
