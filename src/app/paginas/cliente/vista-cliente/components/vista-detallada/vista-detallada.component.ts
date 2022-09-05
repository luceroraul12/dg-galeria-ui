import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vista-detallada',
  templateUrl: './vista-detallada.component.html',
  styleUrls: ['./vista-detallada.component.css']
})
export class VistaDetalladaComponent implements OnInit {

  @Input() fueClickeado!: boolean;
  @Output() fueClickeadoCambio = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }

  volver(){
    this.fueClickeadoCambio.emit(this.fueClickeado);
  }

}
