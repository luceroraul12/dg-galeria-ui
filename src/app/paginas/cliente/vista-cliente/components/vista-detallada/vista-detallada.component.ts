import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-detallada',
  templateUrl: './vista-detallada.component.html',
  styleUrls: ['./vista-detallada.component.css'],
})
export class VistaDetalladaComponent implements OnInit {
  @Output() fueClickeadoCambio = new EventEmitter<boolean>();

  private idMarca: string = '';

  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {}
}
