import { Component, OnInit } from '@angular/core';
import { SaborFormateado } from '../../../../../../../interfaces/saborformateado.interface';
import { SaborFormateadoService } from '../../../../../../../servicios/sabor-formateado.service';

@Component({
  selector: 'app-asignacion-tabla-sabor-estado',
  templateUrl: './asignacion-tabla-sabor-estado.component.html',
  styleUrls: ['./asignacion-tabla-sabor-estado.component.css'],
})
export class AsignacionTablaSaborEstadoComponent implements OnInit {
  public saboresFormateados: SaborFormateado[] = [];

  constructor(public saborFormateadoService: SaborFormateadoService) {}

  ngOnInit(): void {
    this.saborFormateadoService
      .getAllSaborFormateados()
      .subscribe(
        (respuesta) =>
          (this.saboresFormateados = respuesta.saboresFormateadosTrabajados)
      );
  }
}
