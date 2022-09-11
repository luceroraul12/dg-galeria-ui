import { Component, OnInit } from '@angular/core';
import { FormatoService } from 'src/app/services/formato.service';
import { Formato } from '../../../../../../interfaces/formato.interface';

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
