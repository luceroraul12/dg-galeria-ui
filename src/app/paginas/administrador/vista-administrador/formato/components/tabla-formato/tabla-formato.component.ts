import { Component, OnInit } from '@angular/core';
import { Formato } from '../../../../../../interfaces/formato.interface';
import { FormatoService } from '../../../../../../servicios/formato.service';

@Component({
  selector: 'app-tabla-formato',
  templateUrl: './tabla-formato.component.html',
  styleUrls: ['./tabla-formato.component.css'],
})
export class TablaFormatoComponent implements OnInit {
  public formatosCreados: Formato[] = [];

  constructor(private formatoService: FormatoService) {}

  ngOnInit(): void {
    this.formatoService
      .getAllFormatos()
      .subscribe(
        (respuesta) => (this.formatosCreados = respuesta.formatosTrabajados)
      );
  }
}
