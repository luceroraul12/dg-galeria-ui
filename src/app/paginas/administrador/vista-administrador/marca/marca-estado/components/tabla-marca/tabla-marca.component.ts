import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/interfaces/marca.interface';
import { MarcaService } from 'src/app/servicios/marca.service';

@Component({
  selector: 'app-tabla-marca',
  templateUrl: './tabla-marca.component.html',
  styleUrls: ['./tabla-marca.component.css'],
})
export class TablaMarcaComponent implements OnInit {
  public marcasCreadas: Marca[] = [];

  constructor(private marcaService: MarcaService) {}

  ngOnInit(): void {
    this.marcaService.getAllMarcas().subscribe((respuesta) => {
      this.marcasCreadas = respuesta.marcasTrabajadas;
    });
  }
}