import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/interfaces/marca.interface';
import { Sabor } from 'src/app/interfaces/sabor.interface';
import { MarcaService } from '../../../../../servicios/marca.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent implements OnInit {
  public informacionDisponible: Sabor[] = [];

  public marcasCreadas: Marca[] = [];

  constructor(private marcaService: MarcaService) {}

  ngOnInit(): void {
    this.marcaService.getAllMarcas().subscribe((respuesta) => {
      this.marcasCreadas = respuesta.marcasTrabajadas;
    });
  }
}
