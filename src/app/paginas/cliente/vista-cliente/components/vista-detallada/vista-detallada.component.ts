import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../../../../servicios/cliente.service';
import { Sabor } from '../../../../../interfaces/galeria.interface';

@Component({
  selector: 'app-vista-detallada',
  templateUrl: './vista-detallada.component.html',
  styleUrls: ['./vista-detallada.component.css'],
})
export class VistaDetalladaComponent implements OnInit {
  @Input() fueClickeado!: boolean;
  @Output() fueClickeadoCambio = new EventEmitter<boolean>();

  public saboresDisponibles: Sabor[] = [];

  private idMarca: string = '';

  constructor(
    private activateRoute: ActivatedRoute,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      ({ idMarca }) => (this.idMarca = idMarca)
    );
    this.clienteService
      .saboresCreadosByIdMarcayStock(this.idMarca)
      .subscribe(
        (respuesta) => (this.saboresDisponibles = respuesta.saboresDisponibles)
      );
  }

  volver() {
    this.fueClickeadoCambio.emit(this.fueClickeado);
  }
}
