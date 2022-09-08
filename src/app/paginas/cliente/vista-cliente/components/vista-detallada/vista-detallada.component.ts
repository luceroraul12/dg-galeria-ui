import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../../../../servicios/cliente.service';
import {
  Sabor,
  Marca,
  SaborResumido,
} from '../../../../../interfaces/galeria.interface';

@Component({
  selector: 'app-vista-detallada',
  templateUrl: './vista-detallada.component.html',
  styleUrls: ['./vista-detallada.component.css'],
})
export class VistaDetalladaComponent implements OnInit {
  public marcaElegida!: Marca;
  @Output() fueClickeadoCambio = new EventEmitter<boolean>();

  public saboresDisponibles: SaborResumido[] = [];

  private idMarca: string = '';

  constructor(
    private activateRoute: ActivatedRoute,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({ idMarca }) => {
      this.clienteService
        .marcaById(idMarca)
        .subscribe(
          (respuesta) => (this.marcaElegida = respuesta.marcaTrabajada)
        );
      this.clienteService
        .saboresCreadosByIdMarcaParaVer(idMarca)
        .subscribe(
          (respuesta) => (this.saboresDisponibles = respuesta.saboresResumidos)
        );
    });
  }
}
