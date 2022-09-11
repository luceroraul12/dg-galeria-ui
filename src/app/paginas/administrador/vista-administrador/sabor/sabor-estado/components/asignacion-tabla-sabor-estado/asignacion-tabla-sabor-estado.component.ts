import { Component, OnInit } from '@angular/core';
import { SaborFormateadoService } from 'src/app/services/sabor-formateado.service';
import { SaborFormateado } from '../../../../../../../interfaces/saborformateado.interface';

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
